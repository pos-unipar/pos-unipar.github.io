"use strict";(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[4384],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73635:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],s={slug:"21",title:"#21 - Flutter",authors:"LucasEliasBaccan",tags:["blog","unipar","09/04/2022","04/2022","2022","marcos","flutter","presencial"]},i=void 0,u={permalink:"/blog/21",editUrl:"https://github.com/pos-unipar/pos-unipar.github.io/edit/master/blog/2022-04-09-aula-21.md",source:"@site/blog/2022-04-09-aula-21.md",title:"#21 - Flutter",description:"09/04/2022 - Aula 2 de Flutter (Presencial)",date:"2022-04-09T00:00:00.000Z",formattedDate:"April 9, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"unipar",permalink:"/blog/tags/unipar"},{label:"09/04/2022",permalink:"/blog/tags/09-04-2022"},{label:"04/2022",permalink:"/blog/tags/04-2022"},{label:"2022",permalink:"/blog/tags/2022"},{label:"marcos",permalink:"/blog/tags/marcos"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"presencial",permalink:"/blog/tags/presencial"}],readingTime:.605,hasTruncateMarker:!1,authors:[{name:"Lucas Elias Baccan",url:"https://github.com/lucasbaccan",imageURL:"https://avatars.githubusercontent.com/u/2676484?s=400&v=4",key:"LucasEliasBaccan"}],frontMatter:{slug:"21",title:"#21 - Flutter",authors:"LucasEliasBaccan",tags:["blog","unipar","09/04/2022","04/2022","2022","marcos","flutter","presencial"]},prevItem:{title:"#22 - Flutter",permalink:"/blog/22"},nextItem:{title:"#20 - Flutter",permalink:"/blog/20"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"09/04/2022 - Aula 2 de Flutter")," (Presencial)"),(0,o.kt)("p",null,"O Professor ",(0,o.kt)("a",{parentName:"p",href:"/professores/marcos"},"Marcos")," chegou antes das 08h da manh\xe3, mas a aula come\xe7ou s\xf3 as 8h10 pois tinha poucos alunos, mas nesse tempo o professor ficou falando sobre a aula anterior e sobre a utiliza\xe7\xe3o do ",(0,o.kt)("a",{parentName:"p",href:"https://flutter.dev/"},"Flutter"),"."),(0,o.kt)("p",null,"A aula se da inicio criando um novo projeto, que vamos consumir uma API feita pelo professor que contem os dados de times. o URL da API \xe9 ",(0,o.kt)("a",{parentName:"p",href:"http://controle.mdvsistemas.com.br/Esportes/Times/GetTime"},"http://controle.mdvsistemas.com.br/Esportes/Times/GetTime"),"."),(0,o.kt)("p",null,"Montamos uma tela que mostra os dados, como nome do time e a imagem da bandeira. Depois disso, vamos refatorando o c\xf3digo para separar eles em componentes."),(0,o.kt)("p",null,"A aula termina 12h e volta as 13h30, continuando a refatora\xe7\xe3o do c\xf3digo."),(0,o.kt)("p",null,"O c\xf3digo feito nessa aula est\xe1 aqui: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pos-unipar/aula_02_pos_09_04_2022"},"aula_02_pos_09_04_2022")))}f.isMDXComponent=!0}}]);