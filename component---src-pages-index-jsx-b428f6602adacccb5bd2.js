"use strict";(self.webpackChunk_felixity_the_cat_felixity_the_cat_github_io=self.webpackChunk_felixity_the_cat_felixity_the_cat_github_io||[]).push([[279],{3038:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,l=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,s=l,l=!0,o++):l&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=l,l=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=l,l=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3047:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return g},M:function(){return x},P:function(){return v},_:function(){return s},a:function(){return l},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(5637),n=(a(3038),a(5983)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=s(e,h);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,y);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,l({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var E;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(b,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,l({},e)),r.createElement("noscript",null,r.createElement(b,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],_=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:i().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],I=new Set;let $,F;const A=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:h}=e,y=s(e,T);const{width:f,height:b,layout:E}=n,w=c(f,b,E),{style:v,className:x}=w,C=s(w,N),k=(0,r.useRef)(),_=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(E,f,b);return(0,r.useEffect)((()=>{$||($=a.e(357).then(a.bind(a,9357)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return F=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(_);if(F&&I.has(_))return;let t,r;return $.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:I.has(_),image:n},y)),I.has(_)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,_,I,i,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{I.has(_)&&F&&(k.current.innerHTML=F(l({isLoading:I.has(_),isLoaded:I.has(_),image:n},y)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},C,{style:l({},v,i,{backgroundColor:u}),className:`${x}${d?` ${d}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));j.propTypes=S,j.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=s(t,O);return i&&console.warn(i),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const R=P((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:y,objectFit:f,objectPosition:b}=e,E=s(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=l({objectFit:f,objectPosition:b,backgroundColor:y},h);const{width:w,height:L,layout:S,images:T,placeholder:N,backgroundColor:I}=o,$=c(w,L,S),{style:F,className:A}=$,j=s($,k),O={fallback:void 0,sources:[]};return T.fallback&&(O.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?_(T.fallback.srcSet):void 0})),T.sources&&(O.sources=T.sources.map((e=>l({},e,{srcSet:_(e.srcSet)})))),r.createElement(t,l({},j,{style:l({},F,i,{backgroundColor:y}),className:`${A}${a?` ${a}`:""}`}),r.createElement(g,{layout:S,width:w,height:L},r.createElement(v,l({},d(N,!1,S,w,L,I,f,b))),r.createElement(x,l({"data-gatsby-image-ssr":"",className:p},E,u("eager"===m,!1,O,m,h)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:L,width:q,height:q,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=z;const W=P(j);W.displayName="StaticImage",W.propTypes=z},2162:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(5637),n=a(8564),i=a(3047),l=a(2922),s=a(784),o=a(1837);function c(e){let{data:t}=e;return r.createElement(r.Fragment,null,r.createElement(n.m,null,r.createElement("title",null,"Felixity's site"),r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("meta",{name:"author",content:"Michael C. Burkhart"}),r.createElement("meta",{name:"description",content:"Felxity the Cat's home page"}),r.createElement("meta",{name:"keywords",content:"Felixity,the cat,tuxedo cats,instagram"}),r.createElement("meta",{property:"og:title",content:"Felixity the Cat's purrsonal site"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:s.A}),r.createElement("meta",{property:"og:url",content:"https://felixity-the-cat.github.io"}),r.createElement("meta",{property:"og:description",content:"Home page of your favorite Instagram purrsonality, @felixity_the_cat"}),r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:site",content:"@FelixityTheCat"}),r.createElement("meta",{name:"twitter:creator",content:"@burkh4rt"}),r.createElement("meta",{name:"twitter:title",content:"Felixity the Cat's purrsonal site"}),r.createElement("meta",{name:"twitter:description",content:"Home page of your favorite Twitter purrsonality, @FelixityTheCat"}),r.createElement("meta",{property:"twitter:image",content:s.A}),r.createElement("meta",{name:"twitter:dnt",content:"on"}),r.createElement("link",{rel:"me",href:"https://twitter.com/FelixityTheCat"}),r.createElement("script",{type:"application/ld+json"},'\n              {\n              "@context": "http://schema.org/",\n              "@type": "Person",\n              "name": "Felixity",\n              "additionalName": "the Cat",\n              "birthPlace": {\n                "@type": "Place",\n                "address": {\n                  "addressLocality": "San José",\n                  "addressRegion": "CA",\n                  "addressCountry": "US"\n                  }\n                },\n              "gender": "http://schema.org/Female",\n              "givenName": "Felixity",\n              "knowsAbout": "cat stuff",\n              "nationality": "US",\n              "relatedTo": {\n                "@type": "Person",\n                "name": "Michael C. Burkhart",\n                "sameAs": "https://burkh4rt.github.io"\n                },\n              "sameAs": [\n                "https://felixity-the-cat.github.io",\n                "https://www.instagram.com/felixity_the_cat",\n                "https://twitter.com/FelixityTheCat"\n                ]\n              }\n          ')),r.createElement("body",null,r.createElement(l.A,null),r.createElement(o.E$,null,r.createElement(o.DZ,null,r.createElement("picture",null,r.createElement("img",{src:s.A,alt:"me"}))),r.createElement(o.EU,null,r.createElement("a",{href:"https://www.instagram.com/felixity_the_cat",target:"_blank",rel:"noopener"},r.createElement(i.G,{image:t.file.childImageSharp.gatsbyImageData,alt:"Felixity the cat"}))),r.createElement(o.TS,null,r.createElement("a",{href:"https://burkh4rt.github.io",target:"_blank",rel:"noopener"},r.createElement("p",null,"© Michael C. Burkhart, ",t.site.year))))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-b428f6602adacccb5bd2.js.map