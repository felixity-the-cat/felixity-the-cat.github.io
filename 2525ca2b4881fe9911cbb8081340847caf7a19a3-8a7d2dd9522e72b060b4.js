(self.webpackChunk_felixity_the_cat_felixity_the_cat_github_io=self.webpackChunk_felixity_the_cat_felixity_the_cat_github_io||[]).push([[345],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,f,s;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(f=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,f[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==f[u]&&"__v"!==f[u]&&"__o"!==f[u]||!t.$$typeof)&&!i(t[f[u]],a[f[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(t,e,n){"use strict";n.d(e,{q:function(){return ht}});var r,o,i,a,c=n(5697),u=n.n(c),f=n(4839),s=n.n(f),l=n(2993),p=n.n(l),d=n(7294),y=n(6494),h=n.n(y),m="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(t){return T[t]})),"charset"),w="cssText",C="href",A="http-equiv",O="innerHTML",S="itemprop",E="name",j="property",k="rel",x="src",_="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",N="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",B=Object.keys(P).reduce((function(t,e){return t[P[e]]=e,t}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},K=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},$=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=J(t,T.TITLE),n=J(t,R);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=J(t,I);return e||r||void 0},W=function(t){return J(t,M)||function(){}},Z=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},X=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===k&&"canonical"===t[n].toLowerCase()||u===k&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==O&&c!==w&&c!==S||(n=c)}if(!n||!t[n])return!1;var f=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][f]&&(o[n][f]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},J=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,f=t.scriptTags,s=t.styleTags,l=t.title,p=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,o),ct(l,p);var d={baseTag:ft(T.BASE,n),linkTags:ft(T.LINK,i),metaTags:ft(T.META,a),noscriptTags:ft(T.NOSCRIPT,c),scriptTags:ft(T.SCRIPT,f),styleTags:ft(T.STYLE,s)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],f=e[u]||"";n.getAttribute(u)!==f&&n.setAttribute(u,f),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},ft=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===O)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},st=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[P[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[D]=!0,o=lt(n,r),[d.createElement(T.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=st(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+$(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+$(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case b:return{toComponent:function(){return lt(e)},toString:function(){return st(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(e).forEach((function(t){var n=P[t]||t;if(n===O||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===O||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+$(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,f=t.styleTags,s=t.title,l=void 0===s?"":s,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(m,n,r),htmlAttributes:pt(b,o,r),link:pt(T.LINK,i,r),meta:pt(T.META,a,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,u,r),style:pt(T.STYLE,f,r),title:pt(T.TITLE,{title:l,titleAttributes:p},r)}},yt=s()((function(t){return{baseTag:G([C,_],t),bodyAttributes:Z(m,t),defer:J(t,L),encode:J(t,N),htmlAttributes:Z(b,t),linkTags:X(T.LINK,[k,C],t),metaTags:X(T.META,[E,v,A,j,S],t),noscriptTags:X(T.NOSCRIPT,[O],t),onChangeClientState:W(t),scriptTags:X(T.SCRIPT,[x,O],t),styleTags:X(T.STYLE,[w],t),title:V(t),titleAttributes:Z(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),ht=(o=yt,a=i=function(t){function e(){return F(this,e),K(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return Y({},o,((e={})[r.type]=a,e.titleAttributes=Y({},i),e));case T.BODY:return Y({},o,{bodyAttributes:Y({},i)});case T.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[B[n]||n]=t[n],e}),e)}(z(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=z(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.createElement(o,r)},U(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ht.renderStatic=ht.rewind},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,f=[];function s(){u=t(f.map((function(t){return t.props}))),l.canUseDOM?e(u):n&&(u=n(u))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,f=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){f.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},4273:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(9),o=n.p+"static/Billabong-15b124bd411b94e1da8914b4e10b7af7.woff2",i=n.p+"static/Billabong-b8d9be2d62a292c0c6dc4293c8cf3f8d.woff",a=n.p+"static/Billabong-23b39ea3caf10dd1cfd5cac701c284c4.otf",c=(0,r.createGlobalStyle)(['@font-face{font-family:"Billabong";src:url(',') format("woff2"),url(',') format("woff"),url(',') format("opentype");font-style:normal;font-weight:normal;font-feature-settings:"kern" 1,"onum" 1;unicode-range:U+000-5FF,U+261C;font-display:block;}'],o,i,a)},9837:function(t,e,n){"use strict";n.d(e,{$$:function(){return o},X6:function(){return i},Ez:function(){return a},og:function(){return c}});n(7294);var r=n(9),o=(n(4273),r.default.div.withConfig({displayName:"layouts__Deck",componentId:"sc-1c5ty5q-0"})(['align-items:center;align-content:center;margin:1rem auto;columns:1;width:90%;max-width:500px;display:block;font-family:"Billabong";'])),i=r.default.header.withConfig({displayName:"layouts__Heading",componentId:"sc-1c5ty5q-1"})(["width:40%;margin:0 auto 0 40%;"]),a=r.default.main.withConfig({displayName:"layouts__Nametag",componentId:"sc-1c5ty5q-2"})(["width:70%;margin:3rem auto;"]),c=r.default.footer.withConfig({displayName:"layouts__Footing",componentId:"sc-1c5ty5q-3"})(["display:flex;justify-content:flex-end;*{text-align:right;font-size:1.3rem;}a{color:inherit;font-weight:normal;text-decoration:none;:hover{font-weight:bolder;text-decoration:none;}}"])},4243:function(t,e,n){"use strict";e.Z=n.p+"static/felixity_the_cat-600dc9a3afab2f5014aad3d7a4bbaa7e.svg"}}]);
//# sourceMappingURL=2525ca2b4881fe9911cbb8081340847caf7a19a3-8a7d2dd9522e72b060b4.js.map