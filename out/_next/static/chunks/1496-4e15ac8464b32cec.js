"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1496],{5946:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5079),r=n(2466),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(336),c=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="PlusOutlined";var l=r.forwardRef(c)},3876:function(e,t,n){var a=n(6027);t.Z=a.Z},7635:function(e,t,n){var a=n(8792);t.Z=a.Z},4032:function(e,t,n){n.d(t,{Z:function(){return U}});var a=n(3659),r=n(9221),o=n(2466),i=n(1108),c=n(6257),l=n(194),u=n(5079),s=n(2852),f=n.n(s),d=n(6527),v=n(1307),p=n(6724),m=n(7762),b=n(6347),h=n(4031);function y(e){var t=(0,o.useRef)(),n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return function(){n.current=!0,b.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(b.Z.cancel(t.current),t.current=(0,b.Z)((function(){e.apply(void 0,r)})))}}var g=n(9417);function Z(e,t){var n,a=e.prefixCls,i=e.id,c=e.active,l=e.tab,u=l.key,s=l.tab,d=l.disabled,v=l.closeIcon,p=e.closable,m=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,E=e.onFocus,w=e.style,C="".concat(a,"-tab");o.useEffect((function(){return Z}),[]);var k=h&&!1!==p&&!d;function x(e){d||y(e)}var N=o.createElement("div",{key:u,ref:t,className:f()(C,(n={},(0,r.Z)(n,"".concat(C,"-with-remove"),k),(0,r.Z)(n,"".concat(C,"-active"),c),(0,r.Z)(n,"".concat(C,"-disabled"),d),n)),style:w,onClick:x},o.createElement("div",{role:"tab","aria-selected":c,id:i&&"".concat(i,"-tab-").concat(u),className:"".concat(C,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[g.Z.SPACE,g.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:E},s),k&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},v||h.removeIcon||"\xd7"));return m?m(N):N}var E=o.forwardRef(Z),w={width:0,height:0,left:0,top:0};var C={width:0,height:0,left:0,top:0,right:0};var k=n(8675),x=n(193);function N(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,i=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var T=o.forwardRef(N);function P(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,v=e.moreTransitionName,p=e.style,m=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,E=e.onTabClick,w=(0,o.useState)(!1),C=(0,i.Z)(w,2),N=C[0],P=C[1],R=(0,o.useState)(null),S=(0,i.Z)(R,2),I=S[0],M=S[1],A="".concat(a,"-more-popup"),L="".concat(n,"-dropdown"),O=null!==I?"".concat(A,"-").concat(I):null,B=null===l||void 0===l?void 0:l.dropdownAriaLabel;var D=o.createElement(k.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;E(t,n),P(!1)},id:A,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[I],"aria-label":void 0!==B?B:"expanded dropdown"},c.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return o.createElement(k.sN,{key:e.key,id:"".concat(A,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},o.createElement("span",null,e.tab),t&&o.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:a,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function V(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void M(o.key)}}(0,o.useEffect)((function(){var e=document.getElementById(O);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),(0,o.useEffect)((function(){N||M(null)}),[N]);var j=(0,r.Z)({},y?"marginRight":"marginLeft",h);c.length||(j.visibility="hidden",j.order=1);var K=f()((0,r.Z)({},"".concat(L,"-rtl"),y)),W=u?null:o.createElement(x.Z,{prefixCls:L,overlay:D,trigger:["hover"],visible:N,transitionName:v,onVisibleChange:P,overlayClassName:K,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:j,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(a,"-more"),"aria-expanded":N,onKeyDown:function(e){var t=e.which;if(N)switch(t){case g.Z.UP:V(-1),e.preventDefault();break;case g.Z.DOWN:V(1),e.preventDefault();break;case g.Z.ESC:P(!1);break;case g.Z.SPACE:case g.Z.ENTER:null!==I&&E(I,e)}else[g.Z.DOWN,g.Z.SPACE,g.Z.ENTER].includes(t)&&(P(!0),e.preventDefault())}},d));return o.createElement("div",{className:f()("".concat(n,"-nav-operations"),m),style:p,ref:t},W,o.createElement(T,{prefixCls:n,locale:l,editable:b}))}var R=o.memo(o.forwardRef(P),(function(e,t){return t.tabMoving})),S=(0,o.createContext)(null),I=Math.pow(.995,20);function M(e,t){var n=o.useRef(e),a=o.useState({}),r=(0,i.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var A=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var i={};return r&&"object"===(0,c.Z)(r)&&!o.isValidElement(r)?i=r:i.right=r,"right"===n&&(t=i.right),"left"===n&&(t=i.left),t?o.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function L(e,t){var n,c=o.useContext(S),l=c.prefixCls,s=c.tabs,d=e.className,v=e.style,p=e.id,g=e.animated,Z=e.activeKey,k=e.rtl,x=e.extra,N=e.editable,P=e.locale,L=e.tabPosition,O=e.tabBarGutter,B=e.children,D=e.onTabClick,V=e.onTabScroll,j=(0,o.useRef)(),K=(0,o.useRef)(),W=(0,o.useRef)(),_=(0,o.useRef)(),q=function(){var e=(0,o.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,o.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),z=(0,i.Z)(q,2),H=z[0],Y=z[1],G="top"===L||"bottom"===L,F=M(0,(function(e,t){G&&V&&V({direction:e>t?"left":"right"})})),X=(0,i.Z)(F,2),Q=X[0],U=X[1],J=M(0,(function(e,t){!G&&V&&V({direction:e>t?"top":"bottom"})})),$=(0,i.Z)(J,2),ee=$[0],te=$[1],ne=(0,o.useState)(0),ae=(0,i.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,o.useState)(0),ce=(0,i.Z)(ie,2),le=ce[0],ue=ce[1],se=(0,o.useState)(null),fe=(0,i.Z)(se,2),de=fe[0],ve=fe[1],pe=(0,o.useState)(null),me=(0,i.Z)(pe,2),be=me[0],he=me[1],ye=(0,o.useState)(0),ge=(0,i.Z)(ye,2),Ze=ge[0],Ee=ge[1],we=(0,o.useState)(0),Ce=(0,i.Z)(we,2),ke=Ce[0],xe=Ce[1],Ne=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),a=(0,i.Z)(n,2)[1],r=(0,o.useRef)("function"===typeof e?e():e),c=y((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Te=(0,i.Z)(Ne,2),Pe=Te[0],Re=Te[1],Se=function(e,t,n){return(0,o.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,s=t.get(l);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||w);var f=a.get(l)||(0,u.Z)({},s);f.right=o-f.left-f.width,a.set(l,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(s,Pe,re),Ie="".concat(l,"-nav-operations-hidden"),Me=0,Ae=0;function Le(e){return e<Me?Me:e>Ae?Ae:e}G?k?(Me=0,Ae=Math.max(0,re-de)):(Me=Math.min(0,de-re),Ae=0):(Me=Math.min(0,be-le),Ae=0);var Oe=(0,o.useRef)(),Be=(0,o.useState)(),De=(0,i.Z)(Be,2),Ve=De[0],je=De[1];function Ke(){je(Date.now())}function We(){window.clearTimeout(Oe.current)}function _e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=Se.get(e)||{width:0,height:0,left:0,right:0,top:0};if(G){var n=Q;k?t.right<Q?n=t.right:t.right+t.width>Q+de&&(n=t.right+t.width-de):t.left<-Q?n=-t.left:t.left+t.width>-Q+de&&(n=-(t.left+t.width-de)),te(0),U(Le(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+be&&(a=-(t.top+t.height-be)),U(0),te(Le(a))}}!function(e,t){var n=(0,o.useState)(),a=(0,i.Z)(n,2),r=a[0],c=a[1],l=(0,o.useState)(0),u=(0,i.Z)(l,2),s=u[0],f=u[1],d=(0,o.useState)(0),v=(0,i.Z)(d,2),p=v[0],m=v[1],b=(0,o.useState)(),h=(0,i.Z)(b,2),y=h[0],g=h[1],Z=(0,o.useRef)(),E=(0,o.useRef)(),w=(0,o.useRef)(null);w.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(Z.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var u=Date.now();f(u),m(u-s),g({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),g(null),y)){var e=y.x/p,n=y.y/p,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;Z.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(i*=I),20*(l*=I))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},o.useEffect((function(){function t(e){w.current.onTouchMove(e)}function n(e){w.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){w.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){w.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(j,(function(e,t){function n(e,t){e((function(e){return Le(e+t)}))}if(G){if(de>=re)return!1;n(U,e)}else{if(be>=le)return!1;n(te,t)}return We(),Ke(),!0})),(0,o.useEffect)((function(){return We(),Ve&&(Oe.current=window.setTimeout((function(){je(0)}),100)),We}),[Ve]);var qe=function(e,t,n,a,r){var i,c,l,u=r.tabs,s=r.tabPosition,f=r.rtl;["top","bottom"].includes(s)?(i="width",c=f?"right":"left",l=Math.abs(t.left)):(i="height",c="top",l=-t.top);var d=t[i],v=n[i],p=a[i],m=d;return v+p>d&&v<d&&(m=d-p),(0,o.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||C;if(r[c]+r[i]>l+m){n=a-1;break}}for(var o=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||C)[c]<l){o=s+1;break}return[o,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),f])}(Se,{width:de,height:be,left:Q,top:ee},{width:re,height:le},{width:Ze,height:ke},(0,u.Z)((0,u.Z)({},e),{},{tabs:s})),ze=(0,i.Z)(qe,2),He=ze[0],Ye=ze[1],Ge={};"top"===L||"bottom"===L?Ge[k?"marginRight":"marginLeft"]=O:Ge.marginTop=O;var Fe=s.map((function(e,t){var n=e.key;return o.createElement(E,{id:p,prefixCls:l,key:n,tab:e,style:0===t?void 0:Ge,closable:e.closable,editable:N,active:n===Z,renderWrapper:B,removeAriaLabel:null===P||void 0===P?void 0:P.removeAriaLabel,ref:H(n),onClick:function(e){D(n,e)},onRemove:function(){Y(n)},onFocus:function(){_e(n),Ke(),j.current&&(k||(j.current.scrollLeft=0),j.current.scrollTop=0)}})})),Xe=y((function(){var e,t,n,a,r,o,i=(null===(e=j.current)||void 0===e?void 0:e.offsetWidth)||0,c=(null===(t=j.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=_.current)||void 0===n?void 0:n.offsetWidth)||0,u=(null===(a=_.current)||void 0===a?void 0:a.offsetHeight)||0;ve(i),he(c),Ee(l),xe(u);var f=((null===(r=K.current)||void 0===r?void 0:r.offsetWidth)||0)-l,d=((null===(o=K.current)||void 0===o?void 0:o.offsetHeight)||0)-u;oe(f),ue(d),Re((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=H(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Qe=s.slice(0,He),Ue=s.slice(Ye+1),Je=[].concat((0,m.Z)(Qe),(0,m.Z)(Ue)),$e=(0,o.useState)(),et=(0,i.Z)($e,2),tt=et[0],nt=et[1],at=Se.get(Z),rt=(0,o.useRef)();function ot(){b.Z.cancel(rt.current)}(0,o.useEffect)((function(){var e={};return at&&(G?(k?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ot(),rt.current=(0,b.Z)((function(){nt(e)})),ot}),[at,G,k]),(0,o.useEffect)((function(){_e()}),[Z,at,Se,G]),(0,o.useEffect)((function(){Xe()}),[k,O,Z,s.map((function(e){return e.key})).join("_")]);var it,ct,lt,ut,st=!!Je.length,ft="".concat(l,"-nav-wrap");return G?k?(ct=Q>0,it=Q+de<re):(it=Q<0,ct=-Q+de<re):(lt=ee<0,ut=-ee+be<le),o.createElement("div",{ref:t,role:"tablist",className:f()("".concat(l,"-nav"),d),style:v,onKeyDown:function(){Ke()}},o.createElement(A,{position:"left",extra:x,prefixCls:l}),o.createElement(h.Z,{onResize:Xe},o.createElement("div",{className:f()(ft,(n={},(0,r.Z)(n,"".concat(ft,"-ping-left"),it),(0,r.Z)(n,"".concat(ft,"-ping-right"),ct),(0,r.Z)(n,"".concat(ft,"-ping-top"),lt),(0,r.Z)(n,"".concat(ft,"-ping-bottom"),ut),n)),ref:j},o.createElement(h.Z,{onResize:Xe},o.createElement("div",{ref:K,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(Q,"px, ").concat(ee,"px)"),transition:Ve?"none":void 0}},Fe,o.createElement(T,{ref:_,prefixCls:l,locale:P,editable:N,style:(0,u.Z)((0,u.Z)({},0===Fe.length?void 0:Ge),{},{visibility:st?"hidden":null})}),o.createElement("div",{className:f()("".concat(l,"-ink-bar"),(0,r.Z)({},"".concat(l,"-ink-bar-animated"),g.inkBar)),style:tt}))))),o.createElement(R,(0,a.Z)({},e,{removeAriaLabel:null===P||void 0===P?void 0:P.removeAriaLabel,ref:W,prefixCls:l,tabs:Je,className:!st&&Ie,tabMoving:!!Ve})),o.createElement(A,{position:"right",extra:x,prefixCls:l}))}var O=o.forwardRef(L);function B(e){var t=e.id,n=e.activeKey,a=e.animated,i=e.tabPosition,c=e.rtl,l=e.destroyInactiveTabPane,u=o.useContext(S),s=u.prefixCls,d=u.tabs,v=a.tabPane,p=d.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:f()("".concat(s,"-content-holder"))},o.createElement("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(i),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:p&&v?(0,r.Z)({},c?"marginRight":"marginLeft","-".concat(p,"00%")):null},d.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:l})}))))}function D(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,s=e.animated,d=e.destroyInactiveTabPane,v=e.tabKey,p=e.children,m=o.useState(n),b=(0,i.Z)(m,2),h=b[0],y=b[1];o.useEffect((function(){l?y(!0):d&&y(!1)}),[l,d]);var g={};return l||(s?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),o.createElement("div",{id:c&&"".concat(c,"-panel-").concat(v),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(v),"aria-hidden":!l,style:(0,u.Z)((0,u.Z)({},g),r),className:f()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||h||n)&&p)}var V=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],j=0;function K(e,t){var n,s,m=e.id,b=e.prefixCls,h=void 0===b?"rc-tabs":b,y=e.className,g=e.children,Z=e.direction,E=e.activeKey,w=e.defaultActiveKey,C=e.editable,k=e.animated,x=void 0===k?{inkBar:!0,tabPane:!1}:k,N=e.tabPosition,T=void 0===N?"top":N,P=e.tabBarGutter,R=e.tabBarStyle,I=e.tabBarExtraContent,M=e.locale,A=e.moreIcon,L=e.moreTransitionName,D=e.destroyInactiveTabPane,K=e.renderTabBar,W=e.onChange,_=e.onTabClick,q=e.onTabScroll,z=(0,l.Z)(e,V),H=function(e){return(0,d.Z)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,u.Z)((0,u.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(g),Y="rtl"===Z;s=!1===x?{inkBar:!1,tabPane:!1}:!0===x?{inkBar:!0,tabPane:!0}:(0,u.Z)({inkBar:!0,tabPane:!1},"object"===(0,c.Z)(x)?x:{});var G=(0,o.useState)(!1),F=(0,i.Z)(G,2),X=F[0],Q=F[1];(0,o.useEffect)((function(){Q((0,v.Z)())}),[]);var U=(0,p.Z)((function(){var e;return null===(e=H[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:w}),J=(0,i.Z)(U,2),$=J[0],ee=J[1],te=(0,o.useState)((function(){return H.findIndex((function(e){return e.key===$}))})),ne=(0,i.Z)(te,2),ae=ne[0],re=ne[1];(0,o.useEffect)((function(){var e,t=H.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,H.length-1)),ee(null===(e=H[t])||void 0===e?void 0:e.key));re(t)}),[H.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,p.Z)(null,{value:m}),ie=(0,i.Z)(oe,2),ce=ie[0],le=ie[1],ue=T;X&&!["left","right"].includes(T)&&(ue="top"),(0,o.useEffect)((function(){m||(le("rc-tabs-".concat(j)),j+=1)}),[]);var se,fe={id:ce,activeKey:$,animated:s,tabPosition:ue,rtl:Y,mobile:X},de=(0,u.Z)((0,u.Z)({},fe),{},{editable:C,locale:M,moreIcon:A,moreTransitionName:L,tabBarGutter:P,onTabClick:function(e,t){null===_||void 0===_||_(e,t);var n=e!==$;ee(e),n&&(null===W||void 0===W||W(e))},onTabScroll:q,extra:I,style:R,panes:g});return se=K?K(de,O):o.createElement(O,de),o.createElement(S.Provider,{value:{tabs:H,prefixCls:h}},o.createElement("div",(0,a.Z)({ref:t,id:m,className:f()(h,"".concat(h,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(h,"-mobile"),X),(0,r.Z)(n,"".concat(h,"-editable"),C),(0,r.Z)(n,"".concat(h,"-rtl"),Y),n),y)},z),se,o.createElement(B,(0,a.Z)({destroyInactiveTabPane:D},fe,{animated:s}))))}var W=o.forwardRef(K);W.TabPane=D;var _=W,q=n(4002),z=n(5946),H=n(6998),Y=n(4732),G=n(1151),F=n(621),X=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function Q(e){var t,n=e.type,i=e.className,c=e.size,l=e.onEdit,u=e.hideAdd,s=e.centered,d=e.addIcon,v=X(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),p=v.prefixCls,m=v.moreIcon,b=void 0===m?o.createElement(q.Z,null):m,h=o.useContext(G.E_),y=h.getPrefixCls,g=h.direction,Z=y("tabs",p);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===l||void 0===l||l("add"===e?a:n,e)},removeIcon:o.createElement(H.Z,null),addIcon:d||o.createElement(z.Z,null),showAdd:!0!==u});var E=y();return(0,Y.Z)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(F.Z.Consumer,null,(function(e){var l,u=void 0!==c?c:e;return o.createElement(_,(0,a.Z)({direction:g,moreTransitionName:"".concat(E,"-slide-up")},v,{className:f()((l={},(0,r.Z)(l,"".concat(Z,"-").concat(u),u),(0,r.Z)(l,"".concat(Z,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(l,"".concat(Z,"-editable-card"),"editable-card"===n),(0,r.Z)(l,"".concat(Z,"-centered"),s),l),i),editable:t,moreIcon:b,prefixCls:Z}))}))}Q.TabPane=D;var U=Q},193:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(5079),r=n(9221),o=n(1108),i=n(194),c=n(2466),l=n(9648),u=n(2852),s=n.n(u),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},p=n(9417),m=p.Z.ESC,b=p.Z.TAB;var h=n(4160),y=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function g(e,t){var n=e.arrow,u=void 0!==n&&n,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,p=e.transitionName,g=e.animation,Z=e.align,E=e.placement,w=void 0===E?"bottomLeft":E,C=e.placements,k=void 0===C?v:C,x=e.getPopupContainer,N=e.showAction,T=e.hideAction,P=e.overlayClassName,R=e.overlayStyle,S=e.visible,I=e.trigger,M=void 0===I?["hover"]:I,A=(0,i.Z)(e,y),L=c.useState(),O=(0,o.Z)(L,2),B=O[0],D=O[1],V="visible"in e?S:B,j=c.useRef(null);c.useImperativeHandle(t,(function(){return j.current}));var K=c.useRef(null),W="".concat(d,"-menu");!function(e){var t=e.visible,n=e.setTriggerVisible,a=e.triggerRef,r=e.menuRef,o=e.onVisibleChange,i=c.useRef(!1),l=function(){var e,r,i,c;t&&a.current&&(null===(e=a.current)||void 0===e||null===(r=e.triggerRef)||void 0===r||null===(i=r.current)||void 0===i||null===(c=i.focus)||void 0===c||c.call(i),n(!1),"function"===typeof o&&o(!1))},u=function(e){var t;switch(e.keyCode){case m:l();break;case b:!i.current&&(null===(t=r.current)||void 0===t?void 0:t.focus)?(e.preventDefault(),r.current.focus(),i.current=!0):l()}};c.useEffect((function(){return t?(window.addEventListener("keydown",u),function(){window.removeEventListener("keydown",u),i.current=!1}):function(){return null}}),[t])}({visible:V,setTriggerVisible:D,triggerRef:j,menuRef:K,onVisibleChange:e.onVisibleChange});var _=function(){var t=e.overlay;return"function"===typeof t?t():t},q=function(t){var n=e.onOverlayClick,a=_().props;D(!1),n&&n(t),a.onClick&&a.onClick(t)},z=function(){var e,t=_(),n=(0,h.sQ)(K,t.ref),a=(e={prefixCls:W},(0,r.Z)(e,"data-dropdown-inject",!0),(0,r.Z)(e,"onClick",q),(0,r.Z)(e,"ref",(0,h.Yr)(t)?n:void 0),e);return"string"===typeof t.type&&(delete a.prefixCls,delete a["data-dropdown-inject"]),c.createElement(c.Fragment,null,u&&c.createElement("div",{className:"".concat(d,"-arrow")}),c.cloneElement(t,a))},H=T;return H||-1===M.indexOf("contextMenu")||(H=["click"]),c.createElement(l.Z,(0,a.Z)((0,a.Z)({builtinPlacements:k},A),{},{prefixCls:d,ref:j,popupClassName:s()(P,(0,r.Z)({},"".concat(d,"-show-arrow"),u)),popupStyle:R,action:M,showAction:N,hideAction:H||[],popupPlacement:w,popupAlign:Z,popupTransitionName:p,popupAnimation:g,popupVisible:V,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?z:z(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;D(t),"function"===typeof n&&n(t)},getPopupContainer:x}),function(){var t=e.children,n=t.props?t.props:{},a=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(d,"-open")}());return V&&t?c.cloneElement(t,{className:a}):t}())}var Z=c.forwardRef(g)}}]);