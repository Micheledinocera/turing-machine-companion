import{d as L,M as h,N as G,Q as O,z as T,A as w,k as n,l,m as o,D as r,O as _,Z as p,a6 as f,a7 as y,F as m,C as v,Y as i,a1 as C,a8 as P,t as S,x as Y,y as g,_ as A,q as k,a9 as I}from"./entry.d49d13d2.js";const U=t=>(Y("data-v-6918d8f4"),t=t(),g(),t),$={class:"header"},V=U(()=>o("div",{class:"logo"},[o("div",{class:"companion"}," COMPANION ")],-1)),B={class:"select-container"},H=["value"],R=["value"],b=L({__name:"Header",setup(t){const u=h(),d=G(),c=O(),N=T(),E=w(),M=e=>e===i.classic?"classic":e===i.extreme?"extreme":e===i.nightmare?"nightmare":"",D=()=>{N.value=structuredClone(P),E.value=0};return(e,a)=>(n(),l("div",$,[o("div",{class:"info",onClick:a[0]||(a[0]=()=>{u.value=!0,d.value=("MODAL_TYPES"in e?e.MODAL_TYPES:r(_)).credits})}),o("div",{class:"refresh",onClick:a[1]||(a[1]=()=>{u.value=!0,d.value=("MODAL_TYPES"in e?e.MODAL_TYPES:r(_)).newGame})}),V,o("div",B,[p(o("select",{class:"game-mode","onUpdate:modelValue":a[2]||(a[2]=s=>y(c)?c.value=s:null),onChange:D},[(n(!0),l(m,null,v(r(i),s=>(n(),l("option",{value:s},S(e.$t(M(s))),9,H))),256))],544),[[f,r(c)]]),p(o("select",{"onUpdate:modelValue":a[3]||(a[3]=s=>e.$i18n.locale=s)},[(n(!0),l(m,null,v("LANGUAGES"in e?e.LANGUAGES:r(C),s=>(n(),l("option",{value:s.iso},S(s.label),9,R))),256))],512),[[f,e.$i18n.locale]])])]))}});const F=A(b,[["__scopeId","data-v-6918d8f4"]]),q={};function z(t,u){const d=F;return n(),l("div",null,[k(d),I(t.$slots,"default")])}const Z=A(q,[["render",z]]);export{Z as default};
