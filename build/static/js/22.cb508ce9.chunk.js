(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{691:function(e,t,n){"use strict";n.r(t);var a=n(622),r=n.n(a),c=n(623),o=n(367),s=n(43),u=n(620),i=n(1),l=n(624),m=n.n(l),b=n(19),p=n(631),f=(n(629),n(20));t.default=function(){var e=Object(b.g)(),t=Object(b.i)().id,n=Object(i.useState)({name:"",username:"",email:"",number:"",website:""}),a=Object(u.a)(n,2),l=a[0],d=a[1],j=l.name,h=l.username,O=l.email,x=l.number,g=(l.website,function(e){d(Object(s.a)(Object(s.a)({},l),{},Object(o.a)({},e.target.name,e.target.value)))});Object(i.useEffect)((function(){N()}),[]);var v=function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("request",l),a={},l.name&&(a.name=l.name),l.username&&(a.username=l.username),l.email&&(a.email=l.email),l.number&&(a.number=l.number),a._id=l._id,a.login_type="manual",console.log("daaaaaaa",a),t.next=12,m.a.post("/api/user/update-profile",a);case 12:200==t.sent.data.code&&(Object(p.b)("Update successfully"),setTimeout((function(){e.push("/users")}),3e3));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/user/user-details?_id=".concat(t)).then((function(e){console.log("response",e.data),d(e.data.data)})).catch((function(e){console.warn(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(f.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:j,onChange:function(e){return g(e)}})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:h,onChange:function(e){return g(e)}})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:O,onChange:function(e){return g(e)}})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your number Number",name:"number",value:x,onChange:function(e){return g(e)}})}),Object(f.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]}),Object(f.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=22.cb508ce9.chunk.js.map