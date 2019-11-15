(this["webpackJsonpqr-scanner"]=this["webpackJsonpqr-scanner"]||[]).push([[0],{15:function(e,t,n){e.exports=n(44)},21:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),i=(n(20),n(21),n(3)),s=n(1),u=n.n(s),l=n(2),f=n(8),p=n(9),m=n(13),h=n(10),d=n(14),b=n(11),v=n.n(b),O=(n(42),n(43),n(12));function w(e){var t=e.onSubmit,n=e.contact,r=Object(O.a)(),c=r.register,o=r.handleSubmit,i=r.errors;return console.log(i),a.a.createElement("form",{onSubmit:o(t)},a.a.createElement("h2",null,"Contact details"),a.a.createElement("select",{defaultValue:n.gender,name:"gender",ref:c},a.a.createElement("option",{value:"male"},"Male"),a.a.createElement("option",{value:"female"},"Female")),a.a.createElement("input",{type:"text",defaultValue:n.name.first,placeholder:"First Name",name:"firstName",ref:c}),a.a.createElement("input",{type:"text",defaultValue:n.name.last,placeholder:"Last Name",name:"lastName",ref:c}),a.a.createElement("input",{type:"email",defaultValue:n.email,placeholder:"Email",name:"email",ref:c}),a.a.createElement("input",{type:"submit"}))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).API_URL="https://randomuser.me/api/",n.state={result:void 0,scanning:!1,contact:void 0},n.handleScan=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return n.setState({result:t,scanning:!1}),e.prev=2,e.next=5,n.setContact(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),n.handleError=function(e){alert(e)},n.getDimensions=function(){return{width:window.innerWidth,height:window.innerHeight}},n.sendContactID=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Receiving contact from","".concat(n.API_URL,"/").concat(t)),e.next=3,fetch(n.API_URL);case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",r.json());case 6:throw new Error;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.setContact=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.sendContactID(t);case 2:r=e.sent,a=r.results,n.setState({contact:a[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.submit=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.info("Contact posted",t),e.abrupt("return",new Promise((function(e){alert("Posting to "+n.API_URL+", check the console"),e()})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleSubmit=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.submit(t);case 3:n.setState({contact:void 0}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.getDimensions(),n=this.state,r=n.scanning,c=n.contact;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{delay:r&&100,style:y({},t,{backgroundColor:"black",position:"absolute",zIndex:-1}),onError:this.handleError,onScan:this.handleScan,legacyMode:this.isSafari}),a.a.createElement("div",{className:r?"Overlay  Overlay-Active":"Overlay"},c&&a.a.createElement(w,{onSubmit:this.handleSubmit,contact:c}),!c&&a.a.createElement("button",{onClick:function(){return e.setContact("SOME_ID")}},"Read fake contact"),a.a.createElement("span",{onClick:function(){e.setState((function(e){return{scanning:!e.scanning}}))}},r?"ON":"OFF")))}},{key:"isSafari",get:function(){var e=navigator.userAgent.toLowerCase();if(-1!=e.indexOf("safari"))return!(e.indexOf("chrome")>-1)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d0d6fff1.chunk.js.map