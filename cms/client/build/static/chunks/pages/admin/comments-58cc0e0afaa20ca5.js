(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5897],{97097:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/comments",function(){return t(67778)}])},15330:function(e,n,t){"use strict";var r=t(85893),s=t(67294),i=t(11163);n.Z=function(e){var n=e.path,t=void 0===n?"/":n,c=(0,s.useState)(3),a=c[0],o=c[1],l=(0,i.useRouter)();return(0,s.useEffect)((function(){var e=setInterval((function(){o(a-1)}),1e3);return 0===a&&(clearInterval(e),l.push(t)),function(){return clearInterval(e)}}),[a]),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsxs)("p",{children:[" Redirecting in ",a," seconds"]})})}},87522:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r=t(47568),s=t(34051),i=t.n(s),c=t(85893),a=t(97183),o=t(67294),l=t(19820),d=t(41664),u=t.n(d),h=t(61715),m=t(40730),f=t(42952),x=t(57184),v=t(88916),j=t(71255),p=t(80275),Z=t(87547),w=t(69980),g=l.Z.SubMenu,y=a.Z.Sider,k=function(){var e,n,t=(0,o.useState)(!1),r=t[0],s=t[1],i=(0,o.useState)(""),a=i[0],d=i[1],k=(0,h.Lm)(),I=(0,o.useContext)(m.V),C=I[0];I[1];(0,o.useEffect)((function(){d(window.location.pathname)}),[window.location.pathname]),(0,o.useEffect)((function(){k<650?s(!0):k>650&&s(!1)}),[k<650]);var N=function(e){return"".concat(a===e&&"active")};return(0,c.jsx)(y,{collapsible:!0,collapsed:r,onCollapse:function(){return s(!r)},children:(0,c.jsxs)(l.Z,{defaultOpenKeys:["2","6","10"],mode:"inline",inlineCollapsed:r,children:[(0,c.jsx)(l.Z.Item,{icon:(0,c.jsx)(f.Z,{}),children:(0,c.jsx)(u(),{href:"/admin",children:(0,c.jsx)("a",{className:N("/admin"),children:"Dashboard"})})},"1"),(0,c.jsxs)(g,{icon:(0,c.jsx)(x.Z,{}),title:"Posts",children:[(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/posts",children:(0,c.jsx)("a",{className:N("/admin/posts"),children:"All Posts"})})},"3"),(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/posts/new",children:(0,c.jsx)("a",{className:N("/admin/posts/new"),children:"Add New"})})},"4"),(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/categories",children:(0,c.jsx)("a",{className:N("/admin/categories"),children:"Categories"})})},"5")]},"2"),(0,c.jsxs)(g,{icon:(0,c.jsx)(v.Z,{}),title:"Media",children:[(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/media/library",children:(0,c.jsx)("a",{className:N("/admin/media/library"),children:"Library"})})},"7"),(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/media/new",children:(0,c.jsx)("a",{className:N("/admin/media/new"),children:"Add New"})})},"8")]},"6"),(0,c.jsx)(l.Z.Item,{icon:(0,c.jsx)(j.Z,{}),children:(0,c.jsx)(u(),{href:"/admin/comments",children:(0,c.jsx)("a",{className:N("/admin/comments"),children:"Comments"})})},"9"),(0,c.jsxs)(g,{icon:(0,c.jsx)(p.Z,{}),title:"Users",children:[(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/users",children:(0,c.jsx)("a",{className:N("/admin/users"),children:"All Users"})})},"11"),(0,c.jsx)(l.Z.Item,{children:(0,c.jsx)(u(),{href:"/admin/users/new",children:(0,c.jsx)("a",{className:N("/admin/users/new"),children:"Add New"})})},"12")]},"10"),(0,c.jsx)(l.Z.Item,{icon:(0,c.jsx)(Z.Z,{}),children:(0,c.jsx)(u(),{href:"/admin/".concat(null===C||void 0===C||null===(e=C.user)||void 0===e?void 0:e._id),children:(0,c.jsx)("a",{className:N("/admin/".concat(null===C||void 0===C||null===(n=C.user)||void 0===n?void 0:n._id)),children:"Profile"})})},"13"),(0,c.jsx)(l.Z.Item,{icon:(0,c.jsx)(w.Z,{}),children:(0,c.jsx)(u(),{href:"/admin/customize",children:(0,c.jsx)("a",{className:N("/admin/customise"),children:"Customize"})})},"14")]})})},I=t(11163),C=t(15330),N=t(9669),_=t.n(N),b=(t(62091),a.Z.Content);var S=function(e){var n=(0,o.useContext)(m.V),t=n[0],s=(n[1],(0,o.useState)(!0)),l=s[0],d=s[1];(0,o.useEffect)((function(){(null===t||void 0===t?void 0:t.token)&&u(),d(!1)}),[null===t||void 0===t?void 0:t.token]);var u=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_().get("/current-admin");case 3:e.sent.data,d(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),h.push("/");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=(0,I.useRouter)();return l?(0,c.jsx)(C.Z,{}):(0,c.jsx)(a.Z,{children:(0,c.jsxs)(a.Z,{children:[(0,c.jsx)(k,{}),(0,c.jsx)(b,{style:{padding:"10px"},children:e.children})]})})}},67778:function(e,n,t){"use strict";t.r(n);var r=t(47568),s=t(29815),i=t(34051),c=t.n(i),a=t(85893),o=t(9669),l=t.n(o),d=t(67294),u=t(71230),h=t(15746),m=t(27049),f=t(79531),x=t(97259),v=t(71577),j=t(87522),p=t(41664),Z=t.n(p),w=t(11163),g=t(27484),y=t.n(g),k=t(40730),I=t(56176),C=t.n(I);y().extend(C()),n.default=function(){(0,w.useRouter)();var e=(0,d.useState)(""),n=e[0],t=e[1],i=(0,d.useState)(1),o=i[0],p=i[1],g=(0,d.useState)([]),I=g[0],C=g[1],N=(0,d.useState)(0),_=N[0],b=N[1],S=(0,d.useState)(!1),E=S[0],A=(S[1],(0,d.useContext)(k.V)),L=A[0];A[1],(0,d.useEffect)((function(){(null===L||void 0===L?void 0:L.token)&&(P(),z())}),[null===L||void 0===L?void 0:L.token]),(0,d.useEffect)((function(){1!==o&&(null===L||void 0===L?void 0:L.token)&&P()}),[o]);var P=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get("/comments/".concat(o));case 3:n=e.sent.data,C((0,s.Z)(I).concat((0,s.Z)(n))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get("/comment-count");case 3:n=e.sent.data,b(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),M=null===I||void 0===I?void 0:I.filter((function(e){return e.content.toLowerCase().includes(n)})),O=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,window.confirm("Are you sure you want to delete this comment?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,l().delete("/comment/".concat(n._id));case 6:(null===(t=e.sent.data)||void 0===t?void 0:t.ok)&&(C(I.filter((function(e){return e._id!==n._id}))),b(_-1),toast.success("Comment deleted successfully")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:console.log("Delete",I);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(u.Z,{children:(0,a.jsxs)(h.Z,{span:24,children:[(0,a.jsxs)(m.Z,{style:{marginTop:15},children:[" ",null===I||void 0===I?void 0:I.length," Comments "]}),(0,a.jsx)(f.Z,{placeholder:"Search",type:"search",value:n,onChange:function(e){return t(e.target.value.toLowerCase())}}),(0,a.jsx)(x.ZP,{itemLayout:"horizontal",dataSource:M,renderItem:function(e){var n,t,r;return(0,a.jsx)(x.ZP.Item,{actions:[(0,a.jsx)(Z(),{href:"/post/".concat(null===e||void 0===e||null===(n=e.postId)||void 0===n?void 0:n.slug,"#").concat(e._id),children:"view"}),(0,a.jsx)("a",{onClick:function(){return O(e)},children:" delete"})],children:(0,a.jsx)(x.ZP.Item.Meta,{title:e.content,description:"On ".concat(null===e||void 0===e||null===(t=e.postId)||void 0===t?void 0:t.title," | ").concat(null===e||void 0===e||null===(r=e.postedBy)||void 0===r?void 0:r.name," | ").concat(y()(e.createdAt).format("L LT"))})})}})]})}),6*o<_&&(0,a.jsx)(u.Z,{children:(0,a.jsx)(h.Z,{span:24,style:{textAlign:"center"},children:(0,a.jsx)(v.Z,{size:"large",type:"primary",loading:E,onClick:function(){return p(o+1)},children:" Load More"})})})]})}}},function(e){e.O(0,[7643,6135,5567,9835,7259,1892,9774,2888,179],(function(){return n=97097,e(e.s=n);var n}));var n=e.O();_N_E=n}]);