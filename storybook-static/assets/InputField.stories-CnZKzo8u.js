import{I as A}from"./InputField-D65Qo2sS.js";import{a as e}from"./Input-BDfW-d8G.js";import{a as T}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./system-BpSr89bx.js";import"./index-CsdIBAqE.js";import"./v4-D8aEg3BZ.js";const S={title:"InputField",component:A,tags:["autodocs"],argTypes:{inputTypes:{options:["CARD_NUMBER","EXPIRY_DATE","USER_NAME"],mapping:{CARD_NUMBER:e.CARD_NUMBER,EXPIRY_DATE:e.EXPIRY_DATE,USER_NAME:e.USER_NAME}}}},r={cardNumber1:"5123",cardNumber2:"1234",cardNumber3:"1212",cardNumber4:"2323",month:"1",year:"12",userName:"HAILEY CHOI"},o=T("handleInput"),u={args:{title:"Default Title",subtitle:"Default Subtitle",inputTypes:{inputLabel:"default",inputInfo:Array.from({length:1},(R,f)=>({property:`default${f+1}`,validateType:"default type",maxLength:10,placeHolder:"default placeHolder",error:"default error message"}))},cardInfo:r,handleInput:o}},t={args:{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",inputTypes:e.CARD_NUMBER,cardInfo:r,handleInput:o}},n={args:{title:"카드 유효기간을 입력해 주세요",subtitle:"월/년도(MMYY)를 순서대로 입력해 주세요.",inputTypes:e.EXPIRY_DATE,cardInfo:r,handleInput:o}},a={args:{title:"카드 소유자 이름을 입력해 주세요",inputTypes:e.USER_NAME,cardInfo:r,handleInput:o}};var s,p,C;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    inputTypes: {
      inputLabel: 'default',
      inputInfo: Array.from({
        length: 1
      }, (_, index) => ({
        property: \`default\${index + 1}\`,
        validateType: 'default type',
        maxLength: 10,
        placeHolder: 'default placeHolder',
        error: 'default error message'
      }))
    },
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput
  }
}`,...(C=(p=u.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    inputTypes: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var E,i,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    inputTypes: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput
  }
}`,...(I=(i=n.parameters)==null?void 0:i.docs)==null?void 0:I.source}}};var m,D,_;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.USER_NAME,
    cardInfo: mockCardInfo,
    handleInput: mockHandleInput
  }
}`,...(_=(D=a.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const Y=["Default","CARD_NUMBER_FIELD","EXPIRY_DATE_FIELD","USER_NAME_FIELD"];export{t as CARD_NUMBER_FIELD,u as Default,n as EXPIRY_DATE_FIELD,a as USER_NAME_FIELD,Y as __namedExportsOrder,S as default};
