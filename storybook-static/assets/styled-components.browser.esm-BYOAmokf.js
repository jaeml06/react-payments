import{R as nt,r as ue}from"./index-Dl6G-zuu.js";var R=function(){return R=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},R.apply(this,arguments)};function vt(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var v="-ms-",rt="-moz-",h="-webkit-",fe="comm",St="rule",Lt="decl",Le="@import",pe="@keyframes",Me="@layer",he=Math.abs,Mt=String.fromCharCode,Tt=Object.assign;function Ye(t,e){return _(t,0)^45?(((e<<2^_(t,0))<<2^_(t,1))<<2^_(t,2))<<2^_(t,3):0}function de(t){return t.trim()}function D(t,e){return(t=e.exec(t))?t[0]:t}function u(t,e,r){return t.replace(e,r)}function dt(t,e,r){return t.indexOf(e,r)}function _(t,e){return t.charCodeAt(e)|0}function H(t,e,r){return t.slice(e,r)}function O(t){return t.length}function le(t){return t.length}function et(t,e){return e.push(t),t}function We(t,e){return t.map(e).join("")}function Zt(t,e){return t.filter(function(r){return!D(r,e)})}var Ct=1,q=1,ge=0,k=0,I=0,J="";function xt(t,e,r,n,s,o,a,i){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:Ct,column:q,length:a,return:"",siblings:i}}function F(t,e){return Tt(xt("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Y(t){for(;t.root;)t=F(t.root,{children:[t]});et(t,t.siblings)}function He(){return I}function qe(){return I=k>0?_(J,--k):0,q--,I===10&&(q=1,Ct--),I}function N(){return I=k<ge?_(J,k++):0,q++,I===10&&(q=1,Ct++),I}function L(){return _(J,k)}function lt(){return k}function At(t,e){return H(J,t,e)}function Dt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ke(t){return Ct=q=1,ge=O(J=t),k=0,[]}function Ue(t){return J="",t}function $t(t){return de(At(k-1,jt(t===91?t+2:t===40?t+1:t)))}function Ze(t){for(;(I=L())&&I<33;)N();return Dt(t)>2||Dt(I)>3?"":" "}function Je(t,e){for(;--e&&N()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return At(t,lt()+(e<6&&L()==32&&N()==32))}function jt(t){for(;N();)switch(I){case t:return k;case 34:case 39:t!==34&&t!==39&&jt(I);break;case 40:t===41&&jt(t);break;case 92:N();break}return k}function Ve(t,e){for(;N()&&t+I!==57;)if(t+I===84&&L()===47)break;return"/*"+At(e,k-1)+"*"+Mt(t===47?t:N())}function Xe(t){for(;!Dt(L());)N();return At(t,k)}function Qe(t){return Ue(gt("",null,null,null,[""],t=Ke(t),0,[0],t))}function gt(t,e,r,n,s,o,a,i,c){for(var p=0,d=0,g=a,m=0,l=0,w=0,x=1,P=1,A=1,S=0,b="",C=s,E=o,y=n,f=b;P;)switch(w=S,S=N()){case 40:if(w!=108&&_(f,g-1)==58){dt(f+=u($t(S),"&","&\f"),"&\f",he(p?i[p-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:f+=$t(S);break;case 9:case 10:case 13:case 32:f+=Ze(w);break;case 92:f+=Je(lt()-1,7);continue;case 47:switch(L()){case 42:case 47:et(tr(Ve(N(),lt()),e,r,c),c);break;default:f+="/"}break;case 123*x:i[p++]=O(f)*A;case 125*x:case 59:case 0:switch(S){case 0:case 125:P=0;case 59+d:A==-1&&(f=u(f,/\f/g,"")),l>0&&O(f)-g&&et(l>32?Vt(f+";",n,r,g-1,c):Vt(u(f," ","")+";",n,r,g-2,c),c);break;case 59:f+=";";default:if(et(y=Jt(f,e,r,p,d,s,i,b,C=[],E=[],g,o),o),S===123)if(d===0)gt(f,e,y,y,C,o,g,i,E);else switch(m===99&&_(f,3)===110?100:m){case 100:case 108:case 109:case 115:gt(t,y,y,n&&et(Jt(t,y,y,0,0,s,i,b,s,C=[],g,E),E),s,E,g,i,n?C:E);break;default:gt(f,y,y,y,[""],E,0,i,E)}}p=d=l=0,x=A=1,b=f="",g=a;break;case 58:g=1+O(f),l=w;default:if(x<1){if(S==123)--x;else if(S==125&&x++==0&&qe()==125)continue}switch(f+=Mt(S),S*x){case 38:A=d>0?1:(f+="\f",-1);break;case 44:i[p++]=(O(f)-1)*A,A=1;break;case 64:L()===45&&(f+=$t(N())),m=L(),d=g=O(b=f+=Xe(lt())),S++;break;case 45:w===45&&O(f)==2&&(x=0)}}return o}function Jt(t,e,r,n,s,o,a,i,c,p,d,g){for(var m=s-1,l=s===0?o:[""],w=le(l),x=0,P=0,A=0;x<n;++x)for(var S=0,b=H(t,m+1,m=he(P=a[x])),C=t;S<w;++S)(C=de(P>0?l[S]+" "+b:u(b,/&\f/g,l[S])))&&(c[A++]=C);return xt(t,e,r,s===0?St:i,c,p,d,g)}function tr(t,e,r,n){return xt(t,e,r,fe,Mt(He()),H(t,2,-2),0,n)}function Vt(t,e,r,n,s){return xt(t,e,r,Lt,H(t,0,n),H(t,n+1,-1),n,s)}function me(t,e,r){switch(Ye(t,e)){case 5103:return h+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+t+t;case 4789:return rt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return h+t+rt+t+v+t+t;case 5936:switch(_(t,e+11)){case 114:return h+t+v+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return h+t+v+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return h+t+v+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return h+t+v+t+t;case 6165:return h+t+v+"flex-"+t+t;case 5187:return h+t+u(t,/(\w+).+(:[^]+)/,h+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return h+t+v+"flex-item-"+u(t,/flex-|-self/g,"")+(D(t,/flex-|baseline/)?"":v+"grid-row-"+u(t,/flex-|-self/g,""))+t;case 4675:return h+t+v+"flex-line-pack"+u(t,/align-content|flex-|-self/g,"")+t;case 5548:return h+t+v+u(t,"shrink","negative")+t;case 5292:return h+t+v+u(t,"basis","preferred-size")+t;case 6060:return h+"box-"+u(t,"-grow","")+h+t+v+u(t,"grow","positive")+t;case 4554:return h+u(t,/([^-])(transform)/g,"$1"+h+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,h+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+t+t;case 4200:if(!D(t,/flex-|baseline/))return v+"grid-column-align"+H(t,e)+t;break;case 2592:case 3360:return v+u(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,D(n.props,/grid-\w+-end/)})?~dt(t+(r=r[e].value),"span",0)?t:v+u(t,"-start","")+t+v+"grid-row-span:"+(~dt(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(t,/\d+/))+";":v+u(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?t:v+u(u(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,h+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(t)-1-e>6)switch(_(t,e+1)){case 109:if(_(t,e+4)!==45)break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+h+"$2-$3$1"+rt+(_(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~dt(t,"stretch",0)?me(u(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return u(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,a,i,c,p){return v+s+":"+o+p+(a?v+s+"-span:"+(i?c:+c-+o)+p:"")+t});case 4949:if(_(t,e+6)===121)return u(t,":",":"+h)+t;break;case 6444:switch(_(t,_(t,14)===45?18:11)){case 120:return u(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+h+(_(t,14)===45?"inline-":"")+"box$3$1"+h+"$2$3$1"+v+"$2box$3")+t;case 100:return u(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(t,"scroll-","scroll-snap-")+t}return t}function bt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function er(t,e,r,n){switch(t.type){case Me:if(t.children.length)break;case Le:case Lt:return t.return=t.return||t.value;case fe:return"";case pe:return t.return=t.value+"{"+bt(t.children,n)+"}";case St:if(!O(t.value=t.props.join(",")))return""}return O(r=bt(t.children,n))?t.return=t.value+"{"+r+"}":""}function rr(t){var e=le(t);return function(r,n,s,o){for(var a="",i=0;i<e;i++)a+=t[i](r,n,s,o)||"";return a}}function nr(t){return function(e){e.root||(e=e.return)&&t(e)}}function sr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Lt:t.return=me(t.value,t.length,r);return;case pe:return bt([F(t,{value:u(t.value,"@","@"+h)})],n);case St:if(t.length)return We(r=t.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(F(t,{props:[u(s,/:(read-\w+)/,":"+rt+"$1")]})),Y(F(t,{props:[s]})),Tt(t,{props:Zt(r,n)});break;case"::placeholder":Y(F(t,{props:[u(s,/:(plac\w+)/,":"+h+"input-$1")]})),Y(F(t,{props:[u(s,/:(plac\w+)/,":"+rt+"$1")]})),Y(F(t,{props:[u(s,/:(plac\w+)/,v+"input-$1")]})),Y(F(t,{props:[s]})),Tt(t,{props:Zt(r,n)});break}return""})}}var or={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},K=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",ye="active",ve="data-styled-version",It="6.1.8",Yt=`/*!sc*/
`,Wt=typeof window<"u"&&"HTMLElement"in window,ar=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),Et=Object.freeze([]),U=Object.freeze({});function ir(t,e,r){return r===void 0&&(r=U),t.theme!==r.theme&&t.theme||e||r.theme}var be=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ur=/(^-|-$)/g;function Xt(t){return t.replace(cr,"-").replace(ur,"")}var fr=/(a)(d)/gi,pt=52,Qt=function(t){return String.fromCharCode(t+(t>25?39:97))};function zt(t){var e,r="";for(e=Math.abs(t);e>pt;e=e/pt|0)r=Qt(e%pt)+r;return(Qt(e%pt)+r).replace(fr,"$1-$2")}var kt,we=5381,W=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Se=function(t){return W(we,t)};function pr(t){return zt(Se(t)>>>0)}function hr(t){return t.displayName||t.name||"Component"}function Nt(t){return typeof t=="string"&&!0}var Ce=typeof Symbol=="function"&&Symbol.for,xe=Ce?Symbol.for("react.memo"):60115,dr=Ce?Symbol.for("react.forward_ref"):60112,lr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ae={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mr=((kt={})[dr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kt[xe]=Ae,kt);function te(t){return("type"in(e=t)&&e.type.$$typeof)===xe?Ae:"$$typeof"in t?mr[t.$$typeof]:lr;var e}var yr=Object.defineProperty,vr=Object.getOwnPropertyNames,ee=Object.getOwnPropertySymbols,br=Object.getOwnPropertyDescriptor,wr=Object.getPrototypeOf,re=Object.prototype;function Ie(t,e,r){if(typeof e!="string"){if(re){var n=wr(e);n&&n!==re&&Ie(t,n,r)}var s=vr(e);ee&&(s=s.concat(ee(e)));for(var o=te(t),a=te(e),i=0;i<s.length;++i){var c=s[i];if(!(c in gr||r&&r[c]||a&&c in a||o&&c in o)){var p=br(e,c);try{yr(t,c,p)}catch{}}}}return t}function Z(t){return typeof t=="function"}function Ht(t){return typeof t=="object"&&"styledComponentId"in t}function B(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ne(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function st(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ft(t,e,r){if(r===void 0&&(r=!1),!r&&!st(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Ft(t[n],e[n]);else if(st(e))for(var n in e)t[n]=Ft(t[n],e[n]);return t}function qt(t,e){Object.defineProperty(t,"toString",{value:e})}function ot(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Sr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw ot(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(i,r[a])&&(this.groupSizes[e]++,i++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,a=s;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(Yt);return r},t}(),mt=new Map,wt=new Map,yt=1,ht=function(t){if(mt.has(t))return mt.get(t);for(;wt.has(yt);)yt++;var e=yt++;return mt.set(t,e),wt.set(e,t),e},Cr=function(t,e){yt=e+1,mt.set(t,e),wt.set(e,t)},xr="style[".concat(K,"][").concat(ve,'="').concat(It,'"]'),Ar=new RegExp("^".concat(K,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ir=function(t,e,r){for(var n,s=r.split(","),o=0,a=s.length;o<a;o++)(n=s[o])&&t.registerName(e,n)},Er=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Yt),s=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var c=i.match(Ar);if(c){var p=0|parseInt(c[1],10),d=c[2];p!==0&&(Cr(d,p),Ir(t,d,c[3]),t.getTag().insertRules(p,s)),s.length=0}else s.push(i)}}};function _r(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ee=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(i){var c=Array.from(i.querySelectorAll("style[".concat(K,"]")));return c[c.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(K,ye),n.setAttribute(ve,It);var a=_r();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},Rr=function(){function t(e){this.element=Ee(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var a=n[s];if(a.ownerNode===r)return a}throw ot(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Pr=function(){function t(e){this.element=Ee(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),$r=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),se=Wt,kr={isServer:!Wt,useCSSOMInjection:!ar},_e=function(){function t(e,r,n){e===void 0&&(e=U),r===void 0&&(r={});var s=this;this.options=R(R({},kr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Wt&&se&&(se=!1,function(o){for(var a=document.querySelectorAll(xr),i=0,c=a.length;i<c;i++){var p=a[i];p&&p.getAttribute(K)!==ye&&(Er(o,p),p.parentNode&&p.parentNode.removeChild(p))}}(this)),qt(this,function(){return function(o){for(var a=o.getTag(),i=a.length,c="",p=function(g){var m=function(A){return wt.get(A)}(g);if(m===void 0)return"continue";var l=o.names.get(m),w=a.getGroup(g);if(l===void 0||w.length===0)return"continue";var x="".concat(K,".g").concat(g,'[id="').concat(m,'"]'),P="";l!==void 0&&l.forEach(function(A){A.length>0&&(P+="".concat(A,","))}),c+="".concat(w).concat(x,'{content:"').concat(P,'"}').concat(Yt)},d=0;d<i;d++)p(d);return c}(s)})}return t.registerId=function(e){return ht(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(R(R({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new $r(s):n?new Rr(s):new Pr(s)}(this.options),new Sr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(ht(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(ht(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ht(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Nr=/&/g,Or=/^\s*\/\/.*$/gm;function Re(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Re(r.children,e)),r})}function Tr(t){var e,r,n,s=t===void 0?U:t,o=s.options,a=o===void 0?U:o,i=s.plugins,c=i===void 0?Et:i,p=function(m,l,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(e):m},d=c.slice();d.push(function(m){m.type===St&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Nr,r).replace(n,p))}),a.prefix&&d.push(sr),d.push(er);var g=function(m,l,w,x){l===void 0&&(l=""),w===void 0&&(w=""),x===void 0&&(x="&"),e=x,r=l,n=new RegExp("\\".concat(r,"\\b"),"g");var P=m.replace(Or,""),A=Qe(w||l?"".concat(w," ").concat(l," { ").concat(P," }"):P);a.namespace&&(A=Re(A,a.namespace));var S=[];return bt(A,rr(d.concat(nr(function(b){return S.push(b)})))),S};return g.hash=c.length?c.reduce(function(m,l){return l.name||ot(15),W(m,l.name)},we).toString():"",g}var Dr=new _e,Gt=Tr(),Pe=nt.createContext({shouldForwardProp:void 0,styleSheet:Dr,stylis:Gt});Pe.Consumer;nt.createContext(void 0);function oe(){return ue.useContext(Pe)}var jr=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=Gt);var a=n.name+o.hash;s.hasNameForId(n.id,a)||s.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,qt(this,function(){throw ot(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gt),this.name+e.hash},t}(),zr=function(t){return t>="A"&&t<="Z"};function ae(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;zr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var $e=function(t){return t==null||t===!1||t===""},ke=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!$e(o)&&(Array.isArray(o)&&o.isCss||Z(o)?n.push("".concat(ae(s),":"),o,";"):st(o)?n.push.apply(n,vt(vt(["".concat(s," {")],ke(o),!1),["}"],!1)):n.push("".concat(ae(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in or||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function M(t,e,r,n){if($e(t))return[];if(Ht(t))return[".".concat(t.styledComponentId)];if(Z(t)){if(!Z(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return M(s,e,r,n)}var o;return t instanceof jr?r?(t.inject(r,n),[t.getName(n)]):[t]:st(t)?ke(t):Array.isArray(t)?Array.prototype.concat.apply(Et,t.map(function(a){return M(a,e,r,n)})):[t.toString()]}function Fr(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Z(r)&&!Ht(r))return!1}return!0}var Gr=Se(It),Br=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Fr(e),this.componentId=r,this.baseHash=W(Gr,r),this.baseStyle=n,_e.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=B(s,this.staticRulesId);else{var o=ne(M(this.rules,e,r,n)),a=zt(W(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,i)}s=B(s,a),this.staticRulesId=a}else{for(var c=W(this.baseHash,n.hash),p="",d=0;d<this.rules.length;d++){var g=this.rules[d];if(typeof g=="string")p+=g;else if(g){var m=ne(M(g,e,r,n));c=W(c,m+d),p+=m}}if(p){var l=zt(c>>>0);r.hasNameForId(this.componentId,l)||r.insertRules(this.componentId,l,n(p,".".concat(l),void 0,this.componentId)),s=B(s,l)}}return s},t}(),Ne=nt.createContext(void 0);Ne.Consumer;var Ot={};function Lr(t,e,r){var n=Ht(t),s=t,o=!Nt(t),a=e.attrs,i=a===void 0?Et:a,c=e.componentId,p=c===void 0?function(C,E){var y=typeof C!="string"?"sc":Xt(C);Ot[y]=(Ot[y]||0)+1;var f="".concat(y,"-").concat(pr(It+y+Ot[y]));return E?"".concat(E,"-").concat(f):f}(e.displayName,e.parentComponentId):c,d=e.displayName,g=d===void 0?function(C){return Nt(C)?"styled.".concat(C):"Styled(".concat(hr(C),")")}(t):d,m=e.displayName&&e.componentId?"".concat(Xt(e.displayName),"-").concat(e.componentId):e.componentId||p,l=n&&s.attrs?s.attrs.concat(i).filter(Boolean):i,w=e.shouldForwardProp;if(n&&s.shouldForwardProp){var x=s.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;w=function(C,E){return x(C,E)&&P(C,E)}}else w=x}var A=new Br(r,m,n?s.componentStyle:void 0);function S(C,E){return function(y,f,V){var at=y.attrs,Te=y.componentStyle,De=y.defaultProps,je=y.foldedComponentIds,ze=y.styledComponentId,Fe=y.target,Ge=nt.useContext(Ne),Be=oe(),_t=y.shouldForwardProp||Be.shouldForwardProp,Kt=ir(f,Ge,De)||U,T=function(ct,Q,ut){for(var tt,G=R(R({},Q),{className:void 0,theme:ut}),Pt=0;Pt<ct.length;Pt+=1){var ft=Z(tt=ct[Pt])?tt(G):tt;for(var z in ft)G[z]=z==="className"?B(G[z],ft[z]):z==="style"?R(R({},G[z]),ft[z]):ft[z]}return Q.className&&(G.className=B(G.className,Q.className)),G}(at,f,Kt),it=T.as||Fe,X={};for(var j in T)T[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&T.theme===Kt||(j==="forwardedAs"?X.as=T.forwardedAs:_t&&!_t(j,it)||(X[j]=T[j]));var Ut=function(ct,Q){var ut=oe(),tt=ct.generateAndInjectStyles(Q,ut.styleSheet,ut.stylis);return tt}(Te,T),Rt=B(je,ze);return Ut&&(Rt+=" "+Ut),T.className&&(Rt+=" "+T.className),X[Nt(it)&&!be.has(it)?"class":"className"]=Rt,X.ref=V,ue.createElement(it,X)}(b,C,E)}S.displayName=g;var b=nt.forwardRef(S);return b.attrs=l,b.componentStyle=A,b.displayName=g,b.shouldForwardProp=w,b.foldedComponentIds=n?B(s.foldedComponentIds,s.styledComponentId):"",b.styledComponentId=m,b.target=n?s.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(E){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var V=0,at=y;V<at.length;V++)Ft(E,at[V],!0);return E}({},s.defaultProps,C):C}}),qt(b,function(){return".".concat(b.styledComponentId)}),o&&Ie(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function ie(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var ce=function(t){return Object.assign(t,{isCss:!0})};function Mr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Z(t)||st(t))return ce(M(ie(Et,vt([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?M(n):ce(M(ie(n,e)))}function Bt(t,e,r){if(r===void 0&&(r=U),!e)throw ot(1,e);var n=function(s){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(e,r,Mr.apply(void 0,vt([s],o,!1)))};return n.attrs=function(s){return Bt(t,e,R(R({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Bt(t,e,R(R({},r),s))},n}var Oe=function(t){return Bt(Lr,t)},Yr=Oe;be.forEach(function(t){Yr[t]=Oe(t)});export{Yr as u};