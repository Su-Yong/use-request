"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return v},default:function(){return O},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return g}});var r=n(7462),a=n(3366),o=n(7294),u=n(3905),l=n(2389),i=n(5979),s=n(6010),c="tabItem_LplD";function p(e){var t,n,a,u=e.lazy,l=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,O=g.setTabGroupChoices,w=(0,o.useState)(h),T=w[0],N=w[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=k[f];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&N(j)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==T&&(E(t),N(r),null!=f&&O(f,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},m)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:P,onClick:P},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}function f(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var m=["components"],b={id:"intro",title:"use-request"},v="use-request",y={unversionedId:"intro",id:"intro",title:"use-request",description:"Zero dependency data fetch library for React",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/use-request/docs/",editUrl:"https://github.com/Su-Yong/use-request/blob/docs/website/docs/docs/index.mdx",tags:[],version:"current",frontMatter:{id:"intro",title:"use-request"},sidebar:"docsSidebar",next:{title:"Start",permalink:"/use-request/docs/start"}},h={},g=[],k={toc:g};function O(e){var t=e.components,n=(0,a.Z)(e,m);return(0,u.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"use-request"},"use-request"),(0,u.kt)("p",null,"Zero dependency data fetch library for React"),(0,u.kt)("h1",{id:"features"},"Features"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Zero dependency"),(0,u.kt)("li",{parentName:"ul"},"Small bundle size (~25KB)"),(0,u.kt)("li",{parentName:"ul"},"Prevent useless rerender"),(0,u.kt)("li",{parentName:"ul"},"Support TypeScript"),(0,u.kt)("li",{parentName:"ul"},"Support ReactNative")),(0,u.kt)("h1",{id:"installation"},"Installation"),(0,u.kt)(d,{groupId:"npm2yarn",mdxType:"Tabs"},(0,u.kt)(f,{value:"npm",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @suyongs/use-request\n"))),(0,u.kt)(f,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @suyongs/use-request\n")))),(0,u.kt)("h1",{id:"usage"},"Usage"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Post {\n  title: string;\n  content: string;\n  author: string;\n}\n\nconst fetcher = async (url, body: Post): Promise<Post> => {\n  const reponse = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(body),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  return response.json();\n};\n\nconst Component = () => {\n  const { data, fetcher } = useRequest('https://example.com/upload', { fetcher });\n\n  const onClick = () => {\n    fetcher({\n      title: 'title',\n      content: 'content',\n      author: 'author',\n    });\n  }\n\n  return (\n    <div>\n      {data && <div>Upload Success</div>}\n      <button onClick={onClick}>Upload</button>\n    </div>\n  );\n};\n")))}O.isMDXComponent=!0}}]);