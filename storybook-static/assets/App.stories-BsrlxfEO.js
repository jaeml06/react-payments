import{j as h}from"./jsx-runtime-Du8NFWEI.js";import{r as l,a as be}from"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import{u as w}from"./styled-components.browser.esm-BYOAmokf.js";import{C as V,v as Ee,a as Be,b as Ne,c as Ie,d as Re}from"./InputValidation-DnhQrn6H.js";import{C as Se,a as je}from"./CardDropDown-7bjbiKP2.js";import{C as Ae}from"./CardNumberInput-DjmcqhZ2.js";import{E as Pe}from"./ExpirationDateInput-Bvmt2C4I.js";import{U as Me}from"./UserNameInput-C-qywEkv.js";import{C as Ue}from"./CVCInput-fmW04yeT.js";import{P as De}from"./PasswordInput-DN23rlE1.js";import"./FieldTitle-NQIiWOel.js";import"./InputField-JLZRkevq.js";import"./Input-CvF1GPjA.js";/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}var B;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(B||(B={}));const z="popstate";function Te(e){e===void 0&&(e={});function t(n,a){let{pathname:i,search:o,hash:u}=n.location;return k("",{pathname:i,search:o,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:se(a)}return Ve(t,r,null,e)}function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ie(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Le(){return Math.random().toString(36).substr(2,8)}function Y(e,t){return{usr:e.state,key:e.key,idx:t}}function k(e,t,r,n){return r===void 0&&(r=null),j({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?R(t):t,{state:r,key:t&&t.key||n||Le()})}function se(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function R(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ve(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,o=a.history,u=B.Pop,s=null,f=c();f==null&&(f=0,o.replaceState(j({},o.state,{idx:f}),""));function c(){return(o.state||{idx:null}).idx}function d(){u=B.Pop;let p=c(),y=p==null?null:p-f;f=p,s&&s({action:u,location:x.location,delta:y})}function m(p,y){u=B.Push;let b=k(x.location,p,y);r&&r(b,p),f=c()+1;let E=Y(b,f),I=x.createHref(b);try{o.pushState(E,"",I)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(I)}i&&s&&s({action:u,location:x.location,delta:1})}function g(p,y){u=B.Replace;let b=k(x.location,p,y);r&&r(b,p),f=c();let E=Y(b,f),I=x.createHref(b);o.replaceState(E,"",I),i&&s&&s({action:u,location:x.location,delta:0})}function v(p){let y=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof p=="string"?p:se(p);return b=b.replace(/ $/,"%20"),C(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let x={get action(){return u},get location(){return e(a,o)},listen(p){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(z,d),s=p,()=>{a.removeEventListener(z,d),s=null}},createHref(p){return t(a,p)},createURL:v,encodeLocation(p){let y=v(p);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:m,replace:g,go(p){return o.go(p)}};return x}var q;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(q||(q={}));function Fe(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?R(t):t,a=ce(n.pathname||"/",r);if(a==null)return null;let i=le(e);ke(i);let o=null;for(let u=0;o==null&&u<i.length;++u){let s=Xe(a);o=qe(i[u],s)}return o}function le(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,o,u)=>{let s={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(C(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let f=N([n,s.relativePath]),c=r.concat(s);i.children&&i.children.length>0&&(C(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),le(i.children,t,c,f)),!(i.path==null&&!i.index)&&t.push({path:f,score:ze(f,i.index),routesMeta:c})};return e.forEach((i,o)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))a(i,o);else for(let s of ue(i.path))a(i,o,s)}),t}function ue(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let o=ue(n.join("/")),u=[];return u.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&u.push(...o),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function ke(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ye(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Oe=/^:[\w-]+$/,Qe=3,Je=2,_e=1,We=10,$e=-2,G=e=>e==="*";function ze(e,t){let r=e.split("/"),n=r.length;return r.some(G)&&(n+=$e),t&&(n+=Je),r.filter(a=>!G(a)).reduce((a,i)=>a+(Oe.test(i)?Qe:i===""?_e:We),n)}function Ye(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function qe(e,t){let{routesMeta:r}=e,n={},a="/",i=[];for(let o=0;o<r.length;++o){let u=r[o],s=o===r.length-1,f=a==="/"?t:t.slice(a.length)||"/",c=Ge({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},f);if(!c)return null;Object.assign(n,c.params);let d=u.route;i.push({params:n,pathname:N([a,c.pathname]),pathnameBase:nt(N([a,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(a=N([a,c.pathnameBase]))}return i}function Ge(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Ke(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((f,c,d)=>{let{paramName:m,isOptional:g}=c;if(m==="*"){let x=u[d]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const v=u[d];return g&&!v?f[m]=void 0:f[m]=(v||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:o,pattern:e}}function Ke(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ie(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,s)=>(n.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Xe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ie(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ce(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ze(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?R(e):e;return{pathname:r?r.startsWith("/")?r:He(r,t):t,search:at(n),hash:ot(a)}}function He(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function F(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function et(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function tt(e,t){let r=et(e);return t?r.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function rt(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=R(e):(a=j({},e),C(!a.pathname||!a.pathname.includes("?"),F("?","pathname","search",a)),C(!a.pathname||!a.pathname.includes("#"),F("#","pathname","hash",a)),C(!a.search||!a.search.includes("#"),F("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,u;if(o==null)u=r;else{let d=t.length-1;if(!n&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}u=d>=0?t[d]:"/"}let s=Ze(a,u),f=o&&o!=="/"&&o.endsWith("/"),c=(i||o===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(f||c)&&(s.pathname+="/"),s}const N=e=>e.join("/").replace(/\/\/+/g,"/"),nt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),at=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ot=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function it(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const de=["post","put","patch","delete"];new Set(de);const st=["get",...de];new Set(st);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}const _=l.createContext(null),lt=l.createContext(null),U=l.createContext(null),D=l.createContext(null),S=l.createContext({outlet:null,matches:[],isDataRoute:!1}),pe=l.createContext(null);function T(){return l.useContext(D)!=null}function W(){return T()||C(!1),l.useContext(D).location}function he(e){l.useContext(U).static||l.useLayoutEffect(e)}function fe(){let{isDataRoute:e}=l.useContext(S);return e?wt():ut()}function ut(){T()||C(!1);let e=l.useContext(_),{basename:t,future:r,navigator:n}=l.useContext(U),{matches:a}=l.useContext(S),{pathname:i}=W(),o=JSON.stringify(tt(a,r.v7_relativeSplatPath)),u=l.useRef(!1);return he(()=>{u.current=!0}),l.useCallback(function(f,c){if(c===void 0&&(c={}),!u.current)return;if(typeof f=="number"){n.go(f);return}let d=rt(f,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:N([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,o,i,e])}function ct(e,t){return dt(e,t)}function dt(e,t,r,n){T()||C(!1);let{navigator:a}=l.useContext(U),{matches:i}=l.useContext(S),o=i[i.length-1],u=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let f=W(),c;if(t){var d;let p=typeof t=="string"?R(t):t;s==="/"||(d=p.pathname)!=null&&d.startsWith(s)||C(!1),c=p}else c=f;let m=c.pathname||"/",g=m;if(s!=="/"){let p=s.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=Fe(e,{pathname:g}),x=gt(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:N([s,a.encodeLocation?a.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:N([s,a.encodeLocation?a.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,r,n);return t&&x?l.createElement(D.Provider,{value:{location:A({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:B.Pop}},x):x}function pt(){let e=yt(),t=it(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),r?l.createElement("pre",{style:a},r):null,null)}const ht=l.createElement(pt,null);class ft extends l.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?l.createElement(S.Provider,{value:this.props.routeContext},l.createElement(pe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mt(e){let{routeContext:t,match:r,children:n}=e,a=l.useContext(_);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),l.createElement(S.Provider,{value:t},n)}function gt(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let o=e,u=(a=r)==null?void 0:a.errors;if(u!=null){let c=o.findIndex(d=>d.route.id&&(u==null?void 0:u[d.route.id])!==void 0);c>=0||C(!1),o=o.slice(0,Math.min(o.length,c+1))}let s=!1,f=-1;if(r&&n&&n.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(f=c),d.route.id){let{loaderData:m,errors:g}=r,v=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){s=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((c,d,m)=>{let g,v=!1,x=null,p=null;r&&(g=u&&d.route.id?u[d.route.id]:void 0,x=d.route.errorElement||ht,s&&(f<0&&m===0?(bt("route-fallback",!1),v=!0,p=null):f===m&&(v=!0,p=d.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,m+1)),b=()=>{let E;return g?E=x:v?E=p:d.route.Component?E=l.createElement(d.route.Component,null):d.route.element?E=d.route.element:E=c,l.createElement(mt,{match:d,routeContext:{outlet:c,matches:y,isDataRoute:r!=null},children:E})};return r&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?l.createElement(ft,{location:r.location,revalidation:r.revalidation,component:x,error:g,children:b(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):b()},null)}var me=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(me||{}),M=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(M||{});function xt(e){let t=l.useContext(_);return t||C(!1),t}function vt(e){let t=l.useContext(lt);return t||C(!1),t}function Ct(e){let t=l.useContext(S);return t||C(!1),t}function ge(e){let t=Ct(),r=t.matches[t.matches.length-1];return r.route.id||C(!1),r.route.id}function yt(){var e;let t=l.useContext(pe),r=vt(M.UseRouteError),n=ge(M.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function wt(){let{router:e}=xt(me.UseNavigateStable),t=ge(M.UseNavigateStable),r=l.useRef(!1);return he(()=>{r.current=!0}),l.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,A({fromRouteId:t},i)))},[e,t])}const K={};function bt(e,t,r){!t&&!K[e]&&(K[e]=!0)}function O(e){C(!1)}function Et(e){let{basename:t="/",children:r=null,location:n,navigationType:a=B.Pop,navigator:i,static:o=!1,future:u}=e;T()&&C(!1);let s=t.replace(/^\/*/,"/"),f=l.useMemo(()=>({basename:s,navigator:i,static:o,future:A({v7_relativeSplatPath:!1},u)}),[s,u,i,o]);typeof n=="string"&&(n=R(n));let{pathname:c="/",search:d="",hash:m="",state:g=null,key:v="default"}=n,x=l.useMemo(()=>{let p=ce(c,s);return p==null?null:{location:{pathname:p,search:d,hash:m,state:g,key:v},navigationType:a}},[s,c,d,m,g,v,a]);return x==null?null:l.createElement(U.Provider,{value:f},l.createElement(D.Provider,{children:r,value:x}))}function Bt(e){let{children:t,location:r}=e;return ct(Q(t),r)}new Promise(()=>{});function Q(e,t){t===void 0&&(t=[]);let r=[];return l.Children.forEach(e,(n,a)=>{if(!l.isValidElement(n))return;let i=[...t,a];if(n.type===l.Fragment){r.push.apply(r,Q(n.props.children,i));return}n.type!==O&&C(!1),!n.props.index||!n.props.children||C(!1);let o={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Q(n.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Nt="6";try{window.__reactRouterVersion=Nt}catch{}const It="startTransition",X=be[It];function Rt(e){let{basename:t,children:r,future:n,window:a}=e,i=l.useRef();i.current==null&&(i.current=Te({window:a,v5Compat:!0}));let o=i.current,[u,s]=l.useState({action:o.action,location:o.location}),{v7_startTransition:f}=n||{},c=l.useCallback(d=>{f&&X?X(()=>s(d)):s(d)},[s,f]);return l.useLayoutEffect(()=>o.listen(c),[o,c]),l.createElement(Et,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:o,future:n})}var Z;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Z||(Z={}));var H;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(H||(H={}));const St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABbCAYAAAB3XrfMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7dg7axRhFIfxc2Z3J5uYGMVUYhPwAppCsVDBJo1iL/oVRLBRtN5CEBSjhQj6EUJ6jU3QIilMYWEsDGIRwcJEjQlkLzPzOoMI2VxMsvyr+PzKd89u9TA75zUDAGDX8p0Mz87e6ErT7nhP0qq0Qnel2UpKhl0vrpTTVqORht5S49ixn3X3562N5rYVUxFRthj3xRYPJJ5e9eDn8q+ecLdDhl0vBPuSlzIXLBsPofQyWPNTfKBveXCwVl895//+kVo0M7W4L46rRyIPj/Lhc4b/XjAfzYKN1FfCx4WkujQ8XEuK801jmpiolQe6mweqleSaW3QzH9xrwCpZCCP1pHR/fiVeKILaMKa/IfWU0zvmftOATawOqrzRwKH+xv4oywgJW4ryRqrl1A72Ld1b92Sanq717I/ql/I/xjEDtsvtcrT2rCtp9oXMHhuwA/nGd6stpuKp1BNn51n5sVPFpt8WU7xS7wrBrxjQgbaYQpRUPLLjBnSgLaau7qic73pDBnQgMkCEmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggsy6mYPbLgA60xdSqlNO8JmJCR9pi6u2NG1HJXxjQgbaYvr5dbIQQxg3oQFtMrz70NxpZfTJ/b5oyYEd8ztcezUxc7632772YvzuNGbBdbpfXbXMnhp8uJ1nrtbs9NGAbQt5KZv5mw3umo6fP/LBK9ICgsJUipChv5fCpU99906EwWvr8/t2AtbLbIdgtA1Yp7iPdw0OvlJ4NDp2cd7+SbnoDXnz4Z6h6Nw1+NpiPGlBwm8yCX1ipN58MDsXfilaK49/uZc1lJ6tUDAAAAABJRU5ErkJggg==",jt=""+new URL("Visa-Dn0od9UD.png",import.meta.url).href,At=""+new URL("Mastercard-CJof_f93.png",import.meta.url).href,Pt=w.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${e=>e.color};
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`,Mt=w.div`
  display: flex;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: ${e=>e.color};
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`,Ut=w.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #cbba64;
  color: #ffffff;
  font-weight: bold;
  align-items: center;
  bottom: 30px;
  padding-right: 16px;
  box-sizing: border-box;
`,Dt=w.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,ee=w.img`
  width: 36px;
  height: 22px;
`,J=w.div`
  display: flex;
  align-items: flex-end;
  height: 30px;
`,Tt=w(J)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`,te=w.div`
  width: 100px;
  letter-spacing: 3px;
