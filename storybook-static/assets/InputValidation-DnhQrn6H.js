const E=/ {2,}/,A=/^[A-Z\s]+$/,l={MIN:1,MAX:12},s={MIN:0,MAX:99},f={VISA:4,MASTER:{START:51,END:55}},i={INVALID_TRIM_BLANK:"불필요한 공백이 포함되어 있습니다.",INVALID_DOUBLE_BLANK:"빈칸이 두개 이상 포함되어 있습니다.",INVALID_MONTH:"카드의 유효한 유효기간(월)을 입력해주세요.",INVALID_YEAR:"카드의 유효한 유효기간(년도)을 입력해주세요.",INVALID_ONLY_NUMBER:"숫자만 입력해주세요.",INVALID_ONLY_UPPERCASE:"영대문자로만 입력해주세요."};function n(r){if(r.trim()===""&&r!==""||r.trim().length!==r.length)throw new Error(i.INVALID_TRIM_BLANK)}function u(r){if(E.test(r))throw new Error(i.INVALID_DOUBLE_BLANK)}function a(r){if(!Number.isInteger(Number(r)))throw new Error(i.INVALID_ONLY_NUMBER)}function N(r){if(r.length===0)return!0}function c(r){if(N(r))return;const o=Number(r);if(!(l.MIN<=o&&o<=l.MAX))throw new Error(i.INVALID_MONTH)}function I(r){if(N(r))return;const o=Number(r);if(!(s.MIN<=o&&o<=s.MAX))throw new Error(i.INVALID_YEAR)}function _(r){if(!A.test(r)&&r.length!==0)throw new Error(i.INVALID_ONLY_UPPERCASE)}const h={cardNumber:r=>{n(r),a(r)},month:r=>{n(r),a(r),c(r)},year:r=>{n(r),a(r),I(r)},userName:r=>{n(r),u(r),_(r)},CVC:r=>{n(r),a(r)},password:r=>{n(r),a(r)}},v=r=>{if(Object.values(r).reduce((e,t)=>!t.isError&&t.value!==""&&t.value.length===4?e+1:e,0)!==4)throw new Error("")},L=r=>{if(Object.values(r).reduce((e,t)=>!t.isError&&t.value!==""&&t.value.length===2?e+1:e,0)!==2)throw new Error("")},w=r=>{if(Object.values(r).reduce((e,t)=>!t.isError&&t.value!==""&&t.value.length>3?e+1:e,0)!==1)throw new Error("")},D=r=>{if(Object.values(r).reduce((e,t)=>!t.isError&&t.value!==""&&t.value.length===3?e+1:e,0)!==1)throw new Error("")},d=r=>{if(Object.values(r).reduce((e,t)=>!t.isError&&t.value!==""&&t.value.length===2?e+1:e,0)!==1)throw new Error("")};export{f as C,h as V,L as a,w as b,D as c,d,v};