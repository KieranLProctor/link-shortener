import{y as b,o as n,b as d,j as s,f as t,H as w,w as m,F as g,t as h,g as c,a,c as k,L as x,n as y,h as V,k as _}from"./app.11d9318c.js";import{J as v,_ as $}from"./AuthenticationCardLogo.9cb852c4.js";import{_ as B}from"./Button.063d8c6d.js";import{_ as u}from"./Input.cfbba764.js";import{_ as F}from"./Checkbox.4d79c065.js";import{_ as f}from"./Label.a60b6ae5.js";import{_ as L}from"./ValidationErrors.ab35678e.js";import"./plugin-vue_export-helper.21dcd24c.js";const C={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},P={class:"flex items-center"},R=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},j=_(" Forgot your password? "),E=_(" Log in "),I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),p=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(g,null,[s(t(w),{title:"Log in"}),s(v,null,{logo:m(()=>[s($)]),default:m(()=>[s(L,{class:"mb-4"}),l.status?(n(),d("div",C,h(l.status),1)):c("",!0),a("form",{onSubmit:V(p,["prevent"])},[a("div",null,[s(f,{for:"email",value:"Email"}),s(u,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>t(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",S,[s(f,{for:"password",value:"Password"}),s(u,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>t(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",q,[a("label",P,[s(F,{checked:t(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>t(e).remember=r),name:"remember"},null,8,["checked"]),R])]),a("div",U,[l.canResetPassword?(n(),k(t(x),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[j]),_:1},8,["href"])):c("",!0),s(B,{class:y(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[E]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{I as default};
