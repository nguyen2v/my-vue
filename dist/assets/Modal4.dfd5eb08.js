import{B as m,a as l}from"./index.f0ea68d9.js";import{B as c}from"./BasicForm.c1ea146d.js";import{u}from"./useForm.f8f25125.js";import{_ as f}from"./index.a20e0ed4.js";import{A as j,r as b,$ as B,a0 as a,B as x,a1 as g,a6 as h,H as _,w as C,a4 as F}from"./vendor.223c82b6.js";import"./useWindowSizeFn.c7db1b07.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.a3e79b75.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.b3ddab45.js";import"./base64Conver.bb012c73.js";import"./index.4b7b6195.js";const d=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],v=j({components:{BasicModal:m,BasicForm:c},props:{userData:{type:Object}},setup(o){const s=b({}),[n,{}]=u({labelWidth:120,schemas:d,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=l(e=>{e&&i(e)});function i(e){console.log("Data Received",e),s.value={field2:e.data,field1:e.info}}function r(e){e&&o.userData&&B(()=>i(o.userData))}return{register:t,schemas:d,registerForm:n,model:s,handleVisibleChange:r}}}),R={class:"pt-3px pr-3px"};function V(o,s,n,t,i,r){const e=a("BasicForm"),p=a("BasicModal");return x(),g(p,F(o.$attrs,{onRegister:o.register,title:"Modal Title",onVisibleChange:o.handleVisibleChange}),{default:h(()=>[_("div",R,[C(e,{onRegister:o.registerForm,model:o.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var U=f(v,[["render",V]]);export{U as default};
