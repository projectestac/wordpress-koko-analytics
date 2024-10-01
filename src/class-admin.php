<?php

/**
 * @package koko-analytics
 * @license GPL-3.0+
 * @author Danny van Kooten
 */

namespace KokoAnalytics;

class Admin
{
    public function __construct()
    {
        global $pagenow;

        add_action('admin_menu', [$this, 'register_menu'], 10, 0);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        add_action('koko_analytics_install_optimized_endpoint', [Admin_Actions::class, 'install_optimized_endpoint'], 10, 0);
        add_action('koko_analytics_save_settings', [Admin_Actions::class, 'save_settings'], 10, 0);
        add_action('koko_analytics_reset_statistics', [Admin_Actions::class, 'reset_statistics'], 10, 0);
        add_action('koko_analytics_export_data', [Admin_Actions::class, 'export_data'], 10, 0);
        add_action('koko_analytics_import_data', [Admin_Actions::class, 'import_data'], 10, 0);

        // Hooks for plugins overview page
        if ($pagenow === 'plugins.php') {
            $plugin_basename = plugin_basename(KOKO_ANALYTICS_PLUGIN_FILE);
            add_filter('plugin_action_links_' . $plugin_basename, [$this, 'add_plugin_settings_link'], 10, 1);
            add_filter('plugin_row_meta', [$this, 'add_plugin_meta_links'], 10, 2);
        }
    }

        // actions for jetpack importer
        add_action('koko_analytics_show_jetpack_importer_page', [Jetpack_Importer::class, 'show_page'], 10, 0);
        add_action('koko_analytics_start_jetpack_import', [Jetpack_Importer::class, 'start_import'], 10, 0);
        add_action('koko_analytics_jetpack_import_chunk', [Jetpack_Importer::class, 'import_chunk'], 10, 0);

