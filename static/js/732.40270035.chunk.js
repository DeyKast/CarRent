"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[732],[function(e,r,a){a.r(r),a.d(r,{default:function(){return B}});var n=a(433),t=a(439),o=a(791),s="searchForm_formContainer__EEv+j",c="searchForm_formWrapper__GNnur",l="searchForm_formLabel__HnaOd",i="searchForm_fromMilageWrapper__54hbk",u="searchForm_fromSelector__I9Jgk",m="searchForm_milageInputLeft__5d01v",h="searchForm_milageInputRight__mVTgl",d="searchForm_btn__ZOFJW",p=a(184),f=function(){return(0,p.jsx)("div",{className:s,children:(0,p.jsxs)("form",{className:c,children:[(0,p.jsxs)("label",{className:l,children:["Car brand",(0,p.jsxs)("select",{name:"brand",className:u,children:[(0,p.jsx)("option",{value:"",children:"Choose brand"}),(0,p.jsx)("option",{value:"Buick",children:"Buick"})]})]}),(0,p.jsxs)("label",{className:l,children:["Price/ 1 hour",(0,p.jsxs)("select",{name:"brand",className:u,children:[(0,p.jsx)("option",{value:"",children:"To $"}),(0,p.jsx)("option",{value:"30",children:"30"})]})]}),(0,p.jsxs)("label",{className:l,children:["\u0421ar mileage / km",(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("input",{type:"number",placeholder:"From",name:"milage-from",id:"milage-from",className:m}),(0,p.jsx)("input",{type:"number",placeholder:"To",name:"milage-to",id:"milage-to",className:h})]})]}),(0,p.jsx)("button",{type:"submit",onClick:function(e){console.log(e.value)},className:d,children:"Search"})]})})},_=a(884),x=a(861),j=a(757),b=a.n(j),v=a(243),g=[],k=function(){var e=(0,x.Z)(b().mark((function e(r,a){var n,t,o,s;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://64fee767f8b9eeca9e294103.mockapi.io/api/adverts",e.prev=1,e.next=4,v.Z.get("https://64fee767f8b9eeca9e294103.mockapi.io/api/adverts",{headers:{"Content-Type":"application/json"}});case 4:if(200!==(n=e.sent).status){e.next=15;break}return g=n.data,o=(t=8*(r-1))+8,s=g.slice(t,o),console.log(s),r>=Math.ceil(g.length/8)&&(console.log("Sorry, there are no more cars."),a(!1)),e.abrupt("return",{carsData:s});case 15:throw new Error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443");case 16:e.next=22;break;case 18:throw e.prev=18,e.t0=e.catch(1),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",e.t0),e.t0;case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(r,a){return e.apply(this,arguments)}}(),N=a(922),Z="loadMoreButton_loadMoreBtn__PfUCd",C=function(e){var r=e.handleButton;return(0,p.jsx)("button",{className:Z,type:"button",onClick:r,children:"Load more"})},F={loadMoreBtnWrapper:"Catalog_loadMoreBtnWrapper__T7p6J"},B=function(){var e=(0,o.useState)(1),r=(0,t.Z)(e,2),a=r[0],s=r[1],c=(0,o.useState)(!0),l=(0,t.Z)(c,2),i=l[0],u=l[1],m=(0,o.useState)(!1),h=(0,t.Z)(m,2),d=h[0],x=h[1],j=(0,o.useState)([]),b=(0,t.Z)(j,2),v=b[0],g=b[1],Z=(0,o.useState)(!0),B=(0,t.Z)(Z,2),w=B[0],y=B[1];return(0,o.useEffect)((function(){w?y(!1):(x(!0),console.log(a),k(a,u).then((function(e){var r=e.carsData;g((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r))}))})).catch((function(e){console.error("Error:",e)})).finally((function(){x(!1)})))}),[a,w]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:(0,p.jsx)(f,{})}),(0,p.jsxs)("div",{children:[(0,p.jsx)(_.Z,{data:v}),i&&(0,p.jsx)("div",{className:F.loadMoreBtnWrapper,children:(0,p.jsx)(C,{CarsList:F.loadMoreBtn,handleButton:function(){s((function(e){return e+1}))}})})]}),d&&(0,p.jsx)(N.Z,{})]})}}]]);
//# sourceMappingURL=732.40270035.chunk.js.map