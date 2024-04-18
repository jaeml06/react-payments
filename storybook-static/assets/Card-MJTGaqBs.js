import{u as t,j as r,C as i}from"./system-BpSr89bx.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABbCAYAAAB3XrfMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7dg7axRhFIfxc2Z3J5uYGMVUYhPwAppCsVDBJo1iL/oVRLBRtN5CEBSjhQj6EUJ6jU3QIilMYWEsDGIRwcJEjQlkLzPzOoMI2VxMsvyr+PzKd89u9TA75zUDAGDX8p0Mz87e6ErT7nhP0qq0Qnel2UpKhl0vrpTTVqORht5S49ixn3X3562N5rYVUxFRthj3xRYPJJ5e9eDn8q+ecLdDhl0vBPuSlzIXLBsPofQyWPNTfKBveXCwVl895//+kVo0M7W4L46rRyIPj/Lhc4b/XjAfzYKN1FfCx4WkujQ8XEuK801jmpiolQe6mweqleSaW3QzH9xrwCpZCCP1pHR/fiVeKILaMKa/IfWU0zvmftOATawOqrzRwKH+xv4oywgJW4ryRqrl1A72Ld1b92Sanq717I/ql/I/xjEDtsvtcrT2rCtp9oXMHhuwA/nGd6stpuKp1BNn51n5sVPFpt8WU7xS7wrBrxjQgbaYQpRUPLLjBnSgLaau7qic73pDBnQgMkCEmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggsy6mYPbLgA60xdSqlNO8JmJCR9pi6u2NG1HJXxjQgbaYvr5dbIQQxg3oQFtMrz70NxpZfTJ/b5oyYEd8ztcezUxc7632772YvzuNGbBdbpfXbXMnhp8uJ1nrtbs9NGAbQt5KZv5mw3umo6fP/LBK9ICgsJUipChv5fCpU99906EwWvr8/t2AtbLbIdgtA1Yp7iPdw0OvlJ4NDp2cd7+SbnoDXnz4Z6h6Nw1+NpiPGlBwm8yCX1ipN58MDsXfilaK49/uZc1lJ6tUDAAAAABJRU5ErkJggg==",o=""+new URL("Visa-Dn0od9UD.png",import.meta.url).href,c=""+new URL("Mastercard-CJof_f93.png",import.meta.url).href,h=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: #333333;
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`,l=t.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,x=t.img`
  width: 36px;
  height: 22px;
`,n=t.div`
  display: flex;
  align-items: flex-end;
  height: 30px;
`,C=t(n)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`,A=t.div`
  width: 100px;
  letter-spacing: 3px;
`,a=t.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;function m({cardInfo:e}){const p=(g=>{const s=parseInt(g.substring(0,2),10);if(Math.floor(s/10)===i.VISA)return o;if(i.MASTER.START<=s&&s<=i.MASTER.END)return c})(e.cardNumber1);return r.jsx(r.Fragment,{children:r.jsxs(h,{children:[r.jsxs(l,{children:[r.jsx(x,{src:d}),p&&r.jsx(x,{src:p})]}),r.jsxs(C,{children:[r.jsxs(A,{children:[" ",e.cardNumber1," "]}),r.jsxs(A,{children:[" ",e.cardNumber2," "]}),r.jsx(a,{children:"•".repeat(e.cardNumber3.length)}),r.jsx(a,{children:"•".repeat(e.cardNumber4.length)})]}),r.jsxs(n,{children:[e.month.length===1?`0${e.month}`:e.month,e.year.length>0?" / ":"",e.year.length===1?`0${e.year}`:e.year]}),r.jsxs(n,{children:[" ",e.userName," "]})]})})}m.__docgenInfo={description:"",methods:[],displayName:"CardView",props:{cardInfo:{required:!0,tsType:{name:"Card"},description:""}}};export{m as C};
