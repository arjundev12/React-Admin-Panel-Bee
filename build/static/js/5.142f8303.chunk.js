(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{617:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}));var n="http://3.12.65.48:3001",a="http://3.12.65.48:3001/"},618:function(e,t,c){},767:function(e,t,c){"use strict";c.r(t);var n=c(622),a=c.n(n),r=c(652);var s=c(638);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=c(623),l=c(619),j=c(1),u=c(20),b=c(624),d=c.n(b),m=c(625),p=(c(618),c(663),c(617)),h=c(621),O=c(620),x=c(17);t.default=Object(u.j)((function(e){var t=Object(j.useState)(""),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(j.useState)(""),b=Object(l.a)(s,2),f=b[0],y=b[1],g=Object(j.useState)([]),v=Object(l.a)(g,2),w=v[0],k=v[1],S=Object(u.g)(),N=function(){var e=Object(i.a)(a.a.mark((function e(t){var c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={email:n,password:f},k([].concat(o(w),[c])),e.next=5,d.a.post("".concat(p.a,"/api/admin/login"),c);case 5:r=e.sent,console.warn(r.data),200==r.data.code&&(localStorage.setItem("Auth",!0),localStorage.setItem("token",r.data.data.token),setTimeout((function(){S.push("/")}),500),setTimeout((function(){localStorage.clear()}),288e4)),console.warn(w);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"c-app c-default-layout flex-row align-items-center",children:[Object(x.jsx)(h.m,{children:Object(x.jsx)(h.I,{className:"justify-content-center",children:Object(x.jsx)(h.k,{md:"8",children:Object(x.jsx)(h.i,{children:Object(x.jsx)(h.f,{className:"p-4",children:Object(x.jsx)(h.g,{children:Object(x.jsxs)(h.u,{action:"",onSubmit:N,children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(x.jsxs)(h.C,{className:"mb-3",children:[Object(x.jsx)(h.E,{children:Object(x.jsx)(h.F,{children:Object(x.jsx)(O.a,{name:"cil-user"})})}),Object(x.jsx)(h.B,{type:"text",placeholder:"Username",autoComplete:"username",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(x.jsxs)(h.C,{className:"mb-4",children:[Object(x.jsx)(h.E,{children:Object(x.jsx)(h.F,{children:Object(x.jsx)(O.a,{name:"cil-lock-locked"})})}),Object(x.jsx)(h.B,{type:"password",placeholder:"Password",autoComplete:"current-password",value:f,onChange:function(e){return y(e.target.value)}})]}),Object(x.jsxs)(h.I,{children:[Object(x.jsx)(h.k,{xs:"6",children:Object(x.jsx)(h.e,{color:"primary",className:"px-4",type:"submit",children:"Login"})}),Object(x.jsx)(h.k,{xs:"6",className:"text-right",children:Object(x.jsx)(h.e,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})})})})})}),Object(x.jsx)(m.a,{})]})}))}}]);
//# sourceMappingURL=5.142f8303.chunk.js.map