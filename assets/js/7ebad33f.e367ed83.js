"use strict";(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[8268],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5796:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],u={slug:"22",title:"#22 - Flutter",authors:"LucasEliasBaccan",tags:["blog","unipar","23/04/2022","04/2022","2022","marcos","flutter","presencial"]},i=void 0,s={permalink:"/blog/22",editUrl:"https://github.com/pos-unipar/pos-unipar.github.io/edit/master/blog/2022-04-23-aula-22.md",source:"@site/blog/2022-04-23-aula-22.md",title:"#22 - Flutter",description:"23/04/2022 - Aula 3 de Flutter (Presencial)",date:"2022-04-23T00:00:00.000Z",formattedDate:"April 23, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"unipar",permalink:"/blog/tags/unipar"},{label:"23/04/2022",permalink:"/blog/tags/23-04-2022"},{label:"04/2022",permalink:"/blog/tags/04-2022"},{label:"2022",permalink:"/blog/tags/2022"},{label:"marcos",permalink:"/blog/tags/marcos"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"presencial",permalink:"/blog/tags/presencial"}],readingTime:.505,truncated:!1,authors:[{name:"Lucas Elias Baccan",url:"https://github.com/lucasbaccan",imageURL:"https://avatars.githubusercontent.com/u/2676484?s=400&v=4",key:"LucasEliasBaccan"}],frontMatter:{slug:"22",title:"#22 - Flutter",authors:"LucasEliasBaccan",tags:["blog","unipar","23/04/2022","04/2022","2022","marcos","flutter","presencial"]},nextItem:{title:"#21 - Flutter",permalink:"/blog/21"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"23/04/2022 - Aula 3 de Flutter")," (Presencial)"),(0,o.kt)("p",null,"O Professor ",(0,o.kt)("a",{parentName:"p",href:"/professores/marcos"},"Marcos")," chegou antes das 08h da manh\xe3, mas a aula come\xe7ou s\xf3 as 8h15 pois tinha poucos alunos, mas nesse tempo o professor ficou tirando duvidas."),(0,o.kt)("p",null,"Vamos ver sobre banco de dados, utilizando o plugin do sqlite. O plugin \xe9 o ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/sqflite"},"sqflite"),"."),(0,o.kt)("p",null,"Trabalhamos como criar o banco de dados, criamos um modelo, e criamos os metodos de CRUD."),(0,o.kt)("p",null,"A aula foi at\xe9 12h, e voltou as 13:30."),(0,o.kt)("p",null,"Seguimos na parte da terde fazendo o resto do aplicativo, agora focando mais na parte de tela."),(0,o.kt)("p",null,"O c\xf3digo feito nessa aula est\xe1 aqui: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pos-unipar/aula_03_pos_23_04_2022"},"aula_03_pos_23_04_2022")))}f.isMDXComponent=!0}}]);