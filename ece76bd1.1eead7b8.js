(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4],{150:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),l=t(156),i=t.n(l),s=t(171),o=t(160),d=t(155),u=t(159),m=t(151),h=t.n(m),g=[{title:c.a.createElement(c.a.Fragment,null,"Fast"),imageUrl:"img/rocket.png",description:c.a.createElement(c.a.Fragment,null,"SteamSpeak was designed from the ground up to be easily installed and used to get your website/bot up and running quickly.")},{title:c.a.createElement(c.a.Fragment,null,"Clean Code"),imageUrl:"img/clean.svg",description:c.a.createElement(c.a.Fragment,null,"We follow the standard coding rules. We use Eslint, Airbnb config and Prettier during the development process.")},{title:c.a.createElement(c.a.Fragment,null,"Powered by NodeJS and Vue.JS"),imageUrl:"img/nodejs-vuejs.svg",description:c.a.createElement(c.a.Fragment,null,"We use NodeJS as backend language and VueJS as frontend language.")}];function p(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(u.a)(a);return c.a.createElement("div",{className:i()("col col--4",h.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:r,alt:t})),c.a.createElement("h3",{className:"text--center"},t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(d.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(s.a,{title:""+a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:i()("hero hero-dark",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("img",{className:i()(h.a.heroBannerLogo,"margin-vert--md"),src:"img/logo.png",alt:"Metro"}),c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(o.a,{className:i()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/setup/installation")},"Get Started")))),c.a.createElement("main",null,g&&g.length&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},g.map((function(e,a){return c.a.createElement(p,Object(n.a)({key:a},e))})))))))}},173:function(e,a,t){"use strict";t(52),t(25),t(20),t(21),t(76);var n=t(0),r=t.n(n),c=t(156),l=t.n(c),i=t(155),s=t(165);t(132);a.a=function(e){var a=Object(n.useState)(!1),c=a[0],o=a[1],d=Object(n.useRef)(null),u=Object(i.a)().siteConfig,m=(void 0===u?{}:u).themeConfig.algolia,h=Object(s.b)();var g=function(e){void 0===e&&(e=!0),c||Promise.all([t.e(15).then(t.t.bind(null,175,7)),t.e(9).then(t.t.bind(null,178,7))]).then((function(a){var t=a[0].default;o(!0),window.docsearch=t,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&d.current.focus()}(e)}))},p=Object(n.useCallback)((function(){g(),c&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;g(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:E,onFocus:E,onBlur:b,ref:d}))}}}]);