"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4687],{24969:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(42135),c=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="PlusOutlined";var l=r.forwardRef(c)},74687:function(e,t,n){n.d(t,{Z:function(){return oe}});var a=n(4942),r=n(87462),o=n(97937),i=n(89705),c=n(24969),l=n(94184),u=n.n(l),s=n(97685),f=n(71002),d=n(45987),v=n(1413),p=n(67294),m=n(50344),b=n(31131),h=n(21770),g=n(74902),y=n(75164),Z=n(48555);function E(e){var t=(0,p.useRef)(),n=(0,p.useRef)(!1);return(0,p.useEffect)((function(){return n.current=!1,function(){n.current=!0,y.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(y.Z.cancel(t.current),t.current=(0,y.Z)((function(){e.apply(void 0,r)})))}}var w=n(15105);function C(e,t){var n,r=e.prefixCls,o=e.id,i=e.active,c=e.tab,l=c.key,s=c.tab,f=c.disabled,d=c.closeIcon,v=e.closable,m=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,g=e.onClick,y=e.onRemove,Z=e.onFocus,E=e.style,C="".concat(r,"-tab");p.useEffect((function(){return y}),[]);var k=h&&!1!==v&&!f;function x(e){f||g(e)}var N=p.createElement("div",{key:l,ref:t,className:u()(C,(n={},(0,a.Z)(n,"".concat(C,"-with-remove"),k),(0,a.Z)(n,"".concat(C,"-active"),i),(0,a.Z)(n,"".concat(C,"-disabled"),f),n)),style:E,onClick:x},p.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(l),className:"".concat(C,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(l),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[w.Z.SPACE,w.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:Z},s),k&&p.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:l,event:t})}},d||h.removeIcon||"\xd7"));return m?m(N):N}var k=p.forwardRef(C),x={width:0,height:0,left:0,top:0};var N={width:0,height:0,left:0,top:0,right:0};var P=n(97868),T=n(51169),R={adjustX:1,adjustY:1},S=[0,0],I={topLeft:{points:["bl","tl"],overflow:R,offset:[0,-4],targetOffset:S},topCenter:{points:["bc","tc"],overflow:R,offset:[0,-4],targetOffset:S},topRight:{points:["br","tr"],overflow:R,offset:[0,-4],targetOffset:S},bottomLeft:{points:["tl","bl"],overflow:R,offset:[0,4],targetOffset:S},bottomCenter:{points:["tc","bc"],overflow:R,offset:[0,4],targetOffset:S},bottomRight:{points:["tr","br"],overflow:R,offset:[0,4],targetOffset:S}},M=n(88603),A=w.Z.ESC,L=w.Z.TAB;var O=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function B(e,t){var n=e.arrow,r=void 0!==n&&n,o=e.prefixCls,i=void 0===o?"rc-dropdown":o,c=e.transitionName,l=e.animation,f=e.align,m=e.placement,b=void 0===m?"bottomLeft":m,h=e.placements,g=void 0===h?I:h,Z=e.getPopupContainer,E=e.showAction,w=e.hideAction,C=e.overlayClassName,k=e.overlayStyle,x=e.visible,N=e.trigger,P=void 0===N?["hover"]:N,R=e.autoFocus,S=(0,d.Z)(e,O),B=p.useState(),D=(0,s.Z)(B,2),V=D[0],K=D[1],W="visible"in e?x:V,j=p.useRef(null);p.useImperativeHandle(t,(function(){return j.current})),function(e){var t=e.visible,n=e.setTriggerVisible,a=e.triggerRef,r=e.onVisibleChange,o=e.autoFocus,i=p.useRef(!1),c=function(){var e,o,i,c;t&&a.current&&(null===(e=a.current)||void 0===e||null===(o=e.triggerRef)||void 0===o||null===(i=o.current)||void 0===i||null===(c=i.focus)||void 0===c||c.call(i),n(!1),"function"===typeof r&&r(!1))},l=function(){var e,t,n,r,o=(0,M.tS)(null===(e=a.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.getElement)||void 0===r?void 0:r.call(n))[0];return!!(null===o||void 0===o?void 0:o.focus)&&(o.focus(),i.current=!0,!0)},u=function(e){switch(e.keyCode){case A:c();break;case L:var t=!1;i.current||(t=l()),t?e.preventDefault():c()}};p.useEffect((function(){return t?(window.addEventListener("keydown",u),o&&(0,y.Z)(l,3),function(){window.removeEventListener("keydown",u),i.current=!1}):function(){i.current=!1}}),[t])}({visible:W,setTriggerVisible:K,triggerRef:j,onVisibleChange:e.onVisibleChange,autoFocus:R});var _=function(){var t=function(){var t=e.overlay;return"function"===typeof t?t():t}();return p.createElement(p.Fragment,null,r&&p.createElement("div",{className:"".concat(i,"-arrow")}),t)},q=w;return q||-1===P.indexOf("contextMenu")||(q=["click"]),p.createElement(T.Z,(0,v.Z)((0,v.Z)({builtinPlacements:g},S),{},{prefixCls:i,ref:j,popupClassName:u()(C,(0,a.Z)({},"".concat(i,"-show-arrow"),r)),popupStyle:k,action:P,showAction:E,hideAction:q||[],popupPlacement:b,popupAlign:f,popupTransitionName:c,popupAnimation:l,popupVisible:W,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?_:_(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"===typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:Z}),function(){var t=e.children,n=t.props?t.props:{},a=u()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(i,"-open")}());return W&&t?p.cloneElement(t,{className:a}):t}())}var D=p.forwardRef(B);function V(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?p.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var K=p.forwardRef(V);function W(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,c=e.mobile,l=e.moreIcon,f=void 0===l?"More":l,d=e.moreTransitionName,v=e.style,m=e.className,b=e.editable,h=e.tabBarGutter,g=e.rtl,y=e.removeAriaLabel,Z=e.onTabClick,E=e.getPopupContainer,C=e.popupClassName,k=(0,p.useState)(!1),x=(0,s.Z)(k,2),N=x[0],T=x[1],R=(0,p.useState)(null),S=(0,s.Z)(R,2),I=S[0],M=S[1],A="".concat(r,"-more-popup"),L="".concat(n,"-dropdown"),O=null!==I?"".concat(A,"-").concat(I):null,B=null===i||void 0===i?void 0:i.dropdownAriaLabel;var V=p.createElement(P.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;Z(t,n),T(!1)},prefixCls:"".concat(L,"-menu"),id:A,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[I],"aria-label":void 0!==B?B:"expanded dropdown"},o.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return p.createElement(P.sN,{key:e.key,id:"".concat(A,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},p.createElement("span",null,e.tab),t&&p.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:a,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function W(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void M(i.key)}}(0,p.useEffect)((function(){var e=document.getElementById(O);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),(0,p.useEffect)((function(){N||M(null)}),[N]);var j=(0,a.Z)({},g?"marginRight":"marginLeft",h);o.length||(j.visibility="hidden",j.order=1);var _=u()((0,a.Z)({},"".concat(L,"-rtl"),g)),q=c?null:p.createElement(D,{prefixCls:L,overlay:V,trigger:["hover"],visible:!!o.length&&N,transitionName:d,onVisibleChange:T,overlayClassName:u()(_,C),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},p.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:j,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(r,"-more"),"aria-expanded":N,onKeyDown:function(e){var t=e.which;if(N)switch(t){case w.Z.UP:W(-1),e.preventDefault();break;case w.Z.DOWN:W(1),e.preventDefault();break;case w.Z.ESC:T(!1);break;case w.Z.SPACE:case w.Z.ENTER:null!==I&&Z(I,e)}else[w.Z.DOWN,w.Z.SPACE,w.Z.ENTER].includes(t)&&(T(!0),e.preventDefault())}},f));return p.createElement("div",{className:u()("".concat(n,"-nav-operations"),m),style:v,ref:t},q,p.createElement(K,{prefixCls:n,locale:i,editable:b}))}var j=p.memo(p.forwardRef(W),(function(e,t){return t.tabMoving})),_=(0,p.createContext)(null),q=Math.pow(.995,20);function F(e,t){var n=p.useRef(e),a=p.useState({}),r=(0,s.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var z=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,f.Z)(r)&&!p.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?p.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function H(e,t){var n,o=p.useContext(_),i=o.prefixCls,c=o.tabs,l=e.className,f=e.style,d=e.id,m=e.animated,b=e.activeKey,h=e.rtl,w=e.extra,C=e.editable,P=e.locale,T=e.tabPosition,R=e.tabBarGutter,S=e.children,I=e.onTabClick,M=e.onTabScroll,A=(0,p.useRef)(),L=(0,p.useRef)(),O=(0,p.useRef)(),B=(0,p.useRef)(),D=function(){var e=(0,p.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,p.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),V=(0,s.Z)(D,2),W=V[0],H=V[1],G="top"===T||"bottom"===T,Y=F(0,(function(e,t){G&&M&&M({direction:e>t?"left":"right"})})),X=(0,s.Z)(Y,2),U=X[0],J=X[1],Q=F(0,(function(e,t){!G&&M&&M({direction:e>t?"top":"bottom"})})),$=(0,s.Z)(Q,2),ee=$[0],te=$[1],ne=(0,p.useState)(0),ae=(0,s.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,p.useState)(0),ce=(0,s.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,p.useState)(null),fe=(0,s.Z)(se,2),de=fe[0],ve=fe[1],pe=(0,p.useState)(null),me=(0,s.Z)(pe,2),be=me[0],he=me[1],ge=(0,p.useState)(0),ye=(0,s.Z)(ge,2),Ze=ye[0],Ee=ye[1],we=(0,p.useState)(0),Ce=(0,s.Z)(we,2),ke=Ce[0],xe=Ce[1],Ne=function(e){var t=(0,p.useRef)([]),n=(0,p.useState)({}),a=(0,s.Z)(n,2)[1],r=(0,p.useRef)("function"===typeof e?e():e),o=E((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Pe=(0,s.Z)(Ne,2),Te=Pe[0],Re=Pe[1],Se=function(e,t,n){return(0,p.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||x,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,u=t.get(l);u||(u=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||x);var s=a.get(l)||(0,v.Z)({},u);s.right=o-s.left-s.width,a.set(l,s)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,Te,re),Ie="".concat(i,"-nav-operations-hidden"),Me=0,Ae=0;function Le(e){return e<Me?Me:e>Ae?Ae:e}G?h?(Me=0,Ae=Math.max(0,re-de)):(Me=Math.min(0,de-re),Ae=0):(Me=Math.min(0,be-le),Ae=0);var Oe=(0,p.useRef)(),Be=(0,p.useState)(),De=(0,s.Z)(Be,2),Ve=De[0],Ke=De[1];function We(){Ke(Date.now())}function je(){window.clearTimeout(Oe.current)}function _e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=Se.get(e)||{width:0,height:0,left:0,right:0,top:0};if(G){var n=U;h?t.right<U?n=t.right:t.right+t.width>U+de&&(n=t.right+t.width-de):t.left<-U?n=-t.left:t.left+t.width>-U+de&&(n=-(t.left+t.width-de)),te(0),J(Le(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+be&&(a=-(t.top+t.height-be)),J(0),te(Le(a))}}!function(e,t){var n=(0,p.useState)(),a=(0,s.Z)(n,2),r=a[0],o=a[1],i=(0,p.useState)(0),c=(0,s.Z)(i,2),l=c[0],u=c[1],f=(0,p.useState)(0),d=(0,s.Z)(f,2),v=d[0],m=d[1],b=(0,p.useState)(),h=(0,s.Z)(b,2),g=h[0],y=h[1],Z=(0,p.useRef)(),E=(0,p.useRef)(),w=(0,p.useRef)(null);w.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(Z.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,s=i-r.y;t(c,s);var f=Date.now();u(f),m(f-l),y({x:c,y:s})}},onTouchEnd:function(){if(r&&(o(null),y(null),g)){var e=g.x/v,n=g.y/v,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<.1)return;var c=e,l=n;Z.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(c*=q),20*(l*=q))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},p.useEffect((function(){function t(e){w.current.onTouchMove(e)}function n(e){w.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){w.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){w.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(A,(function(e,t){function n(e,t){e((function(e){return Le(e+t)}))}if(G){if(de>=re)return!1;n(J,e)}else{if(be>=le)return!1;n(te,t)}return je(),We(),!0})),(0,p.useEffect)((function(){return je(),Ve&&(Oe.current=window.setTimeout((function(){Ke(0)}),100)),je}),[Ve]);var qe=function(e,t,n,a,r){var o,i,c,l=r.tabs,u=r.tabPosition,s=r.rtl;["top","bottom"].includes(u)?(o="width",i=s?"right":"left",c=Math.abs(t.left)):(o="height",i="top",c=-t.top);var f=t[o],d=n[o],v=a[o],m=f;return d+v>f&&d<f&&(m=f-v),(0,p.useMemo)((function(){if(!l.length)return[0,0];for(var t=l.length,n=t,a=0;a<t;a+=1){var r=e.get(l[a].key)||N;if(r[i]+r[o]>c+m){n=a-1;break}}for(var u=0,s=t-1;s>=0;s-=1)if((e.get(l[s].key)||N)[i]<c){u=s+1;break}return[u,n]}),[e,c,m,u,l.map((function(e){return e.key})).join("_"),s])}(Se,{width:de,height:be,left:U,top:ee},{width:re,height:le},{width:Ze,height:ke},(0,v.Z)((0,v.Z)({},e),{},{tabs:c})),Fe=(0,s.Z)(qe,2),ze=Fe[0],He=Fe[1],Ge={};"top"===T||"bottom"===T?Ge[h?"marginRight":"marginLeft"]=R:Ge.marginTop=R;var Ye=c.map((function(e,t){var n=e.key;return p.createElement(k,{id:d,prefixCls:i,key:n,tab:e,style:0===t?void 0:Ge,closable:e.closable,editable:C,active:n===b,renderWrapper:S,removeAriaLabel:null===P||void 0===P?void 0:P.removeAriaLabel,ref:W(n),onClick:function(e){I(n,e)},onRemove:function(){H(n)},onFocus:function(){_e(n),We(),A.current&&(h||(A.current.scrollLeft=0),A.current.scrollTop=0)}})})),Xe=E((function(){var e,t,n,a,r,o,i=(null===(e=A.current)||void 0===e?void 0:e.offsetWidth)||0,l=(null===(t=A.current)||void 0===t?void 0:t.offsetHeight)||0,u=(null===(n=B.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=B.current)||void 0===a?void 0:a.offsetHeight)||0;ve(i),he(l),Ee(u),xe(s);var f=((null===(r=L.current)||void 0===r?void 0:r.offsetWidth)||0)-u,d=((null===(o=L.current)||void 0===o?void 0:o.offsetHeight)||0)-s;oe(f),ue(d),Re((function(){var e=new Map;return c.forEach((function(t){var n=t.key,a=W(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Ue=c.slice(0,ze),Je=c.slice(He+1),Qe=[].concat((0,g.Z)(Ue),(0,g.Z)(Je)),$e=(0,p.useState)(),et=(0,s.Z)($e,2),tt=et[0],nt=et[1],at=Se.get(b),rt=(0,p.useRef)();function ot(){y.Z.cancel(rt.current)}(0,p.useEffect)((function(){var e={};return at&&(G?(h?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ot(),rt.current=(0,y.Z)((function(){nt(e)})),ot}),[at,G,h]),(0,p.useEffect)((function(){_e()}),[b,at,Se,G]),(0,p.useEffect)((function(){Xe()}),[h,R,b,c.map((function(e){return e.key})).join("_")]);var it,ct,lt,ut,st=!!Qe.length,ft="".concat(i,"-nav-wrap");return G?h?(ct=U>0,it=U+de<re):(it=U<0,ct=-U+de<re):(lt=ee<0,ut=-ee+be<le),p.createElement("div",{ref:t,role:"tablist",className:u()("".concat(i,"-nav"),l),style:f,onKeyDown:function(){We()}},p.createElement(z,{position:"left",extra:w,prefixCls:i}),p.createElement(Z.Z,{onResize:Xe},p.createElement("div",{className:u()(ft,(n={},(0,a.Z)(n,"".concat(ft,"-ping-left"),it),(0,a.Z)(n,"".concat(ft,"-ping-right"),ct),(0,a.Z)(n,"".concat(ft,"-ping-top"),lt),(0,a.Z)(n,"".concat(ft,"-ping-bottom"),ut),n)),ref:A},p.createElement(Z.Z,{onResize:Xe},p.createElement("div",{ref:L,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Ve?"none":void 0}},Ye,p.createElement(K,{ref:B,prefixCls:i,locale:P,editable:C,style:(0,v.Z)((0,v.Z)({},0===Ye.length?void 0:Ge),{},{visibility:st?"hidden":null})}),p.createElement("div",{className:u()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),m.inkBar)),style:tt}))))),p.createElement(j,(0,r.Z)({},e,{removeAriaLabel:null===P||void 0===P?void 0:P.removeAriaLabel,ref:O,prefixCls:i,tabs:Qe,className:!st&&Ie,tabMoving:!!Ve})),p.createElement(z,{position:"right",extra:w,prefixCls:i}))}var G=p.forwardRef(H);function Y(e){var t=e.id,n=e.activeKey,r=e.animated,o=e.tabPosition,i=e.rtl,c=e.destroyInactiveTabPane,l=p.useContext(_),s=l.prefixCls,f=l.tabs,d=r.tabPane,v=f.findIndex((function(e){return e.key===n}));return p.createElement("div",{className:u()("".concat(s,"-content-holder"))},p.createElement("div",{className:u()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,a.Z)({},"".concat(s,"-content-animated"),d)),style:v&&d?(0,a.Z)({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},f.map((function(e){return p.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:d,active:e.key===n,destroyInactiveTabPane:c})}))))}function X(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,o=e.id,i=e.active,c=e.animated,l=e.destroyInactiveTabPane,f=e.tabKey,d=e.children,m=p.useState(n),b=(0,s.Z)(m,2),h=b[0],g=b[1];p.useEffect((function(){i?g(!0):l&&g(!1)}),[i,l]);var y={};return i||(c?(y.visibility="hidden",y.height=0,y.overflowY="hidden"):y.display="none"),p.createElement("div",{id:o&&"".concat(o,"-panel-").concat(f),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(f),"aria-hidden":!i,style:(0,v.Z)((0,v.Z)({},y),r),className:u()("".concat(t,"-tabpane"),i&&"".concat(t,"-tabpane-active"),a)},(i||h||n)&&d)}var U=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],J=0;function Q(e,t){var n,o,i=e.id,c=e.prefixCls,l=void 0===c?"rc-tabs":c,g=e.className,y=e.children,Z=e.direction,E=e.activeKey,w=e.defaultActiveKey,C=e.editable,k=e.animated,x=void 0===k?{inkBar:!0,tabPane:!1}:k,N=e.tabPosition,P=void 0===N?"top":N,T=e.tabBarGutter,R=e.tabBarStyle,S=e.tabBarExtraContent,I=e.locale,M=e.moreIcon,A=e.moreTransitionName,L=e.destroyInactiveTabPane,O=e.renderTabBar,B=e.onChange,D=e.onTabClick,V=e.onTabScroll,K=e.getPopupContainer,W=e.popupClassName,j=(0,d.Z)(e,U),q=function(e){return(0,m.Z)(e).map((function(e){if(p.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,v.Z)((0,v.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(y),F="rtl"===Z;o=!1===x?{inkBar:!1,tabPane:!1}:!0===x?{inkBar:!0,tabPane:!0}:(0,v.Z)({inkBar:!0,tabPane:!1},"object"===(0,f.Z)(x)?x:{});var z=(0,p.useState)(!1),H=(0,s.Z)(z,2),X=H[0],Q=H[1];(0,p.useEffect)((function(){Q((0,b.Z)())}),[]);var $=(0,h.Z)((function(){var e;return null===(e=q[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:w}),ee=(0,s.Z)($,2),te=ee[0],ne=ee[1],ae=(0,p.useState)((function(){return q.findIndex((function(e){return e.key===te}))})),re=(0,s.Z)(ae,2),oe=re[0],ie=re[1];(0,p.useEffect)((function(){var e,t=q.findIndex((function(e){return e.key===te}));-1===t&&(t=Math.max(0,Math.min(oe,q.length-1)),ne(null===(e=q[t])||void 0===e?void 0:e.key));ie(t)}),[q.map((function(e){return e.key})).join("_"),te,oe]);var ce=(0,h.Z)(null,{value:i}),le=(0,s.Z)(ce,2),ue=le[0],se=le[1],fe=P;X&&!["left","right"].includes(P)&&(fe="top"),(0,p.useEffect)((function(){i||(se("rc-tabs-".concat(J)),J+=1)}),[]);var de,ve={id:ue,activeKey:te,animated:o,tabPosition:fe,rtl:F,mobile:X},pe=(0,v.Z)((0,v.Z)({},ve),{},{editable:C,locale:I,moreIcon:M,moreTransitionName:A,tabBarGutter:T,onTabClick:function(e,t){null===D||void 0===D||D(e,t);var n=e!==te;ne(e),n&&(null===B||void 0===B||B(e))},onTabScroll:V,extra:S,style:R,panes:y,getPopupContainer:K,popupClassName:W});return de=O?O(pe,G):p.createElement(G,pe),p.createElement(_.Provider,{value:{tabs:q,prefixCls:l}},p.createElement("div",(0,r.Z)({ref:t,id:i,className:u()(l,"".concat(l,"-").concat(fe),(n={},(0,a.Z)(n,"".concat(l,"-mobile"),X),(0,a.Z)(n,"".concat(l,"-editable"),C),(0,a.Z)(n,"".concat(l,"-rtl"),F),n),g)},j),de,p.createElement(Y,(0,r.Z)({destroyInactiveTabPane:L},ve,{animated:o}))))}var $=p.forwardRef(Q);$.TabPane=X;var ee=$,te=n(53124),ne=n(97647),ae=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function re(e){var t,n=e.type,l=e.className,s=e.size,f=e.onEdit,d=e.hideAdd,v=e.centered,m=e.addIcon,b=ae(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),h=b.prefixCls,g=b.moreIcon,y=void 0===g?p.createElement(i.Z,null):g,Z=p.useContext(te.E_),E=Z.getPrefixCls,w=Z.direction,C=E("tabs",h);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===f||void 0===f||f("add"===e?a:n,e)},removeIcon:p.createElement(o.Z,null),addIcon:m||p.createElement(c.Z,null),showAdd:!0!==d});var k=E();return p.createElement(ne.Z.Consumer,null,(function(e){var o,i=void 0!==s?s:e;return p.createElement(ee,(0,r.Z)({direction:w,moreTransitionName:"".concat(k,"-slide-up")},b,{className:u()((o={},(0,a.Z)(o,"".concat(C,"-").concat(i),i),(0,a.Z)(o,"".concat(C,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(C,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(C,"-centered"),v),o),l),editable:t,moreIcon:y,prefixCls:C}))}))}re.TabPane=X;var oe=re}}]);