(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{118:function(e,n,t){"use strict";t.r(n);var i,a,r,c,o,l,s,u,d,j,f,b,x,v,h=t(0),p=t.n(h),O=t(29),g=t.n(O),m=t(13),y=t(81),k=t(10),w=t(22),S=t.n(w),z=t(26),C=t(120),U=t(7),F=t(8),I=F.a.div(i||(i=Object(U.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),N=t(2),L=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,a=e.bold;return Object(N.jsx)(C.a,{children:Object(N.jsx)(I,{size:t,bold:a,children:i})})},M=t(18),E=t(147),J=function(e){var n=e.size,t=e.color,i=e.thickness,a=e.variant;return Object(N.jsx)(E.a,{size:n,color:t,thickness:i,variant:a})},V=t(154),D=t(148),T=F.a.div(a||(a=Object(U.a)([""]))),A=function(e){var n=e.isChecked,t=e.onChange,i=e.label;return Object(N.jsx)(T,{children:Object(N.jsx)(D.a,{control:Object(N.jsx)(V.a,{checked:n,onChange:function(){t&&t()},color:"primary"}),label:i})})},B=t(149),H=t(46),P=t.n(H),q=F.a.div(r||(r=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),G=F.a.div(c||(c=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),R=F.a.div(o||(o=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),Z=F.a.div(l||(l=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),K=F.a.img(s||(s=Object(U.a)(["\n  border-radius: 45%;\n"]))),Q=F.a.div(u||(u=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n"]))),W=F.a.div(d||(d=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),X=F.a.div(j||(j=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),Y=function(){console.log("useFavotie called");var e=Object(h.useState)(),n=Object(m.a)(e,2),t=n[0],i=n[1],a=Object(h.useState)(JSON.parse(localStorage.getItem("favorites"))||[]),r=Object(m.a)(a,2),c=r[0],o=r[1],l=Object(h.useState)(JSON.parse(localStorage.getItem("favoritesUUIs"))||[]),s=Object(m.a)(l,2),u=s[0],d=s[1],j=function(e){return u.includes(e)};return Object(h.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(c)),localStorage.setItem("favoritesUUIs",JSON.stringify(u))}),[c,u]),{favoritesUsers:c,favoritesUUIDs:u,switchFavorites:function(e,n){o(JSON.parse(localStorage.getItem("favorites"))),d(JSON.parse(localStorage.getItem("favoritesUUIs")));var t=e.login.uuid;if(j(t)){var i=Object(M.a)(c).filter((function(e){return e.login.uuid!==t})),a=Object(M.a)(u).filter((function(e){return e!==t}));o(i),d(a)}else console.log(c),console.log(u),d((function(e){return[].concat(Object(M.a)(e),[t])})),o((function(n){return[].concat(Object(M.a)(n),[e])}))},isUserInFavorites:j,handleMouseEnter:function(e){i(e)},handleMouseLeave:function(){i()},hoveredUserId:t}},$=function(e){var n=e.users,t=e.isLoading,i=e.handleFetch,a=e.favourites,r=e.handleFavourites,c=e.nationalities,o=e.countries,l=Object(h.useState)([]),s=Object(m.a)(l,2),u=s[0],d=s[1],j=Y(),f=j.handleMouseEnter,b=j.handleMouseLeave,x=j.hoveredUserId,v=Object(h.useState)(1),p=Object(m.a)(v,2),O=p[0],g=p[1],y=function(){g(O+1)},k=function(){var e=Object(z.a)(S.a.mark((function e(n){var t,i,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.target.scrollHeight-n.target.scrollTop,i=n.target.clientHeight,console.log(t,i),a=t===i,y&&a&&y();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){function e(){return(e=Object(z.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(u,O);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O]),Object(h.useEffect)((function(){g(1)}),[u]),Object(N.jsxs)(q,{children:[Object(N.jsx)(X,{children:o.map((function(e,n){return Object(N.jsx)(A,{label:e,onChange:function(){return e=c[n],void(window.event.target.checked?(d((function(n){return[].concat(Object(M.a)(n),[e])})),i([].concat(Object(M.a)(u),[e]))):(d(1===u.length?[]:u.filter((function(n){return n!==e}))),i()));var e}},n)}))}),Object(N.jsxs)(G,{onScroll:k,children:[n.map((function(e,n){var t=e.login.uuid;return Object(N.jsxs)(R,{onMouseEnter:function(){return f(n)},onMouseLeave:b,children:[Object(N.jsx)(K,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(N.jsxs)(Z,{children:[Object(N.jsxs)(L,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(N.jsx)(L,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(N.jsxs)(L,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(N.jsxs)(L,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(N.jsx)(W,{isVisible:!!a.includes(t)||n===x,onClick:function(){return function(e){r(e)}(e)},children:Object(N.jsx)(B.a,{children:Object(N.jsx)(P.a,{color:"error"})})})]},n)})),t&&Object(N.jsx)(Q,{children:Object(N.jsx)(J,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},_=t(78),ee=t.n(_);var ne,te,ie,ae,re,ce,oe,le,se,ue=F.a.div(f||(f=Object(U.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),de=F.a.div(b||(b=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),je=F.a.div(x||(x=Object(U.a)(["\n  display: flex;\n"]))),fe=(F.a.div(v||(v=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),t(80)),be=t.n(fe),xe=F.a.div(ne||(ne=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ve=F.a.div(te||(te=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),he=F.a.div(ie||(ie=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),pe=F.a.div(ae||(ae=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),Oe=F.a.img(re||(re=Object(U.a)(["\n  border-radius: 45%;\n"]))),ge=(F.a.div(ce||(ce=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n"]))),F.a.div(oe||(oe=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0}))),me=F.a.div(le||(le=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),ye=F.a.div(se||(se=Object(U.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  top: 3rem;\n  right: 0;\n  margin: 0;\n  font-size: 0.8rem;\n  padding: 0.7rem;\n  text-align: center;\n\n  > a {\n    display: flex;\n    text-decoration: none;\n    color: #84ffff;\n    font-size: 1.1rem;\n    font-weight: bold;\n  }\n"]))),ke=t(79),we=[{label:"First Name",key:"name.first"},{label:"Last Name",key:"name.last"},{label:"Email",key:"email"},{label:"Phone",key:"name.phone"},{label:"Birth Date",key:"dob.date"},{label:"Age",key:"dob.age"},{label:"Country",key:"location.city"},{label:"City",key:"location.country"},{label:"City",key:"location.country"},{label:"Time Zone Offset",key:"location.timezone.offset"},{label:"Free Text",key:"freeTextInput"}],Se=function(e){var n=e.users,t=e.handleFavourites,i=e.countries,a=e.nationalities,r=Object(h.useState)([]),c=Object(m.a)(r,2),o=c[0],l=c[1];return Object(N.jsxs)(xe,{children:[Object(N.jsx)(me,{children:i.map((function(e,n){return Object(N.jsx)(A,{label:e,onChange:function(){return e=a[n],void(window.event.target.checked?l((function(n){return[].concat(Object(M.a)(n),[e])})):l(1===o.length?[]:o.filter((function(n){return n!==e}))));var e}},n)}))}),(null===n||void 0===n?void 0:n.length)&&Object(N.jsx)(ye,{children:Object(N.jsxs)(ke.CSVLink,{data:n,headers:we,children:["Download to CSV",Object(N.jsx)(be.a,{color:"primary"})]})})||"",Object(N.jsx)(ve,{children:(null===n||void 0===n?void 0:n.length)?n.map((function(e,n){return o.length>0&&o.indexOf(e.nat)<0?"":Object(N.jsxs)(he,{children:[Object(N.jsx)(Oe,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(N.jsxs)(pe,{children:[Object(N.jsxs)(L,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(N.jsx)(L,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(N.jsxs)(L,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(N.jsxs)(L,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(N.jsx)(ge,{isVisible:!0,onClick:function(){return t(e,n)},children:Object(N.jsx)(B.a,{children:Object(N.jsx)(P.a,{color:"error"})})})]},n)})):Object(N.jsx)(L,{size:"40px",bold:!0,children:"No Favourite found"})})]})},ze=["Brazil","Australia","Canada","Germany","Norway","United States"],Ce=["BR","AU","CA","DE","NO","US"],Ue=function(e){var n=function(){var e=Object(h.useState)([]),n=Object(m.a)(e,2),t=n[0],i=n[1],a=Object(h.useState)(!1),r=Object(m.a)(a,2),c=r[0],o=r[1];function l(e){return s.apply(this,arguments)}function s(){return(s=Object(z.a)(S.a.mark((function e(n){var a,r,c=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,o(!0),e.next=4,ee.a.get("https://randomuser.me/api/?".concat(n&&"nat="+n.toString()+"&"||"","results=5&page=").concat(a));case 4:r=e.sent,o(!1),i(1===a?r.data.results:[].concat(Object(M.a)(t),Object(M.a)(r.data.results)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.useEffect)((function(){l()}),[]),{users:t,isLoading:c,fetchUsers:l}}(),t=n.users,i=n.isLoading,a=n.fetchUsers,r=n.handleLoadMore,c=Y(),o=c.favoritesUsers,l=c.favoritesUUIDs,s=c.switchFavorites,u=function(){var e=Object(z.a)(S.a.mark((function e(n,t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n,t);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(N.jsx)(ue,{children:Object(N.jsxs)(de,{children:[Object(N.jsx)(je,{children:Object(N.jsx)(L,{size:"64px",bold:!0,children:0===e.tab?"PplFinder":"Favourites"})}),0===e.tab?Object(N.jsx)($,{users:t,isLoading:i,favourites:l,handleFavourites:s,handleFetch:u,handleLoadMore:r,countries:ze,nationalities:Ce}):Object(N.jsx)(Se,{users:o,favourites:l,handleFavourites:s,countries:ze,nationalities:Ce})]})})},Fe=t(82),Ie=t(150),Ne=t(151),Le=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=p.a.useMemo((function(){return Object(Fe.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(N.jsxs)(Ie.a,{theme:i,children:[Object(N.jsx)(Ne.a,{}),n]})},Me=t(155),Ee=t(153),Je=t(152),Ve=function(e){var n=e.value,t=e.handleChange;return Object(N.jsx)(Me.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(N.jsxs)(Ee.a,{value:n,onChange:t,"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(N.jsx)(Je.a,{label:"Home",index:0}),Object(N.jsx)(Je.a,{label:"Favorites",index:1})]})})},De=function(){var e=Object(h.useState)(0),n=Object(m.a)(e,2),t=n[0],i=n[1];return Object(N.jsx)(Le,{children:Object(N.jsxs)(y.a,{children:[Object(N.jsx)(Ve,{value:t,setValue:i,handleChange:function(e,n){i(n)}}),Object(N.jsx)(k.c,{children:Object(N.jsx)(k.a,{exact:!0,path:"/",render:function(){return Object(N.jsx)(Ue,{tab:t})}})})]})})};g.a.render(Object(N.jsx)(De,{}),document.querySelector("#root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.92aeb2fc.chunk.js.map