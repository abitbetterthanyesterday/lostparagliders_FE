(this.webpackJsonplostparagliders=this.webpackJsonplostparagliders||[]).push([[3],{76:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},81:function(e,t,a){"use strict";a.r(t);var r=a(76),n=a(0),i=a.n(n),o=a(1),s=a(15),l=a(20),c=function(e){var t=e.match;return i.a.createElement("div",{className:"text-white rounded border-2 border-white border-solid px-4 pb-4 my-4 divide-y"},i.a.createElement("h3",{className:" py-4 flex justify-center items-center"},"Does the equipment match the description below ?"),i.a.createElement("div",{className:"table w-full"},Object.entries(t).map((function(e,t){var a=Object(r.a)(e,2),n=a[0],o=a[1];return i.a.createElement("div",{key:t,className:"table-row"},i.a.createElement("div",{className:"table-cell p-2 font-bold text-right capitalize"},n),i.a.createElement("div",{className:"table-cell p-2"},o))}))))};c.defaultProps={match:{"serial #":"123-ABCDE-Test",brand:"Advance",model:"Progress",colors:"red, black",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo quasi doloremque alias voluptatum. Officia aut temporibus exercitationem, in explicabo expedita doloribus modi distinctio unde numquam, ut quo fuga eveniet!",stolen:"31 December at Lennox Head, Australia."},serialNumber:"Serial Number here."};var u=c;t.default=function(){Object(o.g)().state;var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return i.a.createElement(l.a,{logo:!1},i.a.createElement("h1",{className:"pt-12"},"It looks like this equipment might have been stolen..."),a?i.a.createElement("div",{className:"flex flex-col justify-around items-center"},i.a.createElement("h3",{className:"mt-4 text-red-600"},"A user has registered this equipment as stolen. Don't panic."),i.a.createElement("div",{className:"w-2/3 mt-8 mb-4 mx-auto flex-grow text-white border-white border-2 border-solid rounded px-8 py-4 pb-8 divide-y"},i.a.createElement("h2",{className:"my-2"},"What to do now?"),i.a.createElement("div",null,i.a.createElement("p",{className:"py-3"},"In order to protect our users privacy, we will need your contact details."),i.a.createElement("p",{className:"py-3"},"We won\u2019t use your contact details and you can remain anonymous if you wish. The person that has registered this gear as stolen will be alerted and you will receive his/her contact details through email."),i.a.createElement("p",{className:"py-3"},"Feel free to contact him to verify if the equipment has been stolen or not. You will receive a second email after 48 hours to get an update on the enquiry, letting us know if we should keep this equipment tagged as stolen or not."),i.a.createElement("p",null,"Together, let\u2019s fight against thieves !"))),i.a.createElement("div",{className:" self-center flex justify-around"},i.a.createElement(s.a,{variant:"success",title:"Ok, let's do this!",goToRoute:"/match/register"}))):i.a.createElement("div",{className:"flex flex-col justify-around items-center"},i.a.createElement("h3",{className:"mt-4 text-red-600"},"A user has registered this equipment as stolen. Don't panic."),i.a.createElement("div",{className:"w-2/3 mx-auto flex-grow flex justify-stretch items-start"},i.a.createElement(u,null)),i.a.createElement("div",{className:" self-center flex justify-around"},i.a.createElement(s.a,{variant:"warning",title:"No, the item doesn't match.",goToRoute:"/notmatching"}),i.a.createElement(s.a,{actionOnClick:function(){return c(!0)},variant:"success",title:"Yes, the item does match."}))))}}}]);
//# sourceMappingURL=3.1e60a92e.chunk.js.map