import{d as W,z as X,A as ce,B as Ce,c as oe,r as U,k as s,l as o,m as i,F as _,C as h,D as e,E as j,G as v,S as se,t as m,H as ne,I as he,J as P,x as re,y as de,_ as z,o as $e,K as _e,L as fe,V as ee,M as ue,N as ve,O as B,P as Se,Q as le,R as be,T as Le,U as H,W as Ae,X as Y,Y as ge,Z as ae,v as ie,$ as ke,a0 as we,a1 as ye,a2 as Ne,a3 as Oe,a4 as Re,a5 as Ee,a6 as Me,a7 as Fe,q as F,j as Pe}from"./entry.99281c05.js";const Te=y=>(re("data-v-0b43fc44"),y=y(),de(),y),De={class:"combinations-table"},Ve={class:"row header"},Ye=Te(()=>i("div",{class:"select-row"},null,-1)),Ze={key:0,class:v(["row"])},Ge=Te(()=>i("div",{class:"select-row"},null,-1)),He=["onClick"],Ue={class:"value"},We={key:0,class:"choice-menu"},je=["onClick"],Be=["id"],ze=["onClick"],Ke=["onClick"],qe={class:"value"},Je={key:0,class:"choice-menu"},Qe=["onClick"],Xe=W({__name:"CombinationsTable",props:{fixed:{type:Boolean}},setup(y){const c=X(),l=ce(),{selectedRowRef:r}=Ce(),S=oe(()=>c.value.noteRows),p=U([!1,!1,!1]),g=t=>{const C=p.value[t];p.value=[!1,!1,!1],p.value[t]=!C},M=(t,C,n)=>{c.value.noteRows[C].code[t]=n,p.value[t]=!1};return(t,C)=>(s(),o("div",De,[i("div",Ve,[Ye,(s(!0),o(_,null,h(("arrayFromZeroToNumber"in t?t.arrayFromZeroToNumber:e(j))(3),n=>(s(),o("div",{class:"item",key:"header_"+n}))),128))]),t.fixed?(s(),o("div",Ze,[Ge,(s(!0),o(_,null,h(("arrayFromZeroToNumber"in t?t.arrayFromZeroToNumber:e(j))(3),n=>(s(),o("div",{key:"item_"+e(S)[e(l)].code[n]+"_"+n,class:v(["item",("SHAPES"in t?t.SHAPES:e(se))[n]]),onClick:()=>g(n)},[i("div",Ue,m(e(S)[e(l)].code[n]),1),e(p)[n]?(s(),o("div",We,[(s(!0),o(_,null,h(("arrayFromOneToNumber"in t?t.arrayFromOneToNumber:e(ne))(5),d=>(s(),o("div",{class:"menu-item",onClick:he(()=>M(n,e(l),d),["stop"])},m(d),9,je))),256))])):P("",!0)],10,He))),128))])):(s(!0),o(_,{key:1},h(e(S),(n,d)=>(s(),o("div",{class:v(["row",{inactive:d!=e(l)}]),ref_for:!0,ref:f=>{d==e(S).length-1&&(r.value=f)},key:"item_rownote_"+d,id:"item_rownote_"+d},[i("div",{class:"select-row",onClick:()=>l.value=d},null,8,ze),(s(!0),o(_,null,h(("arrayFromZeroToNumber"in t?t.arrayFromZeroToNumber:e(j))(3),f=>(s(),o("div",{key:"item_"+n.code[f]+"_"+f,class:v(["item",("SHAPES"in t?t.SHAPES:e(se))[f]]),onClick:()=>g(f)},[i("div",qe,m(n.code[f]),1),e(p)[f]?(s(),o("div",Je,[(s(!0),o(_,null,h(("arrayFromOneToNumber"in t?t.arrayFromOneToNumber:e(ne))(5),w=>(s(),o("div",{class:"menu-item",onClick:he(()=>M(f,d,w),["stop"])},m(w),9,Qe))),256))])):P("",!0)],10,Ke))),128))],10,Be))),128))]))}});const Ie=z(Xe,[["__scopeId","data-v-0b43fc44"]]),me=()=>{const y=U("desktop"),c=oe(()=>y.value=="mobile"||y.value=="tablet"),l=()=>{window.innerWidth>768?y.value="desktop":y.value=window.innerWidth>425?"tablet":"mobile"};return $e(()=>{l(),window.addEventListener("resize",()=>l())}),{isNotDesktop:c}},xe={class:"verifications-checklist"},es={class:"table-container"},ss={class:"row header"},os={class:"item"},ts={class:"label"},as={key:0,class:v(["row"])},is=["onClick"],ns=["onClick"],ls=W({__name:"VerificationsChecklist",props:{fixed:{type:Boolean}},setup(y){const{t:c}=_e(),l=X(),r=ce(),{isNotDesktop:S}=me(),p=oe(()=>l.value.noteRows),g=d=>d===null?"empty":d?"ok":"ko",M=()=>{l.value.noteRows=[...l.value.noteRows,structuredClone(fe)],r.value=l.value.noteRows.length-1},t=d=>p.value[d].verificators.filter(f=>f!==null).length,C=(d,f)=>d===null&&t(f)>=3,n=(d,f,w)=>{let b=ee.indexOf(w);b=(b+1+ee.length)%ee.length,l.value.noteRows[d].verificators[f]=ee[b]};return(d,f)=>(s(),o("div",xe,[i("div",es,[i("div",ss,[(s(!0),o(_,null,h(e(l).laws.map(w=>w.key),w=>(s(),o("div",os,[i("div",ts,m(w),1)]))),256))]),d.fixed?(s(),o("div",as,[(s(!0),o(_,null,h(e(l).laws.map(w=>w.key),(w,b)=>(s(),o("div",{class:"item",key:"verificator_"+w+"_"+e(r)},[i("div",{class:v(["checkbox",g(e(p)[e(r)].verificators[b]),{inactive:C(e(p)[e(r)].verificators[b],e(r))}]),onClick:()=>n(e(r),b,e(p)[e(r)].verificators[b])},null,10,is)]))),128))])):(s(!0),o(_,{key:1},h(e(p),(w,b)=>(s(),o("div",{class:v(["row",{inactive:b!=e(r)}])},[(s(!0),o(_,null,h(e(l).laws.map(E=>E.key),(E,D)=>(s(),o("div",{class:"item",key:"verificator_"+E+"_"+b},[i("div",{class:v(["checkbox",g(w.verificators[D]),{inactive:C(w.verificators[D],b)}]),onClick:()=>n(b,D,w.verificators[D])},null,10,ns)]))),128))],2))),256)),e(S)?(s(),o("div",{key:2,class:v(["add"]),onClick:M},m(e(c)("newNoteRow")),1)):P("",!0)])]))}});const cs=z(ls,[["__scopeId","data-v-85efc572"]]),rs=y=>(re("data-v-e0148fc3"),y=y(),de(),y),ds=rs(()=>i("div",{class:"icon"},null,-1)),_s=[ds],us={class:"row header"},vs={class:"item"},ms={class:"row"},ps=["onClick"],hs={class:"value"},ks=W({__name:"PossibleCodesPicklist",setup(y){const c=X(),l=U(!0),{isNotDesktop:r}=me(),S=ue(),p=ve(),g=(t,C)=>c.value.possibleCodes[C].includes(t),M=(t,C)=>{var n=c.value.possibleCodes[C].indexOf(t);n==-1?c.value.possibleCodes[C].push(t):c.value.possibleCodes[C].splice(n,1)};return(t,C)=>(s(),o("div",{class:v(["possible-codes-picklist",{collapsed:e(r)&&e(l)}])},[i("div",{class:"collapse",onClick:C[0]||(C[0]=n=>l.value=!e(l))},_s),i("div",us,[(s(!0),o(_,null,h("SHAPES"in t?t.SHAPES:e(se),n=>(s(),o("div",vs))),256))]),(s(!0),o(_,null,h(("arrayFromOneToNumber"in t?t.arrayFromOneToNumber:e(ne))(5),n=>(s(),o("div",ms,[(s(!0),o(_,null,h(("arrayFromZeroToNumber"in t?t.arrayFromZeroToNumber:e(j))(3),d=>(s(),o("div",{class:v(["item",{inactive:g(n,d)},("SHAPES"in t?t.SHAPES:e(se))[d]]),onClick:()=>M(n,d)},[i("div",hs,m(n),1)],10,ps))),256))]))),256)),e(c).possibleCodes[0].length==4&&e(c).possibleCodes[1].length==4&&e(c).possibleCodes[2].length==4?(s(),o("div",{key:0,class:"check-code",onClick:C[1]||(C[1]=()=>{S.value=!0,p.value=("MODAL_TYPES"in t?t.MODAL_TYPES:e(B)).checkCodeSure})},m(t.$t("checkCode")),1)):P("",!0)],2))}});const ys=z(ks,[["__scopeId","data-v-e0148fc3"]]),Cs=W({__name:"LabelItem",props:{value:{}},setup(y){const c=U(!1);return(l,r)=>(s(),o("div",{class:v(["label",{inactive:e(c)}]),onClick:r[0]||(r[0]=()=>c.value=!e(c))},m(l.value),3))}});const fs=z(Cs,[["__scopeId","data-v-4dda831e"]]),te=y=>(re("data-v-ac7b4b61"),y=y(),de(),y),bs={class:"law-item"},gs={class:"key"},ws={class:"text-container"},Ts=["onUpdate:modelValue"],$s=["onClick"],Ss={class:"conditions-container"},Ls={class:"condition-container"},As=["onClick"],Ns=["onClick"],Os={key:0,class:"possibility-container"},Rs=te(()=>i("div",{class:"check"},null,-1)),Es={class:"value"},Ms={class:"law-item"},Fs={class:"label-container"},Ps={class:"key"},Ds={class:"law-id"},Vs=te(()=>i("div",{class:"icon"},null,-1)),Ys=["onClick"],Zs=["data-src","alt"],Gs={class:"conditions-container with-imgs"},Hs=["data-src","alt","onClick"],Us={class:"law-item"},Ws={class:"label-container"},js={class:"key"},Bs={class:"law-id"},zs=te(()=>i("div",{class:"icon"},null,-1)),Ks=["onClick"],qs=["data-src","alt"],Js={class:"conditions-container with-imgs"},Qs=["data-src","alt","onClick"],Xs={class:"labels-container"},Is={class:"label-container"},xs={class:"key"},eo=te(()=>i("div",{class:"icon"},null,-1)),so={class:"law-items"},oo={class:"law-item"},to={class:"label-container"},ao={class:"labels"},io={class:"law-id"},no=["onClick"],lo=["data-src","alt"],co={class:"conditions-container with-imgs"},ro=["data-src","alt","onClick"],_o=W({__name:"LawsContainer",async setup(y){let c,l;const r=ue(),S=ve(),p=Se(),g=X(),{gameInfoOk:M,gameInfo:t}=([c,l]=le(()=>be()),c=await c,l(),c),C=Le(),n=U(Object.values(H).map(()=>"")),{locale:d}=_e(),f=a=>{g.value.laws[a].possibilities.push({value:n.value[a],active:!0}),n.value[a]=""},w=(a,k)=>{g.value.laws[a].possibilities.splice(k,1)},b=(a,k)=>{g.value.laws[a].possibilities[k].active=!g.value.laws[a].possibilities[k].active},E=a=>g.value.laws[a].possibilities.filter(k=>k.active),D=a=>n.value[a]===""||g.value.laws[a].possibilities.find(k=>k.value==n.value[a]),K=a=>{const k=ye.find(L=>L.iso==d.value),R=k?k.value:"en";return Ne.replaceAll("{locale}",R.toUpperCase()).replace("{possibility}",a+"")},Z=a=>{const k=(a<10?"0":"")+a,R=ye.find(G=>G.iso==d.value),L=R?R.value:"en";return Oe.replaceAll("{locale}",L.toUpperCase()).replace("{lawId}",k)},I=a=>{var R,L;var k=[(R=t.value)==null?void 0:R.ind[a],(L=t.value)==null?void 0:L.fake[a]];return{inds:[k[C.value[a]],k[1-C.value[a]]]}};return(a,k)=>{var G,q,J,x,pe;const R=fs,L=Ae("lazy-load");return s(),o("div",{class:v(["laws-container","mode_"+((G=e(t))==null?void 0:G.m)])},[e(M)?(s(),o(_,{key:1},[((q=e(t))==null?void 0:q.m)==("gameModes"in a?a.gameModes:e(ae)).classic?(s(!0),o(_,{key:0},h(e(g).laws,(T,u)=>{var A,N,O;return s(),o("div",Ms,[i("div",Fs,[i("div",Ps,m(T.key),1),i("div",Ds,m((A=e(t))==null?void 0:A.ind[u]),1),i("div",{class:v(["rule-id","color_"+((N=e(t))==null?void 0:N.color)])},[ie(m((O=e(t))==null?void 0:O.crypt[u])+" ",1),Vs],2)]),i("div",{class:"law-container",onClick:()=>{p.value=e(t)?e(t).ind[u]:1,r.value=!0,S.value=("MODAL_TYPES"in a?a.MODAL_TYPES:e(B)).cardDetail}},[Y(i("img",{"data-src":Z(e(t).ind[u]),alt:"law_card_"+T},null,8,Zs),[[L]])],8,Ys),i("div",Gs,[(s(!0),o(_,null,h(("LAWS_VERIFICATORS"in a?a.LAWS_VERIFICATORS:e(ke))[e(t).ind[u]],($,V)=>{var Q;return s(),o("div",{class:v(["condition-container",{definitive:E(u).length==1},{inactive:!((Q=T.possibilities[V])!=null&&Q.active)}])},[Y(i("img",{class:v(["condition"]),"data-src":K($),alt:"law_image_"+a.$i18n.locale+"_"+$,onClick:()=>b(u,V)},null,8,Hs),[[L]])],2)}),256))])])}),256)):((J=e(t))==null?void 0:J.m)==("gameModes"in a?a.gameModes:e(ae)).extreme?(s(!0),o(_,{key:1},h(e(g).laws,(T,u)=>{var A,N;return s(),o("div",Us,[i("div",Ws,[i("div",js,m(T.key),1),(s(!0),o(_,null,h(I(u).inds,O=>(s(),o("div",Bs,m(O),1))),256)),i("div",{class:v(["rule-id","color_"+((A=e(t))==null?void 0:A.color)])},[ie(m((N=e(t))==null?void 0:N.crypt[u])+" ",1),zs],2)]),(s(!0),o(_,null,h(I(u).inds,O=>(s(),o("div",{class:"law-container",onClick:()=>{p.value=O??1,r.value=!0,S.value=("MODAL_TYPES"in a?a.MODAL_TYPES:e(B)).cardDetail}},[Y(i("img",{"data-src":Z(O??1),alt:"law_card_"+O},null,8,qs),[[L]])],8,Ks))),256)),i("div",Js,[(s(!0),o(_,null,h(T.possibilities,(O,$)=>{var V;return s(),o("div",{class:v(["condition-container",{definitive:E(u).length==1},{inactive:!((V=T.possibilities[$])!=null&&V.active)}])},[Y(i("img",{class:v(["condition"]),"data-src":K(O.value),alt:"law_image_"+a.$i18n.locale+"_"+O,onClick:()=>b(u,$)},null,8,Qs),[[L]])],2)}),256))])])}),256)):((x=e(t))==null?void 0:x.m)==("gameModes"in a?a.gameModes:e(ae)).nightmare?(s(),o(_,{key:2},[i("div",Xs,[(s(!0),o(_,null,h(("arrayFromZeroToNumber"in a?a.arrayFromZeroToNumber:e(j))((pe=e(t))==null?void 0:pe.ind.length),(T,u)=>{var A,N;return s(),o("div",Is,[i("div",xs,m(Object.keys("LawType"in a?a.LawType:e(H))[u]),1),i("div",{class:v(["rule-id","color_"+((A=e(t))==null?void 0:A.color)])},[ie(m((N=e(t))==null?void 0:N.crypt[u])+" ",1),eo],2)])}),256))]),i("div",so,[(s(!0),o(_,null,h(e(g).laws,(T,u)=>{var A,N,O;return s(),o("div",oo,[i("div",to,[i("div",ao,[(s(!0),o(_,null,h(("arrayFromZeroToNumber"in a?a.arrayFromZeroToNumber:e(j))((A=e(t))==null?void 0:A.ind.length),$=>(s(),we(R,{value:Object.keys("LawType"in a?a.LawType:e(H))[$]},null,8,["value"]))),256))]),i("div",io,m((N=e(t))==null?void 0:N.ind[Object.values("LawType"in a?a.LawType:e(H)).findIndex($=>$==T.key)]),1)]),i("div",{class:"law-container",onClick:()=>{p.value=e(t)?e(t).ind[Object.values("LawType"in a?a.LawType:e(H)).findIndex($=>$==T.key)]:1,r.value=!0,S.value=("MODAL_TYPES"in a?a.MODAL_TYPES:e(B)).cardDetail}},[Y(i("img",{"data-src":Z(e(t).ind[Object.values("LawType"in a?a.LawType:e(H)).findIndex($=>$==T.key)]),alt:"law_card_"+T},null,8,lo),[[L]])],8,no),i("div",co,[(s(!0),o(_,null,h(("LAWS_VERIFICATORS"in a?a.LAWS_VERIFICATORS:e(ke))[(O=e(t))==null?void 0:O.ind[Object.values("LawType"in a?a.LawType:e(H)).findIndex($=>$==T.key)]],($,V)=>{var Q;return s(),o("div",{class:v(["condition-container",{definitive:E(u).length==1},{inactive:!((Q=T.possibilities[V])!=null&&Q.active)}])},[Y(i("img",{class:v(["condition"]),"data-src":K($),alt:"law_image_"+a.$i18n.locale+"_"+$,onClick:()=>b(u,V)},null,8,ro),[[L]])],2)}),256))])])}),256))])],64)):P("",!0)],64)):(s(!0),o(_,{key:0},h(e(g).laws,(T,u)=>(s(),o("div",bs,[i("div",gs,m(T.key),1),i("div",ws,[Y(i("input",{type:"text","onUpdate:modelValue":A=>e(n)[u]=A},null,8,Ts),[[ge,e(n)[u]]]),i("div",{class:v(["add",{inactive:D(u)}]),onClick:()=>f(u)}," + ",10,$s)]),i("div",Ss,[(s(!0),o(_,null,h(T.possibilities,(A,N)=>(s(),o("div",Ls,[i("div",{class:"remove",onClick:()=>w(u,N)}," - ",8,As),i("div",{class:v(["condition",{inactive:!A.active}]),onClick:()=>b(u,N)},m(A.value),11,Ns)]))),256))]),E(u).length==1?(s(),o("div",Os,[Rs,i("div",Es,m(E(u)[0].value),1)])):P("",!0)]))),256))],2)}}});const uo=z(_o,[["__scopeId","data-v-ac7b4b61"]]),vo={class:"add-container"},mo={key:0,class:"game-info-container"},po={class:"oppure"},ho={class:"game-info"},ko=["placeholder","onKeydown"],yo={key:1,class:"game-info"},Co={key:0,class:"row fixed with-button"},fo={class:"row"},bo={class:"row with-button"},go={class:"row"},wo={class:"row"},To={class:"row"},$o=W({__name:"Note",async setup(y){let c,l;const r=U(""),S=U(!1),{gameInfoOk:p,gameInfo:g,getGameInfo:M}=([c,l]=le(()=>be()),c=await c,l(),c),t=X(),C=ce(),{t:n}=_e(),{isNotDesktop:d}=me(),f=Re(),{isFixedRow:w}=Ce(),b=ue(),E=ve(),D=Ee(),K=()=>{t.value.noteRows=[...t.value.noteRows,structuredClone(fe)],C.value=t.value.noteRows.length-1},Z=async()=>{S.value=!0,await M(r.value),S.value=!1,r.value=""},I=oe(()=>p.value===null||r.value.length>0?n("getInfo"):p.value?n("ok"):n("ko"));return f.query.code&&(r.value=f.query.code,[c,l]=le(()=>Z()),await c,l()),(a,k)=>{var J;const R=Ie,L=cs,G=ys,q=uo;return s(),o("div",{class:v(["note-container",{disabled:e(D)}])},[i("div",vo,[!e(p)&&!e(S)?(s(),o("div",mo,[i("div",{class:"create-game",onClick:k[0]||(k[0]=()=>{b.value=!0,E.value=("MODAL_TYPES"in a?a.MODAL_TYPES:e(B)).createGame})},m(a.$t("createGame")),1),i("div",po,m(a.$t("or")),1),i("div",ho,[Y(i("input",{type:"text",placeholder:e(n)("gameCode"),"onUpdate:modelValue":k[1]||(k[1]=x=>Me(r)?r.value=x:null),onKeydown:Fe(Z,["enter"])},null,40,ko),[[ge,e(r)]]),i("div",{class:v(["get-info",{inactive:e(r)==""},{error:!e(p)}]),onClick:Z},m(e(I)),3)])])):e(p)?(s(),o("div",yo,[i("div",{class:"game-code",onClick:k[2]||(k[2]=()=>{b.value=!0,E.value=("MODAL_TYPES"in a?a.MODAL_TYPES:e(B)).shareCode})},m(a.$t("gameCode"))+": "+m((J=e(g))==null?void 0:J.hash.replace(/\s/g,"")),1)])):P("",!0),e(p)&&!e(d)?(s(),o("div",{key:2,class:v(["add"]),onClick:K},m(a.$t("newNoteRow")),1)):P("",!0)]),e(p)?(s(),o(_,{key:0},[e(d)?(s(),o(_,{key:0},[e(w)?(s(),o("div",Co,[F(R,{fixed:!0}),F(L,{fixed:!0})])):P("",!0),i("div",fo,[F(G)]),i("div",bo,[F(R),F(L)]),i("div",go,[F(q)])],64)):(s(),o(_,{key:1},[i("div",wo,[F(R),F(L)]),i("div",To,[F(G),F(q)])],64))],64)):(s(),o("div",{key:1,class:v(["splash-screen",{loading:e(S)}])},null,2))],2)}}});const So=z($o,[["__scopeId","data-v-ddeaca7a"]]),Ao=W({__name:"index",setup(y){return Pe({title:"Turing Machine Companion"}),(c,l)=>{const r=So;return s(),we(r)}}});export{Ao as default};