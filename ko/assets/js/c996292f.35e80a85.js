"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[207],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3909:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"start",title:"\uc2dc\uc791"},u="\uc2dc\uc791",c={unversionedId:"start",id:"start",title:"\uc2dc\uc791",description:"\uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 React\ub97c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic.md",sourceDirName:".",slug:"/start",permalink:"/use-request/ko/docs/start",editUrl:"https://github.com/Su-Yong/use-request/blob/docs/website/docs/docs/basic.md",tags:[],version:"current",frontMatter:{id:"start",title:"\uc2dc\uc791"},sidebar:"docsSidebar",previous:{title:"use-request",permalink:"/use-request/ko/docs/"},next:{title:"Fetcher",permalink:"/use-request/ko/docs/fetcher"}},l={},p=[{value:"\ube60\ub978 \uc2dc\uc791",id:"\ube60\ub978-\uc2dc\uc791",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc2dc\uc791"},"\uc2dc\uc791"),(0,a.kt)("p",null,"\uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 React\ub97c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ube60\ub978-\uc2dc\uc791"},"\ube60\ub978 \uc2dc\uc791"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRequest"),"\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0, ",(0,a.kt)("inlineCode",{parentName:"p"},"useRequest"),"\ub97c \uc0ac\uc6a9\ud560 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Component() {\n  return (\n    <div>\n      <div>Data</div>\n      <button>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"\uadf8 \ub2e4\uc74c \uc77c\ubc18\uc801\uc778 RESTful\ud55c API\ub97c \uc0ac\uc6a9\uc911\uc774\ub77c\uba74 \uc544\ub798\uc640 \uac19\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"useRequest"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Component() {\n  const { data } = useRequest();\n  \n  return (\n    <div>\n      <div>{data}</div>\n      <button>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\uadf8 \ub2e4\uc74c ",(0,a.kt)("strong",{parentName:"p"},"request"),"\ub97c \ubcf4\ub0bc URL\uc744 \uc791\uc131\ud569\ub2c8\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Component() {\n  const { data } = useRequest('https://jsonplaceholder.typicode.com/posts');\n\n  return (\n    <div>\n      <div>{data}</div>\n      <button>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ud2b9\uc815 \uc694\uccad\uc744 \ubcf4\ub0b4\uac8c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts');\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  return (\n    <div>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n      <button onClick={onClick}>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\uc774\uac8c \ub2e4\uc785\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"useRequest"),"\ub294 \uc774\ub807\uac8c\ub098 \uc0ac\uc6a9\ud558\uae30 \uac04\ud3b8\ud569\ub2c8\ub2e4. \uc774\ubfd0\ub9cc\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const renderCount = useRef(0);\n  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts');\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  renderCount.current += 1;\n\n  return (\n    <div>\n      <div>\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130\ub294 <pre>{JSON.stringify(data, null, 2)}</pre>\uc785\ub2c8\ub2e4</div>\n      <div>Component\ub294 {renderCount.current}\ubc88 \ub80c\ub354\ub9c1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.</div>\n      <button onClick={onClick}>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\uc774 \uc608\uc2dc\ub294 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uc9c0 \uc54a\uc558\ub294\ub370\ub3c4, \uc774\ubbf8 \ub370\uc774\ud130\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \uc774\uc720\ub294 \ubc14\ub85c \uc774 \uc608\uc2dc \uc704\uc5d0 \uc788\ub358 \uc5c5\ub85c\ub4dc \ubc84\ud2bc\uc744 \ub20c\ub800\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"use-request"),"\ub294 \ub3d9\uc77c\ud55c URL\uc77c \uacbd\uc6b0\uc5d0 \uac12\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ub3d9\uae30\ud654"),"\ud569\ub2c8\ub2e4.  \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uc774 \uc608\uc2dc\ub294 \ubc84\ud2bc\uc744 \ub204\ub974\uc9c0 \uc54a\uc544\ub3c4 \ub370\uc774\ud130\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. \ud639\uc2dc \uc704 \uc608\uc81c\uc5d0\uc11c \ubc84\ud2bc\uc744 \ub204\ub974\uc9c0 \uc54a\uc558\ub2e4\uba74 \ub450 \uc608\uc2dc\uc911 \uc544\ubb34\ubc84\ud2bc\uc774\ub098 \ub204\ub974\uace0 \uacb0\uacfc\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694. \ub450 \uc608\uc2dc\uc5d0 \uc788\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\uac00 \uc11c\ub85c \uc5f0\ub3d9\ub429\ub2c8\ub2e4."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\ubb3c\ub860 \ub3d9\uc77c\ud55c ",(0,a.kt)("strong",{parentName:"p"},"URL"),"\uc774\uc9c0\ub9cc \uc11c\ub85c \ub2e4\ub978 ",(0,a.kt)("strong",{parentName:"p"},"request"),"\ub97c \ubcf4\ub0bc \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f4\ub54c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"options#cache"},"cache")," \uc635\uc158\uacfc ",(0,a.kt)("a",{parentName:"p",href:"request-config"},"RequestConfig"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const renderCount = useRef(0);\n  // isValidating\uc744 \uc9c0\uc6cc\ubcf4\uc138\uc694 \ucef4\ud3ec\ub10c\ud2b8 \uce74\uc6b4\ud2b8 \ud69f\uc218\uac00 3\ud68c\uc5d0\uc11c 2\ud68c\ub85c \uc904\uc5b4\ub4ed\ub2c8\ub2e4.\n  const { data, isValidating, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts');\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  renderCount.current += 1;\n\n  return (\n    <div>\n      <div>{isValidating ? '\ub370\uc774\ud130 \uac00\uc838\uc624\ub294 \uc911...' : 'idle'}</div>\n      <div>\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130\ub294 <pre>{JSON.stringify(data, null, 2)}</pre>\uc785\ub2c8\ub2e4</div>\n      <div>Component\ub294 {renderCount.current}\ubc88 \ub80c\ub354\ub9c1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.</div>\n      <button onClick={onClick}>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"\uc774 \uc608\uc2dc\ub294 \uc704\uc758 \uc608\uc2dc\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"isValidating"),"\ub9cc \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub80c\ub354\ub9c1 \ud69f\uc218\uac00 \uc99d\uac00\ud558\uc600\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"use-request"),"\ub294 \uc0ac\uc6a9\ud55c \ud504\ub85c\ud37c\ud2f0\ub97c \ucd94\uc801\ud558\uc5ec \uc0ac\uc6a9\ud55c \ud504\ub85c\ud37c\ud2f0\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc744\ub54c\ub9cc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4.\n\ub9cc\uc57d \uc774 \uc608\uc2dc\uc5d0\uc11c isValidating\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1 \ud69f\uc218\ub294 2\ud68c\uac00 \ub420\uac83\uc785\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);