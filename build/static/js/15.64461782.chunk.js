(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{620:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://3.12.65.48:3001"},692:function(e,t,n){"use strict";n.r(t);var a=n(623),r=n.n(a),c=n(624),o=n(367),s=n(43),u=n(621),i=n(1),l=n(625),m=n.n(l),p=n(19),b=n(632),f=(n(630),n(620)),d=n(20);t.default=function(){var e=Object(p.g)(),t=Object(p.i)().id,n=Object(i.useState)({name:"",username:"",email:"",number:"",website:""}),a=Object(u.a)(n,2),l=a[0],j=a[1],h=l.name,O=l.username,x=l.email,g=l.number,v=(l.website,function(e){j(Object(s.a)(Object(s.a)({},l),{},Object(o.a)({},e.target.name,e.target.value)))});Object(i.useEffect)((function(){w()}),[]);var N=function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("request",l),a={},l.name&&(a.name=l.name),l.username&&(a.username=l.username),l.email&&(a.email=l.email),l.number&&(a.number=l.number),a._id=l._id,a.login_type="manual",console.log("daaaaaaa",a),t.next=12,m.a.post("".concat(f.a,"/api/user/update-profile"),a);case 12:200==t.sent.data.code&&(Object(b.b)("Update successfully"),setTimeout((function(){e.push("/users")}),3e3));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(f.a,"/api/user/user-details?_id=").concat(t)).then((function(e){console.log("response",e.data),j(e.data.data)})).catch((function(e){console.warn(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(d.jsxs)("form",{onSubmit:function(e){return N(e)},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:h,onChange:function(e){return v(e)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:O,onChange:function(e){return v(e)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:x,onChange:function(e){return v(e)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your number Number",name:"number",value:g,onChange:function(e){return v(e)}})}),Object(d.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]}),Object(d.jsx)(b.a,{})]})}}}]);
//# sourceMappingURL=15.64461782.chunk.js.map