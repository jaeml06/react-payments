import{v as R}from"./v4-D8aEg3BZ.js";const{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:h}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var m="storybook/actions",D=`${m}/action-event`,S={depth:10,clearOnStoryChange:!0,limit:50},O=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:O(o,e)},w=t=>!!(typeof t=="object"&&t&&O(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),b=t=>{if(w(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},v=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?R():Date.now().toString(36)+Math.random().toString(36).substring(2);function A(t,e={}){let o={...S,...e},n=function(...i){var a,s;if(e.implicit){let p=(a="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:a.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(p){let r=!((s=window==null?void 0:window.FEATURES)!=null&&s.disallowImplicitActionsInRenderV8),l=new h({phase:p.phase,name:t,deprecated:r});if(r)console.warn(l);else throw l}}let d=f.getChannel(),E=v(),y=5,c=i.map(b),g=i.length>1?c:c[0],u={id:E,count:0,data:{name:t,args:g},options:{...o,maxDepth:y+(o.depth||3),allowFunction:o.allowFunction||!1}};d.emit(D,u)};return n.isAction=!0,n.implicit=e.implicit,n}export{A as a};