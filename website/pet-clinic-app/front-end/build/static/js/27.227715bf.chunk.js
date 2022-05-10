(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[27],{113:function(e,t,a){"use strict";a.r(t);var s=a(8),r=a.n(s),c=a(11),n=a(4),o=a(56),i=a(1),l=a(44),d=(a(54),a(5)),u=a(27),p=a(31),j=function(e,t){switch(t.type){case"enterValue":return t.value.length>400?Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},t.field,Object(p.a)(Object(p.a)({},e[t.field]),{},{errorMsg:"Max Characters length is 400 !!"}))):Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},t.field,{errorMsg:"",value:t.value}));case"start":return Object(p.a)(Object(p.a)({},e),{},{responseError:"",isLoading:!0});case"selectPostToDelete":return Object(p.a)(Object(p.a)({},e),{},{postToDelete:t.data});case"startDeleting":return Object(p.a)(Object(p.a)({},e),{},{responseError:"",isDeleting:!0});case"success":return Object(p.a)(Object(p.a)({},e),{},{responseError:"",isLoading:!1,responseData:t.data});case"successDelete":return Object(p.a)(Object(p.a)({},e),{},{responseError:"",isDeleting:!1,deleteResult:t.data});case"failure":return Object(p.a)(Object(p.a)({},e),{},{responseError:t.error,isLoading:!1,isDeleting:!1,isUpdating:!1});case"errorModalExit":return Object(p.a)(Object(p.a)({},e),{},{responseError:""});case"selectpostToUpdate":return Object(p.a)(Object(p.a)({},e),{},{postToUpdate:t.realId,oldStory:e.responseData[t.data].story});case"editModalEnter":return Object(p.a)(Object(p.a)({},e),{},{editPost:!0});case"editModalExit":return Object(p.a)(Object(p.a)({},e),{},{newStory:{value:"",errorMsg:""},editPost:!1});case"finalConfirm":return Object(p.a)(Object(p.a)({},e),{},{editPost:!1,isUpdating:!0});case"successUpdate":return Object(p.a)(Object(p.a)({},e),{},{responseError:"",isUpdating:!1,updateResult:t.data})}},b=function(e){var t=Object(i.useReducer)(j,e),a=Object(n.a)(t,2);return[a[0],a[1]]},h=a(6),f=a(30),O=a(12),m=a(34),x=a(33),g=a(38),v=a(0),y={isLoading:!1,responseData:null,responseError:"",postToDelete:"",isDeleting:!1,deleteResult:"",editPost:!1,postToUpdate:"",newStory:{value:"",errorMsg:""},oldStory:"",isUpdating:!1,updateResult:""};t.default=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],u=b(y),p=Object(n.a)(u,2),j=p[0],T=p[1],k=Object(i.useContext)(h.a).setPageIsLoading,C=Object(f.a)(),w=Object(i.useContext)(O.a);return Object(i.useEffect)((function(){var e=!0,t=function(){var t=Object(c.a)(r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e&&T({type:"start"}),t.prev=1,a="".concat("receptionist"===w.userRole||"admin"===w.userRole?"".concat("https://pet-verse-app.herokuapp.com/","receptionist/adoptionads"):"".concat("https://pet-verse-app.herokuapp.com/","users/me/adoptionads/")),t.next=5,C(a,"GET",null,{Authorization:"Bearer ".concat(w.token)});case 5:(s=t.sent)&&e&&T({type:"success",data:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e&&T({type:"failure",error:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){k(!1),e=!1}}),[w.token,w.userRole,T,C,k]),Object(i.useEffect)((function(){var e=!0,t=function(){var t=Object(c.a)(r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat("receptionist"===w.userRole||"admin"===w.userRole?"".concat("https://pet-verse-app.herokuapp.com/","receptionist/adoptionads/").concat(j.postToDelete?j.postToDelete:""):"".concat("https://pet-verse-app.herokuapp.com/","users/me/adoptionads/").concat(j.postToDelete?j.postToDelete:"")),console.log(a),t.next=5,C(a,"DELETE",null,{Authorization:"Bearer ".concat(w.token)});case 5:(s=t.sent)&&e&&T({type:"successDelete",data:s.result}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e&&T({type:"failure",error:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return j.isDeleting&&e&&t(),function(){k(!1),e=!1}}),[w.token,w.userRole,T,C,k,j.isDeleting,j.postToDelete]),Object(i.useEffect)((function(){var e=!0,t=function(){var t=Object(c.a)(r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat("receptionist"===w.userRole||"admin"===w.userRole?"".concat("https://pet-verse-app.herokuapp.com/","receptionist/adoptionads/").concat(j.postToUpdate):"".concat("https://pet-verse-app.herokuapp.com/","users/me/adoptionads/").concat(j.postToUpdate)),t.next=4,C(a,"PATCH",JSON.stringify({story:j.newStory.value}),{Authorization:"Bearer ".concat(w.token),"Content-Type":"application/json"});case 4:s=t.sent,e&&s&&T({type:"successUpdate",data:s.result}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),T({type:"failure",error:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return j.isUpdating&&(console.log("updating"),console.log(JSON.stringify({story:j.newStory.value})),t()),function(){k(!1),e=!1}}),[T,w.token,w.userRole,C,j.isUpdating,j.newStory.value,k,j.postToUpdate]),Object(i.useEffect)((function(){k(j.isLoading||j.isDeleting||j.isUpdating)}),[k,j.isLoading,j.isDeleting,j.isUpdating]),Object(v.jsxs)(v.Fragment,{children:[j.responseError&&Object(v.jsx)(x.a,{modalClass:"error",header:"Oops!!",body:j.responseError,dispatch:T,redirectTo:"/"}),j.deleteResult&&Object(v.jsx)(x.a,{modalClass:"success",header:"Success!!",body:j.deleteResult,dispatch:T,refresh:!0}),j.editPost&&Object(v.jsx)(x.a,{modalClass:"edit",header:"Edit your adoption post story",body:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Your post's old story:"})}),Object(v.jsxs)("p",{style:{color:"darkcyan",overflowY:"auto"},children:['"',j.oldStory,'"']}),Object(v.jsx)("p",{children:j.newStory.errorMsg&&Object(v.jsx)(g.a,{style:{top:"10%",margin:".5rem"},class:"error-msg ",msg:j.newStory.errorMsg})}),Object(v.jsx)("textarea",{name:"story",id:"story",cols:"35",rows:"5",placeholder:"New story for your post",value:j.newStory.value,onChange:function(e){return T({type:"enterValue",field:"newStory",value:e.currentTarget.value})}})]}),dispatch:T}),j.updateResult&&Object(v.jsx)(x.a,{modalClass:"success",header:"Success!!",body:j.updateResult,dispatch:T,refresh:!0}),Object(v.jsx)("h4",{children:"Adoption Posts Management"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"flex-col falign-center fjust-center ",children:a&&Object(v.jsx)(o.a,{closeModal:s,dispatch:T})}),Object(v.jsxs)(l.Table,{className:"my-table",children:[Object(v.jsx)(l.Thead,{children:Object(v.jsxs)(l.Tr,{children:[Object(v.jsx)(l.Th,{children:"Post"}),Object(v.jsx)(l.Th,{children:"Created At"}),Object(v.jsx)(l.Th,{children:"Edit"}),Object(v.jsx)(l.Th,{children:"Status"}),Object(v.jsx)(l.Th,{children:"Delete"})]})}),Object(v.jsx)(l.Tbody,{children:j.responseData&&j.responseData.map((function(e,t){return Object(v.jsxs)(l.Tr,{children:[Object(v.jsx)(l.Td,{children:0===e.status?"Removed":Object(v.jsx)(d.b,{target:"_blank",className:"my-great-button",to:"/adoptionad/".concat(e.id),children:"Click here to view"})}),Object(v.jsx)(l.Td,{children:Object(m.a)(e.date,"default")}),Object(v.jsx)(l.Td,{children:0===e.status?"Can't Edit":Object(v.jsx)("button",{id:t,ad_id:e.id,onClick:function(e){T({type:"selectpostToUpdate",data:e.currentTarget.id,realId:e.currentTarget.getAttribute("ad_id")}),T({type:"editModalEnter"})},className:"my-great-button",children:"Click here to edit"})}),Object(v.jsx)(l.Td,{style:{color:0===e.status?"Green":""},children:0===e.status?"Found new home":"Looking for new owner"}),Object(v.jsx)(l.Td,{children:0===e.status?"-/-":Object(v.jsx)("button",{disabled:a,style:{color:a?"grey":"",cursor:a?"default":"pointer"},className:"my-great-button margin-bottom",id:e.id,onClick:function(e){window.scrollTo(0,0),T({type:"selectPostToDelete",data:e.currentTarget.id}),s(!0)},children:Object(v.jsx)("i",{className:"fa-regular fa-trash-can"})})})]},t)}))})]})]})]})}},30:function(e,t,a){"use strict";var s=a(8),r=a.n(s),c=a(11),n=a(1);t.a=function(){var e=Object(n.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,s,c,n,o,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"GET",s=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,e.next=6,fetch(t,{method:a,headers:c,body:s});case 6:return n=e.sent,e.next=9,n.json();case 9:if(o=e.sent,n.ok){e.next=12;break}throw new Error(o.error);case 12:return e.abrupt("return",o);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return e}},33:function(e,t,a){"use strict";var s=a(4),r=a(55),c=a(267),n=a(1),o={initial:{y:"-100vh"},final:{y:0},exit:{y:"-100vh"}},i=a(2),l=a(0),d=o;t.a=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),o=a[0],u=a[1],p=Object(i.h)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"modal modal_".concat(e.modalClass),children:Object(l.jsx)(r.a,{children:o&&Object(l.jsxs)(c.a.div,{variants:d,initial:"initial",animate:"final",exit:"exit",className:"modal-container modal-container__".concat(e.modalClass," flex-col gap-16p falign-center"),children:[Object(l.jsx)("header",{className:"modal-header modal-header__".concat(e.modalClass),children:e.header}),Object(l.jsx)("div",{className:"flex-col gap-8p modal-body modal-body__".concat(e.modalClass),children:e.body}),Object(l.jsxs)("footer",{className:"modal-footer modal-footer__".concat(e.modalClass),children:[("check"===e.modalClass||"edit"===e.modalClass)&&Object(l.jsx)("button",{onClick:function(){u(!1),setTimeout((function(){e.dispatch({type:"finalConfirm"})}),300)},className:"btn-rec modal-button modal-button__confirm",children:"Confirm "}),Object(l.jsx)("button",{onClick:function(){return u(!1),e.refresh?setTimeout((function(){window.location.reload()}),300):e.redirectTo?setTimeout((function(){p(e.redirectTo)}),300):void setTimeout((function(){e.dispatch({type:"".concat(e.modalClass,"ModalExit")})}),300)},className:"btn-rec modal-button modal-button__".concat(e.modalClass),children:"success"===e.modalClass?"OK":"check"===e.modalClass||"edit"===e.modalClass?"Cancel":"Exit"})]})]})})})})}},38:function(e,t,a){"use strict";var s=a(0);t.a=function(e){return Object(s.jsx)("span",{style:e.style,className:e.class,children:e.msg})}},56:function(e,t,a){"use strict";var s=a(0);t.a=function(e){var t=e.closeModal,a=e.dispatch;return Object(s.jsx)("div",{className:"modal-background flex falign-center fjust-center",children:Object(s.jsxs)("div",{className:"modal-container flex-col fgap-16p falign-center fjust-center",children:[Object(s.jsx)("div",{className:"x-close",children:Object(s.jsx)("button",{onClick:function(){return t(!1)},children:Object(s.jsx)("i",{className:"fa-solid fa-xmark"})})}),Object(s.jsx)("div",{className:"modal-title",children:"Are you sure you want to delete?"}),Object(s.jsxs)("div",{className:"flex-row edit-modal-buttons-container gap-24p fjust-center",children:[Object(s.jsx)("button",{onClick:function(){t(!1),a({type:"startDeleting"})},className:"btn-rec-purple",children:"Yes"}),Object(s.jsx)("button",{onClick:function(){return t(!1)},className:"btn-rec-purple",children:"No"})]})]})})}}}]);
//# sourceMappingURL=27.227715bf.chunk.js.map