`,re=w.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;function xe({cardInfo:e}){const r=(n=>{const a=parseInt(n.substring(0,2),10);if(Math.floor(a/10)===V.VISA)return jt;if(V.MASTER.START<=a&&a<=V.MASTER.END)return At})(e.cardNumbers.cardNumber1.value);return e.CVC.CVC.value.length>0&&e.CVC.CVC.value.length<3?h.jsx(h.Fragment,{children:h.jsx(Mt,{color:"#D5D5D5",children:h.jsx(Ut,{children:e.CVC.CVC.value})})}):h.jsx(h.Fragment,{children:h.jsxs(Pt,{color:Se[e.cardBrand.cardBrand.value]||"#333333",children:[h.jsxs(Dt,{children:[h.jsx(ee,{src:St}),r&&h.jsx(ee,{src:r})]}),h.jsxs(Tt,{children:[h.jsx(te,{children:e.cardNumbers.cardNumber1.value}),h.jsx(te,{children:e.cardNumbers.cardNumber2.value}),h.jsx(re,{children:"•".repeat(e.cardNumbers.cardNumber3.value.length)}),h.jsx(re,{children:"•".repeat(e.cardNumbers.cardNumber4.value.length)})]}),h.jsxs(J,{children:[e.expirationDate.month.value.length===1?`0${e.expirationDate.month.value}`:e.expirationDate.month.value,e.expirationDate.year.value.length>0?" / ":"",e.expirationDate.year.value.length===1?`0${e.expirationDate.year.value}`:e.expirationDate.year.value]}),h.jsx(J,{children:e.userName.userName.value})]})})}xe.__docgenInfo={description:"",methods:[],displayName:"CardView",props:{cardInfo:{required:!0,tsType:{name:"CardInfo"},description:""}}};const Lt=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;function ve({cardInfo:{cardNumbers:e,expirationDate:t,userName:r,cardBrand:n,CVC:a,password:i},handleInput:{setCardNumbers:o,setExpirationDate:u,setUserName:s,setCardBrand:f,setCVC:c,setPassword:d}}){const[m,g]=l.useState({cardNumberInput:!0,cardDropDown:!1,expirationDateInput:!1,userNameInput:!1,CVCInput:!1,passwordInput:!1});return h.jsxs(Lt,{children:[m.passwordInput&&h.jsx(De,{password:i,handleInput:d,handleShowComponent:g}),m.CVCInput&&h.jsx(Ue,{CVC:a,handleInput:c,handleShowComponent:g}),m.userNameInput&&h.jsx(Me,{userName:r,handleInput:s,handleShowComponent:g}),m.expirationDateInput&&h.jsx(Pe,{expirationDate:t,handleInput:u,handleShowComponent:g}),m.cardDropDown&&h.jsx(je,{cardBrand:n,handleInput:f,handleShowComponent:g}),m.cardNumberInput&&h.jsx(Ae,{cardNumbers:e,handleInput:o,handleShowComponent:g})]})}ve.__docgenInfo={description:"",methods:[],displayName:"InputForm",props:{cardInfo:{required:!0,tsType:{name:"CardInfo"},description:""},handleInput:{required:!0,tsType:{name:"HandleInput"},description:""}}};function Vt({initCardNumber1:e="",initCardNumber2:t="",initCardNumber3:r="",initCardNumber4:n="",initExpirationDate:a={month:"",year:""},initUserName:i="",initCardBrand:o="",initCVC:u="",initPassWord:s=""}){const[f,c]=l.useState({cardNumber1:{value:e,errorMessage:"",isError:!1},cardNumber2:{value:t,errorMessage:"",isError:!1},cardNumber3:{value:r,errorMessage:"",isError:!1},cardNumber4:{value:n,errorMessage:"",isError:!1}}),[d,m]=l.useState({month:{value:a.month,errorMessage:"",isError:!1},year:{value:a.year,errorMessage:"",isError:!1}}),[g,v]=l.useState({userName:{value:i,errorMessage:"",isError:!1}}),[x,p]=l.useState({cardBrand:{value:o,errorMessage:"",isError:!1}}),[y,b]=l.useState({CVC:{value:u,errorMessage:"",isError:!1}}),[E,I]=l.useState({password:{value:s,errorMessage:"",isError:!1}});return{cardNumbers:f,setCardNumbers:c,expirationDate:d,setExpirationDate:m,userName:g,setUserName:v,cardBrand:x,setCardBrand:p,CVC:y,setCVC:b,password:E,setPassword:I}}const Ft=w.button`
  background-color: black;
  color: #ffffff;
  position: fixed;
  width: 100%;
  height: 10%;
  bottom: 0;
  font-size: 2rem;
