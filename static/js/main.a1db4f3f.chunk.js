(this["webpackJsonpreact-reddit-search"]=this["webpackJsonpreact-reddit-search"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/reddit-icon.b4553300.png"},29:function(e,t,n){e.exports=n.p+"static/media/reddit-logo.bffb9b95.png"},33:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNBAMAAADpkulaAAAAElBMVEXc1KbMx7A/Egb/+dwkQmyV1Oi7WMeAAAAAz0lEQVR42u3WSwrCMBQF0ExcgbgBxbmldQW28/rb/1acqKDSkIEKeT33TR850HBD0/UvGROHw+FwOBwOh8PhcDgcDofzLee0LsuWw+FwOBzODJ1Nm8uew+FwOBzObJzjsrlPG8I5t2WpxmnKPlw1TrD70R/90R/9iX8/+anFCfy+ZWdVi6M/+qM/7kd/KnN26TOLghM4HA6Hw+H81rn0jxyyfwXdc2/gcDjhnUmse13hcDixnLfT+ymsy+4NHA4nvFMaDofD4XA4HA6HE8C5AdnNl/zz8GiBAAAAAElFTkSuQmCC"},37:function(e,t,n){e.exports=n(65)},65:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(0),o=n.n(r),i=n(12),c=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(1),l=n(16),d=n(5),p=n(9),u="640px",m=n(29),f=n.n(m),g=n(14),h=n.n(g),x="#1ca9f0",b="#ededf7",w="#b1b1b7",y="#f2f7fb",v="#2a3c4b",E="#ff4702",C="#fff4f0",I=s.b.input.withConfig({displayName:"SearchBar__Input",componentId:"ftcs64-0"})(["min-height:40px;border-radius:3px;border:solid 2px ",";padding:0 10px;margin:20px 40px;box-shadow:0 11px 13px -6px rgba(135,142,192,0.15);flex:1;font-size:1rem;&:focus{border-color:",";outline:",";}@media (max-width:","){margin:20px 15px;}"],w,x,x,u),_=function(e){var t=e.placeholder,n=e.value,a=e.ariaLabel,i=e.type,c=e.onSearchTextChanged,s=e.onEnter,l=n||"",d=Object(r.useState)(l),u=Object(p.a)(d,2),m=u[0],f=u[1];return o.a.createElement(I,{value:m,onChange:function(e){f(e.target.value),c(e.target.value)},placeholder:t,"aria-label":a,type:i,onKeyDown:function(e){"Enter"===e.key&&s()}})},k=n(33),j=n.n(k),P=s.b.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1mcjygr-0"})(["border-radius:50%;height:",";min-width:",";"],(function(e){return e.size}),(function(e){return e.size})),A=function(e){var t=e.src,n=e.size,a=e.alt,r=n||"2rem";return o.a.createElement(P,{src:t,size:r,alt:a})},N=n(4),O=n.n(N),z=n(6),L=n(34),T=n.n(L),D={get:function(){var e=Object(z.a)(O.a.mark((function e(t,n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get(t,{params:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},B={getPosts:function(){var e=Object(z.a)(O.a.mark((function e(t){var n,a,r,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get(t);case 2:return n=e.sent,a=n.data.children,r=n.data.after,o=n.data.before,i=a.map((function(e){return{id:e.data.id,title:e.data.title,subreddit:e.data.subreddit,thumbnail:e.data.thumbnail,upvotes:e.data.ups}})),e.abrupt("return",{posts:i,nextPageId:r,previousPageId:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S="https://www.reddit.com",F=Object(l.b)({name:"posts",initialState:{isLoading:!1,hasErrors:!1,posts:[],searchText:"",nextPageId:"",previousPageId:""},reducers:{getPostsStarted:function(e){e.isLoading=!0},getPostsSuccess:function(e,t){e.posts=t.payload,e.isLoading=!1,e.hasErrors=!1},getPostsFailed:function(e){e.isLoading=!1,e.hasErrors=!0},searchTextUpdated:function(e,t){e.searchText=t.payload},nextPageIdUpdated:function(e,t){e.nextPageId=t.payload},previousPageIdUpdated:function(e,t){e.previousPageId=t.payload}}}),U=F.actions,H=U.getPostsStarted,M=U.getPostsSuccess,R=U.getPostsFailed,V=U.searchTextUpdated,Y=U.nextPageIdUpdated,W=U.previousPageIdUpdated,K=function(e){return e.posts},q=F.reducer;function Q(e){return e.searchText?e.searchText:"wallpapers"}function G(e){return function(){var t=Object(z.a)(O.a.mark((function t(n,a){var r,o,i,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(H()),r=Q(a().posts),o="".concat(S,"/r/").concat(r,".json?limit=").concat(10),i=e||o,t.next=7,B.getPosts(i);case 7:c=t.sent,n(M(c.posts)),n(Y(c.nextPageId)),n(W(c.previousPageId)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n(R());case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}var J=s.b.header.withConfig({displayName:"Header__Container",componentId:"d52izp-0"})(["grid-area:header;background-color:white;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:0 20px;"]),X=s.b.img.withConfig({displayName:"Header__RedditLogo",componentId:"d52izp-1"})(["height:30px;@media (max-width:","){display:none;}"],u),Z=s.b.img.withConfig({displayName:"Header__RedditIcon",componentId:"d52izp-2"})(["height:30px;@media (min-width:","){display:none;}"],u),$=s.b.span.withConfig({displayName:"Header__Username",componentId:"d52izp-3"})(["margin-right:15px;@media (max-width:","){display:none;}"],u),ee=function(){var e=Object(d.b)(),t=Object(r.useState)(""),n=Object(p.a)(t,2),a=n[0],i=n[1];return o.a.createElement(J,null,o.a.createElement(X,{src:f.a}),o.a.createElement(Z,{src:h.a}),o.a.createElement(_,{placeholder:"Type subreddit name and press enter",onSearchTextChanged:function(e){i(e)},onEnter:function(){e(V(a)),e(G())}}),o.a.createElement($,null,"Cathal Mac Donnacha"),o.a.createElement(A,{src:j.a}))},te=n(35),ne=n(36),ae=s.b.div.withConfig({displayName:"VotingControls__Container",componentId:"sc-15li3zs-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),re=Object(s.b)(te.a).withConfig({displayName:"VotingControls__UpvoteIcon",componentId:"sc-15li3zs-1"})(["color:",";"],E),oe=Object(s.b)(ne.a).withConfig({displayName:"VotingControls__DownvoteIcon",componentId:"sc-15li3zs-2"})(["color:",";"],E),ie=s.b.span.withConfig({displayName:"VotingControls__UpvotesText",componentId:"sc-15li3zs-3"})(["color:",";margin:15px 0;"],v),ce=s.b.button.withConfig({displayName:"VotingControls__VoteButton",componentId:"sc-15li3zs-4"})(["background-color:",";height:30px;width:50px;border:none;border-radius:3px;cursor:pointer;&:focus{border:solid 2px ",";border-color:",";outline:",";}&:hover{transform:translateY(-1px);}"],C,E,E,E),se=function(e){var t=e.votes;return o.a.createElement(ae,null,o.a.createElement(ce,{title:"Feature not yet available"},o.a.createElement(re,{size:32})),o.a.createElement(ie,null,t),o.a.createElement(ce,null,o.a.createElement(oe,{size:32})))},le=s.b.div.withConfig({displayName:"PostListItem__Container",componentId:"sc-1mkfuof-0"})(["display:flex;flex:1;flex-direction:row;border:solid 2px ",";border-radius:5px;padding:12px;margin:10px 0;@media (min-width:","){margin-right:20px;&:hover{background-color:",";box-shadow:0 8px 6px -6px ",";}}"],b,u,b,b),de=s.b.img.withConfig({displayName:"PostListItem__Thumbnail",componentId:"sc-1mkfuof-1"})(["border-radius:5px;width:100px;height:100px;"]),pe=s.b.h4.withConfig({displayName:"PostListItem__Title",componentId:"sc-1mkfuof-2"})(["border-radius:5px;margin:0 15px;color:",";display:flex;flex:2;"],v),ue=function(e){var t=e.post,n="self"!==t.thumbnail?t.thumbnail:h.a;return o.a.createElement(le,null,o.a.createElement(de,{src:n,alt:"Post Thumbnail"}),o.a.createElement(pe,null,t.title),o.a.createElement(se,{votes:t.upvotes}))},me=s.b.ul.withConfig({displayName:"Posts__List",componentId:"ea8e2e-0"})(["display:flex;flex-direction:column;flex:1;list-style:none;padding:0;overflow-y:auto;height:100%;"]),fe=function(){var e=Object(d.c)(K).posts;return o.a.createElement(me,null,e.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(ue,{post:e}))})))},ge=s.b.div.withConfig({displayName:"Loader__Container",componentId:"sc-1s7qxu0-0"})(["display:flex;flex-direction:column;justify-content:center;flex:1;justify-content:center;align-items:center;min-width:100px;min-height:100px;"]),he=s.b.div.withConfig({displayName:"Loader__DotsContainer",componentId:"sc-1s7qxu0-1"})(["display:flex;flex-direction:row;justify-content:center;min-width:100px;min-height:100px;"]),xe=s.b.span.withConfig({displayName:"Loader__Dot",componentId:"sc-1s7qxu0-2"})(["display:inline-block;width:20px;height:20px;border-radius:100%;background-color:",";margin:35px 5px;&:nth-child(1){animation:bounce 1s ease-in-out infinite;}&:nth-child(2){animation:bounce 1s ease-in-out 0.1s infinite;}&:nth-child(3){animation:bounce 1s ease-in-out 0.2s infinite;}@keyframes bounce{0%,75%,100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);}25%{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);-o-transform:translateY(-20px);transform:translateY(-20px);}}"],x),be=s.b.span.withConfig({displayName:"Loader__Text",componentId:"sc-1s7qxu0-3"})([""]),we=function(e){var t=e.text,n=t?o.a.createElement(be,null,t):null;return o.a.createElement(ge,null,o.a.createElement(he,null,o.a.createElement(xe,null),o.a.createElement(xe,null),o.a.createElement(xe,null)),n)},ye=s.b.button.withConfig({displayName:"Button__Container",componentId:"xjtsxh-0"})(["display:flex;align-items:center;justify-content:center;font-size:1rem;border:none;border-radius:3px;color:white;background-color:",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);cursor:pointer;height:40px;padding:0 18px;&:hover{transform:translateY(-1px);box-shadow:0 7px 14px 0 rgba(50,50,93,0.1),0 3px 6px 0 rgba(0,0,0,0.08);}& svg{margin-right:5px;}"],x),ve=function(e){var t=e.size,n=e.children,a=e.onClick;return o.a.createElement(ye,{onClick:a,size:t},n)},Ee=s.b.footer.withConfig({displayName:"PageFooter__Footer",componentId:"sc-17w1u0s-0"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1;background-color:white;max-height:30px;"]),Ce=s.b.span.withConfig({displayName:"PageFooter__PageNumber",componentId:"sc-17w1u0s-1"})(["padding:0 10px;"]),Ie=function(){var e=Object(r.useState)(1),t=Object(p.a)(e,2),n=t[0],a=t[1],i=Object(d.b)(),c=function(){i(function(){var e=Object(z.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=Q(n().posts),r="".concat(S,"/r/").concat(a,".json?limit=").concat(10,"&count=10&after=").concat(n().posts.nextPageId),t(G(r))}catch(o){t(R())}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),a(n+1)},s=function(){i(function(){var e=Object(z.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=Q(n().posts),r="".concat(S,"/r/").concat(a,".json?limit=").concat(10,"&count=10&before=").concat(n().posts.previousPageId),t(G(r))}catch(o){t(R())}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),a(n-1)};return 1===n?o.a.createElement(Ee,null,o.a.createElement(ve,{onClick:c},"Next")):o.a.createElement(Ee,null,o.a.createElement(ve,{onClick:s},"Previous"),o.a.createElement(Ce,null,"Page ",n),o.a.createElement(ve,{onClick:c},"Next"))},_e=s.b.section.withConfig({displayName:"ResultsPage__Container",componentId:"sc-1rc8mkg-0"})(["display:flex;flex:1;flex-direction:column;background-color:white;margin:20px;border-radius:5px;padding:20px;overflow:hidden;@media (min-width:","){max-width:1080px;align-self:center;width:100%;}"],u),ke=s.b.div.withConfig({displayName:"ResultsPage__Content",componentId:"sc-1rc8mkg-1"})(["display:flex;flex-direction:column;flex:2;overflow:hidden;"]),je=s.b.h1.withConfig({displayName:"ResultsPage__Title",componentId:"sc-1rc8mkg-2"})(["color:",";text-transform:capitalize;margin-top:0;"],v),Pe=function(){var e,t=Object(d.c)(K),n=t.posts,a=t.isLoading,i=t.hasErrors,c=Object(d.b)(),s=null===(e=n[0])||void 0===e?void 0:e.subreddit;Object(r.useEffect)((function(){c(G())}),[c]);return o.a.createElement(_e,null,o.a.createElement(je,null,s),o.a.createElement(ke,null,a?o.a.createElement(we,{text:"Loading posts..."}):i?o.a.createElement("span",null,"Could not find subreddit"):o.a.createElement(fe,null)),n.length>0&&o.a.createElement(Ie,null))},Ae=s.b.div.withConfig({displayName:"App__Layout",componentId:"sc-96knue-0"})(["height:100%;display:flex;flex-direction:column;flex:1;"]);var Ne=function(){return o.a.createElement(Ae,null,o.a.createElement(ee,null),o.a.createElement(Pe,null))},Oe=n(3),ze=Object(Oe.c)({posts:q});function Le(){var e=Object(a.a)(["\n  html, #root {\n    height: 100%;\n    background-color: ",";\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: 'Inter', 'system-ui', '-apple-system', sans-serif;\n  }\n"]);return Le=function(){return e},e}var Te=Object(l.a)({reducer:ze}),De=Object(s.a)(Le(),y);c.a.render(o.a.createElement(d.a,{store:Te},o.a.createElement(o.a.Fragment,null,o.a.createElement(Ne,null),o.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.a1db4f3f.chunk.js.map