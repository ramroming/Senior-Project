(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[32],{272:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(11),c=n(4),s=n(44),o=(n(54),n(1)),l=n(56),p=n(0),u=function(e){var t=e.dispatch;return Object(p.jsx)("div",{className:"edit-modal modal-background flex falign-center fjust-center",children:Object(p.jsxs)("div",{className:"modal-container flex-col  falign-center fjust-center",children:[Object(p.jsx)("div",{className:"x-close",children:Object(p.jsx)("button",{onClick:function(){return t({type:"closeConfirmModal"})},children:Object(p.jsx)("i",{className:"fa-solid fa-xmark"})})}),Object(p.jsxs)("div",{className:"modal-title flex-col gap-16p",children:["Update Appointment Status:",Object(p.jsx)("p",{children:"Confirm the appointment if the client has already paid the appointment fees"})]}),Object(p.jsx)("div",{className:"flex-row gap-16p fjust-between",children:Object(p.jsx)("button",{onClick:function(){t({type:"startConfirming"})},className:"btn-rec-purple",children:"Confirm"})})]})})},m=n(27),d=n(31),j=function(e,t){switch(t.type){case"enterValue":var n,a,r;return"appointment_type"!==t.field||t.value?"user_name"!==t.field||t.value?"stmem_id"===t.field?Object(d.a)(Object(d.a)({},e),{},(r={},Object(m.a)(r,t.field,t.value),Object(m.a)(r,"date",""),Object(m.a)(r,"hours",[]),r)):Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},t.field,t.value)):Object(d.a)(Object(d.a)({},e),{},(a={},Object(m.a)(a,t.field,t.value),Object(m.a)(a,"pet_id",""),a)):Object(d.a)(Object(d.a)({},e),{},(n={},Object(m.a)(n,t.field,t.value),Object(m.a)(n,"stmem_id",""),n));case"successFetchAppointment":return Object(d.a)(Object(d.a)({},e),{},{isFetchingAppointments:!1,appointments:t.data.arrayToSend,fees:t.data.fees});case"failure":return Object(d.a)(Object(d.a)({},e),{},{isFetchingAppointments:!1,fetchAppointmentFailure:t.error});case"errorModalExit":return Object(d.a)(Object(d.a)({},e),{},{fetchAppointmentFailure:"",confirmFailure:"",deleteFailure:""});case"changeTab":return Object(d.a)(Object(d.a)({},e),{},{amount:t.data,createAppointmentTab:!1,isFetchingAppointments:!0});case"createAppointmentEnter":return Object(d.a)(Object(d.a)({},e),{},{amount:"",createAppointmentTab:!0,isGettingAppointmentTypes:!0,appointmentTypes:[],gettingAppointmentTypesFailure:"",pets:[],gettingPetsFailure:"",isGettingPets:!1,stmems:[],gettingStmemsFailure:"",isGettingStmems:!1,hours:[],gettingHoursFailure:"",isGettingHours:!1,user_name:"",appointment_type:"",pet_id:"",stmem_id:"",date:""});case"selectConfirmAppointment":return Object(d.a)(Object(d.a)({},e),{},{openConfirmModal:!0,selectedAppointment:t.id});case"selectDeleteAppointment":return Object(d.a)(Object(d.a)({},e),{},{openDeleteModal:!0,selectedAppointmentDelete:t.id});case"closeDeleteModal":return Object(d.a)(Object(d.a)({},e),{},{openDeleteModal:!1});case"closeConfirmModal":return Object(d.a)(Object(d.a)({},e),{},{openConfirmModal:!1});case"startConfirming":return Object(d.a)(Object(d.a)({},e),{},{openConfirmModal:!1,isConfirming:!0,confirmFailure:""});case"startDeleting":return Object(d.a)(Object(d.a)({},e),{},{isDeleting:!0,deleteFailure:""});case"startGettingPets":return Object(d.a)(Object(d.a)({},e),{},{pets:[],isGettingPets:!0,gettingPetsFailure:""});case"startGettingStmems":return Object(d.a)(Object(d.a)({},e),{},{stmems:[],stmem_id:"",isGettingStmems:!0,gettingStmemsFailure:""});case"startGettingHours":return Object(d.a)(Object(d.a)({},e),{},{isGettingHours:!0,gettingHoursFailure:""});case"successConfirm":return Object(d.a)(Object(d.a)({},e),{},{confirmFailure:"",confirmResult:t.data});case"successDelete":return Object(d.a)(Object(d.a)({},e),{},{deleteFailure:"",deleteResult:t.data});case"successGetAppointmentTypes":return Object(d.a)(Object(d.a)({},e),{},{isGettingAppointmentTypes:!1,gettingAppointmentTypesFailure:"",appointmentTypes:t.data});case"successGetPets":return Object(d.a)(Object(d.a)({},e),{},{isGettingPets:!1,gettingPetsFailure:"",pets:t.data});case"successGetStmems":return Object(d.a)(Object(d.a)({},e),{},{isGettingStmems:!1,gettingStmemsFailure:"",stmems:t.data});case"successGetHours":return Object(d.a)(Object(d.a)({},e),{},{isGettingHours:!1,gettingHoursFailure:"",hours:t.data});case"successCreateAppointment":return Object(d.a)(Object(d.a)({},e),{},{isCreatingAppointment:!1,isCreatingAppointmentFailure:"",creatingAppointmentResult:t.data});case"confirmFailure":return Object(d.a)(Object(d.a)({},e),{},{isConfirming:!1,confirmFailure:t.error});case"failureDelete":return Object(d.a)(Object(d.a)({},e),{},{isDeleting:!1,deleteFailure:t.error});case"failureGetPets":return Object(d.a)(Object(d.a)({},e),{},{isGettingPets:!1,gettingPetsFailure:t.error});case"failureGetStmems":return Object(d.a)(Object(d.a)({},e),{},{isGettingStmems:!1,gettingStmemsFailure:t.error});case"failureGetHours":return Object(d.a)(Object(d.a)({},e),{},{isGettingHours:!1,gettingHoursFailure:t.error});case"failureCreateAppointment":return Object(d.a)(Object(d.a)({},e),{},{isCreatingAppointment:!1,isCreatingAppointmentFailure:t.error});case"validate":return e.user_name&&e.pet_id&&e.stmem_id&&e.date&&e.hour&&e.appointment_type?Object(d.a)(Object(d.a)({},e),{},{missingInput:!1,isCreatingAppointment:!0}):Object(d.a)(Object(d.a)({},e),{},{missingInput:!0})}},b=function(e){var t=Object(o.useReducer)(j,e),n=Object(c.a)(t,2);return[n[0],n[1]]},f=n(30),h=n(6),g=n(12),O=n(33),x=n(34),v=new Date,y=Object(x.a)(v,"isoDate"),A={isFetchingAppointments:!0,appointments:null,fees:[],fetchAppointmentFailure:"",amount:"today",isConfirming:!1,confirmResult:"",confirmFailure:"",selectedAppointment:null,openConfirmModal:!1,isDeleting:!1,deleteResult:"",deleteFailure:"",selectedAppointmentDelete:null,openDeleteModal:!1,createAppointmentTab:!1,isGettingAppointmentTypes:!1,appointmentTypes:[],gettingAppointmentTypesFailure:"",pets:[],gettingPetsFailure:"",isGettingPets:!1,stmems:[],gettingStmemsFailure:"",isGettingStmems:!1,hours:[],gettingHoursFailure:"",isGettingHours:!1,user_name:"",appointment_type:"",pet_id:"",stmem_id:"",date:"",hour:"",missingInput:!1,isCreatingAppointment:!1,creatingAppointmentResult:"",isCreatingAppointmentFailure:""};t.default=function(){var e=b(A),t=Object(c.a)(e,2),n=t[0],a=t[1],m=Object(f.a)(),d=Object(o.useContext)(g.a),j=Object(o.useContext)(h.a).setPageIsLoading;Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","receptionist/appointments?amount=").concat(n.amount),"GET",null,{Authorization:"Bearer ".concat(d.token)});case 3:(i=t.sent)&&e&&a({type:"successFetchAppointment",data:i}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failure",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1,j(!1)}}),[d.token,a,n.amount,m,j]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","receptionist/appointments/").concat(n.selectedAppointment),"PATCH",null,{Authorization:"Bearer ".concat(d.token)});case 3:(i=t.sent)&&e&&a({type:"successConfirm",data:i.result}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"confirmFailure",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isConfirming&&t(),function(){e=!1}}),[d.token,a,m,n.isConfirming,n.selectedAppointment]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","receptionist/appointments/").concat(n.selectedAppointmentDelete),"DELETE",null,{Authorization:"Bearer ".concat(d.token)});case 3:(i=t.sent)&&e&&a({type:"successDelete",data:i.result}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failureDelete",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isDeleting&&t(),function(){e=!1}}),[d.token,a,m,n.isDeleting,n.selectedAppointmentDelete]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","appointment/appointmenttypes"),"GET",null,{Authorization:"Bearer ".concat(d.token)});case 3:(n=t.sent)&&e&&a({type:"successGetAppointmentTypes",data:n}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failureGetAppointmentTypes",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isGettingAppointmentTypes&&t(),function(){e=!1}}),[d.token,a,m,n.isGettingAppointmentTypes]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","receptionist/pets?username=").concat(n.user_name),"GET",null,{Authorization:"Bearer ".concat(d.token)});case 3:(i=t.sent)&&e&&a({type:"successGetPets",data:i}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failureGetPets",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isGettingPets&&t(),function(){e=!1}}),[d.token,a,m,n.isGettingPets,n.user_name]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","appointment/staffmems?appointment_type=").concat(n.appointment_type),"GET",null,{Authorization:"Bearer ".concat(d.token)});case 3:(i=t.sent)&&e&&a({type:"successGetStmems",data:i}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failureGetStmems",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isGettingStmems&&t(),function(){e=!1}}),[d.token,a,m,n.isGettingStmems,n.appointment_type]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","appointment/appointmentstimes?stmem_id=").concat(n.stmem_id,"&date=").concat(n.date),"GET",null,{Authorization:"Bearer ".concat(d.token)});case 3:(i=t.sent)&&e&&a({type:"successGetHours",data:i.availableTimes}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failureGetHours",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isGettingHours&&t(),function(){e=!1}}),[d.token,a,m,n.isGettingHours,n.stmem_id,n.date]),Object(o.useEffect)((function(){var e=!0,t=function(){var t=Object(i.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("".concat("https://pet-verse-app.herokuapp.com/","receptionist/appointments"),"POST",JSON.stringify({appointment_type:n.appointment_type,stmem_id:n.stmem_id,pet_id:n.pet_id,user_name:n.user_name,date:n.date,hour:n.hour}),{Authorization:"Bearer ".concat(d.token),"Content-Type":"application/json"});case 3:(i=t.sent)&&e&&a({type:"successCreateAppointment",data:i.response}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e&&a({type:"failureCreateAppointment",error:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.isCreatingAppointment&&t(),function(){e=!1}}),[d.token,a,m,n.isCreatingAppointment,n.stmem_id,n.date,n.appointment_type,n.hour,n.pet_id,n.user_name]),Object(o.useEffect)((function(){j(n.isFetchingAppointments||n.isGettingAppointmentTypes||n.isConfirming||n.isDeleting||n.isCreatingAppointment)}),[j,n.isFetchingAppointments,n.isGettingAppointmentTypes,n.isCreatingAppointment,n.isConfirming,n.isDeleting]),Object(o.useEffect)((function(){(n.confirmResult||n.deleteResult)&&window.location.reload()}),[n.confirmResult,n.deleteResult]);var v=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a({type:"validate"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[(n.fetchAppointmentFailure||n.confirmFailure||n.deleteFailure||n.gettingAppointmentTypesFailure)&&Object(p.jsx)(O.a,{modalClass:"error",header:"Oops!!",body:n.fetchAppointmentFailure||n.confirmFailure||n.deleteFailure||n.gettingAppointmentTypesFailure,dispatch:a}),n.creatingAppointmentResult&&Object(p.jsx)(O.a,{modalClass:"success",header:"Success!!",body:n.creatingAppointmentResult,dispatch:a,refresh:!0}),Object(p.jsx)("h4",{children:"Appointment Management"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"flex-col falign-center fjust-center ",children:n.openDeleteModal&&Object(p.jsx)(l.a,{closeModal:function(){a({type:"closeDeleteModal"})},dispatch:a})}),Object(p.jsx)("div",{className:"flex-col falign-center fjust-center ",children:n.openConfirmModal&&Object(p.jsx)(u,{dispatch:a})}),Object(p.jsx)("button",{onClick:function(e){"today"!==n.amount&&a({type:"changeTab",data:e.currentTarget.innerText.toLowerCase()})},className:"today"===n.amount?"query-button selected":"query-button",children:"Today"}),Object(p.jsx)("button",{onClick:function(e){"all"!==n.amount&&a({type:"changeTab",data:e.currentTarget.innerText.toLowerCase()})},className:"all"===n.amount?"query-button selected":"query-button",children:"All"}),Object(p.jsx)("button",{onClick:function(){!0!==n.createAppointmentTab&&a({type:"createAppointmentEnter"})},className:!0===n.createAppointmentTab?"query-button selected":"query-button",children:"New Appointment +"}),n.amount?Object(p.jsxs)(s.Table,{className:"my-table with-query",children:[Object(p.jsx)(s.Thead,{children:Object(p.jsxs)(s.Tr,{children:[Object(p.jsx)(s.Th,{children:"ID"}),Object(p.jsx)(s.Th,{children:"Date and Time"}),Object(p.jsx)(s.Th,{children:"StMem"}),Object(p.jsx)(s.Th,{children:"Ap-Type"}),Object(p.jsx)(s.Th,{children:"Pet Name"}),Object(p.jsx)(s.Th,{children:"Owner Name"}),Object(p.jsx)(s.Th,{children:"Status"}),Object(p.jsx)(s.Th,{children:"Delete"})]})}),Object(p.jsx)(s.Tbody,{children:n.appointments&&n.appointments.map((function(e,t){return Object(p.jsxs)(s.Tr,{children:[Object(p.jsx)(s.Td,{children:e.id}),Object(p.jsx)(s.Td,{style:0===e.status?{color:"darkred"}:{color:"darkgreen"},children:Object(x.a)(e.date,"default")}),Object(p.jsx)(s.Td,{children:"".concat(e.stmem_first_name," ").concat(e.stmem_last_name)}),Object(p.jsx)(s.Td,{children:e.appointment_type}),Object(p.jsx)(s.Td,{children:e.pet_name}),Object(p.jsx)(s.Td,{children:"".concat(e.owner_first_name," ").concat(e.owner_last_name)}),e.confirmed?Object(p.jsx)(s.Td,{style:{color:"green"},children:"Confirmed"}):Object(p.jsx)(s.Td,{children:"all"===n.amount||0===e.status?Object(p.jsx)("p",{style:{color:"darkmagenta"},children:"Unconfirmed"}):Object(p.jsxs)("button",{appid:e.id,className:"my-great-button margin-bottom",onClick:function(e){window.scrollTo(0,0),n.isConfirming||a({type:"selectConfirmAppointment",id:e.currentTarget.getAttribute("appid")})},children:["Click to confirm ",Object(p.jsx)("i",{className:"fa-regular fa-pen-to-square"})]})}),Object(p.jsx)(s.Td,{children:0===e.confirmed&&1===e.status?Object(p.jsx)("button",{appdid:e.id,className:"my-great-button margin-bottom",onClick:function(e){a({type:"selectDeleteAppointment",id:e.currentTarget.getAttribute("appdid")})},children:Object(p.jsx)("i",{className:"fa-regular fa-trash-can"})}):"-/-"})]},t)}))})]}):Object(p.jsx)("div",{className:"rec-make-appointment",children:Object(p.jsxs)("form",{className:"form-container flex-col gap-16p falign-center",action:"/",method:"POST",onSubmit:function(e){return v(e)},children:[Object(p.jsx)("a",{className:"logo-link",href:"/#",children:Object(p.jsx)("img",{src:"/media/imgs/favicon.png",alt:"",className:"logo"})}),Object(p.jsxs)("div",{className:"input-wrapper flex-row fjust-between",children:[Object(p.jsx)("label",{className:"half-label",htmlFor:"user_name",children:"username:*"}),Object(p.jsx)("input",{type:"text",name:"user_name",id:"user_name",onBlur:function(){n.user_name&&a({type:"startGettingPets"})},onChange:function(e){a({type:"enterValue",field:"user_name",value:e.currentTarget.value})}})]}),n.gettingPetsFailure&&Object(p.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:n.gettingPetsFailure}),Object(p.jsxs)("div",{className:"input-wrapper flex-row",children:[Object(p.jsx)("label",{className:"half-label",htmlFor:"pet",children:"pet selection:*"}),Object(p.jsxs)("select",{disabled:n.gettingPetsFailure||n.isGettingPets||!n.user_name,onChange:function(e){return a({type:"enterValue",field:"pet_id",value:e.currentTarget.value})},name:"pet_id",id:"pet_id",children:[Object(p.jsx)("option",{value:"",children:"Select pet"}),n.pets&&n.pets.map((function(e,t){return Object(p.jsx)("option",{value:e.id,children:e.name},t)}))]})]}),Object(p.jsxs)("div",{className:"input-wrapper flex-row",children:[Object(p.jsx)("label",{className:"half-label",htmlFor:"appointment_type",children:"appointment type:*"}),Object(p.jsxs)("select",{disabled:n.isGettingPets,onChange:function(e){a({type:"enterValue",field:"appointment_type",value:e.currentTarget.value}),e.currentTarget.value&&a({type:"startGettingStmems"})},name:"appointment_type",id:"appointment_type",children:[Object(p.jsx)("option",{value:"",children:"Select appointment type"}),n.appointmentTypes&&n.appointmentTypes.map((function(e,t){return Object(p.jsx)("option",{value:e.name,children:e.name},t)}))]})]}),n.gettingAppointmentTypesFailure&&Object(p.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:n.gettingAppointmentTypesFailure}),Object(p.jsxs)("div",{className:"input-wrapper flex-row",children:[Object(p.jsx)("label",{className:"half-label",htmlFor:"stmem_id",children:"stmem selection:*"}),Object(p.jsxs)("select",{disabled:n.gettingStmemsFailure||n.isGettingStmems||!n.appointment_type,onChange:function(e){a({type:"enterValue",field:"stmem_id",value:e.currentTarget.value})},name:"stmem_id",id:"stmem_id",children:[Object(p.jsx)("option",{value:"",children:"Select Stmem"}),n.stmems&&n.stmems.map((function(e,t){return Object(p.jsx)("option",{value:e.id,children:"".concat(e.first_name," ").concat(e.last_name)},t)}))]})]}),n.gettingStmemsFailure&&Object(p.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:n.gettingStmemsFailure}),Object(p.jsxs)("div",{className:"input-wrapper flex-row",children:[Object(p.jsx)("label",{className:"half-label",htmlFor:"date",children:"Appointment Date:*"}),Object(p.jsx)("input",{disabled:n.gettingStmemsFailure||n.isGettingStmems||!n.stmem_id,onChange:function(e){a({type:"enterValue",value:e.currentTarget.value,field:"date"}),a({type:"startGettingHours"})},type:"date",name:"date",id:"date",value:n.date,min:y})]}),Object(p.jsxs)("div",{className:"input-wrapper flex-row",children:[Object(p.jsx)("label",{className:"half-label",htmlFor:"stmem_id",children:"Hour selection:*"}),Object(p.jsxs)("select",{disabled:n.gettingHoursFailure||n.isGettingHours||!n.stmem_id,onChange:function(e){return a({type:"enterValue",field:"hour",value:e.currentTarget.value})},name:"hour",id:"hour",children:[Object(p.jsx)("option",{value:"",children:"Select Hour"}),n.hours&&n.hours.map((function(e,t){return Object(p.jsx)("option",{value:e,children:parseInt(e)+3},t)}))]})]}),n.gettingHoursFailure&&Object(p.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:n.gettingHoursFailure}),n.missingInput&&Object(p.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:"Please Fill mandatory fields *"}),n.isCreatingAppointmentFailure&&Object(p.jsx)("p",{style:{color:"red",textAlign:"center",width:"70%",margin:"auto"},children:n.isCreatingAppointmentFailure}),Object(p.jsx)("div",{className:"button-wrapper flex-row gap-8p fjust-center",children:Object(p.jsx)("button",{onClick:function(){n.isCreatingAppointment||a({type:"validate"})},type:"submit",className:n.isLoading?"btn-r btn-r-dark disabled":"btn-r btn-r-dark",disabled:n.isLoading,children:"create appointment"})})]})})]})]})}},30:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(11),c=n(1);t.a=function(){var e=Object(c.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,s,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,i=o.length>3&&void 0!==o[3]?o[3]:{},e.prev=3,e.next=6,fetch(t,{method:n,headers:i,body:a});case 6:return c=e.sent,e.next=9,c.json();case 9:if(s=e.sent,c.ok){e.next=12;break}throw new Error(s.error);case 12:return e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return e}},33:function(e,t,n){"use strict";var a=n(4),r=n(55),i=n(267),c=n(1),s={initial:{y:"-100vh"},final:{y:0},exit:{y:"-100vh"}},o=n(2),l=n(0),p=s;t.a=function(e){var t=Object(c.useState)(!0),n=Object(a.a)(t,2),s=n[0],u=n[1],m=Object(o.h)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"modal modal_".concat(e.modalClass),children:Object(l.jsx)(r.a,{children:s&&Object(l.jsxs)(i.a.div,{variants:p,initial:"initial",animate:"final",exit:"exit",className:"modal-container modal-container__".concat(e.modalClass," flex-col gap-16p falign-center"),children:[Object(l.jsx)("header",{className:"modal-header modal-header__".concat(e.modalClass),children:e.header}),Object(l.jsx)("div",{className:"flex-col gap-8p modal-body modal-body__".concat(e.modalClass),children:e.body}),Object(l.jsxs)("footer",{className:"modal-footer modal-footer__".concat(e.modalClass),children:[("check"===e.modalClass||"edit"===e.modalClass)&&Object(l.jsx)("button",{onClick:function(){u(!1),setTimeout((function(){e.dispatch({type:"finalConfirm"})}),300)},className:"btn-rec modal-button modal-button__confirm",children:"Confirm "}),Object(l.jsx)("button",{onClick:function(){return u(!1),e.refresh?setTimeout((function(){window.location.reload()}),300):e.redirectTo?setTimeout((function(){m(e.redirectTo)}),300):void setTimeout((function(){e.dispatch({type:"".concat(e.modalClass,"ModalExit")})}),300)},className:"btn-rec modal-button modal-button__".concat(e.modalClass),children:"success"===e.modalClass?"OK":"check"===e.modalClass||"edit"===e.modalClass?"Cancel":"Exit"})]})]})})})})}},56:function(e,t,n){"use strict";var a=n(0);t.a=function(e){var t=e.closeModal,n=e.dispatch;return Object(a.jsx)("div",{className:"modal-background flex falign-center fjust-center",children:Object(a.jsxs)("div",{className:"modal-container flex-col fgap-16p falign-center fjust-center",children:[Object(a.jsx)("div",{className:"x-close",children:Object(a.jsx)("button",{onClick:function(){return t(!1)},children:Object(a.jsx)("i",{className:"fa-solid fa-xmark"})})}),Object(a.jsx)("div",{className:"modal-title",children:"Are you sure you want to delete?"}),Object(a.jsxs)("div",{className:"flex-row edit-modal-buttons-container gap-24p fjust-center",children:[Object(a.jsx)("button",{onClick:function(){t(!1),n({type:"startDeleting"})},className:"btn-rec-purple",children:"Yes"}),Object(a.jsx)("button",{onClick:function(){return t(!1)},className:"btn-rec-purple",children:"No"})]})]})})}}}]);
//# sourceMappingURL=32.6494468b.chunk.js.map