(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(180),l=a(164),o=a(155),i=a(159),s="",u="dark",d=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),l(s)}),[]),d=Object(n.useCallback)((function(){c(u),l(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:d}},m=a(183);var h=function(e){var t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(m.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(79),a(172),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),b=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var v=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(b.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(133),p=a.n(g);var k=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,l=a.content,i=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),d=u[0],m=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&m(!1)}),[]),!l||d?null:r.a.createElement("div",{className:p.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:p.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:p.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),m(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(1),_=a(9),O=a(156),y=a.n(O),j=a(160),C=a(173),N=a(201),w=a.n(N),T=a(134),S=a.n(T),L=function(){return r.a.createElement("span",{className:y()(S.a.toggle,S.a.moon)})},M=function(){return r.a.createElement("span",{className:y()(S.a.toggle,S.a.sun)})},x=function(e){var t=Object(o.a)().isClient;return r.a.createElement(w.a,Object(E.a)({disabled:!t,icons:{checked:r.a.createElement(L,null),unchecked:r.a.createElement(M,null)}},e))},D=a(174),I=a(165);var P=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},B=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),m=d[0],h=d[1],f=Object(n.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]),b=Object(I.c)(),v=P(b.hash),g=v[0],p=v[1],k=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&r(!0),!(e<m)){if(l)return o(!1),r(!1),void u(e);var t=document.documentElement.scrollHeight-m,a=window.innerHeight;s&&e>=s?r(!1):e+a<t&&r(!0),u(e)}};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[s,m]),Object(n.useEffect)((function(){e&&(r(!0),p(b.hash))}),[b]),Object(n.useEffect)((function(){e&&g&&o(!0)}),[g]),{navbarRef:f,isNavbarVisible:a}},X=a(184),F=a(185),G=a(135),A=a.n(G);function H(e){var t=e.activeBasePath,a=e.to,n=e.href,c=e.label,l=(e.position,Object(_.a)(e,["activeBasePath","to","href","label","position"])),o=Object(i.a)(a),s=Object(i.a)(t);return r.a.createElement(j.a,Object(E.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({activeClassName:"navbar__link--active",to:o},t?{isActive:function(e,t){return t.pathname.startsWith(s)}}:null),l),c)}function R(e){var t=e.items,a=e.position,n=Object(_.a)(e,["items","position"]);return t?r.a.createElement("div",{className:y()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(H,Object(E.a)({className:"navbar__item navbar__link"},n),n.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(H,Object(E.a)({className:"navbar__item navbar__link"},e)))})))):r.a.createElement(H,Object(E.a)({className:"navbar__item navbar__link"},n))}function U(e){var t=e.items,a=Object(_.a)(e,["items"]);return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(H,Object(E.a)({className:"menu__link menu__link--sublist"},a),a.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(H,Object(E.a)({className:"menu__link"},e)))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(H,Object(E.a)({className:"menu__link"},a)))}var V=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,l=c.navbar,i=(l=void 0===l?{}:l).title,s=l.links,u=void 0===s?[]:s,d=l.hideOnScroll,m=void 0!==d&&d,h=c.disableDarkMode,f=void 0!==h&&h,b=a.isClient,v=Object(n.useState)(!1),g=v[0],p=v[1],k=Object(n.useState)(!1),_=k[0],O=k[1],N=Object(D.a)(),w=N.isDarkTheme,T=N.setLightTheme,S=N.setDarkTheme,L=B(m),M=L.navbarRef,I=L.isNavbarVisible,P=Object(F.a)(),G=P.logoLink,H=P.logoLinkProps,V=P.logoImageUrl,W=P.logoAlt;Object(X.a)(g);var Y=Object(n.useCallback)((function(){p(!0)}),[p]),J=Object(n.useCallback)((function(){p(!1)}),[p]),K=Object(n.useCallback)((function(e){return e.target.checked?S():T()}),[T,S]);return r.a.createElement("nav",{ref:M,className:y()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":g},e[A.a.navbarHideable]=m,e[A.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Y,onKeyDown:Y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(j.a,Object(E.a)({className:"navbar__brand",to:G},H),null!=V&&r.a.createElement("img",{key:b,className:"navbar__logo",src:V,alt:W}),null!=i&&r.a.createElement("strong",{className:y()("navbar__title",(t={},t[A.a.hideLogoText]=_,t))},i)),u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(R,Object(E.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(R,Object(E.a)({},e,{key:t}))})),!f&&r.a.createElement(x,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:w,onChange:K}),r.a.createElement(C.a,{handleSearchBarToggle:O,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(j.a,Object(E.a)({className:"navbar__brand",onClick:J,to:G},H),null!=V&&r.a.createElement("img",{key:b,className:"navbar__logo",src:V,alt:W}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!f&&g&&r.a.createElement(x,{"aria-label":"Dark mode toggle in sidebar",checked:w,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(U,Object(E.a)({},e,{onClick:J,key:t}))})))))))},W=a(136),Y=a.n(W);function J(e){var t=e.to,a=e.href,n=e.label,c=Object(_.a)(e,["to","href","label"]),l=Object(i.a)(t);return r.a.createElement(j.a,Object(E.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var K=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var q=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,l=n.links,s=void 0===l?[]:l,u=n.logo,d=void 0===u?{}:u,m=Object(i.a)(d.src);return a?r.a.createElement("footer",{className:y()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(J,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:Y.a.footerLogoLink},r.a.createElement(K,{alt:d.alt,url:m})):r.a.createElement(K,{alt:d.alt,url:m})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(137);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,d=a.url,m=e.children,f=e.title,b=e.noFooter,g=e.description,p=e.image,E=e.keywords,_=e.permalink,O=e.version,y=f?f+" | "+s:s,j=p||u,C=d+Object(i.a)(j);Object(l.a)(j)||(C=j);var N=Object(i.a)(n);return r.a.createElement(h,null,r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:C}),j&&r.a.createElement("meta",{property:"twitter:image",content:C}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),_&&r.a.createElement("meta",{property:"og:url",content:d+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(V,null),r.a.createElement("div",{className:"main-wrapper"},m),!b&&r.a.createElement(q,null)))}},174:function(e,t,a){"use strict";var n=a(0),r=a(183);t.a=function(){return Object(n.useContext)(r.a)}},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},184:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},185:function(e,t,a){"use strict";var n=a(155),r=a(174),c=a(159),l=a(164);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,o=(a=void 0===a?{}:a).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,u=i.href||t,d={};i.target?d={target:i.target}:Object(l.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var m=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(m),logoAlt:i.alt}}},201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(156)),i=m(a(17)),s=m(a(202)),u=m(a(203)),d=a(204);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},202:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},204:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);