(this["webpackJsonppet-clinic-app"]=this["webpackJsonppet-clinic-app"]||[]).push([[42],{269:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(1),i=n(5),a=n(55),s=n(267),l=n(0),o={initial:{x:"97vw",y:0},final:{x:0,transition:{duration:.8}},exit:{x:"-97vw",transition:{duration:.8}}},u=function(){var e=Object(c.useState)([!0,!1,!1,!1]),t=Object(r.a)(e,2),n=t[0],u=t[1],d=Object(c.useRef)([0,0]),p=function(e){"right"===e.target.className?d.current[1]+1!==n.length?(d.current[0]=d.current[1],d.current[1]=d.current[1]+1,o.initial.x="97vw",o.exit.x="-97vw",u((function(){return n.map((function(e,t){return t===d.current[0]||t===d.current[1]?!e:e}))}))):(d.current[0]=3,d.current[1]=0,o.initial.x="97vw",o.exit.x="-97vw",u((function(){return[!0,!1,!1,!1]}))):d.current[1]-1>=0?(d.current[0]=d.current[1],d.current[1]=d.current[1]-1,o.initial.x="-97vw",o.exit.x="97vw",u((function(){return n.map((function(e,t){return t===d.current[0]||t===d.current[1]?!e:e}))}))):(d.current[0]=0,d.current[1]=3,u((function(){return[!1,!1,!1,!0]})))},m=function(e){var t=e.target.className.search("k"),r=e.target.className[t+1];d.current[0]=d.current[1],d.current[1]=Number(r),o.initial.x=d.current[0]<=d.current[1]?"97vw":"-97vw",o.exit.x=d.current[0]>=d.current[1]?"97vw":"-97vw",u((function(){return n.map((function(e,t){return t===d.current[0]||t===d.current[1]?!e:e}))}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"slider-container flex-col gap-16p falign-center",children:[Object(l.jsx)("img",{alt:"direction",src:"/media/imgs/right.png",className:"right",onClick:function(e){return p(e)}}),Object(l.jsx)("img",{alt:"direction",src:"/media/imgs/left.png",className:"left",onClick:function(e){return p(e)}}),Object(l.jsxs)("div",{className:"pag flex-row gap-8p fjust-center",children:[Object(l.jsx)("i",{onClick:function(e){return m(e)},className:!0===n[0]?"fas k0 fa-dot-circle active ":"fas k0 fa-dot-circle"}),Object(l.jsx)("i",{onClick:function(e){return m(e)},className:!0===n[1]?"fas k1 fa-dot-circle active ":"fas k1 fa-dot-circle"}),Object(l.jsx)("i",{onClick:function(e){return m(e)},className:!0===n[2]?"fas k2 fa-dot-circle active ":"fas k2 fa-dot-circle"}),Object(l.jsx)("i",{onClick:function(e){return m(e)},className:!0===n[3]?"fas k3 fa-dot-circle active ":"fas k3 fa-dot-circle"})]}),Object(l.jsxs)("div",{className:"animation-container",children:[Object(l.jsx)(a.a,{children:n[0]&&Object(l.jsxs)(s.a.div,{variants:o,initial:"initial",animate:"final",exit:"exit",className:"slide-content flex-col  gap-24p",children:[Object(l.jsx)("h1",{children:"Appointments"}),Object(l.jsx)("p",{children:"Examination, grooming, check-up and more!"}),Object(l.jsx)(i.b,{to:"/appointment",className:"btn-rec-purple",children:"Make an appointment"}),Object(l.jsx)("img",{className:"slider-img-desktop",src:"/media/imgs/appointment.jpg",alt:"app"}),Object(l.jsx)("img",{className:"slider-img-mobile",src:"/media/imgs/vertical-appointment.jpg",alt:"app"})]})}),Object(l.jsx)(a.a,{children:n[1]&&Object(l.jsxs)(s.a.div,{variants:o,initial:"initial",animate:"final",exit:"exit",className:"slide-content flex-col  gap-24p",children:[Object(l.jsx)("h1",{children:"Adoption"}),Object(l.jsx)("p",{children:"Find pets to adopt or find a home for your pet"}),Object(l.jsx)(i.b,{to:"/adoptionads",className:"btn-rec-purple",children:"Go to adoption posts"}),Object(l.jsx)("img",{className:"slider-img-desktop",src:"/media/imgs/shelter.jpg",alt:"app"}),Object(l.jsx)("img",{className:"slider-img-mobile",src:"/media/imgs/vertical-shelter.jpg",alt:"app"})]})}),Object(l.jsx)(a.a,{children:n[2]&&Object(l.jsxs)(s.a.div,{variants:o,initial:"initial",animate:"final",exit:"exit",className:"slide-content flex-col  gap-24p",children:[Object(l.jsx)("h1",{children:"Pet Training"}),Object(l.jsx)("p",{children:"Get your pet trained by our professional trainers"}),Object(l.jsx)(i.b,{to:"/trainings",className:"btn-rec-purple",children:"Check trainings"}),Object(l.jsx)("img",{className:"slider-img-desktop",src:"/media/imgs/training.jpg",alt:"app"}),Object(l.jsx)("img",{className:"slider-img-mobile",src:"/media/imgs/vertical-training.jpg",alt:"app"})]})}),Object(l.jsx)(a.a,{children:n[3]&&Object(l.jsxs)(s.a.div,{variants:o,initial:"initial",animate:"final",exit:"exit",className:"slide-content flex-col  gap-24p",children:[Object(l.jsx)("h1",{children:"Register your pet"}),Object(l.jsx)("p",{children:"Add your pet to our family"}),Object(l.jsx)(i.b,{to:"/registerpet",className:"btn-rec-purple",children:"Register meow!"}),Object(l.jsx)("img",{className:"slider-img-desktop",src:"/media/imgs/registerpet.jpg",alt:"app"}),Object(l.jsx)("img",{className:"slider-img-mobile",src:"/media/imgs/vertical-register.jpg",alt:"app"})]})})]})]})})},d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"cards-main-container flex-col gap-16p falign-center",children:[Object(l.jsx)("p",{className:"main-header",children:"Your Pet Happiness Journey"}),Object(l.jsxs)("div",{className:"card-container flex-col falign-center gap-16p",children:[Object(l.jsx)("img",{src:"/media/imgs/pet-search.png",alt:"find-pet"}),Object(l.jsx)("p",{className:"card-title",children:"Adopt a pet"}),Object(l.jsx)("p",{className:"card-desc",children:"It's easy to find a pet who's right for you at our shelter or through adoption ads posted by others."})]}),Object(l.jsxs)("div",{className:"card-container flex-col falign-center gap-16p",children:[Object(l.jsx)("img",{src:"/media/imgs/pet-care.png",alt:"pet-care"}),Object(l.jsx)("p",{className:"card-title",children:"Pet care"}),Object(l.jsx)("p",{className:"card-desc",children:"We take care of your pet by the hands of various groomers, doctors and trainers."})]}),Object(l.jsxs)("div",{className:"card-container flex-col falign-center gap-16p",children:[Object(l.jsx)("img",{src:"/media/imgs/pet-shelter.png",alt:"pet-shelter"}),Object(l.jsx)("p",{className:"card-title",children:"Find a home"}),Object(l.jsx)("p",{className:"card-desc",children:"Submit a pet to our shelter or post an adoption ad to find a loving home for the pet."})]})]})})};t.default=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"home-container flex-col",children:[Object(l.jsx)(u,{}),Object(l.jsx)(d,{})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(24),c=n(1),i=n(40);var a=n(37),s=n(39),l=0;function o(){var e=l;return l++,e}var u=function(e){var t=e.children,n=e.initial,r=e.isPresent,i=e.onExitComplete,l=e.custom,u=e.presenceAffectsLayout,p=Object(s.a)(d),m=Object(s.a)(o),j=Object(c.useMemo)((function(){return{id:m,initial:n,isPresent:r,custom:l,onExitComplete:function(e){p.set(e,!0);var t=!0;p.forEach((function(e){e||(t=!1)})),t&&(null===i||void 0===i||i())},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),u?void 0:[r]);return Object(c.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[r]),c.useEffect((function(){!r&&!p.size&&(null===i||void 0===i||i())}),[r]),c.createElement(a.a.Provider,{value:j},t)};function d(){return new Map}var p=n(45);function m(e){return e.key||""}var j=function(e){var t=e.children,n=e.custom,a=e.initial,s=void 0===a||a,l=e.onExitComplete,o=e.exitBeforeEnter,d=e.presenceAffectsLayout,j=void 0===d||d,f=function(){var e=Object(c.useRef)(!1),t=Object(r.c)(Object(c.useState)(0),2),n=t[0],a=t[1];return Object(i.a)((function(){return e.current=!0})),Object(c.useCallback)((function(){!e.current&&a(n+1)}),[n])}(),x=Object(c.useContext)(p.b);Object(p.c)(x)&&(f=x.forceUpdate);var b=Object(c.useRef)(!0),g=function(e){var t=[];return c.Children.forEach(e,(function(e){Object(c.isValidElement)(e)&&t.push(e)})),t}(t),h=Object(c.useRef)(g),O=Object(c.useRef)(new Map).current,v=Object(c.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=m(e);t.set(n,e)}))}(g,O),b.current)return b.current=!1,c.createElement(c.Fragment,null,g.map((function(e){return c.createElement(u,{key:m(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:j},e)})));for(var N=Object(r.e)([],Object(r.c)(g)),k=h.current.map(m),y=g.map(m),w=k.length,E=0;E<w;E++){var C=k[E];-1===y.indexOf(C)?v.add(C):v.delete(C)}return o&&v.size&&(N=[]),v.forEach((function(e){if(-1===y.indexOf(e)){var t=O.get(e);if(t){var r=k.indexOf(e);N.splice(r,0,c.createElement(u,{key:m(t),isPresent:!1,onExitComplete:function(){O.delete(e),v.delete(e);var t=h.current.findIndex((function(t){return t.key===e}));h.current.splice(t,1),v.size||(h.current=g,f(),l&&l())},custom:n,presenceAffectsLayout:j},t))}}})),N=N.map((function(e){var t=e.key;return v.has(t)?e:c.createElement(u,{key:m(e),isPresent:!0,presenceAffectsLayout:j},e)})),h.current=N,c.createElement(c.Fragment,null,v.size?N:N.map((function(e){return Object(c.cloneElement)(e)})))}}}]);
//# sourceMappingURL=42.adb656ed.chunk.js.map