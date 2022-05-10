(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[29],{282:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),s=a(11),c=a(4),o=a(1),i=a(12),u=a(6),l=a(30),d=a(27),p=a(31),b=a(66),f=a.n(b),j=function(e,t){switch(t.type){case"enterValue":return t.value.length>400?Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t.field,Object(p.a)(Object(p.a)({},e[t.field]),{},{errorMsg:"Max Characters length is 400 !!"}))):Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t.field,{errorMsg:"",value:t.value}));case"uploadPhoto":return t.value.size>1e7?Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t.field,{value:"",URL:"",errorMsg:"Image size is greater than 10Mb!"})):Object(p.a)(Object(p.a)({},e),{},Object(d.a)({photoChanged:"yes"},t.field,{value:t.value,URL:URL.createObjectURL(t.value),errorMsg:""}));case"removePhoto":return Object(p.a)(Object(p.a)({},e),{},{photoChanged:"yes",photo:Object(p.a)(Object(p.a)({},e.photo),{},{URL:"",value:"",errorMsg:""})});case"blurPhone":var a=f.a.isMobilePhone(e.phone_number.value);if(!e.phone_number.value||a)return Object(p.a)(Object(p.a)({},e),{},{phone_number:Object(p.a)(Object(p.a)({},e.phone_number),{},{errorMsg:""})});if(!a)return Object(p.a)(Object(p.a)({},e),{},{phone_number:Object(p.a)(Object(p.a)({},e.phone_number),{},{errorMsg:"Invalid Phone number"})});break;case"successGetMyData":return Object(p.a)(Object(p.a)({},e),{},{getMyDataResult:t.data,first_name:Object(p.a)(Object(p.a)({},e.first_name),{},{value:t.data.first_name}),last_name:Object(p.a)(Object(p.a)({},e.last_name),{},{value:t.data.last_name}),phone_number:Object(p.a)(Object(p.a)({},e.phone_number),{},{value:t.data.phone_number}),address:Object(p.a)(Object(p.a)({},e.address),{},{value:t.data.address}),photo:t.data.photo?Object(p.a)(Object(p.a)({},e.photo),{},{URL:URL.createObjectURL(new Blob([new Uint8Array(t.data.photo.data)]))}):e.photo,isLoadingMyData:!1,responseError:""});case"validate":if(e.isUpdating)return e;if(!e.first_name.value||!e.last_name.value||!e.address.value||!e.phone_number.value)return Object(p.a)(Object(p.a)({},e),{},{missingInput:!0});if(e.photo.errorMsg||e.phone_number.errorMsg||e.address.errorMsg)return Object(p.a)(Object(p.a)({},e),{},{missingInput:!1});var r=new FormData;return r.append("first_name",e.first_name.value),r.append("last_name",e.last_name.value),r.append("phone_number",e.phone_number.value),r.append("address",e.address.value),r.append("photoChanged",e.photoChanged),e.photo.value&&r.append("photo",e.photo.value),Object(p.a)(Object(p.a)({},e),{},{dataToUpdate:r,isUpdating:!0,missingInput:!1,responseError:""});case"successUpdate":return Object(p.a)(Object(p.a)({},e),{},{isUpdating:!1,updateResult:t.data});case"failure":return Object(p.a)(Object(p.a)({},e),{},{isLoadingMyData:!1,isUpdating:!1,responseError:t.error});case"errorModalExit":return Object(p.a)(Object(p.a)({},e),{},{responseError:""})}},m=function(e){var t=Object(o.useReducer)(j,e),a=Object(c.a)(t,2);return[a[0],a[1]]},h=a(38),O=a(33),v=a(0),g={isLoadingMyData:!0,getMyDataResult:null,responseError:"",first_name:{value:"",errorMsg:""},last_name:{value:"",errorMsg:""},address:{value:"",errorMsg:""},phone_number:{value:"",errorMsg:""},photo:{URL:"",value:"",errorMsg:""},missingInput:!1,isUpdating:!1,dataToUpdate:null,updateResult:"",photoChanged:"no"};t.default=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],d=Object(l.a)(),p=Object(o.useContext)(i.a),b=Object(o.useContext)(u.a).setPageIsLoading,f=m(g),j=Object(c.a)(f,2),x=j[0],y=j[1];return Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d("".concat("https://pet-verse-app.herokuapp.com/","users/me"),"GET",null,{Authorization:"Bearer ".concat(p.token)});case 3:a=t.sent,e&&a&&y({type:"successGetMyData",data:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&y({type:"failure",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){b(!1),e=!1}}),[p.token,y,d,b]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d("".concat("https://pet-verse-app.herokuapp.com/","users/me"),"PATCH",x.dataToUpdate,{Authorization:"Bearer ".concat(p.token)});case 3:a=t.sent,e&&a&&y({type:"successUpdate",data:a.result}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&y({type:"failure",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return x.isUpdating&&t(),function(){b(!1),e=!1}}),[p.token,y,d,b,x.dataToUpdate,x.isUpdating]),Object(o.useEffect)((function(){b(x.isLoadingMyData||x.isUpdating)}),[x.isLoadingMyData,x.isUpdating,b]),Object(v.jsxs)(v.Fragment,{children:[x.responseError&&Object(v.jsx)(O.a,{modalClass:"error",header:"Oops!!",body:x.responseError,dispatch:y,refresh:!0}),x.updateResult&&Object(v.jsx)(O.a,{modalClass:"success",header:"Success!!",body:x.updateResult,dispatch:y,refresh:!0}),Object(v.jsx)("h4",{children:"Public Profile"}),Object(v.jsxs)("form",{className:"profile-data flex-col gap-24p",children:[Object(v.jsxs)("div",{className:"change-pic flex-col gap-8p",children:[x.photo.errorMsg&&Object(v.jsx)(h.a,{class:"error-msg",style:{left:0,top:0,margin:0},msg:x.photo.errorMsg}),Object(v.jsx)("img",{src:x.photo.URL?x.photo.URL:"/media/imgs/avatar.jpg",alt:"avatar"}),Object(v.jsxs)("div",{className:"change-pic-wrapper",children:[Object(v.jsxs)("button",{onClick:function(){return r((function(e){return!e}))},type:"button",className:"btn-rec",children:[Object(v.jsx)("i",{className:"fas fa-pencil-alt"})," Edit"]}),a&&Object(v.jsxs)("div",{className:"change-pic-list flex-col gap-12p",children:[Object(v.jsxs)("label",{htmlFor:"profile_photo",children:["Press to upload",Object(v.jsx)("i",{className:"fas fa-upload"})]}),Object(v.jsx)("input",{type:"file",name:"photo",id:"profile_photo",onChange:function(e){if(r(!1),0!==e.currentTarget.files.length)return y({type:"uploadPhoto",field:"photo",value:e.currentTarget.files[0]})},accept:".png, .jpg, .jpeg"}),Object(v.jsx)("p",{onClick:function(){r(!1),y({type:"removePhoto"})},children:"Remove Photo"})]})]})]}),Object(v.jsxs)("div",{className:"inputs-wrapper flex-col gap-16p",children:[Object(v.jsxs)("div",{className:"input-wrapper",children:[Object(v.jsx)("label",{htmlFor:"first_name",children:"First Name:* "}),Object(v.jsx)("input",{type:"text",name:"firstName",id:"first_name",value:x.first_name.value,onChange:function(e){y({type:"enterValue",field:"first_name",value:e.currentTarget.value})}})]}),Object(v.jsxs)("div",{className:"input-wrapper",children:[Object(v.jsx)("label",{htmlFor:"last_name",children:"Last Name:* "}),Object(v.jsx)("input",{type:"text",name:"lastName",id:"last_name",value:x.last_name.value,onChange:function(e){y({type:"enterValue",field:"last_name",value:e.currentTarget.value})}})]}),Object(v.jsxs)("div",{className:"input-wrapper",children:[Object(v.jsx)("label",{htmlFor:"address",children:"Address:* "}),Object(v.jsx)("textarea",{name:"address",id:"address",onChange:function(e){y({type:"enterValue",field:"address",value:e.currentTarget.value})},value:x.address.value}),x.address.errorMsg&&Object(v.jsx)(h.a,{style:{left:"90%"},class:"error-msg",msg:x.address.errorMsg})]}),Object(v.jsxs)("div",{className:"input-wrapper",children:[Object(v.jsx)("label",{htmlFor:"phone_number",children:"Phone Number:* "}),Object(v.jsx)("input",{type:"text",name:"phoneNumber",id:"phone_number",onChange:function(e){y({type:"enterValue",field:"phone_number",value:e.currentTarget.value})},onBlur:function(){y({type:"blurPhone"})},value:x.phone_number.value}),x.phone_number.errorMsg&&Object(v.jsx)(h.a,{style:{left:"80%"},class:"error-msg",msg:x.phone_number.errorMsg})]}),x.missingInput&&Object(v.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:"Please Fill mandatory fields *"}),x.responseError&&Object(v.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:x.responseError}),Object(v.jsx)("button",{type:"button",className:"btn-r btn-r-blue",onClick:function(){y({type:"validate"})},children:"Update Profile"})]})]})]})}},30:function(e,t,a){"use strict";var r=a(8),n=a.n(r),s=a(11),c=a(1);t.a=function(){var e=Object(c.useCallback)(function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s,c,o,i=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,s=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,e.next=6,fetch(t,{method:a,headers:s,body:r});case 6:return c=e.sent,e.next=9,c.json();case 9:if(o=e.sent,c.ok){e.next=12;break}throw new Error(o.error);case 12:return e.abrupt("return",o);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return e}},33:function(e,t,a){"use strict";var r=a(4),n=a(55),s=a(267),c=a(1),o={initial:{y:"-100vh"},final:{y:0},exit:{y:"-100vh"}},i=a(2),u=a(0),l=o;t.a=function(e){var t=Object(c.useState)(!0),a=Object(r.a)(t,2),o=a[0],d=a[1],p=Object(i.h)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"modal modal_".concat(e.modalClass),children:Object(u.jsx)(n.a,{children:o&&Object(u.jsxs)(s.a.div,{variants:l,initial:"initial",animate:"final",exit:"exit",className:"modal-container modal-container__".concat(e.modalClass," flex-col gap-16p falign-center"),children:[Object(u.jsx)("header",{className:"modal-header modal-header__".concat(e.modalClass),children:e.header}),Object(u.jsx)("div",{className:"flex-col gap-8p modal-body modal-body__".concat(e.modalClass),children:e.body}),Object(u.jsxs)("footer",{className:"modal-footer modal-footer__".concat(e.modalClass),children:[("check"===e.modalClass||"edit"===e.modalClass)&&Object(u.jsx)("button",{onClick:function(){d(!1),setTimeout((function(){e.dispatch({type:"finalConfirm"})}),300)},className:"btn-rec modal-button modal-button__confirm",children:"Confirm "}),Object(u.jsx)("button",{onClick:function(){return d(!1),e.refresh?setTimeout((function(){window.location.reload()}),300):e.redirectTo?setTimeout((function(){p(e.redirectTo)}),300):void setTimeout((function(){e.dispatch({type:"".concat(e.modalClass,"ModalExit")})}),300)},className:"btn-rec modal-button modal-button__".concat(e.modalClass),children:"success"===e.modalClass?"OK":"check"===e.modalClass||"edit"===e.modalClass?"Cancel":"Exit"})]})]})})})})}},38:function(e,t,a){"use strict";var r=a(0);t.a=function(e){return Object(r.jsx)("span",{style:e.style,className:e.class,children:e.msg})}},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(24),n=a(1),s=a(40);var c=a(37),o=a(39),i=0;function u(){var e=i;return i++,e}var l=function(e){var t=e.children,a=e.initial,r=e.isPresent,s=e.onExitComplete,i=e.custom,l=e.presenceAffectsLayout,p=Object(o.a)(d),b=Object(o.a)(u),f=Object(n.useMemo)((function(){return{id:b,initial:a,isPresent:r,custom:i,onExitComplete:function(e){p.set(e,!0);var t=!0;p.forEach((function(e){e||(t=!1)})),t&&(null===s||void 0===s||s())},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),l?void 0:[r]);return Object(n.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[r]),n.useEffect((function(){!r&&!p.size&&(null===s||void 0===s||s())}),[r]),n.createElement(c.a.Provider,{value:f},t)};function d(){return new Map}var p=a(45);function b(e){return e.key||""}var f=function(e){var t=e.children,a=e.custom,c=e.initial,o=void 0===c||c,i=e.onExitComplete,u=e.exitBeforeEnter,d=e.presenceAffectsLayout,f=void 0===d||d,j=function(){var e=Object(n.useRef)(!1),t=Object(r.c)(Object(n.useState)(0),2),a=t[0],c=t[1];return Object(s.a)((function(){return e.current=!0})),Object(n.useCallback)((function(){!e.current&&c(a+1)}),[a])}(),m=Object(n.useContext)(p.b);Object(p.c)(m)&&(j=m.forceUpdate);var h=Object(n.useRef)(!0),O=function(e){var t=[];return n.Children.forEach(e,(function(e){Object(n.isValidElement)(e)&&t.push(e)})),t}(t),v=Object(n.useRef)(O),g=Object(n.useRef)(new Map).current,x=Object(n.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var a=b(e);t.set(a,e)}))}(O,g),h.current)return h.current=!1,n.createElement(n.Fragment,null,O.map((function(e){return n.createElement(l,{key:b(e),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:f},e)})));for(var y=Object(r.e)([],Object(r.c)(O)),_=v.current.map(b),C=O.map(b),M=_.length,E=0;E<M;E++){var k=_[E];-1===C.indexOf(k)?x.add(k):x.delete(k)}return u&&x.size&&(y=[]),x.forEach((function(e){if(-1===C.indexOf(e)){var t=g.get(e);if(t){var r=_.indexOf(e);y.splice(r,0,n.createElement(l,{key:b(t),isPresent:!1,onExitComplete:function(){g.delete(e),x.delete(e);var t=v.current.findIndex((function(t){return t.key===e}));v.current.splice(t,1),x.size||(v.current=O,j(),i&&i())},custom:a,presenceAffectsLayout:f},t))}}})),y=y.map((function(e){var t=e.key;return x.has(t)?e:n.createElement(l,{key:b(e),isPresent:!0,presenceAffectsLayout:f},e)})),v.current=y,n.createElement(n.Fragment,null,x.size?y:y.map((function(e){return Object(n.cloneElement)(e)})))}}}]);
//# sourceMappingURL=29.a5be1c15.chunk.js.map