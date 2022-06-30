import{y as _,o as u,b as c,j as e,f as o,H as p,w as l,F as w,a,g as h,L as g,n as y,h as v,k as n}from"./app.11d9318c.js";import{J as V,_ as k}from"./AuthenticationCardLogo.9cb852c4.js";import{_ as b}from"./Button.063d8c6d.js";import{_ as d}from"./Input.cfbba764.js";import{_ as x}from"./Checkbox.4d79c065.js";import{_ as i}from"./Label.a60b6ae5.js";import{_ as $}from"./ValidationErrors.ab35678e.js";import"./plugin-vue_export-helper.21dcd24c.js";const P=["onSubmit"],C={class:"mt-4"},F={class:"mt-4"},N={class:"mt-4"},U={key:0,class:"mt-4"},q={class:"flex items-center"},j={class:"ml-2"},A=n(" I agree to the "),B=["href"],R=n(" and "),S=["href"],T={class:"flex items-center justify-end mt-4"},E=n(" Already registered? "),H=n(" Register "),Q={__name:"Register",setup(J){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),f=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(m,t)=>(u(),c(w,null,[e(o(p),{title:"Register"}),e(V,null,{logo:l(()=>[e(k)]),default:l(()=>[e($,{class:"mb-4"}),a("form",{onSubmit:v(f,["prevent"])},[a("div",null,[e(i,{for:"name",value:"Name"}),e(d,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":t[0]||(t[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),a("div",C,[e(i,{for:"email",value:"Email"}),e(d,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":t[1]||(t[1]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),a("div",F,[e(i,{for:"password",value:"Password"}),e(d,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":t[2]||(t[2]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",N,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(u(),c("div",U,[e(i,{for:"terms"},{default:l(()=>[a("div",q,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":t[4]||(t[4]=r=>o(s).terms=r),name:"terms"},null,8,["checked"]),a("div",j,[A,a("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,B),R,a("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,S)])])]),_:1})])):h("",!0),a("div",T,[e(o(g),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[E]),_:1},8,["href"]),e(b,{class:y(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[H]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{Q as default};
