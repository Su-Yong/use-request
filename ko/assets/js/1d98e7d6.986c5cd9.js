"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8246:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"options",title:"\uc635\uc158"},p="\uc635\uc158",s={unversionedId:"options",id:"options",title:"\uc635\uc158",description:"useRequest\uc758 \uc635\uc158\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uac83\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/options.md",sourceDirName:".",slug:"/options",permalink:"/use-request/ko/docs/options",editUrl:"https://github.com/Su-Yong/use-request/blob/docs/website/docs/docs/options.md",tags:[],version:"current",frontMatter:{id:"options",title:"\uc635\uc158"},sidebar:"docsSidebar",previous:{title:"Fetcher",permalink:"/use-request/ko/docs/fetcher"},next:{title:"\uce90\uc2dc",permalink:"/use-request/ko/docs/cache"}},d={},u=[{value:"initWith",id:"initwith",level:2},{value:"cache",id:"cache",level:2},{value:"dedupingFetching",id:"dedupingfetching",level:2},{value:"initWhenUndefined",id:"initwhenundefined",level:2},{value:"ignoreSameValue",id:"ignoresamevalue",level:2},{value:"revalidationInterval",id:"revalidationinterval",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc635\uc158"},"\uc635\uc158"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\uc758 \uc635\uc158\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uac83\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initWith?: Data | boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cache?: Cache<State<Data, Err>> | boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dedupingFetching?: boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initWhenUndefined?: boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignoreSameValue?: boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revalidationInterval?: number"))),(0,r.kt)("h2",{id:"initwith"},"initWith"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initWith")," \uc635\uc158\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8 \ub420\ub54c \ub3d9\uc2dc\uc5d0 \ubc14\ub85c \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uc635\uc158\uc785\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\ud544\ub4dc\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"request")," \ubcf4\ub0bc \uc778\uc790\ub4e4\uc744 \ubc30\uc5f4\ub85c \uc791\uc131\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"fetcher"),"\uc5d0 \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"request"),"\ub97c \ubcf4\ub0c5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Component = () => {\n  const { data } = useRequest(url, {\n    initWith: [\n      {\n        userId: 'userId',\n        actionType: 3,\n      }\n    ],\n    fetcher,\n  });\n\n  return (\n    <div>\n      {!data && '\ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uc911\uc785\ub2c8\ub2e4...'}\n      {data && `\uacb0\uacfc: ${data}`}\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"\uc704\uc640\ub294 \ub2e4\ub974\uac8c, ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 \uce90\uc2dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uc774\uba74 \uc774\uc804\uc5d0 \uce90\uc2dc\ub41c \ub370\uc774\ud130\uac00 \uc874\uc7ac\ud558\ub354\ub77c\ub3c4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8 \ub420\ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\ub294 \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"0.4.0 \uc774\uc804 \ubc84\uc804\uc740(0.4.0 \ubbf8\ud3ec\ud568) ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\uc758 \ud0c0\uc785\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith: Data | null | undefined"),"\uc600\uc2b5\ub2c8\ub2e4.\n\uc774\ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\ub294 \uac01\uac01 \ud604\uc7ac ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc640 1\ub3001 \ub300\uc751\ub429\ub2c8\ub2e4."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\ub85c \uc124\uc815\ud558\uac8c \ub418\uba74 \uc190\ud574\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0\uc5d0 \uad49\uc7a5\ud788 \ud070 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c\ub4e4\uc5b4 \uc544\ub798\uc640 \uac19\uc740 \ud0c0\uc785\uc73c\ub85c \uc815\uc758\ub41c \uae00\uc744 \uc5c5\ub85c\ub4dc \ud558\uace0 \uc218\uc815\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e0\ub2e4\uace0 \uac00\uc815\ud569\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Post.ts"',title:'"src/Post.ts"'},"interface Post {\n  title: string;\n  author: string;\n  content: string;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Main.tsx"',title:'"src/Main.tsx"'},"const UploadButton = ({ code, data }) => {\n  const [captcha, setCaptcha] = useState('');\n  const { fetcher, isValidating } = useRequest(url, options);\n\n  const onClick = () => {\n    if (captcha === code) {\n      fetcher(data);\n    }\n  };\n\n  return (\n    <div>\n      <input value={captcha} onChange={({ target }) => setCaptcha(target.value)}/>\n      <button disabled={isValidating} onClick={onClick}>Upload</button>\n    </div>\n  )\n};\n\nconst PostPage = () => {\n  const [post, setPost] = useState({\n    title: '',\n    author: '',\n    content: '',\n  });\n  const { error } = useRequest(url, {\n    ...options,\n    initWith: false,\n  });\n\n  return (\n    <div>\n      {!error && (\n        <>\n          <input value={post.title} onChange={({ target }) => setPost((it) => ({ ...it, title: target.value }))} />\n          <input value={post.author} onChange={({ target }) => setPost((it) => ({ ...it, author: target.value }))} />\n          <input value={post.content} onChange={({ target }) => setPost((it) => ({ ...it, content: target.value }))} />\n        </>\n      )}\n      {error && '\uc624\ub958\uac00 \ub0ac\uc5b4\uc694 \uc0c8\ub85c\uace0\uce68 \ud574\ubcf4\uc2e4\ub798\uc694?'}\n      <UploadButton code={'TEST'} data={post} />\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc81c\uc791\ud55c \uacbd\uc6b0\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\uc758 \uce90\uc2f1 \ub2a5\ub825\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub450 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubd84\ub9ac\ub418\uc5b4 \uc788\ub354\ub77c\ub3c4 \ub3d9\uc77c\ud55c \uacb0\uacfc\ub97c \ubc1b\uc744 \uc218 \uc788\uac8c\ud574\uc57c\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uce90\uc2dc\ub41c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uac8c \ub418\uba74, \uba54\uc778 \ucef4\ud3ec\ub10c\ud2b8\uac00 ",(0,r.kt)("strong",{parentName:"p"},"unmount")," \ub418\uace0 \ub2e4\uc2dc ",(0,r.kt)("strong",{parentName:"p"},"mount")," \ub418\ub354\ub77c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\uc758 \ucd08\uae30 \uac12\uc774 \ube44\uc5b4\uc788\ub294\uac83\uc774 \uc544\ub2c8\ub77c \uc774\uc804\uc5d0 \uc2dc\ub3c4\ud588\ub358 ",(0,r.kt)("strong",{parentName:"p"},"request"),"\uc758 \uacb0\uacfc\ub97c \uac16\uac8c \ub429\ub2c8\ub2e4\n.\n\ub530\ub77c\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith: false")," \uc635\uc158\uc740, \uce90\uc2f1 \ub2a5\ub825\uacfc \uad00\uacc4\uc5c6\uc774 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8 \ub420\ub54c\ub9c8\ub2e4 \uc784\uc2dc\ub85c \ucd08\uae30\ud654 \ud558\uc5ec \ud2b9\uc815 ",(0,r.kt)("strong",{parentName:"p"},"request"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc2dc\uc791\uc9c0\uc810"),"\uc744 \ub9cc\ub4dc\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ubcf4\ub2e4 \ud6e8\uc52c \ubcf5\uc7a1\ud55c \uacbd\uc6b0\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestConfig"),"\ub97c \uc774\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"cache"),"\ub97c \ub530\ub85c \uc804\ub2ec\ud558\ub294 \ubc29\uc2dd\uc774 \ub354 \uc88b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestConfig"),"\ub97c \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \ub108\ubb34 \ubc88\uac70\ub86d\uae30 \ub54c\ubb38\uc5d0 \uc6b0\ub9ac\ub294 \uc774\uc640 \uac19\uc774 Shortcut\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"cache"},"cache"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cache")," \uc635\uc158\uc740 \uc11c\ub85c \ub2e4\ub978 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\uac04\uc5d0 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654 \ud560\uac74\uc9c0\uc5d0 \ub300\ud55c \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"cache"),"\ub97c \uad6c\ud604\ud558\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/use-request/ko/docs/cache"},"Cache"),"\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",{parentName:"p",href:"/use-request/ko/docs/cache"},"cache.md"),"\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694."))),(0,r.kt)("h2",{id:"dedupingfetching"},"dedupingFetching"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dedupingFetching")," \uc635\uc158\uc740 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc744\ub54c, ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest.fetcher"),"\ub97c \uc5ec\ub7ec\ubc88 \ud638\ucd9c\ud558\ub354\ub77c\ub3c4 \ubb34\uc2dc\ud558\ub294 \uc635\uc158\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub3d9\uc77c\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"\ub97c \uc5ec\ub7ec\ubc88 \ubcf4\ub0b4\ub294 \uacbd\uc6b0\ub294 \uac70\uc758 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c UI\uc758 \ubc18\uc751\uc131\uc774 \ub290\ub824 \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec\ubc88 \uc694\uccad\uc744 \ud558\uac8c\ub418\uc5b4 \ub3d9\uc77c\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0 \uc5ec\ub7ec\ubc88 \ud638\ucd9c\uc774 \uac00\ub294 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"use-request"),"\ub294 \uc774\ub7ec\ud55c \uacbd\uc6b0\ub97c \ub9c9\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \uc694\uccad\uc744 \ubcf4\ub0b4\ub294\uac83\uc744 \ub9c9\uac8c\ub418\uba74, \ubc31\uc5d4\ub4dc\uc758 \ube44\uc6a9\ub3c4 \ub0ae\uc544\uc9c0\uac8c \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"use-request"),"\ub294 \uc774 \uc635\uc158\uc744 \uae30\ubcf8\uac12\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\ub85c \uc124\uc815\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c \uc2e4\uc81c\ub85c \uc774 \uc635\uc158\uc73c\ub85c \ud638\ucd9c\uc744 \ubb34\uc2dc\ud558\ub824\uba74 \uc544\ub798\uc640 \uac19\uc740 \uc870\uac74\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub450")," \ub9cc\uc871\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ub3d9\uc77c\ud55c ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"request"),"\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud574\ub2f9 ",(0,r.kt)("inlineCode",{parentName:"li"},"request"),"\uac00 ",(0,r.kt)("inlineCode",{parentName:"li"},"isValidating"),"\uc774 ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"\uc778 \uc0c1\ud0dc\uc774\ub2e4.")),(0,r.kt)("p",null,"\uc704\uc758 \ub450 \uc870\uac74\uc5d0 \ub9cc\uc871\ud588\uc744\ub54c. ",(0,r.kt)("inlineCode",{parentName:"p"},"use-request"),"\ub294 \uc0ac\uc6a9\uc790\uac00 \uc694\uccad\ud55c fetch\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\ubb34\uc2dc"),"\ud569\ub2c8\ub2e4. "),(0,r.kt)("h2",{id:"initwhenundefined"},"initWhenUndefined"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initWhenUndefined"),"\uc635\uc158\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"initWith")," \uc635\uc158\uacfc \ud568\uaed8 \uc774\uc6a9\ub429\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"initWith"),"\uc635\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8 \ub418\uc790\ub9d0\uc790 ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"\ub97c \uc804\uc1a1\ud560\ub54c, ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\uc758 \uc874\uc7ac \uc720\ubb34\uc5d0 \ub530\ub77c ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"\ub97c \uc5b5\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c\ub4e4\uc5b4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Child.tsx"',title:'"src/Child.tsx"'},"const Child = () => {\n  const { data } = useRequest(url, {\n    initWith: [],\n    initWhenUndefined: true,\n  });\n\n  return (\n    <div>\n      {data}\n    </div>\n  )\n};\n\nexport default Child;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Component.tsx"',title:'"src/Component.tsx"'},"import Child from './Child';\n\nconst Component = () => {\n  const [count, setCount] = useState(1);\n  \n  return (\n    <div>\n      {Array.from({ length: count }).map((_, index) => (\n        <Child key={index} />,\n      ))}\n      <button onClick={() => setCount((it) => it + 1)}>\ucd94\uac00</button>\n    </div>\n  );\n};\n")),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uacbd\uc6b0\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Child"),"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ucd94\uac00\ub418\ub354\ub77c\ub3c4 ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8 \ud55c\ubc88"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"\ub9cc \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ub9cc\uc57d ",(0,r.kt)("inlineCode",{parentName:"p"},"initWhenUndefined"),"\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\ub85c \ubc14\uafbc\ub2e4\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"Child")," \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8 \ub420\ub54c\ub9c8\ub2e4 \uc694\uccad\uc744 \ubcf4\ub0c5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"ignoresamevalue"},"ignoreSameValue"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ignoreSameValue")," \uc635\uc158\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"\uc758 \uc751\ub2f5\uc774 \ud604\uc7ac ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\uc640 \ub3d9\uc77c\ud558\uba74 \ub9ac\ub80c\ub354\ub9c1\uc744 \ud558\uc9c0 \uc54a\ub294 \uc635\uc158\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const renderCount = useRef(0);\n  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts', {\n    ignoreSameValue: false,\n  });\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  renderCount.current += 1;\n\n  return (\n    <div>\n      <div>Component\ub294 {renderCount.current}\ubc88 \ub80c\ub354\ub9c1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.</div>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n      <button onClick={onClick}>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"\uc704 \uc608\uc81c\ub294 \uc5c5\ub85c\ub4dc \ubc84\ud2bc\uc744 \ub20c\ub800\uc744\ub54c \uc9c0\uc18d\uc801\uc73c\ub85c \ub80c\ub354\ub9c1 \ud69f\uc218\uac00 \uc62c\ub77c\uac11\ub2c8\ub2e4 \ud558\uc9c0\ub9cc \uc544\ub798\uc640 \uac19\uc774"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const renderCount = useRef(0);\n  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts', {\n    ignoreSameValue: true,\n  });\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  renderCount.current += 1;\n\n  return (\n    <div>\n      <div>Component\ub294 {renderCount.current}\ubc88 \ub80c\ub354\ub9c1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.</div>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n      <button onClick={onClick}>\uc5c5\ub85c\ub4dc</button>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ignoreSameValue"),"\uc635\uc158\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc778 \uacbd\uc6b0\uc5d0\ub294 \uc5c5\ub85c\ub4dc\ub97c \uacc4\uc18d \ub20c\ub7ec\ub3c4 \ub80c\ub354\ub9c1 \ud69f\uc218\uac00 3\ud68c \uc774\uc0c1\uc73c\ub85c \uc62c\ub77c\uac00\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"revalidationinterval"},"revalidationInterval"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"revalidationInterval"),"\uc635\uc158\uc740 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"revalidationInterval"),"\ub9cc\ud07c\uc758 \uc2dc\uac04\uc548\uc774\uba74 \uc0c8 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uc9c0 \uc54a\uace0 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130\ub97c \uc7ac\uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"revalidationInterval"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"miliseconds"),"\ub2e8\uc704 \uc785\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"revalidationInterval"),"\uc774 0\uc774\ud558\uc778 \uacbd\uc6b0\ub294 \uc774\uc804 \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\uc9c0 \uc54a\uace0 \ud56d\uc0c1 \uc0c8 \ub370\uc774\ud130\ub97c \uc694\uccad\ud569\ub2c8\ub2e4."))))}m.isMDXComponent=!0}}]);