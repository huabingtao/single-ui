"use strict";(self.webpackChunkreact_single_ui=self.webpackChunkreact_single_ui||[]).push([[288],{40288:function(sa,Pe,C){C.r(Pe),C.d(Pe,{Badge:function(){return ta},Breadcrumb:function(){return Kn},BreadcrumbItem:function(){return Qn},Button:function(){return ln},Icon:function(){return U},Image:function(){return we},Input:function(){return Mn},Loading:function(){return nn},Mask:function(){return Fe},Modal:function(){return zn},Progress:function(){return Be},Switch:function(){return $n},Toast:function(){return Tn},TreeSelect:function(){return ea},Uploader:function(){return ia}});var F=C(75271),Oe=C(82187),L=C.n(Oe),Ue=C(26068),S=C.n(Ue),Me=C(67825),Q=C.n(Me),We=C(6024),Ve=C(31759),He=C.n(Ve),N="sn";function be(i){return Array.isArray(i)?i:[i]}var Ze=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function Ge(i){return Ze.test(i)}function Xe(i){return i.isImage?!0:i.file&&i.file.type?i.file.type.indexOf("image")===0:i.url?Ge(i.url):typeof i.content=="string"?i.content.indexOf("data:image")===0:!1}function ye(i){return typeof i=="function"}function Je(i){return i!==null&&He()(i)==="object"}function Ke(i){return Je(i)&&ye(i.then)&&ye(i.catch)}function Ie(i,e){return be(i).some(function(n){return n.file?ye(e)?e(n.file):n.file.size>e:!1})}function Qe(i,e){var n=[],t=[];return i.forEach(function(a){Ie(a,e)&&t.push(a),n.push(a)}),{valid:n,invalid:t}}var r=C(52676),Ye=["className","icon"],qe=function(e){var n=e.className,t=e.icon,a=Q()(e,Ye),l=t,c=L()("".concat(N,"-icon"),n);return(0,r.jsx)(We.G,S()({icon:l,className:c},a))},U=qe,_e=C(24168),en=C(36617);_e.library.add(en.fas);var Te=function(e){var n=e.children,t=e.type,a=e.textSize,l=e.className,c=e.textColor,h=c===void 0?"12px":c,o=e.color,s=o===void 0?"#000":o,d=e.size,u=d===void 0?"lg":d,g=L()("single-loading",l),b=t==="spinner"?"spinner":"circle-notch";return(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)(U,{icon:b,color:s,size:u,spin:!0}),(0,r.jsx)("span",{style:{fontSize:a+"px",color:h},children:n})]})};Te.defaultProps={textSize:"12",type:"spinner"};var nn=Te,an=C(82092),p=C.n(an),tn=C(77762),rn=["btnType","block","disabled","size","children","className","href","activeClassName","type"],da=function(i){return i.Large="lg",i.Small="sm",i}({}),ce=function(i){return i.Primary="primary",i.Default="default",i.Danger="danger",i.Link="link",i}({}),De=function(e){var n=e.btnType,t=n===void 0?ce.Default:n,a=e.block,l=a===void 0?!1:a,c=e.disabled,h=c===void 0?!1:c,o=e.size,s=e.children,d=e.className,u=e.href,g=e.activeClassName,b=e.type,x=b===void 0?"button":b,f=Q()(e,rn),v=N+"-btn",P=L()("".concat(v),d,p()(p()(p()(p()({},"".concat(v,"-").concat(t),t),"".concat(v,"-").concat(o),o),"".concat(v,"-block"),l),"disabled",t===ce.Link&&h));return t===ce.Link?(0,r.jsx)("a",S()(S()({className:P,href:u},f),{},{children:s})):(0,r.jsx)(tn.Z,{activeClassName:"".concat(v,"-active ").concat(g),children:(0,r.jsx)("button",S()(S()({className:P,type:x},f),{},{disabled:h,children:s}))})},ln=De,on=De,cn=C(25298),sn=C.n(cn),dn=C(17069),un=C.n(dn),vn=C(62657),se=C.n(vn),fn=C(21742),hn=C.n(fn),mn=C(83136),gn=C.n(mn),de=C(30967),Cn=!!de.createPortal,xn=document.createElement("div");document.body.appendChild(xn);var bn=function(i){hn()(n,i);var e=gn()(n);function n(t){var a;return sn()(this,n),a=e.call(this,t),p()(se()(a),"container",void 0),p()(se()(a),"maskDom",function(){return(0,r.jsx)("div",{className:"".concat(N,"-mask"),onClick:a.props.onClick,children:a.props.children})}),p()(se()(a),"getContainer",function(){if(!a.container){var l=document.createElement("div"),c="".concat(N,"-container-").concat(new Date().getTime());l.setAttribute("id",c),document.body.appendChild(l),a.container=l}return a.container}),p()(se()(a),"preventDefault",function(l){l.preventDefault()}),a}return un()(n,[{key:"render",value:function(){var a=this.props.visible;return Cn&&a?(document.body.addEventListener("touchmove",this.preventDefault,{passive:!1}),document.body.addEventListener("scroll",this.preventDefault,{passive:!1}),de.createPortal(this.maskDom(),this.getContainer())):(document.body.removeEventListener("touchmove",this.preventDefault,!1),document.body.removeEventListener("scroll",this.preventDefault,!1),null)}}]),n}(F.Component),Fe=bn,yn=C(48305),X=C.n(yn),jn=C(78760),pn=function(e){var n=(0,F.useState)(!0),t=X()(n,2),a=t[0],l=t[1],c=(0,F.useState)(!1),h=X()(c,2),o=h[0],s=h[1],d=e.alt,u=e.width,g=u===void 0?"90px":u,b=e.height,x=b===void 0?"90px":b,f=e.src,v=e.fit,P=v===void 0?"fill":v,A=e.radius,R=e.round,B=R===void 0?!1:R,y=e.onLoad,w=e.onError,I=e.showLoading,O=I===void 0?!1:I,k=e.showError,z=e.lazyLoad;(0,F.useEffect)(function(){f||s(!0)},[]);var W=L()("".concat(N,"-image-wrap"),p()({},"".concat(N,"-image-wrap-round"),B)),H={width:g,height:x,borderRadius:B?"50%":A},Z=function(){if(a&&O)return(0,r.jsx)("div",{className:"".concat(N,"-image-loading"),children:(0,r.jsx)(U,{icon:"image",color:"#969799",size:"3x"})});if(o&&k)return(0,r.jsx)("div",{className:"".concat(N,"-image-error"),children:(0,r.jsx)(U,{icon:"sad-tear",color:"#969799",size:"3x"})})},$=function(){if(!(!f||o)){var K=function(oe){l(!1),y&&y(oe)},Ce=function(oe){s(!0),w&&w(oe)},le={alt:d,src:f,style:{objectFit:P}};return z?(0,r.jsx)(jn.ZP,{scroll:!0,offset:-20,children:(0,r.jsx)("img",S()({className:"".concat(N,"-image-img"),onError:Ce,onLoad:K},le))}):(0,r.jsx)("img",S()({className:"".concat(N,"-image-img"),onError:Ce,onLoad:K},le))}};return(0,r.jsxs)("div",{style:H,className:W,children:[Z(),$()]})},we=pn,Sn=C(79236).Z,J=null,ue,Nn=document.createElement("div");document.body.appendChild(Nn);var q=N+"-toast";function Pn(i,e){var n=L()(p()(p()({},"".concat(q,"-mask"),i),"".concat(q,"-nomask"),!i));Sn.newInstance({prefixCls:"".concat(q),style:{},transitionName:"".concat(q,"-fade"),className:n},function(t){return e&&e(t)})}var ee=function(e){var n=e.content,t=e.mask,a=e.duration,l=e.onClose,c=e.type,h={info:"",success:"check-circle",fail:"times-circle",loading:"spinner"},o=h[c];ue=!1,Pn(t,function(s){if(s){if(J&&(J.destroy(),J=null),ue){s.destroy(),ue=!1;return}J=s,s.notice({content:(0,r.jsxs)("div",{className:"".concat(q,"-content"),role:"alert","aria-live":"assertive",children:[!!o&&(0,r.jsx)("div",{className:"".concat(q,"-icon-wrap"),children:(0,r.jsx)(U,{icon:o,size:"2x",spin:c==="loading"})}),(0,r.jsx)("div",{children:n})]}),duration:a,onClose:function(){l&&l(),s.destroy(),s=null,J=null}})}})},In={show:function(e,n,t,a,l){var c={content:e,type:n,mask:t,duration:a,onClose:l};return ee(c)},info:function(e,n,t,a){var l={content:e,type:"info",mask:n,duration:t,onClose:a};return ee(l)},success:function(e,n,t,a){var l={content:e,type:"success",mask:n,duration:t,onClose:a};return ee(l)},fail:function(e,n,t,a){var l={content:e,type:"fail",mask:n,duration:t,onClose:a};return ee(l)},loading:function(e,n,t,a){var l={content:e,type:"loading",mask:n,duration:t,onClose:a};return ee(l)},hidden:function(){J?(J.destroy(),J=null):ue=!0}},Tn=In,Dn=["visible"],ve=N+"-modal",Fn=function(e){var n=e.visible,t=n===void 0?!1:n,a=Q()(e,Dn),l=function(o,s){var d={};if(o.style&&(d=o.style,typeof d=="string")){var u={cancel:{},default:{},destructive:{color:"red"}};d=u[d]||{}}var g=function(f){f.preventDefault(),o.onPress&&o.onPress()},b=S()({flex:1,padding:0,fontSize:"18px",height:"50px",lineHeight:"50px",textOverflow:"ellipsis",whiteSpace:"nowrap"},d);return(0,r.jsx)(on,{style:S()({},b),onClick:g,btnType:ce.Link,children:o.text||"Button"},s)},c=function(o){var s=o.title,d=o.message,u=o.footer;return(0,r.jsxs)("div",{className:"".concat(ve),children:[(0,r.jsx)("div",{className:"".concat(ve,"-header"),children:s}),(0,r.jsx)("div",{className:"".concat(ve,"-body"),children:d}),(0,r.jsx)("div",{className:"".concat(ve,"-footer"),children:u==null?void 0:u.map(function(g,b){return l(g,b)})})]})};return(0,r.jsx)(Fe,S()(S()({visible:t},a),{},{children:(0,r.jsx)(c,S()({},a))}))},je=Fn,ze=C(32699),pe=C.n(ze);function wn(i){var e=i.title,n=i.message,t=i.footer,a=document.createElement("div");document.body.appendChild(a);var l=!1;function c(){de.unmountComponentAtNode(a),a&&a.parentNode&&a.parentNode.removeChild(a)}var h="";if(t){var o=pe().cloneDeep(t);h=o.map(function(s){var d=s.onPress||function(){};return s.onPress=function(){if(!l){var u=d();u&&u.then?u.then(function(){l=!0,c()}).catch(function(){}):(l=!0,c())}},s})}de.render((0,r.jsx)(je,{visible:!0,title:e,message:n,footer:h}),a)}je.alert=wn;var zn=je,Bn=["value","disabled","size","activeColor","inactiveColor"],ne=N+"-switch",Ln=function(e){var n=e.value,t=n===void 0?!1:n,a=e.disabled,l=a===void 0?!1:a,c=e.size,h=e.activeColor,o=e.inactiveColor,s=Q()(e,Bn),d=t,u=function(){l||(d=!t,e.onClick&&e.onClick(d))},g=L()("".concat(ne),p()(p()(p()({},"".concat(ne,"-disabled"),l),"".concat(ne,"-active"),d),"".concat(ne,"-").concat(c),c)),b={};return(h||o)&&(b={backgroundColor:d?h:o}),(0,r.jsx)("div",S()(S()({className:g,style:b},s),{},{onClick:u,children:(0,r.jsx)("div",{className:"".concat(ne,"-round")})}))},$n=Ln,kn=["onBlur","onFocus","onChange"],En=function(e){var n=e.onBlur,t=e.onFocus,a=e.onChange,l=Q()(e,kn),c=(0,F.useRef)(null),h=function(u){var g=u.target.value;n&&n(g)},o=function(u){var g=u.target.value;t&&t(g)},s=function(u){var g=u.target.value.trim();a&&a(g)};return(0,r.jsx)("input",S()({ref:c,onChange:s,onBlur:h,onFocus:o},l))},Rn=En,An=["type","label","required","disabled","readonly","clearble","defaultValue","onChange","onFocus","onBlur","onClear","value"],On=function(e){var n="";switch(e){case"phone":n="tel";break;case"password":n="password";break;case"number":n="number";break;default:n=e}return n},fe=N+"-input-wrap",Un=function(e){var n=e.type,t=n===void 0?"text":n,a=e.label,l=e.required,c=l===void 0?!1:l,h=e.disabled,o=h===void 0?!1:h,s=e.readonly,d=s===void 0?!1:s,u=e.clearble,g=u===void 0?!1:u,b=e.defaultValue,x=e.onChange,f=e.onFocus,v=e.onBlur,P=e.onClear,A=e.value,R=Q()(e,An),B=L()("".concat(fe),p()(p()(p()({},"".concat(fe,"-disabled"),o),"".concat(fe,"-required"),c),"".concat(fe,"-readonly"),d)),y=(0,F.useState)(A||""),w=X()(y,2),I=w[0],O=w[1];(0,F.useEffect)(function(){O(A||"")},[e.value]);var k=function(E){if(t==="phone"){var K;E=(K=E)===null||K===void 0?void 0:K.replace(/\D/g,"")}O(E||""),x&&x(E)},z=function(E){f&&f(E)},W=function(E){v&&v(E)},H=function(){O(""),P&&P()},Z=On(t);return(0,r.jsxs)("div",{className:B,children:[(0,r.jsx)("div",{className:"".concat(N,"-input-label"),children:a}),(0,r.jsx)(Rn,S()({className:"".concat(N,"-input-self"),onChange:k,onFocus:z,onBlur:W,readOnly:d,disabled:o,type:Z,value:I},R)),!o&&!d&&g&&I&&(0,r.jsx)("div",{className:"".concat(N,"-input-clear"),children:(0,r.jsx)(U,{icon:"times-circle",onClick:H})})]})},Mn=Un,Wn=C(15558),Se=C.n(Wn),Vn=C(76246),ae=N+"-progress",Hn=function(e){var n=e.children,t=e.percent,a=e.fixed,l=e.unfilled,c=e.color,h=e.trackColor,o=e.showPivot,s=e.pivoteText,d=e.textColor,u=e.pivotColor,g=e.inactive,b=e.wrapStyle,x=e.percentStyle,f,v,P,A=L()(ae,"".concat(ae,"-wrap"),p()({},"".concat(ae,"-wrap-fixed"),a)),R=l?{background:"transparent"}:{background:h};b=S()(S()({},R),b);var B=L()("".concat(ae,"-bar"));x=S()({width:"".concat(t,"%"),background:g?"rgb(202, 202, 202)":c},x);var y=function(){f&&console.log("barRef.style.width:",f.style.width);var $=s||"".concat(t,"%");if(!o)return"";var E={color:d,background:g?"rgb(202, 202, 202)":u,left:"".concat(W,"px")};return(0,r.jsx)("span",{ref:O,style:E,className:"".concat(ae,"-bar-pivot"),children:$})},w=function($){v=$},I=function($){f=$},O=function($){P=$},k=(0,F.useState)(0),z=X()(k,2),W=z[0],H=z[1];return(0,F.useEffect)(function(){setTimeout(function(){f&&v&&P&&H((v.offsetWidth-P.offsetWidth)*+t/100||f.offsetWidth)},10)},[]),(0,r.jsx)("div",{ref:w,className:A,style:b,role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,children:(0,r.jsx)("div",{className:B,style:x,ref:I,children:y()})})},Be=Hn,te="".concat(N,"-uploader-item"),Zn=function(e){var n=e.item,t=e.imageFit,a=e.previewSize,l=e.deletable,c=e.index,h=e.beforeDelete,o=e.name,s=e.onDelete,d=function(){if(h){var v=h.apply(null,[n,{name:o,index:c}]);Ke(v)?v.then(function(P){P&&s&&s()}):v&&s&&s()}else s&&s()},u=function(){if(Xe(n))return(0,r.jsx)(we,{fit:t,width:a||"90px",height:a||"90px",src:n.content||n.url||""})},g=function(){if(l)return(0,r.jsx)("div",{className:"".concat(te,"-delete"),onClick:d,children:(0,r.jsx)("div",{className:"".concat(te,"-delete-icon"),children:(0,r.jsx)(U,{size:"2x",icon:"times"})})})},b=function(){var v=n.status,P=n.message;if(!(!v||v==="done"))return(0,r.jsxs)("div",{className:"".concat(te,"-mask"),children:[v==="loading"&&(0,r.jsx)(U,{size:"lg",icon:"spinner",spin:!0}),v==="failed"&&(0,r.jsx)(U,{size:"lg",icon:"exclamation-circle"}),(0,r.jsx)("span",{children:P})]})},x=function(){var v=n.percent,P=n.status;if(P==="uploading")return(0,r.jsx)("div",{className:"".concat(te,"-progress-wrap"),children:(0,r.jsx)(Be,{percent:v||0,wrapStyle:{height:"8px"}})})};return(0,r.jsxs)("div",{className:te,children:[u(),g(),b(),x()]})},Gn=Zn,Le=(0,F.createContext)({length:0}),Xn=N+"-breadcrmb",Jn=function(e){var n=e.separator,t=e.children,a=e.inactiveColor,l=e.activeColor,c=e.onSelect,h=function(g){c&&c(g)},o={length:(t==null?void 0:t.length)||0,separator:"/",inactiveColor:a,activeColor:l,onSelect:h},s=L()(Xn),d=function(){return F.Children.map(t,function(g,b){var x=g;if(x.type.displayName==="TabBarItem")return F.cloneElement(x,{index:b});console.error("Warning: Breadcrumb has a child which is not BreadcrumbItem")})};return(0,r.jsx)("ul",{className:s,children:(0,r.jsx)(Le.Provider,{value:o,children:d()})})},Kn=Jn,he=N+"-breadcrmb-item",$e=function(e){var n=e.index,t=e.disabled,a=e.children,l=L()(he,p()({},"".concat(he,"-disabled"),t)),c=(0,F.useContext)(Le),h=function(){t||c.onSelect&&c.onSelect(n)},o={color:c.length-1===n?c.activeColor:c.inactiveColor};return(0,r.jsxs)("li",{className:l,onClick:h,style:o,children:[(0,r.jsx)("span",{className:"".concat(he,"-link"),children:a}),(0,r.jsx)("span",{className:"".concat(he,"-separator"),children:c.length-1!==n&&c.separator})]})};$e.displayName="TabBarItem";var Qn=$e,re=N+"-tree-select",ke=function(){var e=(0,F.useContext)(Ne),n=e.data,t=e.index,a=e.onChangeTree,l=e.activeColor,c=(0,F.useState)(t||0),h=X()(c,2),o=h[0],s=h[1],d=function(f,v){f.disabled||(s(v),a&&a(f,v))},u=function(f,v){return L()("".concat(re,"-sidebar-item"),p()(p()({},"".concat(re,"-sidebar-item-active"),o===v),"".concat(re,"-sidebar-item-disabled"),f.disabled))},g=function(f){return{backgroundColor:l&&f===o?l:""}},b=function(){return!n||!n.length?(console.warn("The data is not a Array or the length of the data is 0"),""):n.map(function(f,v){return(0,r.jsxs)("li",{onClick:d.bind(void 0,f,v),className:u(f,v),children:[(0,r.jsx)("span",{style:g(v),className:"".concat(re,"-sidebar-item-line")}),f.label]},v)})};return(0,r.jsx)("ul",{className:"".concat(re,"-sidebar"),children:b()})};ke.defaultProps={};var Yn=ke,me=N+"-tree-select-content",Ee=function(e){var n=(0,F.useContext)(Ne),t=n.data,a=n.index,l=a===void 0?0:a,c=n.activeId,h=n.multiple,o=n.onChangeTreeItem,s=n.activeColor,d=n.inactiveColor,u=[];t&&t[l]&&t[l].children&&(u=t[l].children);var g=(0,F.useState)(c),b=X()(g,2),x=b[0],f=b[1],v=function(y,w){if(!y.disabled){var I=y.value;if(x!=null&&x.includes(I)){var O=x.indexOf(I),k=pe().cloneDeep(x);k.splice(O,1),f(k),o&&o(y,k)}else if(h){var z=pe().cloneDeep(x);z==null||z.push(I),f(z),o&&o(y,z)}else f([I]),o&&o(y,I)}},P=function(y,w){var I=L()("".concat(me,"-item"),p()(p()({},"".concat(me,"-item-active"),x.includes(y.value)),"".concat(me,"-item-disabled"),y.disabled));return I},A=function(y){return s||d?{color:x.includes(y)?s:d||""}:{}},R=function(){return u.map(function(y,w){var I=function(k){return x.includes(k.value)?(0,r.jsx)(U,{icon:"check"}):""};return(0,r.jsxs)("li",{className:P(y,w),style:A(y.value),onClick:v.bind(void 0,y,w),children:[(0,r.jsx)("span",{children:y.label}),(0,r.jsx)("span",{children:I(y)})]},w)})};return(0,r.jsx)("ul",{className:me,children:R()})};Ee.displayName="TreeSelectItem";var qn=Ee,Ne=(0,F.createContext)({multiple:!1,data:[]}),_n=N+"-tree-select",Re=function(e){var n=e.data,t=e.onChangeTree,a=e.onChangeTreeItem,l=e.inactiveColor,c=e.activeColor,h=e.index,o=h===void 0?0:h,s=e.activeId,d=s===void 0?[]:s,u=e.multiple,g=e.height,b=g===void 0?"300px":g,x=(0,F.useState)(o||0),f=X()(x,2),v=f[0],P=f[1],A=function(w,I){a&&a(w,I)},R=function(w,I){P(I),t&&t(w,I)},B={inactiveColor:l,activeColor:c,data:n,multiple:u,onChangeTreeItem:A,onChangeTree:R,index:v,activeId:Array.isArray(d)?d:[d]};return(0,r.jsx)("div",{className:_n,style:{height:b},children:(0,r.jsxs)(Ne.Provider,{value:B,children:[(0,r.jsx)(Yn,{}),(0,r.jsx)(qn,{})]})})};Re.defaultProps={};var ea=Re,na=["children","color","dot","max","content","size","fixed","style"],ie=N+"-badge",aa=function(e){var n=e.children,t=e.color,a=e.dot,l=a===void 0?!1:a,c=e.max,h=c===void 0?99:c,o=e.content,s=e.size,d=e.fixed,u=e.style,g=Q()(e,na),b=S()({backgroundColor:t},u);o&&(o=Number(o)?Number(o):o);var x=function(){return l?"":typeof o=="number"&&o>h?"".concat(h,"+"):o},f=L()("".concat(ie,"-wrap")),v=L()(ie,p()(p()(p()({},"".concat(ie,"-dot-large"),l&&s==="lg"),"".concat(ie,"-fixed"),typeof o=="number"||d||l),"".concat(ie,"-dot"),l));return(0,r.jsxs)("div",{className:f,children:[n,(o||l)&&(0,r.jsx)("sup",S()(S()({className:v,style:S()({},b)},g),{},{children:x()}))]})},ta=aa,ge="".concat(N,"-uploader"),ra=function(e){var n=(0,F.useRef)(null),t=e.multiple,a=t===void 0?!0:t,l=e.disabled,c=l===void 0?!1:l,h=e.customHeaer,o=e.previewSize,s=e.imageFit,d=s===void 0?"fill":s,u=e.maxCount,g=e.deletable,b=g===void 0?!0:g,x=e.name,f=e.customFileName,v=e.maxSize,P=e.accept,A=P===void 0?"image/*":P,R=e.action,B=e.onOversize,y=e.onChange,w=e.beforeUpload,I=e.onRemove,O=(0,F.useState)(e.fileList||[]),k=X()(O,2),z=k[0],W=k[1],H=function(m,T){W(function(j){return j.map(function(D){return D.uid===m.uid?S()(S()({},D),T):D})})},Z=function(m){m.forEach(function(T){$(T,m)})},$=function(m,T){var j,D={uid:Date.now()+"upload-file",file:m.file,status:"",message:"",content:m.content};if(W(function(G){return[].concat(Se()(G),[D])}),!!m.file){var V=new FormData;V.append(f||((j=m.file)===null||j===void 0?void 0:j.name),m.file),Vn.Z.post(R,V,{headers:S()({"Content-Type":"multipart/form-data"},h),onUploadProgress:function(_){var Y=Math.round(_.loaded*100/_.total)||0;H(D,{percent:Y,status:"uploading"})}}).then(function(G){y&&y(m.file,T,G),H(D,{status:"done"})}).catch(function(G){y&&y(m.file,T,G),H(D,{status:"failed",message:"\u4E0A\u4F20\u5931\u8D25"})})}},E=function(m,T){return(0,r.jsx)(Gn,{item:m,imageFit:d,index:T,previewSize:o,beforeDelete:m.beforeDelete,deletable:b,name:x,onDelete:function(){K(m,T)}},T)},K=function(m,T){var j=z.slice(0),D=j.splice(T,1);W(j),I&&I(D[0])},Ce=function(){return z.map(E)},le=function(m){return new Promise(function(T){var j=new FileReader;j.onload=function(D){T(D.target.result)},j.readAsDataURL(m)})},xe=function(m){if(oe(),v&&Ie(m,v))if((0,ze.isArray)(m)){var T=Qe(m,v),j=T.valid,D=T.invalid;m=j,B&&B(D)}else{B&&B(be(m));return}if(m=be(m),R){if(!m.length)return;Z(m)}else W([].concat(Se()(z),Se()(m)))},oe=function(){n!=null&&n.current&&(n.current.value="")},la=function(m){if(Array.isArray(m)){if(u){var T=+u-z.length;m.length>T&&(m=m.slice(0,T))}Promise.all(m.map(function(j){return le(j)})).then(function(j){var D=m.map(function(V,G){var _={uid:Date.now()+"upload-file",file:V,status:"",message:""};if(j[G]&&(_.content=j[G]),w){var Y=w(V);if(!Y)return!1;if(Y&&Y instanceof Promise)Y.then(function(Ae){return Ae}).catch(function(Ae){});else if(Y)return _}return _});D=D.filter(function(V){return V}),D.length&&xe(D)})}else le(m).then(function(j){if(u){var D=+u-z.length;if(D<=0)return}var V={uid:Date.now()+"upload-file",file:m,status:"",message:""};j&&(V.content=j),xe(V)})},oa=function(m){var T=m.target,j=T.files;if(!(c||!j||!j.length)){var D=j.length===1?[j[0]]:[].slice.call(j);la(D)}},ca=function(){var m=function(){return(0,r.jsx)("input",{ref:n,type:"file",accept:A,className:"".concat(ge,"-input"),capture:!0,multiple:a,disabled:c,onChange:oa})},T=L()("".concat(ge,"-button"),p()({},"".concat(ge,"-button-disabled"),c));return(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)(U,{icon:"camera"}),m()]})};return(0,r.jsxs)("div",{className:ge,children:[Ce(),ca()]})},ia=ra}}]);
