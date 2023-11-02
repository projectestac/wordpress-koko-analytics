/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/snabbdom@3.5.1/build/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t){if(e(t)){for(;t&&e(t);){t=n(t).parent}return null!=t?t:null}return t.parentNode}function e(t){return 11===t.nodeType}function n(t,e){var n,o,i;const l=t;return null!==(n=l.parent)&&void 0!==n||(l.parent=null!=e?e:null),null!==(o=l.firstChildNode)&&void 0!==o||(l.firstChildNode=t.firstChild),null!==(i=l.lastChildNode)&&void 0!==i||(l.lastChildNode=t.lastChild),l}const o={createElement:function(t,e){return document.createElement(t,e)},createElementNS:function(t,e,n){return document.createElementNS(t,e,n)},createTextNode:function(t){return document.createTextNode(t)},createDocumentFragment:function(){return n(document.createDocumentFragment())},createComment:function(t){return document.createComment(t)},insertBefore:function(t,o,i){if(e(t)){let o=t;for(;o&&e(o);){o=n(o).parent}t=null!=o?o:t}e(o)&&(o=n(o,t)),i&&e(i)&&(i=n(i).firstChildNode),t.insertBefore(o,i)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,o){e(o)&&(o=n(o,t)),t.appendChild(o)},parentNode:t,nextSibling:function(o){var i;if(e(o)){const e=n(o),l=t(e);if(l&&e.lastChildNode){const t=Array.from(l.childNodes),n=t.indexOf(e.lastChildNode);return null!==(i=t[n+1])&&void 0!==i?i:null}return null}return o.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},getTextContent:function(t){return t.textContent},isElement:function(t){return 1===t.nodeType},isText:function(t){return 3===t.nodeType},isComment:function(t){return 8===t.nodeType},isDocumentFragment:e};function i(t,e,n,o,i){return{sel:t,data:e,children:n,text:o,elm:i,key:void 0===e?void 0:e.key}}const l=Array.isArray;function r(t){return"string"==typeof t||"number"==typeof t||t instanceof String||t instanceof Number}function a(t){return void 0===t}function d(t){return void 0!==t}const c=i("",{},[],void 0,void 0);function s(t,e){var n,o;const i=t.key===e.key,l=(null===(n=t.data)||void 0===n?void 0:n.is)===(null===(o=e.data)||void 0===o?void 0:o.is),r=t.sel===e.sel,a=!(!t.sel&&t.sel===e.sel)||typeof t.text==typeof e.text;return r&&i&&l&&a}function u(){throw new Error("The document fragment is not supported on this platform.")}function f(t,e,n){var o;const i={};for(let l=e;l<=n;++l){const e=null===(o=t[l])||void 0===o?void 0:o.key;void 0!==e&&(i[e]=l)}return i}const v=["create","update","remove","destroy","pre","post"];function h(t,e,n){const h={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},m=void 0!==e?e:o;for(const e of v)for(const n of t){const t=n[e];void 0!==t&&h[e].push(t)}function p(t){const e=t.id?"#"+t.id:"",n=t.getAttribute("class"),o=n?"."+n.split(" ").join("."):"";return i(m.tagName(t).toLowerCase()+e+o,{},[],void 0,t)}function g(t){return i(void 0,{},[],void 0,t)}function y(t,e){return function(){if(0==--e){const e=m.parentNode(t);m.removeChild(e,t)}}}function x(t,e){var o,i,s,f;let v,p=t.data;if(void 0!==p){const e=null===(o=p.hook)||void 0===o?void 0:o.init;d(e)&&(e(t),p=t.data)}const g=t.children,y=t.sel;if("!"===y)a(t.text)&&(t.text=""),t.elm=m.createComment(t.text);else if(void 0!==y){const n=y.indexOf("#"),o=y.indexOf(".",n),a=n>0?n:y.length,s=o>0?o:y.length,u=-1!==n||-1!==o?y.slice(0,Math.min(a,s)):y,f=t.elm=d(p)&&d(v=p.ns)?m.createElementNS(v,u,p):m.createElement(u,p);for(a<s&&f.setAttribute("id",y.slice(a+1,s)),o>0&&f.setAttribute("class",y.slice(s+1).replace(/\./g," ")),v=0;v<h.create.length;++v)h.create[v](c,t);if(l(g))for(v=0;v<g.length;++v){const t=g[v];null!=t&&m.appendChild(f,x(t,e))}else r(t.text)&&m.appendChild(f,m.createTextNode(t.text));const C=t.data.hook;d(C)&&(null===(i=C.create)||void 0===i||i.call(C,c,t),C.insert&&e.push(t))}else if((null===(s=null==n?void 0:n.experimental)||void 0===s?void 0:s.fragments)&&t.children){for(t.elm=(null!==(f=m.createDocumentFragment)&&void 0!==f?f:u)(),v=0;v<h.create.length;++v)h.create[v](c,t);for(v=0;v<t.children.length;++v){const n=t.children[v];null!=n&&m.appendChild(t.elm,x(n,e))}}else t.elm=m.createTextNode(t.text);return t.elm}function C(t,e,n,o,i,l){for(;o<=i;++o){const i=n[o];null!=i&&m.insertBefore(t,x(i,l),e)}}function N(t){var e,n;const o=t.data;if(void 0!==o){null===(n=null===(e=null==o?void 0:o.hook)||void 0===e?void 0:e.destroy)||void 0===n||n.call(e,t);for(let e=0;e<h.destroy.length;++e)h.destroy[e](t);if(void 0!==t.children)for(let e=0;e<t.children.length;++e){const n=t.children[e];null!=n&&"string"!=typeof n&&N(n)}}}function b(t,e,n,o){for(var i,l;n<=o;++n){let o,r;const a=e[n];if(null!=a)if(d(a.sel)){N(a),o=h.remove.length+1,r=y(a.elm,o);for(let t=0;t<h.remove.length;++t)h.remove[t](a,r);const t=null===(l=null===(i=null==a?void 0:a.data)||void 0===i?void 0:i.hook)||void 0===l?void 0:l.remove;d(t)?t(a,r):r()}else a.children?(N(a),b(t,a.children,0,a.children.length-1)):m.removeChild(t,a.elm)}}function w(t,e,n){var o,i,l,r,c,u,v,p;const g=null===(o=e.data)||void 0===o?void 0:o.hook;null===(i=null==g?void 0:g.prepatch)||void 0===i||i.call(g,t,e);const y=e.elm=t.elm;if(t===e)return;if(void 0!==e.data||d(e.text)&&e.text!==t.text){null!==(l=e.data)&&void 0!==l||(e.data={}),null!==(r=t.data)&&void 0!==r||(t.data={});for(let n=0;n<h.update.length;++n)h.update[n](t,e);null===(v=null===(u=null===(c=e.data)||void 0===c?void 0:c.hook)||void 0===u?void 0:u.update)||void 0===v||v.call(u,t,e)}const N=t.children,A=e.children;a(e.text)?d(N)&&d(A)?N!==A&&function(t,e,n,o){let i,l,r,d,c=0,u=0,v=e.length-1,h=e[0],p=e[v],g=n.length-1,y=n[0],N=n[g];for(;c<=v&&u<=g;)null==h?h=e[++c]:null==p?p=e[--v]:null==y?y=n[++u]:null==N?N=n[--g]:s(h,y)?(w(h,y,o),h=e[++c],y=n[++u]):s(p,N)?(w(p,N,o),p=e[--v],N=n[--g]):s(h,N)?(w(h,N,o),m.insertBefore(t,h.elm,m.nextSibling(p.elm)),h=e[++c],N=n[--g]):s(p,y)?(w(p,y,o),m.insertBefore(t,p.elm,h.elm),p=e[--v],y=n[++u]):(void 0===i&&(i=f(e,c,v)),l=i[y.key],a(l)?m.insertBefore(t,x(y,o),h.elm):(r=e[l],r.sel!==y.sel?m.insertBefore(t,x(y,o),h.elm):(w(r,y,o),e[l]=void 0,m.insertBefore(t,r.elm,h.elm))),y=n[++u]);u<=g&&(d=null==n[g+1]?null:n[g+1].elm,C(t,d,n,u,g,o)),c<=v&&b(t,e,c,v)}(y,N,A,n):d(A)?(d(t.text)&&m.setTextContent(y,""),C(y,null,A,0,A.length-1,n)):d(N)?b(y,N,0,N.length-1):d(t.text)&&m.setTextContent(y,""):t.text!==e.text&&(d(N)&&b(y,N,0,N.length-1),m.setTextContent(y,e.text)),null===(p=null==g?void 0:g.postpatch)||void 0===p||p.call(g,t,e)}return function(t,e){let n,o,i;const l=[];for(n=0;n<h.pre.length;++n)h.pre[n]();for(!function(t,e){return t.isElement(e)}(m,t)?function(t,e){return t.isDocumentFragment(e)}(m,t)&&(t=g(t)):t=p(t),s(t,e)?w(t,e,l):(o=t.elm,i=m.parentNode(o),x(e,l),null!==i&&(m.insertBefore(i,e.elm,m.nextSibling(o)),b(i,[t],0,0))),n=0;n<l.length;++n)l[n].data.hook.insert(l[n]);for(n=0;n<h.post.length;++n)h.post[n]();return e}}function m(t,e,n){if(t.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==e)for(let t=0;t<e.length;++t){const n=e[t];if("string"==typeof n)continue;const o=n.data;void 0!==o&&m(o,n.children,n.sel)}}function p(t,e,n){let o,a,d,c={};if(void 0!==n?(null!==e&&(c=e),l(n)?o=n:r(n)?a=n.toString():n&&n.sel&&(o=[n])):null!=e&&(l(e)?o=e:r(e)?a=e.toString():e&&e.sel?o=[e]:c=e),void 0!==o)for(d=0;d<o.length;++d)r(o[d])&&(o[d]=i(void 0,void 0,void 0,o[d],void 0));return"s"!==t[0]||"v"!==t[1]||"g"!==t[2]||3!==t.length&&"."!==t[3]&&"#"!==t[3]||m(c,o,t),i(t,c,o,a,void 0)}function g(t){let e,n;if(l(t)?e=t:r(e)?n=t:e&&e.sel&&(e=[t]),void 0!==e)for(let t=0;t<e.length;++t)r(e[t])&&(e[t]=i(void 0,void 0,void 0,e[t],void 0));return i(void 0,{},e,n,void 0)}function y(t,e){var n;const o=null===(n=e.data)||void 0===n?void 0:n.ns;t.data.fn=e.data.fn,t.data.args=e.data.args,e.data=t.data,e.children=t.children,e.text=t.text,e.elm=t.elm,o&&m(e.data,e.children,e.sel)}function x(t){const e=t.data;y(e.fn(...e.args),t)}function C(t,e){let n;const o=t.data,i=e.data,l=o.args,r=i.args;if(o.fn===i.fn&&l.length===r.length){for(n=0;n<r.length;++n)if(l[n]!==r[n])return void y(i.fn(...r),e);y(t,e)}else y(i.fn(...r),e)}const N=function(t,e,n,o){return void 0===o&&(o=n,n=e,e=void 0),p(t,{key:e,hook:{init:x,prepatch:C},fn:n,args:o})};function b(t,e){const n=t.data.attachData;e.data.attachData.placeholder=n.placeholder,e.data.attachData.real=n.real,t.elm=t.data.attachData.real}function w(t,e){e.elm=e.data.attachData.placeholder}function A(t){void 0!==t.elm&&t.elm.parentNode.removeChild(t.elm),t.elm=t.data.attachData.real}function k(t,e){const n=e.elm,o=e.data.attachData,i=document.createElement("span");e.elm=i,o.target.appendChild(n),o.real=n,o.placeholder=i}function T(t,e){void 0===e.data&&(e.data={}),void 0===e.data.hook&&(e.data.hook={});const n=e.data,o=e.data.hook;return n.attachData={target:t,placeholder:void 0,real:void 0},o.create=k,o.prepatch=b,o.postpatch=w,o.destroy=A,e}function E(t,e){const n=void 0!==e?e:o;let l;if(n.isElement(t)){const o=t.id?"#"+t.id:"",l=t.getAttribute("class"),r=l?"."+l.split(" ").join("."):"",a=n.tagName(t).toLowerCase()+o+r,d={},c={},s={},u=[];let f,v,h;const p=t.attributes,g=t.childNodes;for(v=0,h=p.length;v<h;v++)f=p[v].nodeName,"d"===f[0]&&"a"===f[1]&&"t"===f[2]&&"a"===f[3]&&"-"===f[4]?c[f.slice(5)]=p[v].nodeValue||"":"id"!==f&&"class"!==f&&(d[f]=p[v].nodeValue);for(v=0,h=g.length;v<h;v++)u.push(E(g[v],e));return Object.keys(d).length>0&&(s.attrs=d),Object.keys(c).length>0&&(s.dataset=c),"s"!==a[0]||"v"!==a[1]||"g"!==a[2]||3!==a.length&&"."!==a[3]&&"#"!==a[3]||m(s,u,a),i(a,s,u,void 0,t)}return n.isText(t)?(l=n.getTextContent(t),i(void 0,void 0,void 0,l,t)):n.isComment(t)?(l=n.getTextContent(t),i("!",{},[],l,t)):i("",{},[],void 0,t)}function S(t,e){let n;const o=e.elm;let i=t.data.attrs,l=e.data.attrs;if((i||l)&&i!==l){for(n in i=i||{},l=l||{},l){const t=l[n];i[n]!==t&&(!0===t?o.setAttribute(n,""):!1===t?o.removeAttribute(n):120!==n.charCodeAt(0)?o.setAttribute(n,t):58===n.charCodeAt(3)?o.setAttributeNS("http://www.w3.org/XML/1998/namespace",n,t):58===n.charCodeAt(5)?o.setAttributeNS("http://www.w3.org/1999/xlink",n,t):o.setAttribute(n,t))}for(n in i)n in l||o.removeAttribute(n)}}const D={create:S,update:S};function L(t,e){let n,o;const i=e.elm;let l=t.data.class,r=e.data.class;if((l||r)&&l!==r){for(o in l=l||{},r=r||{},l)l[o]&&!Object.prototype.hasOwnProperty.call(r,o)&&i.classList.remove(o);for(o in r)n=r[o],n!==l[o]&&i.classList[n?"add":"remove"](o)}}const B={create:L,update:L},O=/[A-Z]/g;function j(t,e){const n=e.elm;let o,i=t.data.dataset,l=e.data.dataset;if(!i&&!l)return;if(i===l)return;i=i||{},l=l||{};const r=n.dataset;for(o in i)l[o]||(r?o in r&&delete r[o]:n.removeAttribute("data-"+o.replace(O,"-$&").toLowerCase()));for(o in l)i[o]!==l[o]&&(r?r[o]=l[o]:n.setAttribute("data-"+o.replace(O,"-$&").toLowerCase(),l[o]))}const F={create:j,update:j};function P(t,e,n){if("function"==typeof t)t.call(e,n,e);else if("object"==typeof t)for(let o=0;o<t.length;o++)P(t[o],e,n)}function M(t,e){const n=t.type,o=e.data.on;o&&o[n]&&P(o[n],e,t)}function V(t,e){const n=t.data.on,o=t.listener,i=t.elm,l=e&&e.data.on,r=e&&e.elm;let a;if(n!==l){if(n&&o)if(l)for(a in n)l[a]||i.removeEventListener(a,o,!1);else for(a in n)i.removeEventListener(a,o,!1);if(l){const o=e.listener=t.listener||function t(e){M(e,t.vnode)};if(o.vnode=e,n)for(a in l)n[a]||r.addEventListener(a,o,!1);else for(a in l)r.addEventListener(a,o,!1)}}}const $={create:V,update:V,destroy:V};function q(t,e){let n,o,i;const l=e.elm;let r=t.data.props,a=e.data.props;if((r||a)&&r!==a)for(n in r=r||{},a=a||{},a)o=a[n],i=r[n],i===o||"value"===n&&l[n]===o||(l[n]=o)}const X={create:q,update:q},Z="undefined"!=typeof window&&window.requestAnimationFrame.bind(window)||setTimeout,z=function(t){Z((function(){Z(t)}))};let G=!1;function H(t,e,n){z((function(){t[e]=n}))}function I(t,e){let n,o;const i=e.elm;let l=t.data.style,r=e.data.style;if(!l&&!r)return;if(l===r)return;l=l||{},r=r||{};const a="delayed"in l;for(o in l)r[o]||("-"===o[0]&&"-"===o[1]?i.style.removeProperty(o):i.style[o]="");for(o in r)if(n=r[o],"delayed"===o&&r.delayed)for(const t in r.delayed)n=r.delayed[t],a&&n===l.delayed[t]||H(i.style,t,n);else"remove"!==o&&n!==l[o]&&("-"===o[0]&&"-"===o[1]?i.style.setProperty(o,n):i.style[o]=n)}const J={pre:function(){G=!1},create:I,update:I,destroy:function(t){let e,n;const o=t.elm,i=t.data.style;if(i&&(e=i.destroy))for(n in e)o.style[n]=e[n]},remove:function(t,e){const n=t.data.style;if(!n||!n.remove)return void e();let o;G||(t.elm.offsetLeft,G=!0);const i=t.elm;let l=0;const r=n.remove;let a=0;const d=[];for(o in r)d.push(o),i.style[o]=r[o];const c=getComputedStyle(i)["transition-property"].split(", ");for(;l<c.length;++l)-1!==d.indexOf(c[l])&&a++;i.addEventListener("transitionend",(function(t){t.target===i&&--a,0===a&&e()}))}};function K(t,...e){const n=Q(e,[]);return 1===n.length&&!n[0].sel&&n[0].text?i(void 0,void 0,void 0,n[0].text,void 0):i(void 0,null!=t?t:{},n,void 0,void 0)}function Q(t,e){for(const n of t)null!=n&&!1!==n&&""!==n&&(Array.isArray(n)?Q(n,e):"string"==typeof n||"number"==typeof n||"boolean"==typeof n?e.push(i(void 0,void 0,void 0,String(n),void 0)):e.push(n));return e}function R(t,e,...n){const o=Q(n,[]);return"function"==typeof t?t(e,o):1===o.length&&!o[0].sel&&o[0].text?p(t,e,o[0].text):p(t,e,o)}R||(R={});export{K as Fragment,l as array,T as attachTo,D as attributesModule,B as classModule,F as datasetModule,$ as eventListenersModule,g as fragment,p as h,o as htmlDomApi,h as init,R as jsx,r as primitive,X as propsModule,J as styleModule,N as thunk,E as toVNode,i as vnode};export default null;
//# sourceMappingURL=/sm/0f683aa6f8ee56d729bca61f259291760fd8c14384dbfc2991a99d29a1b6935c.map
