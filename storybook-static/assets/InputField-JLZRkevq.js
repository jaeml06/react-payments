import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{u as r}from"./styled-components.browser.esm-BYOAmokf.js";const o=r.div`
  display: flex;
  flex-direction: column;
  /* height: 100px; */
`,p=r.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`,a=r.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* height: 2rem; */
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`,d=r.div`
  color: red;
  font-size: 9.5px;
`;function u({label:t,children:i,errorMessages:n}){return e.jsxs(o,{children:[e.jsx(p,{children:t}),e.jsx(a,{children:i}),e.jsx(d,{children:Object.values(n).find(s=>s!=="")})]})}u.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},errorMessages:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: number]: string }",signature:{properties:[{key:{name:"number"},value:{name:"string",required:!0}}]}},description:""}}};export{u as I};
