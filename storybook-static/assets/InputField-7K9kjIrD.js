import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as f}from"./index-CsdIBAqE.js";import{u as n}from"./system-DOfS-soT.js";import{I as g}from"./Input-BrXGgI-Q.js";const h=n.h1`
  color: #000;
  font-size: 18px;
  margin-bottom: 4px;
`,y=n.p`
  color: #8b95a1;
  font-size: 9.5px;
  margin-bottom: 16px;
`;function p({title:i,subtitle:s}){return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:i}),e.jsx(y,{children:s})]})}p.__docgenInfo={description:"",methods:[],displayName:"FieldTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""}}};const I=n.div`
  display: flex;
  flex-direction: column;
  height: 120px;
`,j=n.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`,b=n.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`,T=n.div`
  color: red;
  font-size: 9.5px;
`;function v({title:i,subtitle:s,inputTypes:o,cardInfo:d,handleInput:l}){const[a,u]=f.useState({}),c=(t,r)=>{l({...d,[o.inputInfo[t].property]:r})},m=(t,r)=>{u(x=>({...x,[t]:r}))};return e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsx(p,{title:i,subtitle:s}),e.jsx(j,{children:o.inputLabel}),e.jsx(b,{children:o.inputInfo.map((t,r)=>e.jsx(g,{info:t,index:r,handleInput:c,isError:a[r]!==""&&a[r],handleErrorMessage:m}))}),e.jsx(T,{children:Object.values(a).find(t=>t!=="")})]})})}v.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},inputTypes:{required:!0,tsType:{name:"InputType"},description:""},cardInfo:{required:!0,tsType:{name:"Card"},description:""},handleInput:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Card) => void",signature:{arguments:[{type:{name:"Card"},name:"value"}],return:{name:"void"}}},description:""}}};export{v as I};
