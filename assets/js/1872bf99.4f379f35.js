"use strict";(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[2200],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,d=m["".concat(i,".").concat(g)]||m[g]||c[g]||o;return t?n.createElement(d,l(l({ref:a},u),{},{components:t})):n.createElement(d,l({ref:a},u))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4951:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],s={slug:"29",title:"#29 - Node.js",authors:"LucasEliasBaccan",tags:["blog","unipar","02/07/2022","07/2022","2022","marlon","node.js","nodejs","node","js","presencial"]},i=void 0,p={permalink:"/blog/29",editUrl:"https://github.com/pos-unipar/pos-unipar.github.io/edit/master/blog/2022-07-02-aula-29.md",source:"@site/blog/2022-07-02-aula-29.md",title:"#29 - Node.js",description:"02/07/2022 - Aula 1 de Node.js (Presencial)",date:"2022-07-02T00:00:00.000Z",formattedDate:"July 2, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"unipar",permalink:"/blog/tags/unipar"},{label:"02/07/2022",permalink:"/blog/tags/02-07-2022"},{label:"07/2022",permalink:"/blog/tags/07-2022"},{label:"2022",permalink:"/blog/tags/2022"},{label:"marlon",permalink:"/blog/tags/marlon"},{label:"node.js",permalink:"/blog/tags/node-js"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"node",permalink:"/blog/tags/node"},{label:"js",permalink:"/blog/tags/js"},{label:"presencial",permalink:"/blog/tags/presencial"}],readingTime:.675,truncated:!1,authors:[{name:"Lucas Elias Baccan",url:"https://github.com/lucasbaccan",imageURL:"https://avatars.githubusercontent.com/u/2676484?s=400&v=4",key:"LucasEliasBaccan"}],frontMatter:{slug:"29",title:"#29 - Node.js",authors:"LucasEliasBaccan",tags:["blog","unipar","02/07/2022","07/2022","2022","marlon","node.js","nodejs","node","js","presencial"]},nextItem:{title:"#28 - Node.js",permalink:"/blog/28"}},u={authorsImageUrls:[void 0]},c=[],m={toc:c};function g(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"02/07/2022 - Aula 1 de Node.js")," (Presencial)"),(0,o.kt)("p",null,"Chegamos na Unipar e a sala estava trancada, ap\xf3s uns 10 minutos, conseguimos entrar na sala.\nO Professor ",(0,o.kt)("a",{parentName:"p",href:"/professores/everton"},"Marlon")," passou uma atividade para criamos uma rota para a cria\xe7\xe3o de um novo usu\xe1rio, com as rotas GET, POST, PUT e DELETE."),(0,o.kt)("p",null,"Para o usu\xe1rio, vamos utilizar criptografia, e precisamos dos pacotes abaixo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save bcrypt\nnpm install --save jsonwebtoken\nnpm install --save passport\nnpm install --save passport-local\n")),(0,o.kt)("p",null,"Implementamos a criptografia e o login com o passport, utilizando JWT para controlar o acesso a rotas."),(0,o.kt)("p",null,"Vamos trabalhar com documenta\xe7\xe3o do projeto, para isso vamos utilizar o pacote swagger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    npm install --save swagger-ui-express\n    npm install --save swagger-jsdoc\n")),(0,o.kt)("p",null,"Criamos a documenta\xe7\xe3o do projeto para alguns dos endpoints e testamos como utilizar o swagger."),(0,o.kt)("p",null,"Com isso finalizamos a aula de hoje."))}g.isMDXComponent=!0}}]);