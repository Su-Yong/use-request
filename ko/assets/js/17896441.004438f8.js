"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{1139:function(t,e,n){n.d(e,{Z:function(){return W}});var r=n(7294),i=n(5861),a=n(7757),c=n.n(a),u=function(){var t=(0,i.Z)(c().mark((function t(e,n,r,i){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r="POST"),void 0===i&&(i={}),t.next=4,fetch(e,{method:r,body:JSON.stringify(n),headers:Object.assign({"Content-Type":"application/json"},i)});case 4:return t.abrupt("return",t.sent.json());case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}(),s={initWith:void 0,cache:!0,dedupingFetching:!0,initWhenUndefined:!0,UNSTABLE__suspense:!1,fetcher:u},o=["initWith","cache","dedupingFetching","initWhenUndefined","UNSTABLE__suspense","fetcher"],h=function(t,e){var n={};return o.forEach((function(r){if("initWith"===r){var i=[];if(Array.isArray(t.initWith)&&i.push(t.initWith),Array.isArray(e.initWith)&&i.push(e.initWith),i.length>0)null!=n.initWith||(n.initWith=[]),i.forEach((function(t){var e;n.initWith.length<t.length&&(e=n.initWith).push.apply(e,t.slice(n.initWith.length))}));else Array.isArray(n.initWith)||(Object.hasOwnProperty.call(t,"initWith")?n.initWith=t.initWith:Object.hasOwnProperty.call(e,"initWith")&&(n.initWith=e.initWith))}else Object.hasOwnProperty.call(t,r)?n[r]=t[r]:Object.hasOwnProperty.call(e,r)&&(n[r]=e[r])})),n},l=function(t){return h(t,s)},f=r.createContext({cache:new Map,options:{}}),d=function(){var t=(0,r.useContext)(f),e=t.cache,n=t.options;return{cache:e,options:(0,r.useMemo)((function(){return l(n)}),[n])}},p=new Map,g=function(t,e){var n=p.get(t);null==n||n.forEach((function(t){t(e)}))},v=function(t){var e=(0,r.useRef)(t),n=(0,r.useRef)(new Set),i=(0,r.useState)({})[1],a=(0,r.useMemo)((function(){return new Proxy(e.current,{get:function(t,e){return n.current.add(e),t[e]}})}),[e,n]),c=(0,r.useCallback)((function(t,r){var a=r instanceof Function?r(e.current[t]):r;e.current[t]=a,n.current.has(t.toString())&&i({})}),[e,n]),u=(0,r.useCallback)((function(){return i({})}),[i]);return[a,c,{ref:e,observed:n,rerender:u}]},b=function(t,e){void 0===e&&(e={});var n=d(),a=(0,r.useRef)(!1),u=(0,r.useRef)(n),s=(0,r.useMemo)((function(){var e;return"string"==typeof t?t:null!=(e=t.id)?e:t.url}),[t]),o=(0,r.useMemo)((function(){return"string"==typeof t?t:t.url}),[t]),f=(0,r.useMemo)((function(){var t;return l(h(null!=(t=e)?t:{},n.options))}),[e,n.options]),b=function(t,e,n){var r,i={data:void 0,error:void 0,isValidating:!1};return t&&e.cache&&null!==e.initWith&&null!=(r=null==n?void 0:n.get(t))?r:i}(s,f,n.cache),W=b.data,y=b.error,w=b.isValidating,O=v({data:W,error:y,isValidating:w||!!f.initWith}),V=O[0],k=O[1],j=O[2],x=j.ref,C=j.observed,m=j.rerender,P=(0,r.useCallback)((function(t){var e=[];Object.hasOwnProperty.call(t,"data")&&null!==e.push("data")&&(x.current.data=t.data),Object.hasOwnProperty.call(t,"error")&&null!==e.push("error")&&(x.current.error=t.error),Object.hasOwnProperty.call(t,"isValidating")&&null!==e.push("isValidating")&&(x.current.isValidating=t.isValidating),e.some((function(t){return C.current.has(t)}))&&m()}),[x,C]),A=(0,r.useCallback)((0,i.Z)(c().mark((function t(){var e,n,r,i,h,l=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f.dedupingFetching){t.next=5;break}if(!f.cache||null==(e=u.current.cache.get(s))||!e.isValidating){t.next=3;break}return t.abrupt("return");case 3:if(f.cache||!x.current.isValidating){t.next=5;break}return t.abrupt("return");case 5:for(k("isValidating",!0),f.cache&&u.current.cache.set(s,{data:x.current.data,error:x.current.error,isValidating:!0}),n=l.length,r=new Array(n),i=0;i<n;i++)r[i]=l[i];return t.next=10,f.fetcher.apply(f,[o].concat(r)).then((function(t){return{data:t,error:void 0,isValidating:!1}})).catch((function(t){return{data:void 0,error:t,isValidating:!1}}));case 10:if(h=t.sent,a.current){t.next=13;break}return t.abrupt("return");case 13:f.cache?(u.current.cache.set(s,h),g(s,h)):P(h);case 14:case"end":return t.stop()}}),t)}))),[o,f,x,a,u,P]);return(0,r.useEffect)((function(){if(f.cache){var t=function(t,e){var n;return p.has(t)?p.set(t,[].concat(null!=(n=p.get(t))?n:[],[e])):p.set(t,[e]),function(){p.delete(t)}}(s,P);return t}}),[s,f.cache,x,C,P]),(0,r.useEffect)((function(){f.initWith&&(f.initWhenUndefined&&x.current.data||(x.current.isValidating=!1,A.apply(void 0,f.initWith),x.current.isValidating=!0))}),[x]),(0,r.useEffect)((function(){return a.current=!0,function(){a.current=!1}}),[]),Object.assign(V,{fetcher:A})},W=Object.assign({React:r},r,{useRequest:b,useRequestConfig:d,RequestConfig:function(t){var e=t.cache,n=t.options,i=t.children,a={cache:new Map,options:{}},c=a.cache,u=a.options;return r.createElement(f.Provider,{value:{cache:null!=e?e:c,options:null!=n?n:u}},i)},createOptions:l})}}]);