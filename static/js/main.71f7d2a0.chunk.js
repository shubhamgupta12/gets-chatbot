(this["webpackJsonpgets-chatbot"]=this["webpackJsonpgets-chatbot"]||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(9),i=n.n(s),o=n(4),l=n(6),u=n(31),d=n(2),p=n(16),f="INPUT_SUCCESS",b="INPUT_FAIL",h="MESSAGE_SUCCESS",j="MESSAGE_FAIL",m="SET_IFRAME_URL",O="SET_IFRAME_LOADING",v={messages:[{response:{message:"Hi! We are a community marketplace offering a wide variety of products and services from our trusted vendors and partners."},type:"bot"}]},g={iframeUrl:"",loading:!0},y=Object(l.combineReducers)({chatbot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=e.messages;switch(n){case f:return a=[].concat(Object(p.a)(a),[{response:{message:r},type:"user"}]),Object(d.a)(Object(d.a)({},e),{},{messages:a});case b:return Object(d.a)({},e);case h:return a=[].concat(Object(p.a)(a),[{response:r,type:"bot"}]),Object(d.a)(Object(d.a)({},e),{},{messages:a});case j:return a=[].concat(Object(p.a)(a),[{response:{message:"Something doesn't seem right. Please try again."},type:"bot"}]),Object(d.a)(Object(d.a)({},e),{},{messages:a});default:return Object(d.a)({},e)}},iframe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case m:return Object(d.a)(Object(d.a)({},e),{},{iframeUrl:r});case O:return Object(d.a)(Object(d.a)({},e),{},{loading:r});default:return Object(d.a)({},e)}}}),x=n(32),w=[u.a],C=Object(l.createStore)(y,{},Object(x.composeWithDevTools)(l.applyMiddleware.apply(void 0,w))),k=(n(45),n(5)),N=n.n(k),S=n(7),E=n(21);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=a.createElement("path",{d:"m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"}),L=a.createElement("path",{d:"m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"});function M(e,t){var n=e.title,r=e.titleId,c=U(e,["title","titleId"]);return a.createElement("svg",I({enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,A,L)}var _=a.forwardRef(M);n.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R=a.createElement("path",{fill:"currentColor",d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"});function T(e,t){var n=e.title,r=e.titleId,c=P(e,["title","titleId"]);return a.createElement("svg",B({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-h",className:"svg-inline--fa fa-ellipsis-h fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,R)}var z=a.forwardRef(T),F=(n.p,n(11)),G=n(12),W=n(13),D=n(15),J=n(14),H=function(e){return{type:m,payload:e}},X=function(e){return{type:O,payload:e}},K=function(e){Object(D.a)(n,e);var t=Object(J.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.setIframeUrl,c=t.setIframeLoading;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{children:n.map((function(t){return Object(r.jsxs)("div",{className:"card",id:"card",style:e.props.cardStyle,tabIndex:"0",role:"button","aria-pressed":"false",onClick:function(){c(!0),a(t.attachmentLinkUrl)},children:[Object(r.jsx)("img",{src:t.imageUrl,alt:t.title}),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("span",{className:"title",children:t.title}),Object(r.jsx)("span",{className:"subtitle",children:t.subTitle})]})]},t.imageUrl)}))})})}}]),n}(c.a.Component),q=Object(o.b)(null,(function(e){return{setIframeUrl:function(t){return e(H(t))},setIframeLoading:function(t){return e(X(t))}}}))(K),Q=function(e){Object(D.a)(n,e);var t=Object(J.a)(n);function n(e){var r;return Object(F.a)(this,n),(r=t.call(this,e)).state={currentCard:0,position:0,cardStyle:{transform:"translateX(0px)"},width:0},r.handleClick=r.handleClick.bind(Object(W.a)(r)),r}return Object(G.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("card").clientWidth;this.setState({width:e})}},{key:"handleClick",value:function(e){var t=window.getComputedStyle(document.getElementById("card")).marginRight;t=JSON.parse(t.replace(/px/i,""));var n=this.state.width,r=t,a=this.props.data.length,c=this.state.currentCard,s=this.state.position;"next"===e&&c<a-1?(c++,s-=n+r):"prev"===e&&c>0&&(c--,s+=n+r),this.setCard(c,s,a)}},{key:"setCard",value:function(e,t,n){this.setState({currentCard:e,position:t,cardStyle:{transform:"translateX(".concat(t,"px)")}})}},{key:"render",value:function(){var e=this,t=this.props.data;return Object(r.jsxs)("div",{className:"cards-slider",children:[Object(r.jsxs)("div",{className:"slider-btns",children:[Object(r.jsx)("button",{className:"slider-btn btn-l",onClick:function(){return e.handleClick("prev")},children:Object(r.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),Object(r.jsx)("button",{className:"slider-btn btn-r",onClick:function(){return e.handleClick("next")},children:Object(r.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]}),Object(r.jsx)(q,{data:t,cardStyle:this.state.cardStyle})]})}}]),n}(c.a.Component),V=function(e){var t=e.chat,n=e.handleBotButton;return Object(r.jsx)(r.Fragment,{children:t&&t.length?t.map((function(e,t){return Object(r.jsxs)("div",{className:"chat-wrapper",children:[Object(r.jsx)("div",{className:"chat-bubble-".concat(e.type),children:e.response.message}),Object(r.jsx)("div",{className:"btn-wrapper",children:e.response.responseCard&&e.response.responseCard.genericAttachments&&e.response.responseCard.genericAttachments[0].buttons&&e.response.responseCard.genericAttachments[0].buttons.map((function(e,t){return Object(r.jsx)("button",{className:"chat-btn",onClick:function(){return n(e)},children:e.text},"".concat(e.value,"_").concat(t))}))}),e.response.responseCard&&e.response.responseCard.genericAttachments&&!e.response.responseCard.genericAttachments[0].buttons&&Object(r.jsx)(Q,{data:e.response.responseCard.genericAttachments})]},"chat_".concat(t))})):""})},Y=(n(47),n(33)),Z=n.n(Y),$=Object(o.b)((function(e){return{chat:e.chatbot.messages}}),{userMessage:function(e){return function(){var t=Object(S.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:f,payload:e})}catch(r){n({type:b})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},sendMessage:function(e){return function(){var t=Object(S.a)(N.a.mark((function t(n){var r,a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat",t.prev=1,r={text:e},t.next=5,Z.a.post("".concat("https://d7se6vu2fb.execute-api.ap-northeast-1.amazonaws.com/stage1/chat"),r,{headers:{"Content-Type":"application/json"}});case 5:a=t.sent,n({type:h,payload:a.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("ERROR:",t.t0),n({type:j});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.chat,n=e.userMessage,c=e.sendMessage,s=Object(a.useState)(""),i=Object(E.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(!1),d=Object(E.a)(u,2),p=d[0],f=d[1],b=Object(a.useRef)(null);Object(a.useEffect)((function(){if(p){var e=b.current;e.scrollTop=e.scrollHeight}}),[t,p]),Object(a.useEffect)((function(){c("what can you do")}),[]);var h=function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&(n(o),c(o),l(""));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:13===(t.keyCode||t.which)&&h();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[p&&Object(r.jsxs)("div",{className:"chat-container",children:[Object(r.jsx)("button",{className:"close-bot",onClick:function(){return f(!1)},children:"\xd7"}),Object(r.jsxs)("div",{ref:b,className:"chat-body",children:[Object(r.jsx)("span",{className:"chat-start"}),Object(r.jsx)(V,{chat:t,handleBotButton:function(e){n(e.text),c(e.value)}})]}),Object(r.jsxs)("div",{className:"chat-footer",children:[Object(r.jsx)("input",{id:"chatBox",className:"input",onChange:function(e){return l(e.target.value)},onKeyPress:j,value:o,placeholder:"Type a message...",autoComplete:"off"}),Object(r.jsx)("button",{className:"chat-send-btn",onClick:h,children:Object(r.jsx)(_,{})}),Object(r.jsxs)("div",{className:"chat-tag",children:["Created by"," ",Object(r.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.srijan.net/",className:"srijan-link",children:[" ","Srijan"]}),", Powered by AWS"]})]})]}),Object(r.jsx)("button",{className:"open-chatbot",onClick:function(){return f(!0)},children:Object(r.jsx)(z,{})})]})})),ee=(n(65),Object(o.b)((function(e){return{iframeLoading:e.iframe.loading}}),(function(e){return{setIframeUrl:function(t){return e(H(t))},setIframeLoading:function(t){return e(X(t))}}}))((function(e){var t=e.href,n=e.iframeLoading,a=e.setIframeLoading,c=e.setIframeUrl;return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("div",{className:"iframe",children:[n&&Object(r.jsx)("span",{className:"iframe-loading",children:"Loading..."}),Object(r.jsx)("iframe",{onLoad:function(){return a(!1)},style:{width:"100%",height:"100%"},target:"_parent",src:t,title:"Gets Marketplace"})]}),Object(r.jsx)("button",{className:"close-iframe",onClick:function(){return c("")},children:"\xd7"})]})}))),te=Object(o.b)((function(e){return{iframeUrl:e.iframe.iframeUrl}}))((function(e){var t=e.iframeUrl;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)($,{}),t&&Object(r.jsx)(ee,{href:t})]})}));i.a.render(Object(r.jsx)(o.a,{store:C,children:Object(r.jsx)(te,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.71f7d2a0.chunk.js.map