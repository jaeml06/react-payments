import{j as c}from"./jsx-runtime-Du8NFWEI.js";import{I as S}from"./Input-CvF1GPjA.js";import{F as y}from"./FieldTitle-NQIiWOel.js";import{r as u,R as I}from"./index-Dl6G-zuu.js";import{V as b}from"./InputValidation-DnhQrn6H.js";import{I as N}from"./InputField-JLZRkevq.js";function A({cardNumbers:a,handleInput:i,handleShowComponent:p}){const[f,h]=u.useState([]),m=u.useRef(Array.from({length:4},()=>I.createRef()));u.useLayoutEffect(()=>{const e=Object.values(a).map(t=>t.errorMessage);h(e)},[a]),u.useLayoutEffect(()=>{var e;(e=m.current[0].current)==null||e.focus()},[]),u.useLayoutEffect(()=>{Object.values(a).reduce((r,s)=>!s.isError&&s.value!==""&&s.value.length===4?r+1:r,0)===4&&p(t=>({...t,cardDropDown:!0}))},[a,p]);const g=(e,t)=>{const r=`cardNumber${e+1}`;i(s=>({...s,[r]:{...s[r],value:t}}))},l=(e,t,r)=>{const s=`cardNumber${e+1}`;i(n=>({...n,[s]:{...n[s],errorMessage:t,isError:r}}))},C=(e,t,r)=>{var s,n,d;try{(n=(s=b)[t])==null||n.call(s,e.target.value),l(r,"",!1),g(r,e.target.value);const o=r+1;e.target.value.length===4&&o<m.current.length&&((d=m.current[o].current)==null||d.focus())}catch(o){o instanceof Error&&l(r,o.message,!0)}},E=e=>{const t=`cardNumber${e+1}`;return a[t].isError};return c.jsxs(c.Fragment,{children:[c.jsx(y,{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다."}),c.jsx(N,{label:"카드 번호",count:4,errorMessages:f,children:m.current.map((e,t)=>c.jsx(S,{type:"text",value:a[`cardNumber${t+1}`].value,maxLength:4,placeholder:"1234",isError:E(t),onChange:r=>C(r,"cardNumber",t),inputRef:e},t))})]})}A.__docgenInfo={description:"",methods:[],displayName:"CardNumberInput",props:{cardNumbers:{required:!0,tsType:{name:"CardNumbers"},description:""},handleInput:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"CardNumbers"}],raw:"SetStateAction<CardNumbers>"}],raw:"Dispatch<SetStateAction<CardNumbers>>"},description:""},handleShowComponent:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"ShowComponents"}],raw:"SetStateAction<ShowComponents>"}],raw:"Dispatch<SetStateAction<ShowComponents>>"},description:""}}};export{A as C};
