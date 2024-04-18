import{C as I}from"./Card-MJTGaqBs.js";import"./system-BpSr89bx.js";import"./index-CsdIBAqE.js";const f={cardNumber1:"",cardNumber2:"",cardNumber3:"",cardNumber4:"",month:"",year:"",userName:""},i={cardNumber1:"4123",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234",month:"12",year:"29",userName:"SDF SDF"},N={cardNumber1:"5111",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234",month:"1",year:"24",userName:"CRON LEE"},l={title:"CardView",component:I,tags:["autodocs"],argTypes:{cardInfo:{options:["Default","ViSA","MASTER_CARD"],mapping:{Default:f,VISA:i,MASTER_CARD:N}}}},r={args:{cardInfo:f}},a={args:{cardInfo:i}},e={args:{cardInfo:N}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    cardInfo: mockDefaultCardInfo
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var t,m,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    cardInfo: mockVisaCardInfo
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    cardInfo: mockMasterCardInfo
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const D=["Default","Visa","Master"];export{r as Default,e as Master,a as Visa,D as __namedExportsOrder,l as default};
