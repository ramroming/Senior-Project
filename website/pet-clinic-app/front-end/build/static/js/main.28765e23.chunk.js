(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[4],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,role:null,login:function(){},logout:function(){}})},14:function(e,t,n){"use strict";var a=n(1),c=n(2);t.a=function(){var e=Object(c.h)();return Object(a.useCallback)((function(t){if(t)return e("".concat(t.redirectTo))}),[e])}},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c=n(1),l=n.n(c),s=n(13),j=n.n(s),i=n(4),r=n(12),o=n(6),b=n(0),u=function(){var e=Object(c.useContext)(o.a).pageIsLoading;return Object(b.jsx)(b.Fragment,{children:!0===e&&Object(b.jsx)("div",{className:"loading-page",children:Object(b.jsxs)("div",{className:"lds-ripple-page",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})})})},O=n(2),d=function(e){var t=Object(O.g)();return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[t]),Object(b.jsx)(b.Fragment,{children:e.children})},x=n(8),m=n.n(x),h=n(11),p=n(14),g=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],l=t[1],s=Object(c.useState)(null),j=Object(i.a)(s,2),r=j[0],o=j[1],b=Object(c.useState)(null),u=Object(i.a)(b,2),d=u[0],x=u[1],g=Object(c.useState)(),f=Object(i.a)(g,2),y=f[0],T=f[1],v=Object(c.useState)(null),z=Object(i.a)(v,2),P=z[0],I=z[1],S=Object(O.g)(),w=Object(p.a)(),k=Object(c.useCallback)((function(e,t,n,a){l(t),o(e),I(!0),x(n);var c=a||new Date((new Date).getTime()+5184e5);T(c),localStorage.setItem("userData",JSON.stringify({uid:e,token:t,role:n,expiration:c.toISOString()}))}),[]),F=Object(c.useCallback)(Object(h.a)(m.a.mark((function e(){var t=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.length>0&&void 0!==t[0]&&t[0],l(null),o(null),T(null),I(!1),x(null),localStorage.removeItem("userData");case 7:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token?new Date(e.expiration)>new Date?k(e.uid,e.token,e.role):(I(!1),localStorage.removeItem("userData")):I(!1)}),[k]),Object(c.useEffect)((function(){if(n&&y){var e=y.getTime()-(new Date).getTime();a=setTimeout(F,e),"/login"===S.pathname&&w(S.state)}else clearTimeout(a)}),[n,F,y,S.state,S.pathname,w]),{token:n,login:k,logout:F,userId:r,authedUser:P,userRole:d}},f=l.a.lazy((function(){return Promise.all([n.e(1),n.e(34)]).then(n.bind(null,254))})),y=l.a.lazy((function(){return n.e(30).then(n.bind(null,276))})),T=l.a.lazy((function(){return Promise.all([n.e(0),n.e(42)]).then(n.bind(null,269))})),v=l.a.lazy((function(){return n.e(19).then(n.bind(null,255))})),z=l.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(35)]).then(n.bind(null,268))})),P=l.a.lazy((function(){return Promise.all([n.e(0),n.e(41)]).then(n.bind(null,256))})),I=l.a.lazy((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,277))})),S=l.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,278))})),w=l.a.lazy((function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,257))})),k=l.a.lazy((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,279))})),F=l.a.lazy((function(){return Promise.all([n.e(47),n.e(46)]).then(n.bind(null,280))})),D=l.a.lazy((function(){return Promise.all([n.e(0),n.e(40)]).then(n.bind(null,258))})),L=l.a.lazy((function(){return n.e(44).then(n.bind(null,259))})),C=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,281))})),N=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(27)]).then(n.bind(null,113))})),E=l.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(31)]).then(n.bind(null,112))})),J=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(29)]).then(n.bind(null,282))})),R=l.a.lazy((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,283))})),q=l.a.lazy((function(){return n.e(45).then(n.bind(null,260))})),U=l.a.lazy((function(){return Promise.all([n.e(0),n.e(9),n.e(32)]).then(n.bind(null,272))})),B=l.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(28)]).then(n.bind(null,261))})),M=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(24)]).then(n.bind(null,262))})),A=l.a.lazy((function(){return Promise.all([n.e(0),n.e(7),n.e(38)]).then(n.bind(null,270))})),G=l.a.lazy((function(){return Promise.all([n.e(0),n.e(10),n.e(37)]).then(n.bind(null,271))})),H=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(25)]).then(n.bind(null,263))})),K=l.a.lazy((function(){return n.e(13).then(n.bind(null,284))})),Q=l.a.lazy((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,264))})),V=l.a.lazy((function(){return Promise.all([n.e(0),n.e(12),n.e(33)]).then(n.bind(null,273))})),W=l.a.lazy((function(){return Promise.all([n.e(0),n.e(8),n.e(22)]).then(n.bind(null,274))})),X=l.a.lazy((function(){return n.e(14).then(n.bind(null,265))})),Y=l.a.lazy((function(){return Promise.all([n.e(0),n.e(11),n.e(36)]).then(n.bind(null,285))})),Z=l.a.lazy((function(){return Promise.all([n.e(0),n.e(39)]).then(n.bind(null,275))})),$=l.a.lazy((function(){return n.e(43).then(n.bind(null,266))})),_=function(e,t){var n=Object(O.g)();return null!==e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z,{}),Object(b.jsx)(O.e,{children:null===t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{path:"home",element:Object(b.jsx)(T,{})}),Object(b.jsx)(O.c,{path:"about",element:Object(b.jsx)(D,{}),children:" "}),Object(b.jsx)(O.c,{path:"login",element:e?Object(b.jsx)(O.a,{to:"/"}):Object(b.jsx)(y,{})}),Object(b.jsx)(O.c,{path:"signup",state:{redirectTo:"/"},element:e?Object(b.jsx)(O.a,{to:"/"}):Object(b.jsx)(f,{})}),Object(b.jsx)(O.c,{path:"stafflist",element:Object(b.jsx)(F,{}),children:" "}),Object(b.jsx)(O.c,{path:"appointment",element:e?Object(b.jsx)(z,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"registerpet",element:e?Object(b.jsx)(v,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:"registerpet"}})}),Object(b.jsx)(O.c,{path:"adoption",element:e?Object(b.jsx)(P,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"adoptionads",element:e?Object(b.jsx)(I,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"adoptionad/:id",element:e?Object(b.jsx)(S,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"postad",element:e?Object(b.jsx)(w,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}}),children:" "}),Object(b.jsx)(O.c,{path:"postpreview/:id",element:e?Object(b.jsx)(k,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}}),children:" "}),Object(b.jsxs)(O.c,{path:"myprofile",element:Object(b.jsx)(L,{}),children:[Object(b.jsx)(O.c,{index:!0,element:Object(b.jsx)(O.a,{to:"/"})}),Object(b.jsx)(O.c,{path:"mypersonalinfo",element:e?Object(b.jsx)(J,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"account",element:e?Object(b.jsx)(C,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"myadoptionposts",element:e?Object(b.jsx)(N,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"myadoptionrequests",element:e?Object(b.jsx)(E,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"petinfo",element:e?Object(b.jsx)(R,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"*",element:Object(b.jsx)(O.a,{to:"/"}),children:" "})]}),Object(b.jsx)(O.c,{exact:!0,path:"/",element:Object(b.jsx)(T,{})}),Object(b.jsx)(O.c,{path:"*",element:Object(b.jsx)(O.a,{to:"/"}),children:" "})]}):Object(b.jsxs)(b.Fragment,{children:[("receptionist"===t||"admin"===t)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{path:"postpreview/:id",element:e?Object(b.jsx)(k,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}}),children:" "}),Object(b.jsx)(O.c,{path:"adoptionad/:id",element:e?Object(b.jsx)(S,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})})]}),Object(b.jsxs)(O.c,{path:"staffpanel",element:Object(b.jsx)(q,{}),children:[Object(b.jsx)(O.c,{index:!0,element:Object(b.jsx)(O.a,{to:"/"})}),Object(b.jsx)(O.c,{path:"mypersonalinfo",element:e?Object(b.jsx)(J,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"account",element:e?Object(b.jsx)(C,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),("receptionist"===t||"admin"===t)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{path:"manageappointments",element:e?Object(b.jsx)(U,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"registerclient",element:e?Object(b.jsx)(H,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"registerpet",element:e?Object(b.jsx)(Q,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"managepets",element:e?Object(b.jsx)(W,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"putforadoption",element:e?Object(b.jsx)(K,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"adoptionrequests",element:e?Object(b.jsx)(B,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"adoptionposts",element:e?Object(b.jsx)(M,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})})]}),("vet"===t||"admin"===t)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{path:"pettreatmenthistory",element:e?Object(b.jsx)(A,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"activeappointments",element:e?Object(b.jsx)(Y,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})})]}),("trainer"===t||"admin"===t)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{path:"pettraininghistory",element:e?Object(b.jsx)(G,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"activeappointments",element:e?Object(b.jsx)(Y,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})})]}),("groomer"===t||"admin"===t)&&Object(b.jsx)(O.c,{path:"activeappointments",element:e?Object(b.jsx)(Y,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),"admin"===t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.c,{path:"manageusers",element:e?Object(b.jsx)(V,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})}),Object(b.jsx)(O.c,{path:"manageprofits",element:e?Object(b.jsx)(X,{}):Object(b.jsx)(O.a,{to:"/login",state:{redirectTo:n.pathname}})})]}),Object(b.jsx)(O.c,{path:"*",element:Object(b.jsx)(O.a,{to:"/"}),children:" "})]}),Object(b.jsx)(O.c,{path:"*",element:Object(b.jsx)(O.a,{to:"staffpanel/mypersonalinfo"}),children:" "})]})}),Object(b.jsx)($,{})]}):Object(b.jsx)(b.Fragment,{})};var ee=function(){var e=g(window),t=e.token,n=e.login,a=e.logout,l=e.userId,s=e.authedUser,j=e.userRole,O=Object(c.useState)(!1),x=Object(i.a)(O,2),m=x[0],h=x[1],p=_(s,j);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a.Provider,{value:{pageIsLoading:m,setPageIsLoading:h},children:Object(b.jsxs)(r.a.Provider,{value:{isLoggedIn:!!t,userId:l,token:t,login:n,logout:a,userRole:j},children:[Object(b.jsx)(u,{}),Object(b.jsx)(d,{children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)("div",{className:"loading-page",children:Object(b.jsxs)("div",{className:"lds-ripple-page",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),children:p})})]})})})},te=(n(21),n(5));j.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(te.a,{children:Object(b.jsx)(ee,{})})}),document.getElementById("root"))},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=Object(a.createContext)({pageIsLoading:!1,setPageIsLoading:function(){}})}},[[22,5,15]]]);
//# sourceMappingURL=main.28765e23.chunk.js.map