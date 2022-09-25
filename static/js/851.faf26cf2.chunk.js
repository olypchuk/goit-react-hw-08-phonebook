"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[851],{7851:function(e,a,r){r.r(a),r.d(a,{default:function(){return j}});r(2791);var s=r(4849),n=r(1087),l=r(9434),o=r(4289),i=r(5705),t=r(1724),m=r(8724),d=r(5562),u=r(3360),c=r(3027),h=r(184),p=t.Ry().shape({name:t.Z_().max(15).required("Please enter name").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Must be only letters"),email:t.Z_().required("Please enter email").min(6).max(20),password:t.Z_().required("Please enter password").min(6).max(20)}),x={name:"",email:"",password:""},Z=function(){var e=(0,l.v9)(o.hg),a=(0,l.I0)();return(0,h.jsx)(i.J9,{initialValues:x,onSubmit:function(e,r){var s=r.resetForm;try{a((0,m.SA)(e))}catch(n){d.Notify.error("You canot register"),console.log("error",n)}s()},validationSchema:p,children:function(a){var r=a.values,l=a.errors,o=a.touched,i=a.handleChange,t=a.handleBlur,m=a.handleSubmit,d=a.isSubmitting;return(0,h.jsxs)(c.Z,{onSubmit:m,className:"mx-auto",children:[(0,h.jsxs)(c.Z.Group,{controlId:"name",className:"relative",children:[(0,h.jsx)(c.Z.Label,{children:"Name :"}),(0,h.jsx)(c.Z.Control,{type:"text",name:"name",onChange:i,onBlur:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:r.name,required:!0,className:o.name&&l.name?"error":null}),o.name&&l.name?(0,h.jsx)("div",{className:"error-message",children:l.name}):null]}),(0,h.jsxs)(c.Z.Group,{controlId:"email",className:"relative",children:[(0,h.jsx)(c.Z.Label,{children:"Email :"}),(0,h.jsx)(c.Z.Control,{type:"text",name:"email",onChange:i,onBlur:t,value:r.email,className:o.email&&l.email?"error":null}),o.email&&l.email?(0,h.jsx)("div",{className:"error-message",children:l.email}):null]}),(0,h.jsxs)(c.Z.Group,{controlId:"password",className:"relative",children:[(0,h.jsx)(c.Z.Label,{children:"Password :"}),(0,h.jsx)(c.Z.Control,{type:"password",name:"password",onChange:i,onBlur:t,value:r.password,required:!0,className:o.password&&l.password?"error":null}),o.password&&l.password?(0,h.jsx)("div",{className:"error-message",children:l.password}):null]}),(0,h.jsxs)(u.Z,{variant:"primary",type:"submit",disabled:d,children:["Register",e&&(0,h.jsx)(s.Z,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})]}),(0,h.jsxs)("p",{children:["Already have an account? ",(0,h.jsx)(n.NavLink,{to:"/login",children:"Log in"})]})]})}})},j=function(){return(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=851.faf26cf2.chunk.js.map