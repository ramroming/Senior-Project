(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[36],{285:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=n(11),s=n(4),i=n(31),o=n(1),l=function(e,t){switch(t.type){case"getAppointmentsSuccess":return Object(i.a)(Object(i.a)({},e),{},{isGettingAppointments:!1,appointments:t.data});case"getAppointmentsFailure":return Object(i.a)(Object(i.a)({},e),{},{isGettingAppointments:!1,gettingAppointmentsFailure:t.error});case"errorModalExit":return Object(i.a)(Object(i.a)({},e),{},{gettingAppointmentsFailure:""})}},d=function(e){var t=Object(o.useReducer)(l,e),n=Object(s.a)(t,2);return[n[0],n[1]]},p=n(44),j=(n(54),n(33)),m=n(34),u=n(12),h=n(6),b=n(30),O=n(5),f=n(0),x={isGettingAppointments:!0,gettingAppointmentsFailure:"",appointments:[]};t.default=function(){var e=d(x),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.useContext)(u.a),l=Object(o.useContext)(h.a).setPageIsLoading,g=Object(b.a)();return Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(r.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g("".concat("https://pet-verse-app.herokuapp.com/","vet/appointments"),"GET",null,{Authorization:"Bearer ".concat(i.token)});case 3:n=t.sent,e&&n&&a({type:"getAppointmentsSuccess",data:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"getAppointmentsFailure",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){l(!1),e=!1}}),[i.token,a,g,l]),Object(o.useEffect)((function(){l(n.isGettingAppointments)}),[l,n.isGettingAppointments]),Object(f.jsxs)(f.Fragment,{children:[n.gettingAppointmentsFailure&&Object(f.jsx)(j.a,{modalClass:"error",header:"Oops!!",body:n.gettingAppointmentsFailure,dispatch:a}),Object(f.jsx)("h4",{children:"Active Appointments"}),Object(f.jsx)("div",{children:Object(f.jsxs)(p.Table,{className:"my-table",children:[Object(f.jsx)(p.Thead,{children:Object(f.jsxs)(p.Tr,{children:[Object(f.jsx)(p.Th,{children:"Time"}),Object(f.jsx)(p.Th,{children:"confirmed"}),Object(f.jsx)(p.Th,{children:"First name"}),Object(f.jsx)(p.Th,{children:"Last name"}),Object(f.jsx)(p.Th,{children:"Phone number"}),Object(f.jsx)(p.Th,{children:"Pet name"}),Object(f.jsx)(p.Th,{children:"Type"}),Object(f.jsx)(p.Th,{children:"Breed"}),Object(f.jsx)(p.Th,{})]})}),Object(f.jsx)(p.Tbody,{children:n.appointments.map((function(e,t){return Object(f.jsxs)(p.Tr,{children:[Object(f.jsx)(p.Td,{children:Object(f.jsx)("p",{style:{color:1===e.status?"darkgreen":"darkred"},children:Object(m.a)(e.date,"h:MM TT")})}),Object(f.jsx)(p.Td,{children:Object(f.jsx)("p",{style:{color:e.confirmed?"darkgreen":"darkmagenta"},children:1===e.confirmed?"Yes":"No"})}),Object(f.jsx)(p.Td,{children:e.first_name}),Object(f.jsx)(p.Td,{children:e.last_name}),Object(f.jsx)(p.Td,{children:e.phone_number}),Object(f.jsx)(p.Td,{children:e.pet_name}),Object(f.jsx)(p.Td,{children:e.pet_type}),Object(f.jsx)(p.Td,{children:e.breed_name}),"groomer"!==i.userRole&&Object(f.jsx)(p.Td,{children:e.confirmed?Object(f.jsxs)(O.b,{to:"/staffpanel/".concat(1===e.appointment_type_id?"pettreatmenthistory":"pettraininghistory"),className:"start-treatment",state:{appId:e.id,petId:e.pet_id},children:[1===e.appointment_type_id?"Start Treatment":"Start Training",Object(f.jsx)("i",{className:"fa-regular fa-pen-to-square"})]}):Object(f.jsx)("p",{style:{color:"darkgray"},children:"Waiting confirmation"})})]},t)}))})]})})]})}},30:function(e,t,n){"use strict";var a=n(8),c=n.n(a),r=n(11),s=n(1);t.a=function(){var e=Object(s.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r,s,i,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{},e.prev=3,e.next=6,fetch(t,{method:n,headers:r,body:a});case 6:return s=e.sent,e.next=9,s.json();case 9:if(i=e.sent,s.ok){e.next=12;break}throw new Error(i.error);case 12:return e.abrupt("return",i);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return e}},33:function(e,t,n){"use strict";var a=n(4),c=n(55),r=n(267),s=n(1),i={initial:{y:"-100vh"},final:{y:0},exit:{y:"-100vh"}},o=n(2),l=n(0),d=i;t.a=function(e){var t=Object(s.useState)(!0),n=Object(a.a)(t,2),i=n[0],p=n[1],j=Object(o.h)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"modal modal_".concat(e.modalClass),children:Object(l.jsx)(c.a,{children:i&&Object(l.jsxs)(r.a.div,{variants:d,initial:"initial",animate:"final",exit:"exit",className:"modal-container modal-container__".concat(e.modalClass," flex-col gap-16p falign-center"),children:[Object(l.jsx)("header",{className:"modal-header modal-header__".concat(e.modalClass),children:e.header}),Object(l.jsx)("div",{className:"flex-col gap-8p modal-body modal-body__".concat(e.modalClass),children:e.body}),Object(l.jsxs)("footer",{className:"modal-footer modal-footer__".concat(e.modalClass),children:[("check"===e.modalClass||"edit"===e.modalClass)&&Object(l.jsx)("button",{onClick:function(){p(!1),setTimeout((function(){e.dispatch({type:"finalConfirm"})}),300)},className:"btn-rec modal-button modal-button__confirm",children:"Confirm "}),Object(l.jsx)("button",{onClick:function(){return p(!1),e.refresh?setTimeout((function(){window.location.reload()}),300):e.redirectTo?setTimeout((function(){j(e.redirectTo)}),300):void setTimeout((function(){e.dispatch({type:"".concat(e.modalClass,"ModalExit")})}),300)},className:"btn-rec modal-button modal-button__".concat(e.modalClass),children:"success"===e.modalClass?"OK":"check"===e.modalClass||"edit"===e.modalClass?"Cancel":"Exit"})]})]})})})})}}}]);
//# sourceMappingURL=36.0d61e7fa.chunk.js.map