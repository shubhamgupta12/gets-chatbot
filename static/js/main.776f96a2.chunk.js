(this["webpackJsonpgets-chatbot"]=this["webpackJsonpgets-chatbot"]||[]).push([[0],{39:function(e,t,n){},47:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(8),i=n.n(s),o=(n(39),n(13)),l=n(5),u=n(31),d=n(4),p=n(16),h="INPUT_SUCCESS",b="INPUT_FAIL",j="MESSAGE_SUCCESS",f="MESSAGE_FAIL",m={messages:[{response:{message:"Hi! We are a community marketplace offering a wide variety of products and services from our trusted vendors and partners."},type:"bot"}]},O=Object(l.combineReducers)({chatbot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=e.messages;switch(n){case h:return r=[].concat(Object(p.a)(r),[{response:{message:a},type:"user"}]),Object(d.a)(Object(d.a)({},e),{},{messages:r});case b:return Object(d.a)({},e);case j:return r=[].concat(Object(p.a)(r),[{response:a,type:"bot"}]),Object(d.a)(Object(d.a)({},e),{},{messages:r});case f:return r=[].concat(Object(p.a)(r),[{response:{message:"Something doesn't seem right. Please try again."},type:"bot"}]),Object(d.a)(Object(d.a)({},e),{},{messages:r});default:return Object(d.a)({},e)}}}),v=n(32),y=[u.a],g=Object(l.createStore)(O,{},Object(v.composeWithDevTools)(l.applyMiddleware.apply(void 0,y))),x=n(3),w=n.n(x),C=n(6),k=n(21);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=r.createElement("path",{d:"m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"}),I=r.createElement("path",{d:"m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"});function B(e,t){var n=e.title,a=e.titleId,c=N(e,["title","titleId"]);return r.createElement("svg",S({enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,E,I)}var A=r.forwardRef(B);n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=r.createElement("path",{fill:"currentColor",d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"});function T(e,t){var n=e.title,a=e.titleId,c=P(e,["title","titleId"]);return r.createElement("svg",M({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-h",className:"svg-inline--fa fa-ellipsis-h fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,R)}var z=r.forwardRef(T),_=(n.p,n(10)),U=n(11),F=n(12),J=n(15),W=n(14),D=function(e){Object(J.a)(n,e);var t=Object(W.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this,t=this.props.data;return Object(a.jsx)("section",{children:t.map((function(t,n){return Object(a.jsxs)("div",{className:"card",id:"card",style:e.props.cardStyle,children:[Object(a.jsx)("img",{src:t.imageUrl,alt:t.title}),Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("span",{className:"title",children:t.title}),Object(a.jsx)("span",{className:"subtitle",children:t.subTitle})]})]},n)}))})}}]),n}(c.a.Component),G=function(e){Object(J.a)(n,e);var t=Object(W.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).state={currentCard:0,position:0,cardStyle:{transform:"translateX(0px)"},width:0},a.handleClick=a.handleClick.bind(Object(F.a)(a)),a}return Object(U.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("card").clientWidth;this.setState({width:e})}},{key:"handleClick",value:function(e){var t=window.getComputedStyle(document.getElementById("card")).marginRight;t=JSON.parse(t.replace(/px/i,""));var n=this.state.width,a=t,r=this.props.data.length,c=this.state.currentCard,s=this.state.position;"next"===e&&c<r-1?(c++,s-=n+a):"prev"===e&&c>0&&(c--,s+=n+a),this.setCard(c,s,r)}},{key:"setCard",value:function(e,t,n){this.setState({currentCard:e,position:t,cardStyle:{transform:"translateX(".concat(t,"px)")}})}},{key:"render",value:function(){var e=this,t=this.props.data;return Object(a.jsxs)("div",{className:"cards-slider",children:[Object(a.jsxs)("div",{className:"slider-btns",children:[Object(a.jsx)("button",{className:"slider-btn btn-l",onClick:function(){return e.handleClick("prev")},children:Object(a.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),Object(a.jsx)("button",{className:"slider-btn btn-r",onClick:function(){return e.handleClick("next")},children:Object(a.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]}),Object(a.jsx)(D,{data:t,cardStyle:this.state.cardStyle})]})}}]),n}(c.a.Component),H=function(e){var t=e.chat,n=e.handleBotButton;return Object(a.jsx)(a.Fragment,{children:t&&t.length?t.map((function(e,t){return Object(a.jsxs)("div",{className:"chat-wrapper",children:[Object(a.jsx)("div",{className:"chat-bubble-".concat(e.type),children:e.response.message}),Object(a.jsx)("div",{className:"btn-wrapper",children:e.response.responseCard&&e.response.responseCard.genericAttachments&&e.response.responseCard.genericAttachments[0].buttons&&e.response.responseCard.genericAttachments[0].buttons.map((function(e,t){return Object(a.jsx)("button",{className:"chat-btn",onClick:function(){return n(e)},children:e.text},"".concat(e.value,"_").concat(t))}))}),e.response.responseCard&&e.response.responseCard.genericAttachments&&!e.response.responseCard.genericAttachments[0].buttons&&Object(a.jsx)(G,{data:e.response.responseCard.genericAttachments})]},"chat_".concat(t))})):""})},L=(n(47),n(33)),X=n.n(L),K=Object(o.b)((function(e){return{chat:e.chatbot.messages}}),{userMessage:function(e){return function(){var t=Object(C.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:h,payload:e})}catch(a){n({type:b})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},sendMessage:function(e){return function(){var t=Object(C.a)(w.a.mark((function t(n){var a,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat",t.prev=1,a={text:e},t.next=5,X.a.post("".concat("https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat"),a,{headers:{"Content-Type":"application/json"}});case 5:r=t.sent,n({type:j,payload:r.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("ERROR:",t.t0),n({type:f});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.chat,n=e.userMessage,c=e.sendMessage,s=Object(r.useState)(""),i=Object(k.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(!1),d=Object(k.a)(u,2),p=d[0],h=d[1],b=Object(r.useRef)(null);Object(r.useEffect)((function(){if(p){var e=b.current;e.scrollTop=e.scrollHeight}}),[t,p]);var j=function(){var e=Object(C.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(o),c(o),l("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(C.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:13===(t.keyCode||t.which)&&j();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[p&&Object(a.jsxs)("div",{className:"chat-container",children:[Object(a.jsx)("button",{className:"close-bot",onClick:function(){return h(!1)},children:"\xd7"}),Object(a.jsxs)("div",{ref:b,className:"chat-body",children:[Object(a.jsx)("span",{className:"chat-start",children:"Today"}),Object(a.jsx)(H,{chat:t,handleBotButton:function(e){n(e.text),c(e.text)}})]}),Object(a.jsxs)("div",{className:"chat-footer",children:[Object(a.jsx)("input",{id:"chatBox",className:"input",onChange:function(e){return l(e.target.value)},onKeyPress:f,value:o,placeholder:"Type a message...",autoComplete:"off"}),Object(a.jsx)("button",{className:"chat-send-btn",onClick:j,children:Object(a.jsx)(A,{})})]})]}),Object(a.jsx)("button",{className:"open-chatbot",onClick:function(){return h(!0)},children:Object(a.jsx)(z,{})})]})})),q=function(){return Object(a.jsx)(o.a,{store:g,children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(K,{})})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.776f96a2.chunk.js.map