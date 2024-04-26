import{I as i}from"./Input-CvF1GPjA.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./styled-components.browser.esm-BYOAmokf.js";const E={title:"Components/Input",component:i,tags:["autodocs"],argTypes:{type:{control:"text",defaultValue:"text"},maxLength:{control:"number",defaultValue:20},value:{control:"text",defaultValue:""},placeholder:{control:"text",defaultValue:"Empty"},isError:{control:"boolean",defaultValue:!1}}},e={args:{maxLength:20,value:"",placeholder:"비었어",isError:!1,onChange:()=>{},onKeyDown:()=>{}}},r=e,a={...e,args:{...e.args,isError:!0,value:"틀렸어"}},t={...e,args:{...e.args,value:"하하하하하!"}};var o,s,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"Template",...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var n,u,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    isError: true,
    value: '틀렸어'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    value: '하하하하하!'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const h=["Default","WithError","Filled"];export{r as Default,t as Filled,a as WithError,h as __namedExportsOrder,E as default};
