import{u as t,j as e}from"./system-BpSr89bx.js";import{r as u}from"./index-CsdIBAqE.js";import{I as m}from"./Input-BDfW-d8G.js";const x=t.h1`
  color: #000;
  font-size: 18px;
  margin-bottom: 4px;
`,f=t.p`
  color: #8b95a1;
  font-size: 9.5px;
  margin-bottom: 16px;
`;function a({title:r,subtitle:i}){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:r}),e.jsx(f,{children:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"FieldTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""}}};const g=t.div`
  display: flex;
  flex-direction: column;
  height: 120px;
`,h=t.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`,y=t.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`,j=t.div`
  color: red;
  font-size: 9.5px;
`;function T({title:r,subtitle:i,inputTypes:s,cardInfo:p,handleInput:d}){const[o,c]=u.useState({});return e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsx(a,{title:r,subtitle:i}),e.jsx(h,{children:s.inputLabel}),e.jsx(y,{children:s.inputInfo.map((n,l)=>e.jsx(m,{info:n,index:l,cardInfo:p,handleInput:d,errorMessages:o,setErrorMessages:c}))}),e.jsx(j,{children:Object.values(o).find(n=>n!=="")})]})})}T.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},inputTypes:{required:!0,tsType:{name:"InputType"},description:""},cardInfo:{required:!0,tsType:{name:"Card"},description:""},handleInput:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Card) => void",signature:{arguments:[{type:{name:"Card"},name:"value"}],return:{name:"void"}}},description:""}}};export{T as I};
