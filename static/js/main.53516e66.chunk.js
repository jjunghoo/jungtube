(this.webpackJsonpjungtube=this.webpackJsonpjungtube||[]).push([[0],{1:function(e,t,n){e.exports={detail:"video_detail_detail__m0hJI",channelTitle:"video_detail_channelTitle__diUTB",channelImg:"video_detail_channelImg__cyjOx",channelInfo:"video_detail_channelInfo__3AVhI",subscriberCount:"video_detail_subscriberCount__28FG6",description:"video_detail_description__3MFJh",comment:"video_detail_comment__3eIl_",reply:"video_detail_reply__3EFvR",reply__content:"video_detail_reply__content__q3SUf",textOriginal:"video_detail_textOriginal__Nqa9X",authorProfileImg:"video_detail_authorProfileImg__3KArw",authorDisplayName:"video_detail_authorDisplayName__2wfPZ",likeCount:"video_detail_likeCount__16kQ9",showReplies:"video_detail_showReplies__1l8fJ",reply_container:"video_detail_reply_container__tlpR8",displayNone:"video_detail_displayNone__17pD_",displayBlock:"video_detail_displayBlock__eIS9n",replies:"video_detail_replies__3TEqQ",replies__authorProfileImg:"video_detail_replies__authorProfileImg__B1nsN",replies__content:"video_detail_replies__content__2rnYd",replies_authorDisplayName:"video_detail_replies_authorDisplayName__1ndpU",replies_textOriginal:"video_detail_replies_textOriginal__3x31N",video:"video_detail_video__3rABG",videoTitle:"video_detail_videoTitle__2YeI1"}},13:function(e,t,n){e.exports={videos:"video_list_videos__nZmtB"}},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(12),c=n.n(s),o=(n(20),n(5)),r=n(7),l=n.n(r),d=n(6),u=n.n(d),p=n(0),_=Object(i.memo)((function(e){var t=e.onSearch,n=Object(i.useRef)(),a=function(){var e=n.current.value;t(e)};return Object(p.jsxs)("header",{className:u.a.header,children:[Object(p.jsx)("div",{className:u.a.logo,onClick:function(){window.location.reload()},children:Object(p.jsx)("h1",{className:u.a.title,children:"Jungtube"})}),Object(p.jsx)("input",{ref:n,className:u.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(p.jsx)("button",{className:u.a.button,type:"submit",onClick:function(){a()},children:Object(p.jsx)("i",{className:"fas fa-search"})})]})})),h=n(1),m=n.n(h),j=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1],c=function(){s(!a)},r=!1===a?m.a.displayNone:m.a.displayBlock;return Object(p.jsxs)("section",{className:m.a.detail,children:[Object(p.jsx)("iframe",{className:m.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(e.video.id,"?autoplay=1"),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h2",{className:m.a.videoTitle,children:e.video.snippet.title}),Object(p.jsxs)("div",{className:m.a.channelTitle,children:[e.channels.map((function(e){return Object(p.jsx)("img",{className:m.a.channelImg,src:e.snippet.thumbnails.default.url,alt:"channelImg"},e.id)})),Object(p.jsxs)("div",{className:m.a.channelInfo,children:[Object(p.jsx)("p",{children:e.video.snippet.channelTitle}),e.channels.map((function(e){return Object(p.jsxs)("p",{className:m.a.subscriberCount,children:["\uad6c\ub3c5\uc790 ",e.statistics.subscriberCount,"\uba85"]},e.id)}))]})]}),Object(p.jsx)("pre",{className:m.a.description,children:e.video.snippet.description}),Object(p.jsx)("div",{className:m.a.comment,children:Object(p.jsx)("h3",{children:"\ub313\uae00"})}),Object(p.jsx)("div",{className:m.a.replys,children:e.comments.map((function(e){return Object(p.jsxs)("div",{className:m.a.reply,children:[Object(p.jsx)("img",{className:m.a.authorProfileImg,src:e.snippet.topLevelComment.snippet.authorProfileImageUrl,alt:"authorProfileImageUrl"}),Object(p.jsxs)("div",{className:m.a.reply__content,children:[Object(p.jsx)("p",{className:m.a.authorDisplayName,children:e.snippet.topLevelComment.snippet.authorDisplayName},e.snippet.topLevelComment.snippet.authorChannelId.value),Object(p.jsx)("p",{className:m.a.textOriginal,children:e.snippet.topLevelComment.snippet.textOriginal}),Object(p.jsx)("i",{className:"fas fa-thumbs-up"}),Object(p.jsx)("span",{className:m.a.likeCount,children:e.snippet.topLevelComment.snippet.likeCount}),Object(p.jsx)("p",{className:m.a.showReplies,onClick:c,children:"\ub313\uae00 \ub354\ubcf4\uae30"}),Object(p.jsx)("div",{children:e.replies&&e.replies.comments.map((function(t){return e.id===t.snippet.parentId?Object(p.jsxs)("div",{className:"".concat(r),children:[Object(p.jsx)("img",{className:m.a.replies__authorProfileImg,src:t.snippet.authorProfileImageUrl,alt:"authorProfileImageUrl"}),Object(p.jsxs)("div",{className:m.a.replies__content,children:[Object(p.jsx)("p",{className:m.a.replies_authorDisplayName,children:t.snippet.authorDisplayName}),Object(p.jsx)("p",{className:m.a.replies_textOriginal,children:t.snippet.textOriginal}),Object(p.jsx)("i",{className:"fas fa-thumbs-up"}),Object(p.jsx)("span",{className:m.a.likeCount,children:t.snippet.likeCount})]})]},t.id):null}))})]})]},e.etag)}))})]})},b=n(3),v=n.n(b),f=Object(i.memo)((function(e){var t="list"===e.display?v.a.list:v.a.grid;return Object(p.jsx)("li",{className:"".concat(v.a.container," ").concat(t),onClick:function(){e.onVideoClick(e.video),e.onChannels(e.video.snippet.channelId),e.onComment(e.video.id)},children:Object(p.jsxs)("div",{className:"".concat(v.a.video," ").concat(t),children:[Object(p.jsx)("img",{className:"".concat(v.a.thumbnail," ").concat(t),src:e.video.snippet.thumbnails.medium.url,alt:"video thumbnail"}),Object(p.jsxs)("div",{className:"".concat(v.a.metadata," ").concat(t),children:[Object(p.jsx)("p",{className:v.a.title,children:e.video.snippet.title}),Object(p.jsx)("p",{className:v.a.channel,children:e.video.snippet.channelTitle})]})]})})})),O=n(13),x=n.n(O),y=function(e){return Object(p.jsx)("ul",{className:x.a.videos,children:e.videos.map((function(t){return Object(p.jsx)(f,{video:t,onVideoClick:e.onVideoClick,display:e.display,onChannels:e.onChannels,onComment:e.onComment},t.id)}))})};var N=function(e){var t=e.youtube,n=Object(i.useState)([]),a=Object(o.a)(n,2),s=a[0],c=a[1],r=Object(i.useState)(null),d=Object(o.a)(r,2),u=d[0],h=d[1],m=Object(i.useState)([]),b=Object(o.a)(m,2),v=b[0],f=b[1],O=Object(i.useState)([]),x=Object(o.a)(O,2),N=x[0],g=x[1],k=Object(i.useCallback)((function(e){t.search(e).then((function(e){c(e),h(null)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return c(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(_,{onSearch:k}),Object(p.jsxs)("section",{className:l.a.content,children:[u&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(j,{video:u,channels:v,comments:N})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(y,{videos:s,onVideoClick:function(e){h(e)},display:u?"list":"grid",onChannels:function(e){t.Chnnels(e).then((function(e){f(e)}))},onComment:function(e){t.Comment(e).then((function(e){g(e)}))}})})]})]})},g=n(11),k=n(4),C=n.n(k),I=n(8),w=n(14),R=n(15),T=function(){function e(t){Object(w.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(R.a)(e,[{key:"mostPopular",value:function(){var e=Object(I.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=".concat(this.key),this.getRequestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(C.a.mark((function e(t){var n,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return i=e.sent,e.abrupt("return",i.items.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"Chnnels",value:function(){var e=Object(I.a)(C.a.mark((function e(t){var n,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet, contentDetails, statistics&id=".concat(t,"&key=").concat(this.key),this.getRequestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return i=e.sent,e.abrupt("return",i.items);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"Comment",value:function(){var e=Object(I.a)(C.a.mark((function e(t){var n,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet, replies&order=relevance&videoId=".concat(t,"&key=").concat(this.key),this.getRequestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return i=e.sent,e.abrupt("return",i.items);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=(n(23),new T("AIzaSyBTsIFd-qUrnA9-aEozLLvXSeTs550KsTs"));c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{youtube:P})}),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"video_item_container__3mcEY",grid:"video_item_grid__AymRI",list:"video_item_list__KC-0J",video:"video_item_video__3KMJU",thumbnail:"video_item_thumbnail__3cddv",metadata:"video_item_metadata__3iKOv",title:"video_item_title__2L4iK",channel:"video_item_channel__13Vc9"}},6:function(e,t,n){e.exports={header:"search_header_header__3Lsjc",logo:"search_header_logo__107Xf",input:"search_header_input__3IvAP",button:"search_header_button__R-p7N",buttonImg:"search_header_buttonImg__K4saC",title:"search_header_title__1zq0T"}},7:function(e,t,n){e.exports={app:"app_app__2DDXp",content:"app_content__7DJGL",detail:"app_detail__3ilTR",list:"app_list__19mke"}}},[[27,1,2]]]);
//# sourceMappingURL=main.53516e66.chunk.js.map