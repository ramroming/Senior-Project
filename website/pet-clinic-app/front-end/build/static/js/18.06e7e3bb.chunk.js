(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[18],{27:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},277:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),c=n(11),o=n(4),s=n(1),i=n(267),l=n(55),u=n(63),d=n(12),f=n(30),b=n(34),p=n(5),m=n(60),j=n(27),O=n(31),h=function(e,t){switch(t.type){case"enterValue":return"ad_type"===t.field?Object(O.a)(Object(O.a)({},e),{},Object(j.a)({posts:[],isLoading:!0,noMore:!1,breed_name:""},t.field,t.value)):Object(O.a)(Object(O.a)({},e),{},Object(j.a)({posts:[],isLoading:!0,noMore:!1},t.field,t.value));case"start":return Object(O.a)(Object(O.a)({},e),{},{responseError:"",getMore:!0});case"noMore":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,noMore:!0});case"firstRender":return Object(O.a)(Object(O.a)({},e),{},{isLoading:!1,getMore:!1,breeds:t.data.breeds,posts:[].concat(Object(m.a)(e.posts),Object(m.a)(t.data.result))});case"otherRenders":return Object(O.a)(Object(O.a)({},e),{},{getMore:!1,isLoading:!1,breeds:t.data.breeds,posts:t.data.result});case"failure":return Object(O.a)(Object(O.a)({},e),{},{responseError:t.error,isLoading:!1});case"errorModalExit":return Object(O.a)(Object(O.a)({},e),{},{responseError:""});case"lastPost":return Object(O.a)(Object(O.a)({},e),{},{lastPost:t.data});case"getColors":return Object(O.a)(Object(O.a)({},e),{},{isLoadingColors:!0});case"getColorsSuccess":return Object(O.a)(Object(O.a)({},e),{},{responseError:"",isLoadingColors:!1,colors:t.data});case"selectColor":return-1!==e.selectedColors.indexOf(t.color)?Object(O.a)(Object(O.a)({},e),{},{selectedColors:e.selectedColors.filter((function(e){return e!==t.color})),posts:[],isLoading:!0,noMore:!1}):3===e.selectedColors.length?e:Object(O.a)(Object(O.a)({},e),{},{selectedColors:[].concat(Object(m.a)(e.selectedColors),[t.color]),posts:[],isLoading:!0,noMore:!1})}},y=function(e){var t=Object(s.useReducer)(h,e),n=Object(o.a)(t,2);return[n[0],n[1]]},g=n(33),v=n(6),x=n(0),M=Object(i.a)(p.b,{forwardMotionProps:!0}),C={isLoading:!0,isLoadingColors:!1,getMore:!1,posts:[],breeds:[],colors:[],selectedColors:[],noMore:!1,responseError:"",ad_type:"",breed_name:"",gender:"",lastPost:""};t.default=function(){var e=Object(f.a)(),t=y(C),n=Object(o.a)(t,2),r=n[0],p=n[1],m=Object(s.useContext)(v.a).setPageIsLoading,j=Object(s.useContext)(d.a),O=Object(s.useRef)(!0),h=Object(s.useRef)(!0),N=Object(s.useRef)(),T=Object(s.useRef)(null),w=Object(s.useCallback)(function(){var t=Object(c.a)(a.a.mark((function t(n,r,c,o){var s,i,l,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:[],i=u.length>5?u[5]:void 0,t.prev=2,t.next=5,e("".concat("https://pet-verse-app.herokuapp.com/","adoptionads?last_date=").concat(n||"","&ad_type=").concat(r||"","&breed_name=").concat(c||"","&gender=").concat(o||"","&colors=").concat(s.length?s.join(","):""),"GET",null,{Authorization:"Bearer ".concat(j.token)});case 5:0===(l=t.sent).result.length&&p({type:"noMore"}),i?h.current&&p({type:"otherRenders",data:l}):h.current&&p({type:"firstRender",data:l}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),h.current&&p({type:"failure",error:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n,r,a){return t.apply(this,arguments)}}(),[j.token,e,p]);Object(s.useEffect)((function(){return h.current=!0,w(),function(){h.current=!1}}),[w]),Object(s.useEffect)((function(){O.current||w(null,r.ad_type,r.breed_name,r.gender,r.selectedColors,!0)}),[r.ad_type,r.breed_name,r.gender,r.selectedColors,w]);var D=Object(s.useCallback)((function(){N.current&&N.current.disconnect(),N.current=new IntersectionObserver((function(e){e[0].isIntersecting&&!r.getMore&&p({type:"start"})})),T.current&&N.current.observe(T.current)}),[r.getMore,p]);Object(s.useEffect)((function(){return h.current=!0,!r.noMore&&r.posts&&D(),O.current?O.current=!1:r.getMore&&w(r.lastPost,r.ad_type,r.breed_name,r.gender,r.selectedColors),function(){h.current=!1}}),[r.noMore,r.getMore,D,w,r.lastPost,r.ad_type,r.breed_name,r.gender,r.selectedColors,r.posts]),Object(s.useEffect)((function(){var t=!0;t&&p({type:"getColors"});var n=function(){var n=Object(c.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e("".concat("https://pet-verse-app.herokuapp.com/","pets/colors"),"GET",null,{Authorization:"Bearer ".concat(j.token)});case 3:(r=n.sent)&&t&&p({type:"getColorsSuccess",data:r}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t&&p({type:"failure",data:n.t0.message});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){m(!1),t=!1}}),[e,j.token,p,m]),Object(s.useEffect)((function(){m(r.isLoadingColors)}),[m,r.isLoadingColors]);var E=u.a;return Object(x.jsxs)(x.Fragment,{children:[r.responseError&&Object(x.jsx)(g.a,{modalClass:"error",header:"Oops!!",body:r.responseError,dispatch:p,redirectTo:"/"}),Object(x.jsxs)("div",{className:"adoption-container home-container flex-col falign-center fjust-start gap-24p",children:[Object(x.jsxs)("div",{className:" adoption-filter-wrapper flex-col falign-center fjust-center fgap-16p",children:[Object(x.jsx)("p",{children:"Find your perfect pet!"}),Object(x.jsxs)("div",{className:"filter-container flex-col falign-center fjust-center gap-16p",children:[Object(x.jsxs)("div",{className:"flex-col falign-start fjust-center filter-item gap-8p",children:[Object(x.jsx)("label",{htmlFor:"pet-type",children:"Pet:"}),Object(x.jsxs)("select",{disabled:r.isLoading,onChange:function(e){p({type:"enterValue",field:"ad_type",value:e.currentTarget.value})},name:"pet-type",id:"pet-type",defaultValue:"",children:[Object(x.jsx)("option",{value:"",children:"All"}),Object(x.jsx)("option",{value:"cat",children:"Cat"}),Object(x.jsx)("option",{value:"dog",children:"Dog"}),Object(x.jsx)("option",{value:"bird",children:"Bird"})]})]}),Object(x.jsxs)("div",{className:"flex-col falign-start fjust-center filter-item gap-8p",children:[Object(x.jsx)("label",{htmlFor:"pet-breed",children:"Breed:"}),Object(x.jsxs)("select",{disabled:r.isLoading||!r.ad_type,onChange:function(e){p({type:"enterValue",field:"breed_name",value:e.currentTarget.value})},name:"pet-breed",id:"pet-breed",value:r.breed_name,children:[Object(x.jsx)("option",{value:"",children:"All"}),r.breeds.length&&r.breeds.map((function(e,t){return Object(x.jsx)("option",{value:e.name,children:e.name},t)}))]})]}),Object(x.jsxs)("div",{className:"flex-col falign-start fjust-center filter-item gap-8p",children:[Object(x.jsx)("label",{htmlFor:"pet-gender",children:"Gender:"}),Object(x.jsxs)("select",{disabled:r.isLoading,onChange:function(e){p({type:"enterValue",field:"gender",value:e.currentTarget.value})},name:"pet-gender",id:"pet-gender",defaultValue:"",children:[Object(x.jsx)("option",{value:"",children:"Both"}),Object(x.jsx)("option",{value:"male",children:"Male"}),Object(x.jsx)("option",{value:"Female",children:"Female"})]})]}),Object(x.jsx)("div",{className:"flex-col fjust-center filter-item gap-8p"})]})]}),Object(x.jsx)("p",{style:{fontSize:"1.5rem",color:"purple"},children:"Filter by color"}),Object(x.jsx)("div",{className:"flex-row",style:{width:"80%"},children:0!==r.colors.length&&!r.isLoadingColors&&r.colors.map((function(e,t){return Object(x.jsx)("div",{className:r.selectedColors.length&&r.selectedColors.includes(e.name)?"color-tag  color-selected-purple":"color-tag bright",children:Object(x.jsx)("p",{disabled:!0,onClick:function(e){r.isLoading||p({type:"selectColor",color:e.target.innerHTML})},colorid:t,children:e.name})},t)}))}),Object(x.jsx)("p",{className:"posts-title",children:"Recently posted ads"}),Object(x.jsxs)("div",{className:"posts-main-container",children:[Object(x.jsxs)("div",{className:"posts-animated-container flex-row fjust-center gap-16p",children:[Object(x.jsx)(l.a,{exitBeforeEnter:!0,children:r.isLoading&&Object(x.jsx)(i.a.div,{variants:E,initial:"initial",animate:"final",exit:"exit",className:"loaderWrapper-top flex-row fjust-center",children:Object(x.jsxs)("div",{className:"lds-ripple",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},"1s")}),r.posts.map((function(e,t){return r.posts.length===t+1?(r.lastPost!==e.date&&p({type:"lastPost",data:e.date}),Object(x.jsxs)(M,{variants:E,initial:"initial",animate:"final",exit:"exit",to:"/adoptionad/".concat(e.id),target:"_blank",ref:T,className:"adoption-post gap-8p flex-col falign-center ",children:[Object(x.jsx)("img",{src:URL.createObjectURL(new Blob([new Uint8Array(e.photo.data)])),alt:"",className:"post-image"}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("span",{children:[e.ad_type," - "]}),Object(x.jsx)("span",{children:e.breed})]}),Object(x.jsx)("p",{className:"pTitle",children:e.breed_name}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fa fa-clock"}),"\xa0",Object(b.a)(e.date,"default")]}),Object(x.jsx)("button",{className:"btn-rec-blue",children:"View Post"})]},e.id)):Object(x.jsxs)(M,{variants:E,initial:"initial",animate:"final",exit:"exit",to:"/adoptionad/".concat(e.id),target:"_blank",className:"adoption-post gap-8p flex-col falign-center ",children:[Object(x.jsx)("img",{src:URL.createObjectURL(new Blob([new Uint8Array(e.photo.data)])),alt:"",className:"post-image"}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("span",{children:[e.ad_type,"  "]}),Object(x.jsx)("span",{children:e.breed})]}),Object(x.jsx)("p",{className:"pTitle",children:e.breed_name}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fa fa-clock"}),"\xa0",Object(b.a)(e.date,"default")]}),Object(x.jsx)("button",{className:"btn-rec-blue",children:"View Post"})]},e.id)})),Object(x.jsx)(l.a,{exitBeforeEnter:!0,children:r.getMore&&Object(x.jsx)(i.a.div,{variants:E,initial:"initial",animate:"final",exit:"exit",className:"loaderWrapper flex-row fjust-center",children:Object(x.jsxs)("div",{className:"lds-ripple",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})})})]}),r.noMore&&Object(x.jsx)("div",{className:"no-more"})]})]})]})}},30:function(e,t,n){"use strict";var r=n(8),a=n.n(r),c=n(11),o=n(1);t.a=function(){var e=Object(o.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,s,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,e.next=6,fetch(t,{method:n,headers:c,body:r});case 6:return o=e.sent,e.next=9,o.json();case 9:if(s=e.sent,o.ok){e.next=12;break}throw new Error(s.error);case 12:return e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return e}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(27);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},33:function(e,t,n){"use strict";var r=n(4),a=n(55),c=n(267),o=n(1),s={initial:{y:"-100vh"},final:{y:0},exit:{y:"-100vh"}},i=n(2),l=n(0),u=s;t.a=function(e){var t=Object(o.useState)(!0),n=Object(r.a)(t,2),s=n[0],d=n[1],f=Object(i.h)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"modal modal_".concat(e.modalClass),children:Object(l.jsx)(a.a,{children:s&&Object(l.jsxs)(c.a.div,{variants:u,initial:"initial",animate:"final",exit:"exit",className:"modal-container modal-container__".concat(e.modalClass," flex-col gap-16p falign-center"),children:[Object(l.jsx)("header",{className:"modal-header modal-header__".concat(e.modalClass),children:e.header}),Object(l.jsx)("div",{className:"flex-col gap-8p modal-body modal-body__".concat(e.modalClass),children:e.body}),Object(l.jsxs)("footer",{className:"modal-footer modal-footer__".concat(e.modalClass),children:[("check"===e.modalClass||"edit"===e.modalClass)&&Object(l.jsx)("button",{onClick:function(){d(!1),setTimeout((function(){e.dispatch({type:"finalConfirm"})}),300)},className:"btn-rec modal-button modal-button__confirm",children:"Confirm "}),Object(l.jsx)("button",{onClick:function(){return d(!1),e.refresh?setTimeout((function(){window.location.reload()}),300):e.redirectTo?setTimeout((function(){f(e.redirectTo)}),300):void setTimeout((function(){e.dispatch({type:"".concat(e.modalClass,"ModalExit")})}),300)},className:"btn-rec modal-button modal-button__".concat(e.modalClass),children:"success"===e.modalClass?"OK":"check"===e.modalClass||"edit"===e.modalClass?"Cancel":"Exit"})]})]})})})})}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,a=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,c=/[^-+\dA-Z]/g;function o(e,t,n,a){if(1!==arguments.length||"string"!==typeof e||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var c=(t=String(s[t]||t||s.default)).slice(0,4);"UTC:"!==c&&"GMT:"!==c||(t=t.slice(4),n=!0,"GMT:"===c&&(a=!0));var o=function(){return n?"getUTC":"get"},p=function(){return e[o()+"Date"]()},m=function(){return e[o()+"Day"]()},j=function(){return e[o()+"Month"]()},O=function(){return e[o()+"FullYear"]()},h=function(){return e[o()+"Hours"]()},y=function(){return e[o()+"Minutes"]()},g=function(){return e[o()+"Seconds"]()},v=function(){return e[o()+"Milliseconds"]()},x=function(){return n?0:e.getTimezoneOffset()},M=function(){return d(e)},C=function(){return f(e)},N={d:function(){return p()},dd:function(){return l(p())},ddd:function(){return i.dayNames[m()]},DDD:function(){return u({y:O(),m:j(),d:p(),_:o(),dayName:i.dayNames[m()],short:!0})},dddd:function(){return i.dayNames[m()+7]},DDDD:function(){return u({y:O(),m:j(),d:p(),_:o(),dayName:i.dayNames[m()+7]})},m:function(){return j()+1},mm:function(){return l(j()+1)},mmm:function(){return i.monthNames[j()]},mmmm:function(){return i.monthNames[j()+12]},yy:function(){return String(O()).slice(2)},yyyy:function(){return l(O(),4)},h:function(){return h()%12||12},hh:function(){return l(h()%12||12)},H:function(){return h()},HH:function(){return l(h())},M:function(){return y()},MM:function(){return l(y())},s:function(){return g()},ss:function(){return l(g())},l:function(){return l(v(),3)},L:function(){return l(Math.floor(v()/10))},t:function(){return h()<12?i.timeNames[0]:i.timeNames[1]},tt:function(){return h()<12?i.timeNames[2]:i.timeNames[3]},T:function(){return h()<12?i.timeNames[4]:i.timeNames[5]},TT:function(){return h()<12?i.timeNames[6]:i.timeNames[7]},Z:function(){return a?"GMT":n?"UTC":b(e)},o:function(){return(x()>0?"-":"+")+l(100*Math.floor(Math.abs(x())/60)+Math.abs(x())%60,4)},p:function(){return(x()>0?"-":"+")+l(Math.floor(Math.abs(x())/60),2)+":"+l(Math.floor(Math.abs(x())%60),2)},S:function(){return["th","st","nd","rd"][p()%10>3?0:(p()%100-p()%10!=10)*p()%10]},W:function(){return M()},WW:function(){return l(M())},N:function(){return C()}};return t.replace(r,(function(e){return e in N?N[e]():e.slice(1,e.length-1)}))}var s={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},u=function(e){var t=e.y,n=e.m,r=e.d,a=e._,c=e.dayName,o=e.short,s=void 0!==o&&o,i=new Date,l=new Date;l.setDate(l[a+"Date"]()-1);var u=new Date;u.setDate(u[a+"Date"]()+1);return i[a+"FullYear"]()===t&&i[a+"Month"]()===n&&i[a+"Date"]()===r?s?"Tdy":"Today":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?s?"Ysd":"Yesterday":u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?s?"Tmw":"Tomorrow":c},d=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},f=function(e){var t=e.getDay();return 0===t&&(t=7),t},b=function(e){return(String(e).match(a)||[""]).pop().replace(c,"").replace(/GMT\+0000/g,"UTC")}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(24),a=n(1),c=n(40);var o=n(37),s=n(39),i=0;function l(){var e=i;return i++,e}var u=function(e){var t=e.children,n=e.initial,r=e.isPresent,c=e.onExitComplete,i=e.custom,u=e.presenceAffectsLayout,f=Object(s.a)(d),b=Object(s.a)(l),p=Object(a.useMemo)((function(){return{id:b,initial:n,isPresent:r,custom:i,onExitComplete:function(e){f.set(e,!0);var t=!0;f.forEach((function(e){e||(t=!1)})),t&&(null===c||void 0===c||c())},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),u?void 0:[r]);return Object(a.useMemo)((function(){f.forEach((function(e,t){return f.set(t,!1)}))}),[r]),a.useEffect((function(){!r&&!f.size&&(null===c||void 0===c||c())}),[r]),a.createElement(o.a.Provider,{value:p},t)};function d(){return new Map}var f=n(45);function b(e){return e.key||""}var p=function(e){var t=e.children,n=e.custom,o=e.initial,s=void 0===o||o,i=e.onExitComplete,l=e.exitBeforeEnter,d=e.presenceAffectsLayout,p=void 0===d||d,m=function(){var e=Object(a.useRef)(!1),t=Object(r.c)(Object(a.useState)(0),2),n=t[0],o=t[1];return Object(c.a)((function(){return e.current=!0})),Object(a.useCallback)((function(){!e.current&&o(n+1)}),[n])}(),j=Object(a.useContext)(f.b);Object(f.c)(j)&&(m=j.forceUpdate);var O=Object(a.useRef)(!0),h=function(e){var t=[];return a.Children.forEach(e,(function(e){Object(a.isValidElement)(e)&&t.push(e)})),t}(t),y=Object(a.useRef)(h),g=Object(a.useRef)(new Map).current,v=Object(a.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=b(e);t.set(n,e)}))}(h,g),O.current)return O.current=!1,a.createElement(a.Fragment,null,h.map((function(e){return a.createElement(u,{key:b(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:p},e)})));for(var x=Object(r.e)([],Object(r.c)(h)),M=y.current.map(b),C=h.map(b),N=M.length,T=0;T<N;T++){var w=M[T];-1===C.indexOf(w)?v.add(w):v.delete(w)}return l&&v.size&&(x=[]),v.forEach((function(e){if(-1===C.indexOf(e)){var t=g.get(e);if(t){var r=M.indexOf(e);x.splice(r,0,a.createElement(u,{key:b(t),isPresent:!1,onExitComplete:function(){g.delete(e),v.delete(e);var t=y.current.findIndex((function(t){return t.key===e}));y.current.splice(t,1),v.size||(y.current=h,m(),i&&i())},custom:n,presenceAffectsLayout:p},t))}}})),x=x.map((function(e){var t=e.key;return v.has(t)?e:a.createElement(u,{key:b(e),isPresent:!0,presenceAffectsLayout:p},e)})),y.current=x,a.createElement(a.Fragment,null,v.size?x:x.map((function(e){return Object(a.cloneElement)(e)})))}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9);var a=n(7);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={initial:{opacity:0},final:{opacity:1,transition:{duration:1}},exit:{opacity:0,transition:{duration:.5}}}}}]);
//# sourceMappingURL=18.06e7e3bb.chunk.js.map