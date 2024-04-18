import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as l}from"./index-CsdIBAqE.js";import{u as a}from"./system-DOfS-soT.js";import{C as x}from"./Card-CHBHfQkT.js";import{a as i}from"./Input-BrXGgI-Q.js";import{I as s}from"./InputField-7K9kjIrD.js";const f=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;function m({cardInfo:t,handleInput:r}){return e.jsxs(f,{children:[e.jsx(s,{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",inputTypes:i.CARD_NUMBER,cardInfo:t,handleInput:r}),e.jsx(s,{title:"카드 유효기간을 입력해 주세요",subtitle:"월/년도(MMYY)를 순서대로 입력해 주세요.",inputTypes:i.EXPIRY_DATE,cardInfo:t,handleInput:r}),e.jsx(s,{title:"카드 소유자 이름을 입력해 주세요",inputTypes:i.USER_NAME,cardInfo:t,handleInput:r})]})}m.__docgenInfo={description:"",methods:[],displayName:"InputForm",props:{cardInfo:{required:!0,tsType:{name:"Card"},description:""},handleInput:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Card) => void",signature:{arguments:[{type:{name:"Card"},name:"value"}],return:{name:"void"}}},description:""}}};const h=a.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,y=a.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;function c(){const[t,r]=l.useState({cardNumber1:"",cardNumber2:"",cardNumber3:"",cardNumber4:"",month:"",year:"",userName:""});return e.jsx(h,{children:e.jsxs(y,{children:[e.jsx(x,{cardInfo:t}),e.jsx(m,{cardInfo:t,handleInput:r})]})})}c.__docgenInfo={description:"",methods:[],displayName:"EnrollCard"};function u(){return e.jsx(e.Fragment,{children:e.jsx(c,{})})}u.__docgenInfo={description:"",methods:[],displayName:"App"};const N={title:"App",component:u},n={};var o,d,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,N as default};