`,kt=w.button`
  background-color: black;
  color: #ffffff;
  width: 100%;
  height: 50px;
`;function $({value:e,layoutType:t,onClick:r}){return t==="bottom"?h.jsx(Ft,{onClick:r,children:e}):h.jsx(kt,{onClick:r,children:e})}$.__docgenInfo={description:"",methods:[],displayName:"BottomButton",props:{value:{required:!0,tsType:{name:"string"},description:""},layoutType:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const Ot=w.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qt=w.form`
  margin: 50px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;function Ce(){const{cardNumbers:e,setCardNumbers:t,expirationDate:r,setExpirationDate:n,userName:a,setUserName:i,cardBrand:o,setCardBrand:u,CVC:s,setCVC:f,password:c,setPassword:d}=Vt({}),m=fe(),g=p=>{p.preventDefault(),m("/CardRegistrationConfirmation",{state:{...e,...o}})},[v,x]=l.useState(!1);return l.useEffect(()=>{try{Ee(e),Be(r),Ne(a),Ie(s),Re(c),x(!0)}catch{x(!1)}},[e,r,a,o,s,c]),h.jsx(Ot,{children:h.jsxs(Qt,{onSubmit:g,children:[h.jsx(xe,{cardInfo:{cardNumbers:e,expirationDate:r,userName:a,cardBrand:o,CVC:s,password:c}}),h.jsx(ve,{cardInfo:{cardNumbers:e,expirationDate:r,userName:a,cardBrand:o,CVC:s,password:c},handleInput:{setCardNumbers:t,setExpirationDate:n,setUserName:i,setCardBrand:u,setCVC:f,setPassword:d}}),v&&h.jsx($,{value:"제출",layoutType:"bottom"})]})})}Ce.__docgenInfo={description:"",methods:[],displayName:"EnrollCard"};const Jt=""+new URL("check-prY91fK4.png",import.meta.url).href,_t=w.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Wt=w.div`
  margin: 50px;
  max-width: 400px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`,$t=w.p`
  font-size: 25px;
  font-weight: 700;
  text-align:center;
  padding: 25px;
`,zt=w.img`
  width: 80px;
  height: 80px;

`;function ye(){const e=W(),t=e.state.cardNumber1.value,r=e.state.cardBrand.value,n=fe(),a=()=>{n("/")};return h.jsx(h.Fragment,{children:h.jsx(_t,{children:h.jsxs(Wt,{children:[h.jsx(zt,{src:Jt}),h.jsx($t,{children:`${t}로 시작하는 ${r}가 등록되었어요`}),h.jsx($,{value:"확인",onClick:a})]})})})}ye.__docgenInfo={description:"",methods:[],displayName:"CardRegistrationConfirmation"};function we(){return h.jsx(h.Fragment,{children:h.jsx(Rt,{children:h.jsxs(Bt,{children:[h.jsx(O,{path:"/",element:h.jsx(Ce,{})}),h.jsx(O,{path:"/CardRegistrationConfirmation",element:h.jsx(ye,{})})]})})})}we.__docgenInfo={description:"",methods:[],displayName:"App"};const sr={title:"App",component:we},P={};var ne,ae,oe;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(oe=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const lr=["Default"];export{P as Default,lr as __namedExportsOrder,sr as default};
