import{B as m}from"./BasicForm.c1ea146d.js";import{_ as d,af as u,h as c}from"./index.a20e0ed4.js";import{T as l}from"./index.afe665c1.js";import{P as j}from"./index.d2278103.js";import{A as f,a0 as s,B as x,a1 as C,a6 as i,w as n,z as b}from"./vendor.223c82b6.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.a3e79b75.js";/* empty css                *//* empty css                *//* empty css                */import"./index.f0ea68d9.js";import"./useWindowSizeFn.c7db1b07.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.b3ddab45.js";import"./base64Conver.bb012c73.js";import"./index.4b7b6195.js";/* empty css               *//* empty css                */import"./useContentViewHeight.d6003c94.js";const _=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>b(l,{value:e[t],onChange:o=>{e[t]=o}})}],h=f({components:{BasicForm:m,CollapseContainer:u,PageWrapper:j},setup(){const{createMessage:e}=c();return{schemas:_,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function B(e,t,o,g,v,F){const a=s("BasicForm"),r=s("CollapseContainer"),p=s("PageWrapper");return x(),C(p,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[n(r,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[n(a,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Y=d(h,[["render",B]]);export{Y as default};
