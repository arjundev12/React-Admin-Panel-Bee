(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{617:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));var c="http://3.12.65.48:3001",a="http://3.12.65.48:3001/"},630:function(t,e,n){},633:function(t,e,n){"use strict";var c=n(619),a=n(1),r=n(17);e.a=function(t){var e=t.showPerPage,n=t.onPaginationChange,s=t.total,i=t.page,o=Object(a.useState)(i),l=Object(c.a)(o,2),j=l[0],u=l[1],b=Object(a.useState)(),d=Object(c.a)(b,2),O=d[0],h=d[1];console.log("numberOfButtons",O),console.log("total",s),console.log("counter",j),console.log("showPerPage",e),Object(a.useEffect)((function(){n(j,e*j-e),h(Math.ceil(s/e))}),[j]);var p=function(t){"prev"===t?u(1===j?1:j-1):"next"===t&&u(O===j?j:j+1)};return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{class:"pagination",children:[Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return p("prev")},children:"Previous"})}),new Array(O).fill("").map((function(t,e){return Object(r.jsx)("li",{class:"page-item ".concat(e+1===j?"active":null),children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return u(e+1)},children:e+1})})})),Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return p("next")},children:"Next"})})]})})})}},757:function(t,e,n){"use strict";n.r(e);var c=n(159),a=n(40),r=n(622),s=n.n(r),i=n(623),o=n(619),l=n(1),j=n(20),u=n(624),b=n.n(u),d=n(758),O=n(740),h=n(644),p=n(625),f=(n(618),n(617)),x=n(633),g=(n(630),n(17));e.default=function(){Object(j.g)();var t=Object(l.useState)(10),e=Object(o.a)(t,2),n=e[0],r=(e[1],Object(l.useState)(0)),u=Object(o.a)(r,2),v=u[0],m=u[1],k=Object(l.useState)(1),w=Object(o.a)(k,2),y=w[0],S=w[1],P=Object(l.useState)(1),C=Object(o.a)(P,2),N=C[0],I=C[1],A=Object(l.useState)({}),B=Object(o.a)(A,2),E=B[0],J=B[1],K={headers:{token:localStorage.getItem("token")}},R=Object(l.useState)([]),_=Object(o.a)(R,2),L=_[0],M=_[1],q=Object(l.useState)({}),z=Object(o.a)(q,2),D=z[0],F=z[1];Object(j.i)().id;Object(l.useEffect)((function(){G(y,E)}),[y,v,E,D]);var G=function(){var t=Object(i.a)(s.a.mark((function t(e){var n,c,a,r=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,c={page:e,limit:10},0===Object.keys(n).length&&n.constructor===Object||(c.sort=n),0===Object.keys(D).length&&D.constructor===Object||(c.toId=D.text),console.log("datadata",c),t.next=7,b.a.post("".concat(f.a,"/api/admin/get-transaction"),c,K);case 7:if(a=t.sent,console.warn(a.data.data),200!=a.data.code){t.next=14;break}return Object(p.b)("List get successfully"),M(a.data.data.docs),t.next=14,m(a.data.data.total);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("targat",e),{},"option-1"==e&&J(Object(a.a)(Object(a.a)({},E),{},{createdAt:-1})),"option-2"==e&&J(Object(a.a)(Object(a.a)({},E),{},{createdAt:1}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("search text",e.target.name,e.target.value),F(Object(a.a)(Object(a.a)({},D),{},Object(c.a)({},e.target.name,e.target.value)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsxs)(d.a,{className:"fltR",alignRight:!0,title:"filter",id:"dropdown-menu-align-right",onSelect:function(t){return H(t)},children:[Object(g.jsx)(O.a.Item,{eventKey:"option-1",children:"New transactions"}),Object(g.jsx)(O.a.Item,{eventKey:"option-2",children:"Old transaction"})]}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:D.text,onChange:function(t){return Q(t)}})}),Object(g.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"S.no"}),Object(g.jsx)("th",{children:"transaction_type"}),Object(g.jsx)("th",{children:"type"}),Object(g.jsx)("th",{children:"amount"}),Object(g.jsx)("th",{children:"Status"})]})}),Object(g.jsx)("tbody",{children:L.map((function(t,e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e+N+1}),Object(g.jsx)("td",{children:t.transaction_type}),Object(g.jsx)("td",{children:t.type}),Object(g.jsx)("td",{children:t.amount}),Object(g.jsx)("td",{children:t.status})]})}))})]}),Object(g.jsx)(p.a,{}),v>0?Object(g.jsx)(x.a,{showPerPage:n,onPaginationChange:function(t,e){console.warn("getee, ",t,e),S(t),I(e)},total:v,page:y}):""]})}}}]);
//# sourceMappingURL=22.9dbf6eee.chunk.js.map