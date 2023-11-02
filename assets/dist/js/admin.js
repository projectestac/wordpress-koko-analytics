(()=>{var Mt=Object.defineProperty;var _t=(t,e)=>{for(var n in e)Mt(t,n,{get:e[n],enumerable:!0})};var{nonce:bt,root:Dt}=window.koko_analytics;function F(t,e={}){let n=Dt+"koko-analytics/v1"+t+"?"+new URLSearchParams(e);return fetch(n,{headers:{"X-WP-Nonce":bt,Accepts:"application/json"},credentials:"same-origin"}).then(i=>{if(i.status>=400)throw console.error("Koko Analytics encountered an error trying to request data from the REST endpoints. Please check your PHP error logs for the error that occurred."),new Error(i.statusText);return i}).then(i=>i.json())}window.setTimeout(()=>{window.location.reload()},12*60*60*1e3);var J={};_t(J,{format:()=>P,isLastDayOfMonth:()=>U,parseISO8601:()=>q,toISO8601:()=>D});function U(t){let e=new Date(t);return e.setDate(e.getDate()+1),t.getMonth()!==e.getMonth()}function q(t){if(t===null)return null;let e=t.split("-");if(e.length===2&&e.push("1"),e.length!==3)return null;let[n,i,r]=e.map(s=>parseInt(s,10));return n<1e3&&(n+=2e3),n<2e3||n>3e3||i<1||i>12||r<1||r>31?null:new Date(n,i-1,r)}function lt(t){return t<10?"0"+t:t}function D(t){return`${t.getFullYear()}-${lt(t.getMonth()+1)}-${lt(t.getDate())}`}function P(t,e){t=typeof t=="string"?q(t):t,e=e||{day:"numeric",month:"short",year:"numeric"};try{return new Intl.DateTimeFormat(void 0,e).format(t)}catch{}return t.toLocaleDateString()}function Lt(t,e){return document.createElement(t,e)}function Et(t,e,n){return document.createElementNS(t,e,n)}function Ct(){return B(document.createDocumentFragment())}function Tt(t){return document.createTextNode(t)}function At(t){return document.createComment(t)}function qt(t,e,n){if($(t)){let i=t;for(;i&&$(i);)i=B(i).parent;t=i??t}$(e)&&(e=B(e,t)),n&&$(n)&&(n=B(n).firstChildNode),t.insertBefore(e,n)}function Ot(t,e){t.removeChild(e)}function Nt(t,e){$(e)&&(e=B(e,t)),t.appendChild(e)}function st(t){if($(t)){for(;t&&$(t);)t=B(t).parent;return t??null}return t.parentNode}function It(t){var e;if($(t)){let n=B(t),i=st(n);if(i&&n.lastChildNode){let r=Array.from(i.childNodes),s=r.indexOf(n.lastChildNode);return(e=r[s+1])!==null&&e!==void 0?e:null}return null}return t.nextSibling}function Ft(t){return t.tagName}function $t(t,e){t.textContent=e}function Pt(t){return t.textContent}function Bt(t){return t.nodeType===1}function Ht(t){return t.nodeType===3}function Rt(t){return t.nodeType===8}function $(t){return t.nodeType===11}function B(t,e){var n,i,r;let s=t;return(n=s.parent)!==null&&n!==void 0||(s.parent=e??null),(i=s.firstChildNode)!==null&&i!==void 0||(s.firstChildNode=t.firstChild),(r=s.lastChildNode)!==null&&r!==void 0||(s.lastChildNode=t.lastChild),s}var ct={createElement:Lt,createElementNS:Et,createTextNode:Tt,createDocumentFragment:Ct,createComment:At,insertBefore:qt,removeChild:Ot,appendChild:Nt,parentNode:st,nextSibling:It,tagName:Ft,setTextContent:$t,getTextContent:Pt,isElement:Bt,isText:Ht,isComment:Rt,isDocumentFragment:$};function H(t,e,n,i,r){let s=e===void 0?void 0:e.key;return{sel:t,data:e,children:n,text:i,elm:r,key:s}}var W=Array.isArray;function R(t){return typeof t=="string"||typeof t=="number"||t instanceof String||t instanceof Number}function Q(t){return t===void 0}function A(t){return t!==void 0}var V=H("",{},[],void 0,void 0);function X(t,e){var n,i;let r=t.key===e.key,s=((n=t.data)===null||n===void 0?void 0:n.is)===((i=e.data)===null||i===void 0?void 0:i.is),d=t.sel===e.sel,w=!t.sel&&t.sel===e.sel?typeof t.text==typeof e.text:!0;return d&&r&&s&&w}function jt(){throw new Error("The document fragment is not supported on this platform.")}function Kt(t,e){return t.isElement(e)}function Ut(t,e){return t.isDocumentFragment(e)}function Wt(t,e,n){var i;let r={};for(let s=e;s<=n;++s){let d=(i=t[s])===null||i===void 0?void 0:i.key;d!==void 0&&(r[d]=s)}return r}var Xt=["create","update","remove","destroy","pre","post"];function Y(t,e,n){let i={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},r=e!==void 0?e:ct;for(let o of Xt)for(let a of t){let l=a[o];l!==void 0&&i[o].push(l)}function s(o){let a=o.id?"#"+o.id:"",l=o.getAttribute("class"),c=l?"."+l.split(" ").join("."):"";return H(r.tagName(o).toLowerCase()+a+c,{},[],void 0,o)}function d(o){return H(void 0,{},[],void 0,o)}function w(o,a){return function(){if(--a===0){let c=r.parentNode(o);r.removeChild(c,o)}}}function M(o,a){var l,c,m,f;let u,g=o.data;if(g!==void 0){let h=(l=g.hook)===null||l===void 0?void 0:l.init;A(h)&&(h(o),g=o.data)}let p=o.children,v=o.sel;if(v==="!")Q(o.text)&&(o.text=""),o.elm=r.createComment(o.text);else if(v!==void 0){let h=v.indexOf("#"),_=v.indexOf(".",h),C=h>0?h:v.length,b=_>0?_:v.length,T=h!==-1||_!==-1?v.slice(0,Math.min(C,b)):v,N=o.elm=A(g)&&A(u=g.ns)?r.createElementNS(u,T,g):r.createElement(T,g);for(C<b&&N.setAttribute("id",v.slice(C+1,b)),_>0&&N.setAttribute("class",v.slice(b+1).replace(/\./g," ")),u=0;u<i.create.length;++u)i.create[u](V,o);if(W(p))for(u=0;u<p.length;++u){let at=p[u];at!=null&&r.appendChild(N,M(at,a))}else R(o.text)&&r.appendChild(N,r.createTextNode(o.text));let Z=o.data.hook;A(Z)&&((c=Z.create)===null||c===void 0||c.call(Z,V,o),Z.insert&&a.push(o))}else if(!((m=n?.experimental)===null||m===void 0)&&m.fragments&&o.children){for(o.elm=((f=r.createDocumentFragment)!==null&&f!==void 0?f:jt)(),u=0;u<i.create.length;++u)i.create[u](V,o);for(u=0;u<o.children.length;++u){let h=o.children[u];h!=null&&r.appendChild(o.elm,M(h,a))}}else o.elm=r.createTextNode(o.text);return o.elm}function S(o,a,l,c,m,f){for(;c<=m;++c){let u=l[c];u!=null&&r.insertBefore(o,M(u,f),a)}}function x(o){var a,l;let c=o.data;if(c!==void 0){(l=(a=c?.hook)===null||a===void 0?void 0:a.destroy)===null||l===void 0||l.call(a,o);for(let m=0;m<i.destroy.length;++m)i.destroy[m](o);if(o.children!==void 0)for(let m=0;m<o.children.length;++m){let f=o.children[m];f!=null&&typeof f!="string"&&x(f)}}}function y(o,a,l,c){for(var m,f;l<=c;++l){let u,g,p=a[l];if(p!=null)if(A(p.sel)){x(p),u=i.remove.length+1,g=w(p.elm,u);for(let h=0;h<i.remove.length;++h)i.remove[h](p,g);let v=(f=(m=p?.data)===null||m===void 0?void 0:m.hook)===null||f===void 0?void 0:f.remove;A(v)?v(p,g):g()}else p.children?(x(p),y(o,p.children,0,p.children.length-1)):r.removeChild(o,p.elm)}}function L(o,a,l,c){let m=0,f=0,u=a.length-1,g=a[0],p=a[u],v=l.length-1,h=l[0],_=l[v],C,b,T,N;for(;m<=u&&f<=v;)g==null?g=a[++m]:p==null?p=a[--u]:h==null?h=l[++f]:_==null?_=l[--v]:X(g,h)?(E(g,h,c),g=a[++m],h=l[++f]):X(p,_)?(E(p,_,c),p=a[--u],_=l[--v]):X(g,_)?(E(g,_,c),r.insertBefore(o,g.elm,r.nextSibling(p.elm)),g=a[++m],_=l[--v]):X(p,h)?(E(p,h,c),r.insertBefore(o,p.elm,g.elm),p=a[--u],h=l[++f]):(C===void 0&&(C=Wt(a,m,u)),b=C[h.key],Q(b)?r.insertBefore(o,M(h,c),g.elm):(T=a[b],T.sel!==h.sel?r.insertBefore(o,M(h,c),g.elm):(E(T,h,c),a[b]=void 0,r.insertBefore(o,T.elm,g.elm))),h=l[++f]);f<=v&&(N=l[v+1]==null?null:l[v+1].elm,S(o,N,l,f,v,c)),m<=u&&y(o,a,m,u)}function E(o,a,l){var c,m,f,u,g,p,v,h;let _=(c=a.data)===null||c===void 0?void 0:c.hook;(m=_?.prepatch)===null||m===void 0||m.call(_,o,a);let C=a.elm=o.elm;if(o===a)return;if(a.data!==void 0||A(a.text)&&a.text!==o.text){(f=a.data)!==null&&f!==void 0||(a.data={}),(u=o.data)!==null&&u!==void 0||(o.data={});for(let N=0;N<i.update.length;++N)i.update[N](o,a);(v=(p=(g=a.data)===null||g===void 0?void 0:g.hook)===null||p===void 0?void 0:p.update)===null||v===void 0||v.call(p,o,a)}let b=o.children,T=a.children;Q(a.text)?A(b)&&A(T)?b!==T&&L(C,b,T,l):A(T)?(A(o.text)&&r.setTextContent(C,""),S(C,null,T,0,T.length-1,l)):A(b)?y(C,b,0,b.length-1):A(o.text)&&r.setTextContent(C,""):o.text!==a.text&&(A(b)&&y(C,b,0,b.length-1),r.setTextContent(C,a.text)),(h=_?.postpatch)===null||h===void 0||h.call(_,o,a)}return function(a,l){let c,m,f,u=[];for(c=0;c<i.pre.length;++c)i.pre[c]();for(Kt(r,a)?a=s(a):Ut(r,a)&&(a=d(a)),X(a,l)?E(a,l,u):(m=a.elm,f=r.parentNode(m),M(l,u),f!==null&&(r.insertBefore(f,l.elm,r.nextSibling(m)),y(f,[a],0,0))),c=0;c<u.length;++c)u[c].data.hook.insert(u[c]);for(c=0;c<i.post.length;++c)i.post[c]();return l}}function ut(t,e,n){if(t.ns="http://www.w3.org/2000/svg",n!=="foreignObject"&&e!==void 0)for(let i=0;i<e.length;++i){let r=e[i];if(typeof r=="string")continue;let s=r.data;s!==void 0&&ut(s,r.children,r.sel)}}function k(t,e,n){let i={},r,s,d;if(n!==void 0?(e!==null&&(i=e),W(n)?r=n:R(n)?s=n.toString():n&&n.sel&&(r=[n])):e!=null&&(W(e)?r=e:R(e)?s=e.toString():e&&e.sel?r=[e]:i=e),r!==void 0)for(d=0;d<r.length;++d)R(r[d])&&(r[d]=H(void 0,void 0,void 0,r[d],void 0));return t[0]==="s"&&t[1]==="v"&&t[2]==="g"&&(t.length===3||t[3]==="."||t[3]==="#")&&ut(i,r,t),H(t,i,r,s,void 0)}var Yt="http://www.w3.org/1999/xlink",Gt="http://www.w3.org/XML/1998/namespace";function dt(t,e){let n,i=e.elm,r=t.data.attrs,s=e.data.attrs;if(!(!r&&!s)&&r!==s){r=r||{},s=s||{};for(n in s){let d=s[n];r[n]!==d&&(d===!0?i.setAttribute(n,""):d===!1?i.removeAttribute(n):n.charCodeAt(0)!==120?i.setAttribute(n,d):n.charCodeAt(3)===58?i.setAttributeNS(Gt,n,d):n.charCodeAt(5)===58?i.setAttributeNS(Yt,n,d):i.setAttribute(n,d))}for(n in r)n in s||i.removeAttribute(n)}}var G={create:dt,update:dt};function pt(t,e,n){if(typeof t=="function")t.call(e,n,e);else if(typeof t=="object")for(let i=0;i<t.length;i++)pt(t[i],e,n)}function Zt(t,e){let n=t.type,i=e.data.on;i&&i[n]&&pt(i[n],e,t)}function zt(){return function t(e){Zt(e,t.vnode)}}function tt(t,e){let n=t.data.on,i=t.listener,r=t.elm,s=e&&e.data.on,d=e&&e.elm,w;if(n!==s){if(n&&i)if(s)for(w in n)s[w]||r.removeEventListener(w,i,!1);else for(w in n)r.removeEventListener(w,i,!1);if(s){let M=e.listener=t.listener||zt();if(M.vnode=e,n)for(w in s)n[w]||d.addEventListener(w,M,!1);else for(w in s)d.addEventListener(w,M,!1)}}}var et={create:tt,update:tt,destroy:tt};var j=window.koko_analytics.items_per_page,Jt=Y([G]);function z(t,e,n,i){let r=t.nextElementSibling,s=r.nextElementSibling,d=s.children[0],w=s.children[1],M=0,S=0,x,y;function L(a,l){x=a,y=l,M=0,E()}function E(){F(e,{offset:M,limit:j,start_date:D(x),end_date:D(y)}).then(a=>{S=a.length,t=Jt(t,o(a)),i&&i(a)})}function o(a){return w.classList.toggle("disabled",S<j),d.classList.toggle("disabled",M===0),r.style.display=a.length?"none":"",s.style.display=a.length<j&&M===0?"none":"",k("div.ka-topx--body",a.map((l,c)=>n(l,M+c+1)))}return d.addEventListener("click",()=>{M!==0&&(M=Math.max(0,M-j),E())}),w.addEventListener("click",()=>{S<j||(M+=j,E())}),{update:L}}function mt(t){return z(t,"/posts",function(e,n){return k("div.ka-topx--row ka-fade",[k("div.ka-topx--rank",{},n),k("div.ka-topx--col",{},[k("a",{attrs:{href:e.post_permalink}},e.post_title||"(no title)")]),k("div.ka-topx--amount",Math.max(1,e.visitors)),k("div.ka-topx--amount",e.pageviews)])})}function Qt(t){return t.displayUrl=t.url.replace(/^https?:\/\/(www\.)?(.+?)\/?$/,"$2"),t.url.indexOf("https://t.co/")===0?t.url="https://twitter.com/search?q="+encodeURI(t.url):t.url.indexOf("android-app://")===0&&(t.displayUrl=t.url.replace("android-app://","Android app: "),t.url=t.url.replace("android-app://","https://play.google.com/store/apps/details?id=")),t}function ht(t){return z(t,"/referrers",function(e,n){return e=Qt(e),k("div.ka-topx--row ka-fade",[k("div.ka-topx--rank",{},n),k("div.ka-topx--col",{},[k("a",{attrs:{href:e.url}},e.displayUrl)]),k("div.ka-topx--amount",Math.max(1,e.visitors)),k("div.ka-topx--amount",e.pageviews)])})}Object.assign(window.koko_analytics,{components:{BlockComponent:z},util:{request:F,dates:J}});var gt=/\.0+$/;function K(t){let e=0;return t>=1e6?(t=t/1e6,e=Math.max(0,3-String(Math.round(t)).length),t.toFixed(e).replace(gt,"")+"M"):t>=1e3*10?(t=t/1e3,e=Math.max(0,3-String(Math.round(t)).length),t.toFixed(e).replace(gt,"")+"K"):String(t)}function xt(t){return t=Math.round(t*100),t>=0?`+${t}%`:`${t}%`}function yt(t){if(t<10)return 10;let e=Math.floor(Math.log10(t)),n=Math.pow(10,e);return Math.ceil(t/n)*n}var{i18n:kt}=window.koko_analytics,Vt=Y([et,G]),O={left:48,bottom:36,top:24,right:24},I=ee();function te(t){let e=yt(t),i=e/2,r=[];for(let s=0;s<=e;s+=i)r.push(s);return{ticks:r,max:e}}function ee(){let t=document.createElement("div");return t.className="ka-chart--tooltip",t.style.display="none",t.innerHTML=`
<div class="ka-chart--tooltip-box">
  <div class="ka-chart--tooltip-heading"></div>
  <div style="display: flex">
    <div class="ka-chart--tooltip-content ka--visitors">
      <div class="ka-chart--tooltip-amount"></div>
      <div>${kt.Visitors}</div>
    </div>
    <div class="ka-chart--tooltip-content ka--pageviews">
      <div class="ka-chart--tooltip-amount"></div>
      <div>${kt.Pageviews}</div>
    </div>
  </div>
</div>
<div class="ka-chart--tooltip-arrow"></div>`,t}function ne(){I.style.display="none"}function vt(t,e){e=e||Math.max(240,Math.min(window.innerHeight/3,window.innerWidth/2,360)),t.parentElement.style.minHeight=`${e+4}px`;let n={month:"short",year:"numeric"},r=t.clientWidth-O.left-O.right,s=e-O.bottom-O.top;document.body.appendChild(I),document.addEventListener("click",S=>{S.target.matches&&S.target.matches(".ka-chart *,.ka-chart--tooltip *")||(I.style.display="none")});function d(S,x){return y=>{I.querySelector(".ka-chart--tooltip-heading").textContent=P(S.date,n),I.querySelector(".ka--visitors").children[0].textContent=S.visitors,I.querySelector(".ka--pageviews").children[0].textContent=S.visitors;let L=y.currentTarget.getBoundingClientRect();I.style.display="block",I.style.left=L.left+window.scrollX-.5*I.clientWidth+.5*x+"px",I.style.top=L.y+window.scrollY-I.clientHeight+"px"}}function w(S,x){let y=S.getDate()===1&&U(x)&&x-S>79488e5||x-S>31536e6;n=y?{month:"short",year:"numeric"}:void 0,F("/stats",{start_date:D(S),end_date:D(x),monthly:y?1:0}).then(L=>{t=Vt(t,M(L))})}function M(S){if(S.length<=1)return k("!");let x=r/S.length,y=.9*x,L=(x-y)/2,E=S.reduce((f,u)=>f.pageviews>u.pageviews?f:u,0).pageviews,o=te(E),a=S.length<=90,l=s/o.max,c=f=>f*x,m=o.max<=0?()=>s:f=>s-f*l;return k("svg",{attrs:{width:"100%",height:e}},[k("g",[k("g",{attrs:{class:"axes-y",transform:`translate(0, ${O.top})`,"text-anchor":"end"}},o.ticks.map(f=>{let u=m(f);return k("g",[k("line",{attrs:{stroke:"#eee",x1:O.left,x2:r+O.left,y1:u,y2:u}}),k("text",{attrs:{y:u,fill:"#757575",x:.75*O.left,dy:"0.33em"}},K(f))])})),k("g",{attrs:{class:"axes-x","text-anchor":"middle",transform:`translate(${O.left}, ${O.top+s})`}},S.map((f,u)=>{let g=u===0||u===S.length-1?f.date:null;if(!a&&!g)return null;let p=c(u)+.5*x;return k("g",[k("line",{attrs:{stroke:"#ddd",x1:p,x2:p,y1:0,y2:6}}),g?k("text",{attrs:{fill:"#757575",x:p,y:10,dy:"1em"}},P(f.date,n)):""])}).filter(f=>f!==null))]),k("g",{attrs:{class:"bars",transform:`translate(${O.left}, ${O.top})`}},S.map((f,u)=>{let g=f.pageviews*l,p=f.visitors*l,v=c(u),h=d(f,y);return k("g",{on:{click:h,mouseenter:h,mouseleave:ne}},[k("rect",{attrs:{class:"ka--pageviews",height:g,width:y,x:v+L,y:m(f.pageviews)}}),k("rect",{attrs:{class:"ka--visitors",height:p,width:y,x:v+L,y:m(f.visitors)}})])}))])}return{update:w}}function nt(t,e){let n=t.querySelector("#ka-datepicker-dropdown"),i=t.querySelector("#ka-date-start"),r=t.querySelector("#ka-date-end"),s=t.querySelector(".ka-datepicker--label"),d=t.querySelector(".ka-datepicker--quicknav-heading"),w=t.querySelector("#ka-date-presets"),M=t.querySelector(".ka-datepicker--quicknav-prev"),S=t.querySelector(".ka-datepicker--quicknav-next"),x=q(i.value),y=q(r.value),L=!1;function E(l){L=typeof l=="boolean"?l:!L,n.style.display=L?"":"none",s.setAttribute("aria-expanded",L)}function o(l){let c=`${P(x)} \u2014 ${P(y)}`;s.textContent=c,d.textContent=c,l&&e({startDate:x,endDate:y})}function a(l){if(x.getDate()===1&&U(y)){let f=(y.getMonth()-x.getMonth()+1)*l;x=new Date(x.getFullYear(),x.getMonth()+f,1,0,0,0),y=new Date(y.getFullYear(),y.getMonth()+f+1,0,23,59,59)}else{let f=Math.round((y-x)/864e5)*l;x.setDate(x.getDate()+f),y.setDate(y.getDate()+f)}w.value="custom",i.value=D(x),r.value=D(y),o(!0)}document.addEventListener("click",l=>{for(let c=l.target;c!==null;c=c.parentNode)if(c===t)return;E(!1)}),i.addEventListener("change",l=>{let c=q(l.target.value);c&&(x=c,w.value="custom",o(!0))}),r.addEventListener("change",l=>{let c=q(l.target.value);c&&(y=c,w.value="custom",o(!0))}),w.addEventListener("change",l=>{l.target.value!=="custom"&&(x=q(l.target.selectedOptions[0].dataset.startDate),y=q(l.target.selectedOptions[0].dataset.endDate),i.value=D(x),r.value=D(y),o(!0))}),document.addEventListener("keydown",l=>{(l.key==="ArrowLeft"||l.key==="ArrowRight")&&a(l.key==="ArrowLeft"?-1:1)}),M.addEventListener("click",()=>a(-1)),S.addEventListener("click",()=>a(1)),s.addEventListener("click",E),o()}function wt(t){function e(r,s,d,w){r.children[1].children[0].textContent=K(s),r.children[1].children[1].textContent=w!==null?xt(w):"",r.classList.toggle("ka-up",d>0),r.classList.toggle("ka-down",d<0),r.children[2].firstElementChild.textContent=K(Math.abs(d))}function n(r,s){F("/totals",{start_date:D(r),end_date:D(s)}).then(d=>{e(t.children[0],d.visitors,d.visitors_change,d.visitors_change_rel),e(t.children[1],d.pageviews,d.pageviews_change,d.pageviews_change_rel)})}function i(){F("/realtime",{since:"-1 hour"}).then(r=>{t.children[2].children[1].textContent=K(r)})}return window.setInterval(i,6e4),{update:n}}var{startDate:rt,endDate:it}=window.koko_analytics;rt=q(rt);it=q(it);var ot=[mt(document.querySelector("#ka-top-posts")),ht(document.querySelector("#ka-top-referrers"))];window.koko_analytics.registerDashboardComponent=function(t){ot.push(t)};var re=wt(document.querySelector("#ka-totals")),St=vt(document.querySelector("#ka-chart"));nt(document.querySelector(".ka-datepicker"),({startDate:t,endDate:e})=>{[re,St,...ot].forEach(i=>i.update(t,e));let n=new URLSearchParams(window.location.search);n.set("start_date",D(t)),n.set("end_date",D(e)),history.replaceState(void 0,void 0,window.location.pathname+"?"+n)});document.addEventListener("DOMContentLoaded",()=>{[St,...ot].forEach(t=>t.update(rt,it))});})();
