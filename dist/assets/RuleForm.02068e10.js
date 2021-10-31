var f=(e,o,s)=>new Promise((c,r)=>{var m=u=>{try{i(s.next(u))}catch(n){r(n)}},t=u=>{try{i(s.throw(u))}catch(n){r(n)}},i=u=>u.done?c(u.value):Promise.resolve(u.value).then(m,t);i((s=s.apply(e,o)).next())});import{B as b}from"./BasicForm.c1ea146d.js";import{u as _}from"./useForm.f8f25125.js";import{_ as j,af as g,h as A}from"./index.a20e0ed4.js";import{P}from"./index.d2278103.js";import{i as h}from"./system.064f6cd5.js";import{A as v,a0 as B,B as E,a1 as x,a6 as l,H as k,w as d,ae as p}from"./vendor.223c82b6.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.a3e79b75.js";/* empty css                *//* empty css                *//* empty css                */import"./index.f0ea68d9.js";import"./useWindowSizeFn.c7db1b07.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.b3ddab45.js";import"./base64Conver.bb012c73.js";import"./index.4b7b6195.js";/* empty css               *//* empty css                */import"./useContentViewHeight.d6003c94.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,o)=>f(void 0,null,function*(){return o?o==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,o){return new Promise((s,c)=>{h(o).then(()=>s()).catch(r=>{c(r.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],D=v({components:{BasicForm:b,CollapseContainer:g,PageWrapper:P},setup(){const{createMessage:e}=A(),[o,{validateFields:s,clearValidate:c,getFieldsValue:r,resetFields:m,setFieldsValue:t}]=_({labelWidth:120,schemas:C,actionColOptions:{span:24}});function i(){return f(this,null,function*(){try{const a=yield s();console.log("passing",a)}catch(a){console.log("not passing",a)}})}function u(){return f(this,null,function*(){c()})}function n(){const a=r();e.success("values:"+JSON.stringify(a))}function F(){t({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:o,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:n,setFormValues:F,validateForm:i,resetValidate:u,resetFields:m}}}),V={class:"mb-4"},y=p(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 "),q=p(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F "),w=p(" \u83B7\u53D6\u8868\u5355\u503C "),S=p(" \u8BBE\u7F6E\u8868\u5355\u503C "),I=p(" \u91CD\u7F6E ");function N(e,o,s,c,r,m){const t=B("a-button"),i=B("BasicForm"),u=B("CollapseContainer"),n=B("PageWrapper");return E(),x(n,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:l(()=>[k("div",V,[d(t,{onClick:e.validateForm,class:"mr-2"},{default:l(()=>[y]),_:1},8,["onClick"]),d(t,{onClick:e.resetValidate,class:"mr-2"},{default:l(()=>[q]),_:1},8,["onClick"]),d(t,{onClick:e.getFormValues,class:"mr-2"},{default:l(()=>[w]),_:1},8,["onClick"]),d(t,{onClick:e.setFormValues,class:"mr-2"},{default:l(()=>[S]),_:1},8,["onClick"]),d(t,{onClick:e.resetFields,class:"mr-2"},{default:l(()=>[I]),_:1},8,["onClick"])]),d(u,{title:"\u8868\u5355\u6821\u9A8C"},{default:l(()=>[d(i,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var pe=j(D,[["render",N]]);export{pe as default};
