(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{123:function(e,n,t){"use strict";t.r(n);var i,a,r,c,o,s,l,d,u,j,b,f,x,h,p,O,v,g,m,y,w,k,S,z=t(0),C=t.n(z),U=t(29),F=t.n(U),I=t(14),N=t(85),E=t(10),L=t(22),M=t.n(L),J=t(26),V=t(125),D=t(7),T=t(8),A=T.a.div(i||(i=Object(D.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),B=t(2),H=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,a=e.bold;return Object(B.jsx)(V.a,{children:Object(B.jsx)(A,{size:t,bold:a,children:i})})},G=t(18),P=t(151),q=function(e){var n=e.size,t=e.color,i=e.thickness,a=e.variant;return Object(B.jsx)(P.a,{size:n,color:t,thickness:i,variant:a})},R=t(160),Y=t(152),Z=T.a.div(a||(a=Object(D.a)([""]))),K=function(e){var n=e.isChecked,t=e.onChange,i=e.label;return Object(B.jsx)(Z,{children:Object(B.jsx)(Y.a,{control:Object(B.jsx)(R.a,{checked:n,onChange:function(){t&&t()},color:"primary"}),label:i})})},Q=t(153),W=t(46),X=t.n(W),$=T.a.div(r||(r=Object(D.a)(["\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n"]))),_=T.a.div(c||(c=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  width: 100%;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),ee=T.a.div(o||(o=Object(D.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  gap: 16px;\n"]))),ne=T.a.div(s||(s=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: max-content;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n\n"]))),te=T.a.img(l||(l=Object(D.a)(["\nwidth: 100%;\n  border-radius: 45%;\n"]))),ie=T.a.div(d||(d=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ae=T.a.div(u||(u=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),re=T.a.div(j||(j=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),ce=function(){var e=Object(z.useState)(),n=Object(I.a)(e,2),t=n[0],i=n[1],a=Object(z.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),r=Object(I.a)(a,2),c=r[0],o=r[1],s=Object(z.useState)(JSON.parse(localStorage.getItem("favoritesUUIs"))||[]),l=Object(I.a)(s,2),d=l[0],u=l[1],j=function(e){return d.includes(e)};return Object(z.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(c)),localStorage.setItem("favoritesUUIs",JSON.stringify(d))}),[c,d]),{favoritesUsers:c,favoritesUUIDs:d,switchFavorites:function(e,n){o(JSON.parse(localStorage.getItem("favorites"))),u(JSON.parse(localStorage.getItem("favoritesUUIs")));var t=e.login.uuid;if(j(t)){var i=Object(G.a)(c).filter((function(e){return e.login.uuid!==t})),a=Object(G.a)(d).filter((function(e){return e!==t}));o(i),u(a)}else console.log(c),console.log(d),u((function(e){return[].concat(Object(G.a)(e),[t])})),o((function(n){return[].concat(Object(G.a)(n),[e])}))},isUserInFavorites:j,handleMouseEnter:function(e){i(e)},handleMouseLeave:function(){i()},hoveredUserId:t}},oe=t(155),se=t(154),le=Object(se.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}})),de=function(e){var n=e.users,t=e.isLoading,i=e.handleFetch,a=e.favourites,r=e.handleFavourites,c=e.nationalities,o=e.countries,s=Object(z.useState)([]),l=Object(I.a)(s,2),d=l[0],u=l[1],j=le(),b=ce(),f=b.handleMouseEnter,x=b.handleMouseLeave,h=b.hoveredUserId,p=Object(z.useState)(1),O=Object(I.a)(p,2),v=O[0],g=O[1],m=function(){g(v+1)},y=function(){var e=Object(J.a)(M.a.mark((function e(n){var t,i,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.target.scrollHeight-n.target.scrollTop,i=n.target.clientHeight,a=t-50<=i,m&&a&&m();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(z.useEffect)((function(){function e(){return(e=Object(J.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(d,v);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),Object(z.useEffect)((function(){g(1)}),[d]),Object(B.jsx)(oe.a,{container:!0,justify:"center",className:j.root,children:Object(B.jsx)(oe.a,{item:!0,xs:12,children:Object(B.jsx)(oe.a,{container:!0,justify:"center",children:Object(B.jsx)(oe.a,{item:!0,xl:12,children:Object(B.jsxs)($,{children:[Object(B.jsx)(re,{children:o.map((function(e,n){return Object(B.jsx)(K,{label:e,onChange:function(){return e=c[n],void(window.event.target.checked?(u((function(n){return[].concat(Object(G.a)(n),[e])})),i([].concat(Object(G.a)(d),[e]))):(e=1===d.length?[]:d.filter((function(n){return n!==e})),u(e),i(e)));var e}},n)}))}),Object(B.jsxs)(_,{onScroll:y,children:[n.map((function(e,n){var t=e.login.uuid;return Object(B.jsxs)(ee,{onMouseEnter:function(){return f(n)},onMouseLeave:x,children:[Object(B.jsx)("div",{style:{height:"100%"},children:Object(B.jsx)(te,{src:null===e||void 0===e?void 0:e.picture.large,alt:""})}),Object(B.jsxs)(ne,{children:[Object(B.jsxs)(H,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(B.jsx)(H,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(B.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(B.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(B.jsx)(ae,{isVisible:!0,onClick:function(){return function(e){r(e)}(e)},children:Object(B.jsx)(Q.a,{children:Object(B.jsx)(X.a,{color:a.includes(t)||n===h?"error":"action"})})})]},n)})),t&&Object(B.jsx)(ie,{children:Object(B.jsx)(q,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})})})})})},ue=t(82),je=t.n(ue),be=T.a.div(b||(b=Object(D.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),fe=T.a.div(f||(f=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),xe=T.a.div(x||(x=Object(D.a)(["\n  display: flex;\n"]))),he=(T.a.div(h||(h=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),t(84)),pe=t.n(he),Oe=T.a.div(p||(p=Object(D.a)(["\ndisplay: flex;\nalign-items: stretch;\nflex-direction: column;\n"]))),ve=T.a.div(O||(O=Object(D.a)(["\ndisplay: flex;\nflex-direction: column;\ngap: 35px;\nwidth: 500px;\nwidth: 100%;\nheight: calc(100vh - 270px);\nmargin-block-start: 30px;\noverflow-y: auto;\n"]))),ge=T.a.div(v||(v=Object(D.a)(["\ndisplay: flex;\nflex-wrap: nowrap;\njustify-content: center;\ngap: 16px;\n"]))),me=T.a.div(g||(g=Object(D.a)(["\n   display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: max-content;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ye=T.a.img(m||(m=Object(D.a)(["\nwidth: 100%;\n  border-radius: 45%;\n"]))),we=(T.a.div(y||(y=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n"]))),T.a.div(w||(w=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0}))),ke=T.a.div(k||(k=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),Se=T.a.div(S||(S=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  top: 3rem;\n  right: 0;\n  margin: 0;\n  font-size: 0.8rem;\n  padding: 0.7rem;\n  text-align: center;\n\n  > a {\n    display: flex;\n    text-decoration: none;\n    color: #84ffff;\n    font-size: 1.1rem;\n    font-weight: bold;\n  }\n"]))),ze=t(83),Ce=[{label:"First Name",key:"name.first"},{label:"Last Name",key:"name.last"},{label:"Email",key:"email"},{label:"Phone",key:"name.phone"},{label:"Birth Date",key:"dob.date"},{label:"Age",key:"dob.age"},{label:"Country",key:"location.city"},{label:"City",key:"location.country"},{label:"City",key:"location.country"},{label:"Time Zone Offset",key:"location.timezone.offset"},{label:"Free Text",key:"freeTextInput"}],Ue=function(e){var n=e.users,t=e.handleFavourites,i=e.countries,a=e.nationalities,r=Object(z.useState)([]),c=Object(I.a)(r,2),o=c[0],s=c[1];return Object(B.jsxs)(Oe,{children:[Object(B.jsx)(ke,{children:i.map((function(e,n){return Object(B.jsx)(K,{label:e,onChange:function(){return e=a[n],void(window.event.target.checked?s((function(n){return[].concat(Object(G.a)(n),[e])})):s(1===o.length?[]:o.filter((function(n){return n!==e}))));var e}},n)}))}),(null===n||void 0===n?void 0:n.length)&&Object(B.jsx)(Se,{children:Object(B.jsxs)(ze.CSVLink,{data:n,headers:Ce,children:["Download to CSV",Object(B.jsx)(pe.a,{color:"primary"})]})})||"",Object(B.jsx)(ve,{children:(null===n||void 0===n?void 0:n.length)?n.map((function(e,n){return o.length>0&&o.indexOf(e.nat)<0?"":Object(B.jsxs)(ge,{children:[Object(B.jsx)("div",{style:{height:"100%"},children:Object(B.jsx)(ye,{src:null===e||void 0===e?void 0:e.picture.large,alt:""})}),Object(B.jsxs)(me,{children:[Object(B.jsxs)(H,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(B.jsx)(H,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(B.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(B.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(B.jsx)(we,{isVisible:!0,onClick:function(){return t(e,n)},children:Object(B.jsx)(Q.a,{children:Object(B.jsx)(X.a,{color:"error"})})})]},n)})):Object(B.jsx)(H,{size:"40px",bold:!0,children:"No Favourite found"})})]})},Fe=["Brazil","Australia","Canada","Germany","Norway","United States"],Ie=["BR","AU","CA","DE","NO","US"],Ne=function(e){var n=function(){var e=Object(z.useState)([]),n=Object(I.a)(e,2),t=n[0],i=n[1],a=Object(z.useState)(!1),r=Object(I.a)(a,2),c=r[0],o=r[1];function s(e){return l.apply(this,arguments)}function l(){return(l=Object(J.a)(M.a.mark((function e(n){var a,r,c=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,o(!0),e.next=4,je.a.get("https://randomuser.me/api/?".concat(n&&"nat="+n.toString()+"&"||"","results=5&page=").concat(a));case 4:r=e.sent,o(!1),i(1===a?r.data.results:[].concat(Object(G.a)(t),Object(G.a)(r.data.results)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(z.useEffect)((function(){s()}),[]),{users:t,isLoading:c,fetchUsers:s}}(),t=n.users,i=n.isLoading,a=n.fetchUsers,r=ce(),c=r.favoritesUsers,o=r.favoritesUUIDs,s=r.switchFavorites,l=function(){var e=Object(J.a)(M.a.mark((function e(n,t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n,t);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(B.jsx)(be,{children:Object(B.jsx)(fe,{children:Object(B.jsx)(oe.a,{container:!0,children:Object(B.jsx)(oe.a,{item:!0,xs:12,children:Object(B.jsx)(oe.a,{container:!0,justify:"center",children:Object(B.jsxs)(oe.a,{item:!0,children:[Object(B.jsx)(xe,{children:Object(B.jsx)(H,{size:"5rem",bold:!0,children:0===e.tab?"PplFinder":"Favourites"})}),0===e.tab?Object(B.jsx)(de,{users:t,isLoading:i,favourites:o,handleFavourites:s,handleFetch:l,countries:Fe,nationalities:Ie}):Object(B.jsx)(Ue,{users:c,favourites:o,handleFavourites:s,countries:Fe,nationalities:Ie})]})})})})})})},Ee=t(86),Le=t(156),Me=t(157),Je=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=C.a.useMemo((function(){return Object(Ee.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(B.jsxs)(Le.a,{theme:i,children:[Object(B.jsx)(Me.a,{}),n]})},Ve=t(161),De=t(159),Te=t(158),Ae=function(e){var n=e.value,t=e.handleChange;return Object(B.jsxs)(Ve.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:[Object(B.jsxs)(V.a,{variant:"h4",style:{whiteSpace:"pre-wrap"},children:["Made with  ",Object(B.jsx)("span",{style:{color:"red"},children:"love \u2665"}),"  by ",Object(B.jsx)("span",{style:{color:"greenyellow"},children:"Yair levi!"})]}),Object(B.jsxs)(De.a,{value:n,onChange:t,"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(B.jsx)(Te.a,{label:"Home",index:0}),Object(B.jsx)(Te.a,{label:"Favorites",index:1})]})]})},Be=function(){var e=Object(z.useState)(0),n=Object(I.a)(e,2),t=n[0],i=n[1];return Object(B.jsx)(Je,{children:Object(B.jsxs)(N.a,{children:[Object(B.jsx)(Ae,{value:t,setValue:i,handleChange:function(e,n){i(n)}}),Object(B.jsx)(E.c,{children:Object(B.jsx)(E.a,{exact:!0,path:"/",render:function(){return Object(B.jsx)(Ne,{tab:t})}})})]})})};F.a.render(Object(B.jsx)(Be,{}),document.querySelector("#root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.52e944aa.chunk.js.map