import{r as n,m as r,o as l,b as i}from"./app.11d9318c.js";const c=["value"],p={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(u,{expose:t}){const e=n(null);return r(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(a,o)=>(l(),i("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=s=>a.$emit("update:modelValue",s.target.value))},null,40,c))}};export{p as _};
