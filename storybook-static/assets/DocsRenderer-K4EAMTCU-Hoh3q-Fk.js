function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-_byTH_QA.js","./index-Dl6G-zuu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-DEUeN7g-.js";import{R as e,r as c}from"./index-Dl6G-zuu.js";import{r as l,u}from"./react-18-Bamk9FSf.js";import{C as h,A as E,H as d,D as x}from"./index-CeNH_mLa.js";import"../sb-preview/runtime.js";import"./index-D1_ZHIBm.js";import"./index-Dkj0J1ds.js";import"./index-BQAhN-J1.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-_byTH_QA.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{F as DocsRenderer,_ as defaultComponents};
