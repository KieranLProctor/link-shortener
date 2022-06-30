import{o,b as i,a as e,r as j,d as b,u as w,e as L,f as r,n as h,g as p,t as m,h as y,i as f,c as g,w as a,L as v,j as c,H as M,k as u,l as S}from"./app.11d9318c.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as C}from"./Dropdown.616ab017.js";const P={},A={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),z=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),D=[N,z];function F(l,s){return o(),i("svg",A,D)}var T=B(P,[["render",F]]);const V={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},I={class:"flex items-center justify-between flex-wrap"},O={class:"w-0 flex-1 flex items-center min-w-0"},H={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},E=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),J=[E],R={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),G=[q],K={class:"ml-3 font-medium text-sm text-white truncate"},Q={class:"shrink-0 sm:ml-3"},U=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),W=[U],X={__name:"Banner",setup(l){const s=j(!0),n=b(()=>{var d;return((d=w().props.value.jetstream.flash)==null?void 0:d.bannerStyle)||"success"}),t=b(()=>{var d;return((d=w().props.value.jetstream.flash)==null?void 0:d.banner)||""});return L(t,async()=>{s.value=!0}),(d,x)=>(o(),i("div",null,[s.value&&r(t)?(o(),i("div",{key:0,class:h({"bg-green-500":r(n)=="success","bg-red-700":r(n)=="error"})},[e("div",V,[e("div",I,[e("div",O,[e("span",{class:h(["flex p-2 rounded-lg",{"bg-green-600":r(n)=="success","bg-red-600":r(n)=="error"}])},[r(n)=="success"?(o(),i("svg",H,J)):p("",!0),r(n)=="error"?(o(),i("svg",R,G)):p("",!0)],2),e("p",K,m(r(t)),1)]),e("div",Q,[e("button",{type:"button",class:h(["-mr-1 flex p-2 focus:outline-none sm:-mr-2 transition",{"hover:bg-green-600 focus:bg-green-600":r(n)=="success","hover:bg-red-600 focus:bg-red-600":r(n)=="error"}]),"aria-label":"Dismiss",onClick:x[0]||(x[0]=y(Oe=>s.value=!1,["prevent"]))},W,2)])])])],2)):p("",!0)]))}},Y={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},Z=["href"],k={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(s,n)=>(o(),i("div",null,[l.as=="button"?(o(),i("button",Y,[f(s.$slots,"default")])):l.as=="a"?(o(),i("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[f(s.$slots,"default")],8,Z)):(o(),g(r(v),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:a(()=>[f(s.$slots,"default")]),_:3},8,["href"]))]))}},$={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const s=l,n=b(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-black text-sm font-medium leading-5 text-black focus:outline-none focus:border-black transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-black hover:border-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(t,d)=>(o(),g(r(v),{href:l.href,class:h(r(n))},{default:a(()=>[f(t.$slots,"default")]),_:3},8,["href","class"]))}},_={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const s=l,n=b(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-black text-base font-medium text-black bg-gray-200 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(t,d)=>(o(),i("div",null,[l.as=="button"?(o(),i("button",{key:0,class:h([r(n),"w-full text-left"])},[f(t.$slots,"default")],2)):(o(),g(r(v),{key:1,href:l.href,class:h(r(n))},{default:a(()=>[f(t.$slots,"default")]),_:3},8,["href","class"]))]))}},ee={class:"min-h-screen bg-gray-100"},te={class:"bg-white border-b border-gray-100"},se={class:"max-w-7xl mx-auto px-4 tablet:px-6 desktop:px-8"},oe={class:"flex justify-between h-16"},re={class:"flex"},ne={class:"shrink-0 flex items-center"},ae={class:"hidden space-x-8 tablet:-my-px tablet:ml-10 tablet:flex"},ie=u(" Dashboard "),le=u(" Links "),ce={class:"hidden tablet:flex tablet:items-center tablet:ml-6"},de={class:"ml-3 relative"},ue={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},he=["src","alt"],fe={key:1,class:"inline-flex"},pe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium text-gray-700 bg-white hover:text-black focus:outline-none transition"},_e=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ge=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),me=u(" Profile "),be=u(" API Tokens "),ve=e("div",{class:"border-t border-gray-100"},null,-1),xe=["onSubmit"],ke=u(" Log Out "),ye={class:"-mr-2 flex items-center sm:hidden"},we={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},$e={class:"pt-2 pb-3 space-y-1"},je=u(" Dashboard "),Le=u(" Links "),Me={class:"pt-4 pb-1 border-t border-gray-200"},Se={class:"flex items-center px-4"},Be={key:0,class:"shrink-0 mr-3"},Ce=["src","alt"],Pe={class:"font-medium text-base text-gray-800"},Ae={class:"font-medium text-sm text-gray-500"},Ne={class:"mt-3 space-y-1"},ze=u(" Profile "),De=u(" API Tokens "),Fe=["onSubmit"],Te=u(" Log Out "),Ve={key:0,class:"bg-white shadow"},Ie={class:"max-w-7xl mx-auto py-6 px-4 tablet:px-6 desktop:px-8"},Re={__name:"AppLayout",props:{title:String},setup(l){const s=j(!1),n=()=>{S.Inertia.post(route("logout"))};return(t,d)=>(o(),i("div",null,[c(r(M),{title:l.title},null,8,["title"]),c(X),e("div",ee,[e("nav",te,[e("div",se,[e("div",oe,[e("div",re,[e("div",ne,[c(r(v),{href:t.route("dashboard")},{default:a(()=>[c(T,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ae,[c($,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[ie]),_:1},8,["href","active"]),c($,{href:t.route("links.index"),active:t.route().current("links.*")},{default:a(()=>[le]),_:1},8,["href","active"])])]),e("div",ce,[e("div",de,[c(C,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),i("button",ue,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,he)])):(o(),i("span",fe,[e("button",pe,[u(m(t.$page.props.user.name)+" ",1),_e])]))]),content:a(()=>[ge,c(k,{href:t.route("profile.show")},{default:a(()=>[me]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),g(k,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[be]),_:1},8,["href"])):p("",!0),ve,e("form",{onSubmit:y(n,["prevent"])},[c(k,{as:"button"},{default:a(()=>[ke]),_:1})],40,xe)]),_:1})])]),e("div",ye,[e("button",{class:"inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:d[0]||(d[0]=x=>s.value=!s.value)},[(o(),i("svg",we,[e("path",{class:h({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:h([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",$e,[c(_,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[je]),_:1},8,["href","active"]),c(_,{href:t.route("links.index"),active:t.route().current("links.*")},{default:a(()=>[Le]),_:1},8,["href","active"])]),e("div",Me,[e("div",Se,[t.$page.props.jetstream.managesProfilePhotos?(o(),i("div",Be,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ce)])):p("",!0),e("div",null,[e("div",Pe,m(t.$page.props.user.name),1),e("div",Ae,m(t.$page.props.user.email),1)])]),e("div",Ne,[c(_,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[ze]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),g(_,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[De]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:y(n,["prevent"])},[c(_,{as:"button"},{default:a(()=>[Te]),_:1})],40,Fe)])])],2)]),t.$slots.header?(o(),i("header",Ve,[e("div",Ie,[f(t.$slots,"header")])])):p("",!0),e("main",null,[f(t.$slots,"default")])])]))}};export{Re as _};
