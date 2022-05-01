"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"options",title:"Options"},l="Options",p={unversionedId:"options",id:"options",title:"Options",description:"The options available for useRequest.",source:"@site/docs/options.md",sourceDirName:".",slug:"/options",permalink:"/use-request/docs/options",editUrl:"https://github.com/Su-Yong/use-request/blob/docs/website/docs/docs/options.md",tags:[],version:"current",frontMatter:{id:"options",title:"Options"},sidebar:"docsSidebar",previous:{title:"Fetcher",permalink:"/use-request/docs/fetcher"},next:{title:"Cache",permalink:"/use-request/docs/cache"}},d={},u=[{value:"initWith",id:"initwith",level:2},{value:"cache",id:"cache",level:2},{value:"dedupingFetching",id:"dedupingfetching",level:2},{value:"initWhenUndefined",id:"initwhenundefined",level:2},{value:"ignoreSameValue",id:"ignoresamevalue",level:2},{value:"revalidationInterval",id:"revalidationinterval",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"options"},"Options"),(0,o.kt)("p",null,"The options available for ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initWith?: Data | boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cache?: Cache<State<Data, Err>> | boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dedupingFetching?: boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initWhenUndefined?: boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignoreSameValue?: boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"revalidationInterval?: number"))),(0,o.kt)("h2",{id:"initwith"},"initWith"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," option sends a request immediately when the component is mounted. If you write the arguments to send ",(0,o.kt)("strong",{parentName:"p"},"request")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," field as an array, you send the ",(0,o.kt)("strong",{parentName:"p"},"request")," by passing the data to ",(0,o.kt)("strong",{parentName:"p"},"fetcher"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Component = () => {\n  const { data } = useRequest(url, {\n    initWith: [\n      {\n        userId: 'userId',\n        actionType: 3,\n      }\n    ],\n    fetcher,\n  });\n\n  return (\n    <div>\n      {!data && 'Fetching data...'}\n      {data && `Result: ${data}`}\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"Contrary to the above, if ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest")," try to get a value from cache."),(0,o.kt)("p",null,"Also, ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest")," does not load cached data when the component is mounted even if preivously cached data exists."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"before 0.4.0 (exclude 0.4.0), type of ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith: Data | null | undefined"),";\nOld version's ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," value correspond current version's ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," value."))),(0,o.kt)("p",null,"You might think that putting this `false' value is useless, but for a set of components, it works very well."),(0,o.kt)("p",null,"For example, you want to create a component that uploads and edits a post defined as the following type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Post.ts"',title:'"src/Post.ts"'},"interface Post {\n  title: string;\n  author: string;\n  content: string;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Main.tsx"',title:'"src/Main.tsx"'},"const UploadButton = ({ code, data }) => {\n  const [captcha, setCaptcha] = useState('');\n  const { fetcher, isValidating } = useRequest(url, options);\n\n  const onClick = () => {\n    if (captcha === code) {\n      fetcher(data);\n    }\n  };\n\n  return (\n    <div>\n      <input value={captcha} onChange={({ target }) => setCaptcha(target.value)}/>\n      <button disabled={isValidating} onClick={onClick}>Upload</button>\n    </div>\n  )\n};\n\nconst PostPage = () => {\n  const [post, setPost] = useState({\n    title: '',\n    author: '',\n    content: '',\n  });\n  const { error } = useRequest(url, {\n    ...options,\n    initWith: false,\n  });\n\n  return (\n    <div>\n      {!error && (\n        <>\n          <input value={post.title} onChange={({ target }) => setPost((it) => ({ ...it, title: target.value }))} />\n          <input value={post.author} onChange={({ target }) => setPost((it) => ({ ...it, author: target.value }))} />\n          <input value={post.content} onChange={({ target }) => setPost((it) => ({ ...it, content: target.value }))} />\n        </>\n      )}\n      {error && 'Error! try refresh'}\n      <UploadButton code={'TEST'} data={post} />\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"If you create a component as above, you should use the caching ability of ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest")," so that the same result can be received even if the two components are separated. However, when the cached data is fetched, even if the main component is ",(0,o.kt)("strong",{parentName:"p"},"unmounted")," and ",(0,o.kt)("strong",{parentName:"p"},"mounted")," again, the initial value of ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest")," is not empty, but the result of the previously attempted ",(0,o.kt)("strong",{parentName:"p"},"request"),"."),(0,o.kt)("p",null,"Therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith: false")," option serves to create a ",(0,o.kt)("strong",{parentName:"p"},"start point")," for components that use a specific ",(0,o.kt)("strong",{parentName:"p"},"request")," by temporarily initializing them whenever a component is mounted, regardless of caching capabilities."),(0,o.kt)("p",null,"In a much more complex case, it may be better to provide a new ",(0,o.kt)("a",{parentName:"p",href:"cache"},(0,o.kt)("inlineCode",{parentName:"a"},"Cache"))," object using ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestConfig"),". But since ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestConfig")," is too complex, we can use Shortcut like this."),(0,o.kt)("h2",{id:"cache"},"cache"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," option sets whether or not to synchronize data between different ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For information on ",(0,o.kt)("a",{parentName:"p",href:"/use-request/docs/cache"},"Cache")," implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"cache"),", please check ",(0,o.kt)("a",{parentName:"p",href:"/use-request/docs/cache"},"cache.md"),"."))),(0,o.kt)("h2",{id:"dedupingfetching"},"dedupingFetching"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dedupingFetching")," option is an option to ignore even if ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest.fetcher")," is called multiple times when data is being fetched."),(0,o.kt)("p",null,"Sending a `request' multiple times to the same endpoint is rare. In general, the user makes multiple requests due to the slow response of the UI."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"use-request")," can prevent this case. Avoiding sending the same request also lowers the cost of the backend. So ",(0,o.kt)("inlineCode",{parentName:"p"},"use-request")," is setting this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default."),(0,o.kt)("p",null,"In this case, in order to actually ignore the call with this option, ",(0,o.kt)("strong",{parentName:"p"},"all")," of the conditions below must be satisfied."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," with the same ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," exists."),(0,o.kt)("li",{parentName:"ol"},"The corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," is in a state where ",(0,o.kt)("inlineCode",{parentName:"li"},"isValidating")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("p",null,"When the above two conditions are satisfied. ",(0,o.kt)("inlineCode",{parentName:"p"},"use-request")," will ",(0,o.kt)("strong",{parentName:"p"},"ignore")," any fetch requested by the user."),(0,o.kt)("h2",{id:"initwhenundefined"},"initWhenUndefined"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initWhenUndefined")," option is used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," option.\nWhen sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," as soon as the component is mounted using the ",(0,o.kt)("inlineCode",{parentName:"p"},"initWith")," option, you can suppress ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," according to the existence of ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,o.kt)("p",null,"For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Child.tsx"',title:'"src/Child.tsx"'},"const Child = () => {\n  const { data } = useRequest(url, {\n    initWith: [],\n    initWhenUndefined: true,\n  });\n\n  return (\n    <div>\n      {data}\n    </div>\n  )\n};\n\nexport default Child;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Component.tsx"',title:'"src/Component.tsx"'},"import Child from './Child';\n\nconst Component = () => {\n  const [count, setCount] = useState(1);\n  \n  return (\n    <div>\n      {Array.from({ length: count }).map((_, index) => (\n        <Child key={index} />,\n      ))}\n      <button onClick={() => setCount((it) => it + 1)}>\ucd94\uac00</button>\n    </div>\n  );\n};\n")),(0,o.kt)("p",null,"In the above case, even if the ",(0,o.kt)("inlineCode",{parentName:"p"},"Child")," component is added, only ",(0,o.kt)("strong",{parentName:"p"},"ONE")," ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," occurs. If you change ",(0,o.kt)("inlineCode",{parentName:"p"},"initWhenUndefined")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", a request will be sent whenever the ",(0,o.kt)("inlineCode",{parentName:"p"},"Child")," component is mounted."),(0,o.kt)("h2",{id:"ignoresamevalue"},"ignoreSameValue"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreSameValue")," option does not re-render if the response of ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," is the same as the current ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const renderCount = useRef(0);\n  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts', {\n    ignoreSameValue: false,\n  });\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  renderCount.current += 1;\n\n  return (\n    <div>\n      <div>The component is rendered {renderCount.current} time(s).</div>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n      <button onClick={onClick}>Upload</button>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"In the example above, when the upload button is pressed, the number of renderings continuously increases."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function Component() {\n  const renderCount = useRef(0);\n  const { data, fetcher } = useRequest('https://jsonplaceholder.typicode.com/posts', {\n    ignoreSameValue: true,\n  });\n\n  const onClick = () => {\n    fetcher({\n      title: 'foo',\n      content: 'bar',\n      userId: 1,\n    });\n  };\n\n  renderCount.current += 1;\n\n  return (\n    <div>\n      <div>The component is rendered {renderCount.current} time(s).</div>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n      <button onClick={onClick}>Upload</button>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreSameValue")," option is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the number of renders will not go higher than 3 even if you keep pressing upload button."),(0,o.kt)("h2",{id:"revalidationinterval"},"revalidationInterval"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"revalidationInterval")," option reuses the last fetched data without fetching new data if the last fetched data is within the time of ",(0,o.kt)("inlineCode",{parentName:"p"},"revalidationInterval"),"."),(0,o.kt)("p",null,"At that time, ",(0,o.kt)("inlineCode",{parentName:"p"},"revalidationInterval")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"miliseconds")," unit."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"revalidationInterval")," is 0 or less, it always request new data without checking old data."))))}m.isMDXComponent=!0}}]);