        // actions for burst importer
        add_action('koko_analytics_show_burst_importer_page', [Burst_Importer::class, 'show_page'], 10, 0);
        add_action('koko_analytics_start_burst_import', [Burst_Importer::class, 'start_import'], 10, 0);
        add_action('koko_analytics_burst_import_chunk', [Burst_Importer::class, 'import_chunk'], 10, 0);
    }

    public function register_menu(): void
    {
        add_submenu_page('index.php', esc_html__('Koko Analytics', 'koko-analytics'), esc_html__('Analytics', 'koko-analytics'), 'view_koko_analytics', 'koko-analytics', [Admin_Page::class, 'show_page']);
    }

    private function is_cron_event_working(): bool
    {
        // Always return true on localhost / dev-ish environments
        $site_url = get_site_url();
        $parts = parse_url($site_url);
        if (!is_array($parts) || !empty($parts['port']) || str_contains($parts['host'], 'localhost') || str_contains($parts['host'], 'local')) {
            return true;
        }

        // detect issues with WP Cron event not running
        // it should run every minute, so if it didn't run in 10 minutes there is most likely something wrong
        $next_scheduled = wp_next_scheduled('koko_analytics_aggregate_stats');

        // XTEC ************ MODIFICAT - Avoid false positives. By default, cron is scheduled to run every 15 minutes.
        // 2024.10.01 @aginard
        return $next_scheduled !== false;
        //************ ORIGINAL
        /*
        return $next_scheduled !== false && $next_scheduled > (time() - 10 * 60);
        */
        //************ FI

    }

    public function show_page(): void
    {
        add_action('koko_analytics_show_settings_page', array($this, 'show_settings_page'));
        add_action('koko_analytics_show_dashboard_page', array($this, 'show_dashboard_page'));

        $tab = $_GET['tab'] ?? 'dashboard';
        do_action("koko_analytics_show_{$tab}_page");

        add_action('admin_footer_text', array($this, 'footer_text'));
    }

    public function show_dashboard_page(): void
    {
        // aggregate stats whenever this page is requested
        do_action('koko_analytics_aggregate_stats');

        if (false === $this->is_cron_event_working()) {
            echo '<div class="notice notice-warning inline koko-analytics-cron-warning is-dismissible"><p>';
            echo esc_html__('There seems to be an issue with your site\'s WP Cron configuration that prevents Koko Analytics from automatically processing your statistics.', 'koko-analytics');
            echo ' ';
            echo esc_html__('If you\'re not sure what this is about, please ask your webhost to look into this.', 'koko-analytics');
            echo '</p></div>';
        }

        // determine whether buffer file is writable
        $buffer_filename        = get_buffer_filename();
        $buffer_dirname         = dirname($buffer_filename);
        $is_buffer_dir_writable = wp_mkdir_p($buffer_dirname) && is_writable($buffer_dirname);

        if (false === $is_buffer_dir_writable) {
            echo '<div class="notice notice-warning inline is-dismissible"><p>';
            echo wp_kses(sprintf(__('Koko Analytics is unable to write to the <code>%s</code> directory. Please update the file permissions so that your web server can write to it.', 'koko-analytics'), $buffer_dirname), array('code' => array()));
            echo '</p></div>';
        }

        $dashboard = new Dashboard();
        $dashboard->show();
    }

    public function show_settings_page(): void
    {
        if (!current_user_can('manage_koko_analytics')) {
            return;
        }

        $settings           = get_settings();
        $endpoint_installer = new Endpoint_Installer();
        $using_custom_endpoint = using_custom_endpoint() && \is_file($endpoint_installer->get_file_name());
        $database_size      = $this->get_database_size();
        $user_roles   = $this->get_available_roles();
        $date_presets = (new Dashboard())->get_date_presets();

        require __DIR__ . '/views/settings-page.php';
    }

    public function footer_text(): string
    {
        // ensure upgrade text isn't showing
        add_filter('update_footer', '__return_empty_string');

        /* translators: %1$s links to the WordPress.org plugin review page, %2$s links to the admin page for creating a new post */
        return sprintf(wp_kses(__('If you enjoy using Koko Analytics, please <a href="%1$s">review the plugin on WordPress.org</a> or <a href="%2$s">write about it on your blog</a> to help out.', 'koko-analytics'), array('a' => array('href' => array()))), 'https://wordpress.org/support/view/plugin-reviews/koko-analytics?rate=5#postform', admin_url('post-new.php'));
    }



    /**
     * Add the settings link to the Plugins overview
     *
     * @param array $links
     *
     * @return array
     */
    public function add_plugin_settings_link($links): array
    {
        $href = admin_url('index.php?page=koko-analytics&tab=settings');
        $label = esc_html__('Settings', 'koko-analytics');
        $settings_link = "<a href=\"{$href}\">{$label}</a>";
        array_unshift($links, $settings_link);
        return $links;
    }

    /**
     * Adds meta links to the plugin in the WP Admin > Plugins screen
     *
     * @param array $links
     * @param string $file
     *
     * @return array
     */
    public function add_plugin_meta_links($links, $file): array
    {
        if ($file !== plugin_basename(KOKO_ANALYTICS_PLUGIN_FILE)) {
            return $links;
        }

        // add links to documentation
        $links[] = '<a href="https://www.kokoanalytics.com/kb/">' . esc_html__('Documentation', 'koko-analytics') . '</a>';

        // add link to Pro version, unless already running it
        if (! \defined('KOKO_ANALYTICS_PRO_VERSION')) {
            $links[] = '<a href="https://www.kokoanalytics.com/pricing/">' . esc_html__('Upgrade to Koko Analytics Pro', 'koko-analytics') . '</a>';
        }

        return $links;
    }

    public function enqueue_scripts($hook_suffix): void
    {
        if ($hook_suffix !== 'dashboard_page_koko-analytics') {
            return;
        }

        wp_enqueue_style('koko-analytics-dashboard', plugins_url('assets/dist/css/dashboard.css', KOKO_ANALYTICS_PLUGIN_FILE), [], KOKO_ANALYTICS_VERSION);
        wp_enqueue_script('koko-analytics-dashboard', plugins_url('assets/dist/js/dashboard.js', KOKO_ANALYTICS_PLUGIN_FILE), [], KOKO_ANALYTICS_VERSION, [ 'strategy' => 'defer' ]);
    }
}
