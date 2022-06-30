import{r as u,y as b,o as t,b as s,j as o,f as c,H as g,w as m,F as r,a as l,h as y,n as x,k as n,D as C}from"./app.11d9318c.js";import{J as w,_ as V}from"./AuthenticationCardLogo.9cb852c4.js";import{_ as $}from"./Button.063d8c6d.js";import{_ as p}from"./Input.cfbba764.js";import{_ as v}from"./Label.a60b6ae5.js";import{_ as F}from"./ValidationErrors.ab35678e.js";import"./plugin-vue_export-helper.21dcd24c.js";const I={class:"mb-4 text-sm text-gray-600"},T=n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. "),U=n(" Please confirm access to your account by entering one of your emergency recovery codes. "),B=["onSubmit"],N={key:0},j={key:1},H={class:"flex items-center justify-end mt-4"},J=["onClick"],P=n(" Use a recovery code "),R=n(" Use an authentication code "),S=n(" Log in "),O={__name:"TwoFactorChallenge",setup(z){const a=u(!1),e=b({code:"",recovery_code:""}),_=u(null),f=u(null),h=async()=>{a.value^=!0,await C(),a.value?(_.value.focus(),e.code=""):(f.value.focus(),e.recovery_code="")},k=()=>{e.post(route("two-factor.login"))};return(A,i)=>(t(),s(r,null,[o(c(g),{title:"Two-factor Confirmation"}),o(w,null,{logo:m(()=>[o(V)]),default:m(()=>[l("div",I,[a.value?(t(),s(r,{key:1},[U],64)):(t(),s(r,{key:0},[T],64))]),o(F,{class:"mb-4"}),l("form",{onSubmit:y(k,["prevent"])},[a.value?(t(),s("div",j,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:c(e).recovery_code,"onUpdate:modelValue":i[1]||(i[1]=d=>c(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])])):(t(),s("div",N,[o(v,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:f,modelValue:c(e).code,"onUpdate:modelValue":i[0]||(i[0]=d=>c(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),l("div",H,[l("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(h,["prevent"])},[a.value?(t(),s(r,{key:1},[R],64)):(t(),s(r,{key:0},[P],64))],8,J),o($,{class:x(["ml-4",{"opacity-25":c(e).processing}]),disabled:c(e).processing},{default:m(()=>[S]),_:1},8,["class","disabled"])])],40,B)]),_:1})],64))}};export{O as default};
