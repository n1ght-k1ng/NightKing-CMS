(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9635],{38153:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users",function(){return i(68771)}])},15330:function(e,n,i){"use strict";var r=i(85893),t=i(67294),s=i(11163);n.Z=function(e){var n=e.path,i=void 0===n?"/":n,d=(0,t.useState)(3),a=d[0],c=d[1],l=(0,s.useRouter)();return(0,t.useEffect)((function(){var e=setInterval((function(){c(a-1)}),1e3);return 0===a&&(clearInterval(e),l.push(i)),function(){return clearInterval(e)}}),[a]),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsxs)("p",{children:[" Redirecting in ",a," seconds"]})})}},87522:function(e,n,i){"use strict";i.d(n,{Z:function(){return P}});var r=i(47568),t=i(34051),s=i.n(t),d=i(85893),a=i(97183),c=i(67294),l=i(19820),o=i(41664),u=i.n(o),h=i(61715),v=i(40730),f=i(42952),m=i(57184),x=i(88916),j=i(71255),p=i(80275),Z=i(87547),_=i(69980),w=l.Z.SubMenu,b=a.Z.Sider,g=function(){var e,n,i=(0,c.useState)(!1),r=i[0],t=i[1],s=(0,c.useState)(""),a=s[0],o=s[1],g=(0,h.Lm)(),I=(0,c.useContext)(v.V),y=I[0];I[1];(0,c.useEffect)((function(){o(window.location.pathname)}),[window.location.pathname]),(0,c.useEffect)((function(){g<650?t(!0):g>650&&t(!1)}),[g<650]);var N=function(e){return"".concat(a===e&&"active")};return(0,d.jsx)(b,{collapsible:!0,collapsed:r,onCollapse:function(){return t(!r)},children:(0,d.jsxs)(l.Z,{defaultOpenKeys:["2","6","10"],mode:"inline",inlineCollapsed:r,children:[(0,d.jsx)(l.Z.Item,{icon:(0,d.jsx)(f.Z,{}),children:(0,d.jsx)(u(),{href:"/admin",children:(0,d.jsx)("a",{className:N("/admin"),children:"Dashboard"})})},"1"),(0,d.jsxs)(w,{icon:(0,d.jsx)(m.Z,{}),title:"Posts",children:[(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/posts",children:(0,d.jsx)("a",{className:N("/admin/posts"),children:"All Posts"})})},"3"),(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/posts/new",children:(0,d.jsx)("a",{className:N("/admin/posts/new"),children:"Add New"})})},"4"),(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/categories",children:(0,d.jsx)("a",{className:N("/admin/categories"),children:"Categories"})})},"5")]},"2"),(0,d.jsxs)(w,{icon:(0,d.jsx)(x.Z,{}),title:"Media",children:[(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/media/library",children:(0,d.jsx)("a",{className:N("/admin/media/library"),children:"Library"})})},"7"),(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/media/new",children:(0,d.jsx)("a",{className:N("/admin/media/new"),children:"Add New"})})},"8")]},"6"),(0,d.jsx)(l.Z.Item,{icon:(0,d.jsx)(j.Z,{}),children:(0,d.jsx)(u(),{href:"/admin/comments",children:(0,d.jsx)("a",{className:N("/admin/comments"),children:"Comments"})})},"9"),(0,d.jsxs)(w,{icon:(0,d.jsx)(p.Z,{}),title:"Users",children:[(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/users",children:(0,d.jsx)("a",{className:N("/admin/users"),children:"All Users"})})},"11"),(0,d.jsx)(l.Z.Item,{children:(0,d.jsx)(u(),{href:"/admin/users/new",children:(0,d.jsx)("a",{className:N("/admin/users/new"),children:"Add New"})})},"12")]},"10"),(0,d.jsx)(l.Z.Item,{icon:(0,d.jsx)(Z.Z,{}),children:(0,d.jsx)(u(),{href:"/admin/".concat(null===y||void 0===y||null===(e=y.user)||void 0===e?void 0:e._id),children:(0,d.jsx)("a",{className:N("/admin/".concat(null===y||void 0===y||null===(n=y.user)||void 0===n?void 0:n._id)),children:"Profile"})})},"13"),(0,d.jsx)(l.Z.Item,{icon:(0,d.jsx)(_.Z,{}),children:(0,d.jsx)(u(),{href:"/admin/customize",children:(0,d.jsx)("a",{className:N("/admin/customise"),children:"Customize"})})},"14")]})})},I=i(11163),y=i(15330),N=i(9669),k=i.n(N),C=(i(62091),a.Z.Content);var P=function(e){var n=(0,c.useContext)(v.V),i=n[0],t=(n[1],(0,c.useState)(!0)),l=t[0],o=t[1];(0,c.useEffect)((function(){(null===i||void 0===i?void 0:i.token)&&u(),o(!1)}),[null===i||void 0===i?void 0:i.token]);var u=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k().get("/current-admin");case 3:e.sent.data,o(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),h.push("/");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=(0,I.useRouter)();return l?(0,d.jsx)(y.Z,{}):(0,d.jsx)(a.Z,{children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(g,{}),(0,d.jsx)(C,{style:{padding:"10px"},children:e.children})]})})}},68771:function(e,n,i){"use strict";i.r(n);var r=i(47568),t=i(34051),s=i.n(t),d=i(85893),a=i(67294),c=i(87522),l=i(71230),o=i(15746),u=i(27049),h=i(79531),v=i(97259),f=i(86871),m=i(9669),x=i.n(m),j=i(86501),p=i(11163),Z=i(41664),_=i.n(Z),w=i(40730);i(3997);n.default=function(){var e=(0,a.useContext)(w.V),n=e[0],i=(e[1],(0,a.useState)([])),t=i[0],m=i[1],Z=(0,a.useState)(""),b=Z[0],g=Z[1];(0,p.useRouter)();(0,a.useEffect)((function(){(null===n||void 0===n?void 0:n.token)&&I()}),[null===n||void 0===n?void 0:n.token]);var I=function(){var e=(0,r.Z)(s().mark((function e(n,i){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x().get("/users");case 3:r=e.sent.data,m(r),console.log("here we are",r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,i){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.Z)(s().mark((function e(i){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(null===i||void 0===i?void 0:i._id)!==(null===n||void 0===n||null===(r=n.user)||void 0===r?void 0:r._id)&&"62f46bff3715daa70c0d5849"!==(null===i||void 0===i?void 0:i._id)&&"62e82a1525ce0b00c334926e"!==(null===i||void 0===i?void 0:i._id)&&"62f46c3d3715daa70c0d5853"!==(null===i||void 0===i?void 0:i._id)){e.next=5;break}return j.Am.error("you cant delete this user"),e.abrupt("return");case 5:return e.prev=5,e.next=8,x().delete("/user/".concat(null===i||void 0===i?void 0:i._id));case 8:e.sent.data,m((function(e){return e.filter((function(e){return e._id!==i._id}))})),j.Am.error("User Deleted"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:if(i._id!==n.user._id){e.next=19;break}return j.Am.error("Damn , dont delete yourself !!"),e.abrupt("return");case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(0),console.log(e.t1);case 24:case"end":return e.stop()}}),e,null,[[0,21],[5,13]])})));return function(n){return e.apply(this,arguments)}}(),N=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(b)}));return(0,d.jsx)(c.Z,{children:(0,d.jsx)(l.Z,{children:(0,d.jsxs)(o.Z,{span:24,children:[(0,d.jsxs)(u.Z,{children:[" All Users (",null===t||void 0===t?void 0:t.length,") "]}),(0,d.jsx)("br",{}),(0,d.jsx)(h.Z,{placeholder:"Search",type:"search",value:b,onChange:function(e){return g(e.target.value.toLowerCase())}}),(0,d.jsx)(v.ZP,{itemLayout:"horizontal",dataSource:N,renderItem:function(e){var i,r,t;return(0,d.jsxs)(v.ZP.Item,{actions:[(0,d.jsx)(_(),{href:"/admin/users/".concat(e._id),children:(0,d.jsx)("a",{disabled:"62f46bff3715daa70c0d5849"===(null===e||void 0===e?void 0:e._id)||"62e82a1525ce0b00c334926e"===(null===e||void 0===e?void 0:e._id)||"62f46c3d3715daa70c0d5853"===(null===e||void 0===e?void 0:e._id),children:"Edit"})}),(0,d.jsx)("a",{disabled:(null===e||void 0===e?void 0:e._id)===(null===n||void 0===n||null===(i=n.user)||void 0===i?void 0:i._id)||"62f46bff3715daa70c0d5849"===(null===e||void 0===e?void 0:e._id)||"62e82a1525ce0b00c334926e"===(null===e||void 0===e?void 0:e._id)||"62f46c3d3715daa70c0d5853"===(null===e||void 0===e?void 0:e._id),onClick:function(){return y(e)},children:" delete "})],children:[(0,d.jsx)(f.C,{src:null===e||void 0===e||null===(r=e.image)||void 0===r?void 0:r.url,children:null===e||void 0===e?void 0:e.name[0]}),(0,d.jsx)(v.ZP.Item.Meta,{title:e.name,style:{marginLeft:10}}),(0,d.jsx)(v.ZP.Item.Meta,{description:e.email,style:{marginLeft:10}}),(0,d.jsx)(v.ZP.Item.Meta,{description:e.role,style:{marginLeft:10}}),(0,d.jsx)(v.ZP.Item.Meta,{description:"".concat((null===e||void 0===e||null===(t=e.posts)||void 0===t?void 0:t.length)||0,"  Posts"),style:{marginLeft:10}})]})}})]})})})}}},function(e){e.O(0,[7643,6135,5567,9835,7259,6535,9774,2888,179],(function(){return n=38153,e(e.s=n);var n}));var n=e.O();_N_E=n}]);