import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{I as g}from"./Input-CvF1GPjA.js";import{F as E}from"./FieldTitle-NQIiWOel.js";import{r as a,R as S}from"./index-Dl6G-zuu.js";import{V as I}from"./InputValidation-DnhQrn6H.js";import{I as V}from"./InputField-JLZRkevq.js";function y({CVC:n,handleInput:c,handleShowComponent:i}){const[l,C]=a.useState({}),u=a.useRef(Array.from({length:1},()=>S.createRef()));a.useEffect(()=>{const e=Object.values(n).map(t=>t.errorMessage);C(e)},[n]),a.useEffect(()=>{var e;(e=u.current[0].current)==null||e.focus()},[]),a.useEffect(()=>{Object.values(n).reduce((r,s)=>!s.isError&&s.value!==""&&s.value.length===3?r+1:r,0)===1&&i(t=>({...t,passwordInput:!0}))},[n,i]);const d=e=>{const t="CVC";c(r=>({...r,[t]:{...r[t],value:e}}))},p=(e,t)=>{const r="CVC";c(s=>({...s,[r]:{...s[r],errorMessage:e,isError:t}}))},f=(e,t)=>{var r,s;try{(s=(r=I)[t])==null||s.call(r,e.target.value),p("",!1),d(e.target.value)}catch(m){m instanceof Error&&p(m.message,!0)}},h=()=>n["CVC"].isError;return o.jsxs(o.Fragment,{children:[o.jsx(E,{title:"CVC 번호를 입력해 주세요"}),o.jsx(V,{label:"CVC",count:1,errorMessages:l,children:u.current.map((e,t)=>o.jsx(g,{type:"string",maxLength:3,value:n.CVC.value,placeholder:"123",isError:h(),onChange:r=>f(r,"CVC"),inputRef:e},t))})]})}y.__docgenInfo={description:"",methods:[],displayName:"CVCInput",props:{CVC:{required:!0,tsType:{name:"CVC"},description:""},handleInput:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"CVC"}],raw:"SetStateAction<CVC>"}],raw:"Dispatch<SetStateAction<CVC>>"},description:""},handleShowComponent:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"ShowComponents"}],raw:"SetStateAction<ShowComponents>"}],raw:"Dispatch<SetStateAction<ShowComponents>>"},description:""}}};export{y as C};
