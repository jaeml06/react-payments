import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{F as w}from"./FieldTitle-NQIiWOel.js";import{I as h}from"./InputField-JLZRkevq.js";import{u as n}from"./styled-components.browser.esm-BYOAmokf.js";const u={BC카드:"#F04651",신한카드:"#0046FF",카카오뱅크:"#FFE600",현대카드:"#000000",우리카드:"#007BC8",롯데카드:"#ED1C24",하나카드:"#009490",국민카드:"#6A6056"},x="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.18%209.54985L8.36009%205.72992L4.54016%209.54985'%20stroke='%23ACACAC'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(180)'%3e%3cpath%20d='M12.18%209.54985L8.36009%205.72992L4.54016%209.54985'%20stroke='%23ACACAC'%20stroke-width='1.32867'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",g=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,C=n.div`
  padding: 10px;
  border: 1px solid ${s=>s.$clicked?"#000":"#ddd"};
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
`,S=n.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`,j=n.ul`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
`,k=n.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;function D({handleInput:s,handleShowComponent:c}){const[o,i]=a.useState(!1),[l,p]=a.useState("카드사를 선택해주세요"),m=t=>{const d="cardBrand";s(r=>({...r,[d]:{...r[d],value:t}})),c(r=>({...r,expirationDateInput:!0})),i(!o),p(t)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"카드사를 선택해 주세요",subtitle:"현재 국내 카드사만 가능합니다."}),e.jsx(h,{label:"카드사",count:4,errorMessages:"",children:e.jsxs(g,{children:[e.jsxs(C,{$clicked:o,onClick:()=>i(!o),children:[e.jsx(S,{children:l}),e.jsx("img",{src:o?x:f})]}),o&&e.jsx(j,{children:Object.entries(u).map(([t])=>e.jsx(k,{onClick:()=>m(t),children:t},t))})]})})]})}D.__docgenInfo={description:"",methods:[],displayName:"CardDropDown",props:{cardBrand:{required:!1,tsType:{name:"CardBrand"},description:""},handleInput:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"CardBrand"}],raw:"SetStateAction<CardBrand>"}],raw:"Dispatch<SetStateAction<CardBrand>>"},description:""},handleShowComponent:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"ShowComponents"}],raw:"SetStateAction<ShowComponents>"}],raw:"Dispatch<SetStateAction<ShowComponents>>"},description:""}}};export{u as C,D as a};
