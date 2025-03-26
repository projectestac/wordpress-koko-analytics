<?php

/**
 * @package koko-analytics
 * @license GPL-3.0+
 * @author Danny van Kooten
 */

namespace KokoAnalytics;

class Endpoint_Installer
{
    public function get_file_name(): string
    {
        return rtrim(ABSPATH, '/') . '/koko-analytics-collect.php';
    }

    public function get_file_contents(): string
    {
        $upload_dir = get_upload_dir();

        // make path relative to ABSPATH again
        if (str_starts_with($upload_dir, ABSPATH)) {
            $upload_dir = ltrim(substr($upload_dir, strlen(ABSPATH)), '/');
        }

        $functions_filename = KOKO_ANALYTICS_PLUGIN_DIR . '/src/collect-functions.php';

        // make path relative to ABSPATH again
        if (str_starts_with($functions_filename, ABSPATH)) {
            $functions_filename = ltrim(substr($functions_filename, strlen(ABSPATH)), '/');
        }

        return <<<EOT
<?php
/**
 * @package koko-analytics
 * @license GPL-3.0+
 * @author Danny van Kooten
 *
 * This file acts as an optimized endpoint file for the Koko Analytics plugin.
 */

// path to pageviews.php file in uploads directory
define('KOKO_ANALYTICS_UPLOAD_DIR', '$upload_dir');

// path to functions.php file in Koko Analytics plugin directory
require '$functions_filename';

// function call to collect the request data
KokoAnalytics\collect_request();

EOT;
    }

    public static function verify(): bool
    {
        $works = self::verify_internal();
        update_option('koko_analytics_use_custom_endpoint', $works, true);
        return $works;
    }

    private static function verify_internal(): bool
    {
        $tracker_url = site_url('/koko-analytics-collect.php?nv=1&p=0&up=1&test=1');
        $response    = wp_remote_get($tracker_url);
        if (is_wp_error($response)) {
            return false;
        }

        $status  = wp_remote_retrieve_response_code($response);
        $headers = wp_remote_retrieve_headers($response);
        if ($status !== 200 || ! isset($headers['Content-Type']) || ! str_contains($headers['Content-Type'], 'text/plain')) {
            return false;
        }

        return true;
    }

    public function install(): bool
    {
        /* If we made it this far we ideally want to use the custom endpoint file */
        /* Therefore we schedule a recurring health check event to periodically re-attempt and re-test */
        if (! wp_next_scheduled('koko_analytics_test_custom_endpoint')) {
            wp_schedule_event(time() + HOUR_IN_SECONDS, 'hourly', 'koko_analytics_test_custom_endpoint');
        }

        $file_name = $this->get_file_name();

        // TODO: Verify contents? Or trust 200 OK response?

        /* Attempt to put the file into place if it does not exist already */
        if (! file_exists($file_name)) {
            $success = file_put_contents($file_name, $this->get_file_contents());
            if (false === $success) {
                return false;
            }
        }

        /* Send an HTTP request to the custom endpoint to see if it's working properly */
        $works = self::verify();
        if (! $works) {
            unlink($file_name);
            return false;
        }

        /* All looks good! Custom endpoint file exists and returns the correct response */
        return true;
    }

    public function is_eligibile(): bool
    {
        /* Do nothing if running Multisite (because Multisite has separate uploads directory per site) */
        if (is_multisite()) {
            return false;
        }

        /* Do nothing if KOKO_ANALYTICS_CUSTOM_ENDPOINT is defined (means users disabled this feature or is using their own version of it) */
        if (defined('KOKO_ANALYTICS_CUSTOM_ENDPOINT')) {
            return false;
        }

        return true;
    }
}
