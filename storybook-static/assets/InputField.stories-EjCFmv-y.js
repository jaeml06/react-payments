import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{I as h}from"./InputField-JLZRkevq.js";import{u as E}from"./styled-components.browser.esm-BYOAmokf.js";import"./index-Dl6G-zuu.js";const o=E.input`
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
`,x={label:"Example Label",errorMessages:{}},y={title:"Components/InputField",component:h,tags:["autodocs"],argTypes:{children:{control:!1}}},t={args:{...x,children:r.jsx(o,{placeholder:"Empty"})}},e=t,s={args:{...t.args,errorMessages:{0:"Error"}}},a={args:{...t.args,children:r.jsxs(r.Fragment,{children:[r.jsx(o,{placeholder:"Empty"}),r.jsx(o,{placeholder:"Empty"})]})}};var p,n,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"Template",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Template.args,
    errorMessages: {
      0: 'Error'
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,u,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Template.args,
    children: <>
        <MockInput placeholder='Empty' />
        <MockInput placeholder='Empty' />
      </>
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const T=["Default","WithError","MultipleInputs"];export{e as Default,a as MultipleInputs,s as WithError,T as __namedExportsOrder,y as default};
