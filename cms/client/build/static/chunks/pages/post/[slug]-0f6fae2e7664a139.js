(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6515],{52306:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return t(47016)}])},90724:function(e,n,t){"use strict";var r=t(85893),s=t(67294),i=t(40730),o=t(79531),a=t(71577),c=o.Z.TextArea;n.Z=function(e){var n=e.comment,t=e.setComment,o=e.handleSubmit,l=e.loading,u=(0,s.useContext)(i.V),d=u[0];u[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{disabled:null===(null===d||void 0===d?void 0:d.user)&&""===(null===d||void 0===d?void 0:d.token),value:n,onChange:function(e){return t(e.target.value)},placeholder:"Write a comment...",rows:"4",maxLength:200}),(0,r.jsx)(a.Z,{onClick:o,disabled:""===n,loading:l,style:{marginTop:4},type:"primary",children:"Post"})]})}},3751:function(e,n,t){"use strict";var r=t(47568),s=t(34051),i=t.n(s),o=t(67294),a=t(9669),c=t.n(a);n.Z=function(){var e=(0,o.useState)([]),n=e[0],t=e[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/categories");case 3:n=e.sent.data,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{categories:n}}},57577:function(e,n,t){"use strict";var r=t(47568),s=t(34051),i=t.n(s),o=t(67294),a=t(9669),c=t.n(a);n.Z=function(){var e=(0,o.useState)([]),n=e[0],t=e[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/posts/1");case 3:n=e.sent.data,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{Latestposts:n}}},47016:function(e,n,t){"use strict";t.r(n),t.d(n,{SinglePost:function(){return B},__N_SSP:function(){return T}});var r=t(47568),s=t(29815),i=t(34051),o=t.n(i),a=t(85893),c=t(9669),l=t.n(c),u=t(81474),d=t(3542),v=t(71230),x=t(15746),m=t(97259),f=t(86871),p=t(27049),h=t(71577),g=t(27484),j=t.n(g),y=t(6235),Z=t(9008),_=t.n(Z),b=t(90724),k=t(67294),w=t(41664),S=t.n(w),C=t(86501),P=(t(84165),t(3751)),E=t(57577),N=t(84110),M=t.n(N);j().extend(M());u.Z.Meta;var A=d.Z.Title,T=!0,B=function(e){var n,t=e.post,i=e.postComments,c=(0,k.useState)([]),d=c[0],g=c[1],Z=(0,k.useState)(i),w=Z[0],N=Z[1],M=(0,k.useState)(!1),T=M[0],B=M[1],L=(0,P.Z)().categories,z=(0,E.Z)().Latestposts,I=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,l().post("/comment/".concat(t._id),{comment:d});case 4:n=e.sent.data,N([n].concat((0,s.Z)(w))),g(""),C.ZP.success("Comment posted successfully"),B(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),B(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_(),{children:(0,a.jsxs)("title",{children:[" ",t.title," "]})}),(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(x.Z,{xs:24,xl:16,children:(0,a.jsxs)(u.Z,{cover:(0,a.jsx)("img",{src:(null===t||void 0===t||null===(n=t.featuredImage)||void 0===n?void 0:n.url)||"/images/default.jpg"}),children:[(0,a.jsx)(A,{children:t.title}),(0,a.jsxs)("p",{children:[j()(t.createdAt).format("MMMM D , YYYY h:mm A")," in",null===t||void 0===t?void 0:t.categories.map((function(e){return(0,a.jsx)("span",{children:(0,a.jsx)(S(),{href:"/category/".concat(e.slug),children:(0,a.jsxs)("a",{children:[e.name," "]})})},e._id)}))]}),(0,a.jsx)("p",{children:"======================================"}),(0,a.jsx)("div",{style:{marginBottom:50},children:"   "}),(0,a.jsx)("div",{style:{marginTop:"-20px",marginBottom:"15px"}}),(0,a.jsx)(y.M,{apiKey:"g7wekghh9n4a5vw9pjog2yglr9kgert1sy9zlxcxvnyj0o9n",init:{selector:"textarea",skin:"oxide-dark",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:40px; font-weight:bold; }",toolbar:!1,menubar:!1,inline:!0,noneditable_class:"mceNonEditable",readonly:!0,plugins:"noneditable template",noneditable_noneditable_class:"is-locked"},initialValue:t.text}),(0,a.jsx)("div",{}),(0,a.jsx)(b.Z,{comment:d,setComment:g,handleSubmit:I,loading:T}),(0,a.jsx)("div",{style:{marginBottom:50},children:"   "}),(0,a.jsx)(m.ZP,{itemLayout:"horizontal",dataSource:w,renderItem:function(e){var n,t;return(0,a.jsx)(m.ZP.Item,{id:null===e||void 0===e?void 0:e._id,children:(0,a.jsx)(m.ZP.Item.Meta,{avatar:(0,a.jsx)(f.C,{children:null===e||void 0===e||null===(n=e.postedBy)||void 0===n?void 0:n.name[0].charAt(0)}),title:null===e||void 0===e||null===(t=e.postedBy)||void 0===t?void 0:t.name,description:"".concat(null===e||void 0===e?void 0:e.content," - ").concat(j()(null===e||void 0===e?void 0:e.createdAt).fromNow())})},null===e||void 0===e?void 0:e._id)}})]})}),(0,a.jsxs)(x.Z,{xs:22,xl:6,offset:1,children:[(0,a.jsx)(p.Z,{children:"Categories"}),L.map((function(e){return(0,a.jsx)(S(),{href:"/category/".concat(e.slug),children:(0,a.jsx)("a",{children:(0,a.jsx)(h.Z,{style:{margin:2},children:e.name})})},e.name)})),(0,a.jsx)(p.Z,{children:" Latest Posts"}),z.map((function(e){return(0,a.jsx)(S(),{href:"/post/".concat(e.slug),children:(0,a.jsx)("a",{children:(0,a.jsx)("h4",{style:{fontSize:"20px"},children:e.title})})},e.name)}))]})]})]})};n.default=B}},function(e){e.O(0,[7643,6135,5567,9835,4687,7259,6235,120,3689,119,9774,2888,179],(function(){return n=52306,e(e.s=n);var n}));var n=e.O();_N_E=n}]);