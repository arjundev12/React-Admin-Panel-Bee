(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{619:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="http://3.12.65.48:3001"},624:function(e,t,n){},649:function(e,t,n){"use strict";var r=n(13),a=n(30),c=n(621),s=n.n(c),i=n(1),o=n.n(i),u=n(622),d=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.striped,d=e.bordered,l=e.borderless,b=e.hover,f=e.size,j=e.variant,h=e.responsive,v=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(u.a)(n,"table"),O=s()(c,p,j&&p+"-"+j,f&&p+"-"+f,i&&p+"-striped",d&&p+"-bordered",l&&p+"-borderless",b&&p+"-hover"),m=o.a.createElement("table",Object(r.a)({},v,{className:O,ref:t}));if(h){var x=p+"-responsive";return"string"===typeof h&&(x=x+"-"+h),o.a.createElement("div",{className:x},m)}return m}));t.a=d},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(637);function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}},753:function(e,t,n){"use strict";n.r(t);var r=n(627),a=n.n(r),c=n(663),s=n(628),i=n(625),o=n(1),u=n(20),d=n(158),l=n(630),b=n.n(l),f=n(649),j=n(619),h=n(631),v=(n(624),n(17));t.default=function(){Object(u.g)();var e=Object(o.useState)([{id:"",name:"",user_type:"",status:"",minner_Activity:""}]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(u.i)().id;Object(o.useEffect)((function(){l()}),[]);var l=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,s,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,b.a.post("".concat(j.a,"/api/admin/get-news"));case 3:n=e.sent,console.warn("1111111111",n.data.data),s=Object(c.a)(n.data.data.docs);try{for(s.s();!(i=s.n()).done;)(o=i.value).title&&t.push(o)}catch(a){s.e(a)}finally{s.f()}r(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("oninput change data ",t.target.value,n),(r={}).status=t.target.value,r.id=n._id,e.next=6,b.a.put("".concat(j.a,"/api/admin/news"),r).then((function(e){console.log("response",e),Object(h.b)(e.data.data.message),l()})).catch((function(e){console.log("error",e)}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(d.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(v.jsx)(d.b,{className:"btn btn-primary",to:"/add/news",children:"add News"}),Object(v.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"S.no"}),Object(v.jsx)("th",{children:"Title"}),Object(v.jsx)("th",{children:"Content"}),Object(v.jsx)("th",{class:"address",children:"status"})]})}),Object(v.jsx)("tbody",{children:n.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t+1}),Object(v.jsx)("td",{children:e.title}),Object(v.jsx)("td",{children:e.content}),Object(v.jsx)("td",{children:Object(v.jsxs)("select",{class:"form-control",name:"status",value:e.status?e.status:"active",onChange:function(t){return p(t,e)},children:[Object(v.jsx)("option",{value:"active",children:"Active"}),Object(v.jsx)("option",{value:"inactive",children:"Inactive"})]})}),Object(v.jsx)("td",{})]})}))})]}),Object(v.jsx)(h.a,{})]})}}}]);
//# sourceMappingURL=12.67606699.chunk.js.map