(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{617:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));var c="http://3.12.65.48:3001",a="http://3.12.65.48:3001/"},630:function(t,e,n){},633:function(t,e,n){"use strict";var c=n(619),a=n(1),r=n(17);e.a=function(t){var e=t.showPerPage,n=t.onPaginationChange,s=t.total,i=t.page,o=Object(a.useState)(i),l=Object(c.a)(o,2),j=l[0],u=l[1],b=Object(a.useState)(),d=Object(c.a)(b,2),O=d[0],h=d[1];console.log("numberOfButtons",O),console.log("total",s),console.log("counter",j),console.log("showPerPage",e),Object(a.useEffect)((function(){n(j,e*j-e),h(Math.ceil(s/e))}),[j]);var p=function(t){"prev"===t?u(1===j?1:j-1):"next"===t&&u(O===j?j:j+1)};return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{class:"pagination",children:[Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return p("prev")},children:"Previous"})}),new Array(O).fill("").map((function(t,e){return Object(r.jsx)("li",{class:"page-item ".concat(e+1===j?"active":null),children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return u(e+1)},children:e+1})})})),Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return p("next")},children:"Next"})})]})})})}},757:function(t,e,n){"use strict";n.r(e);var c=n(159),a=n(40),r=n(622),s=n.n(r),i=n(623),o=n(619),l=n(1),j=n(20),u=n(158),b=n(624),d=n.n(b),O=n(758),h=n(740),p=n(644),x=n(625),f=(n(618),n(617)),g=n(633),m=(n(630),n(17));e.default=function(){Object(j.g)();var t=Object(l.useState)(5),e=Object(o.a)(t,2),n=e[0],r=(e[1],Object(l.useState)(0)),b=Object(o.a)(r,2),v=b[0],k=b[1],y=Object(l.useState)(1),w=Object(o.a)(y,2),S=w[0],P=w[1],C=Object(l.useState)(1),N=Object(o.a)(C,2),I=N[0],A=N[1],B=Object(l.useState)({}),E=Object(o.a)(B,2),J=E[0],K=E[1],R={headers:{token:localStorage.getItem("token")}},_=Object(l.useState)([]),H=Object(o.a)(_,2),L=H[0],M=H[1],q=Object(l.useState)({}),z=Object(o.a)(q,2),D=z[0],F=z[1];Object(j.i)().id;Object(l.useEffect)((function(){G(S,J)}),[S,v,J,D]);var G=function(){var t=Object(i.a)(s.a.mark((function t(e){var n,c,a,r=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,c={page:e,limit:5},0===Object.keys(n).length&&n.constructor===Object||(c.sort=n),0===Object.keys(D).length&&D.constructor===Object||(c.toId=D.text),console.log("datadata",c),t.next=7,d.a.post("".concat(f.a,"/api/admin/get-transaction"),c,R);case 7:if(a=t.sent,console.warn(a.data.data),200!=a.data.code){t.next=14;break}return Object(x.b)("List get successfully"),M(a.data.data.docs),t.next=14,k(a.data.data.total);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("targat",e),{},"option-1"==e&&K(Object(a.a)(Object(a.a)({},J),{},{createdAt:-1})),"option-2"==e&&K(Object(a.a)(Object(a.a)({},J),{},{createdAt:1}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("search text",e.target.name,e.target.value),F(Object(a.a)(Object(a.a)({},D),{},Object(c.a)({},e.target.name,e.target.value)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(u.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(m.jsxs)(O.a,{className:"fltR",alignRight:!0,title:"filter",id:"dropdown-menu-align-right",onSelect:function(t){return Q(t)},children:[Object(m.jsx)(h.a.Item,{eventKey:"option-1",children:"New transactions"}),Object(m.jsx)(h.a.Item,{eventKey:"option-2",children:"Old transaction"})]}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:D.text,onChange:function(t){return T(t)}})}),Object(m.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"S.no"}),Object(m.jsx)("th",{children:"transaction_type"}),Object(m.jsx)("th",{children:"type"}),Object(m.jsx)("th",{children:"amount"}),Object(m.jsx)("th",{children:"Status"})]})}),Object(m.jsx)("tbody",{children:L.map((function(t,e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e+I+1}),Object(m.jsx)("td",{children:t.transaction_type}),Object(m.jsx)("td",{children:t.type}),Object(m.jsx)("td",{children:t.amount}),Object(m.jsx)("td",{children:t.status})]})}))})]}),Object(m.jsx)(x.a,{}),Object(m.jsx)(g.a,{showPerPage:n,onPaginationChange:function(t,e){console.warn("getee, ",t,e),P(t),A(e)},total:v,page:S})]})}}}]);
//# sourceMappingURL=22.68383b21.chunk.js.map