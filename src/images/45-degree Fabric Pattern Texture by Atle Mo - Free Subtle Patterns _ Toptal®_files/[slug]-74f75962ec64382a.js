(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{11587:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return c(8035)}])},79178:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d,e,f=c(85893);(e=d||(d={})).PatternCard="pattern-card";var g=c(93228),h=c.n(g),i=function(a){var b=a.children;return(0,f.jsx)(f.Fragment,{children:b})},j=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().content,children:b})},k=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().bottom,children:b})},l=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().card,"data-testid":d.PatternCard,children:b})};l.Top=i,l.Content=j,l.Bottom=k;var m=l},78692:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d,e,f=c(14924),g=c(85893),h=c(94184),i=c.n(h);(e=d||(d={})).PatternCardAuthor="pattern-author";var j=function(a){var b=a.href,c=a.className,d=a.children;return(0,g.jsx)("a",{href:b,className:c,target:"_blank",rel:"nofollow noopener noreferrer",children:d})},k=j,l=c(75343),m=c.n(l),n=function(a){var b=a.author,c=void 0===b?"":b,e=a.authorWebsite,h=void 0===e?"":e,j=a.variant;return(0,g.jsxs)("div",{className:i()(m().author,(0,f.Z)({},m().white,"white"===(void 0===j?"default":j))),"data-testid":d.PatternCardAuthor,children:["Made by"," ",h?(0,g.jsx)(k,{href:h,className:m().name,children:c}):(0,g.jsx)("span",{children:c})]})},o=n},46952:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d,e,f=c(85893);(e=d||(d={})).CardImage="card-image";var g=c(15944),h=c.n(g),i=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().image,"data-testid":d.CardImage,children:b})},j=i},36195:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d,e,f=c(14924),g=c(85893),h=c(72167),i=c(94184),j=c.n(i);(e=d||(d={})).PatternTimestamp="pattern-timestamp";var k=c(23051),l=c.n(k),m=function(a){var b=a.as,c=a.variant,e=a.date,i=(0,h.Z)(new Date(e),"yyyy-MM-dd");return(0,g.jsx)(void 0===b?"div":b,{className:l().timestamp,children:(0,g.jsx)("span",{className:j()(l().date,(0,f.Z)({},l().white,"white"===(void 0===c?"default":c))),"data-testid":d.PatternTimestamp,"data-happo-hide":!0,children:i})})},n=m},7369:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d,e,f=c(85893),g=c(41664),h=c.n(g);(e=d||(d={})).CardTitle="card-title";var i=c(60624),j=c.n(i),k=function(a){var b=a.as,c=a.title,e=a.href;return(0,f.jsx)(h(),{href:void 0===e?"":e,children:(0,f.jsx)("a",{className:j().title,children:(0,f.jsx)(void 0===b?"h3":b,{"data-testid":d.CardTitle,children:void 0===c?"":c})})})},l=k},38880:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d,e,f=c(14924),g=c(85893),h=c(94184),i=c.n(h);(e=d||(d={})).PatternBlock="pattern-block";var j=c(34250),k=c(74259),l=c.n(k),m=function(a){var b=a.children,c=a.title,e=a.isRelated;return(0,g.jsxs)(g.Fragment,{children:[c&&(0,g.jsx)(j.Z,{title:c}),(0,g.jsx)("div",{className:i()(l().patterns,(0,f.Z)({},l().related,void 0!==e&&e)),"data-testid":d.PatternBlock,children:b})]})},n=m},46402:function(a,b,c){"use strict";c.d(b,{Z:function(){return B}});var d=c(85893),e=c(41664),f=c.n(e),g=c(11163),h=c(67294),i=c(81098),j=function(a){var b=a.trackEventData,c=a.matchURL,d=(0,g.useRouter)();(0,h.useEffect)(function(){if(b){var a=function(a){a===c&&(0,i.L9)(b)};return d.events.on("routeChangeStart",a),function(){d.events.off("routeChangeStart",a)}}})},k=c(50847),l=c(79178),m=c(78692),n=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:60,c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:"...",d=a.replace(/(<([^>]+)>)/gi,"");return d.length<b?d:"."===d[b-1]?"".concat(d.slice(0,b-1)).concat(c):"".concat(d.slice(0,b)).concat(c)},o=n,p=c(60176),q=c.n(p),r=function(a){var b=a.description;return(0,d.jsx)("div",{className:q().description,children:(0,d.jsx)("p",{children:o(void 0===b?"":b)})})},s=r,t=c(46952),u=c(28101),v=c(36195),w=c(7369),x=c(67472),y=c(15984),z=c(48023),A=function(a){var b=a.src,c=a.url,e=a.author,g=a.authorWebsite,h=a.title,i=a.timestamp,n=a.description,o=a.viewMoreLabel,p=a.downloadLabel,q=a.loading,r=a.trackEventDataDownload,A=a.trackEventDataNavigation;return j({trackEventData:A,matchURL:k.Z.publicRelative(c)}),(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(l.Z.Top,{children:(0,d.jsx)(t.Z,{children:(0,d.jsx)(f(),{href:c,children:(0,d.jsx)("a",{"data-testid":x.m.ImageLink,children:(0,d.jsx)(y.Z,{src:b,loading:q})})})})}),(0,d.jsxs)(l.Z.Content,{children:[(0,d.jsx)(w.Z,{href:c,title:h}),(0,d.jsx)(m.Z,{authorWebsite:g,author:e}),(0,d.jsx)(v.Z,{date:i}),(0,d.jsx)(s,{description:n})]}),(0,d.jsxs)(l.Z.Bottom,{children:[(0,d.jsx)(u.Z,{href:b,testId:x.m.DownloadButton,variant:"white",label:p,trackEventData:r}),(0,d.jsx)(z.Z,{size:2}),(0,d.jsx)(u.Z,{href:c,testId:x.m.ViewMoreButton,variant:"cta",label:o})]})]})},B=A},67472:function(a,b,c){"use strict";var d,e;c.d(b,{m:function(){return d}}),(e=d||(d={})).AllPatternsButton="all-patterns-button",e.ImageLink="image-link",e.DownloadButton="download-button",e.ViewMoreButton="view-more-button"},15984:function(a,b,c){"use strict";c.d(b,{Z:function(){return p}});var d,e,f=c(14924),g=c(26042),h=c(69396),i=c(85893),j=c(94184),k=c.n(j);(e=d||(d={})).PatternPreviewer="pattern-previewer";var l=c(5625),m=c.n(l),n=c(34155),o=function(a){var b,c=a.src,e=a.isTag,j="eager"===a.loading||n.env.IS_HAPPO,l=j?{style:{backgroundImage:"url(".concat(c,")")}}:{"data-bg":c};return(0,i.jsx)("div",(0,h.Z)((0,g.Z)({className:k()(m().patternPreviewer,(b={},(0,f.Z)(b,m().isTag,void 0!==e&&e),(0,f.Z)(b,"lazy",!j),b))},l),{"data-testid":d.PatternPreviewer}))},p=o},8035:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return ad},default:function(){return ae}});var d,e,f,g,h=c(85893),i=c(56496),j=c(50847),k=c(26638),l=c(78692),m=c(28101),n=c(36195),o=c(83003),p=c(45222),q=c(38880),r=c(46402),s=c(67472),t=c(14924),u=c(67294),v=c(94184),w=c.n(v),x=c(9008),y=c.n(x),z=c(26042),A=c(69396),B=c(25675),C=c.n(B),D=c(34155),E=function(a){return(0,h.jsx)(C(),(0,A.Z)((0,z.Z)({},a),{unoptimized:!!D.env.IS_HAPPO}))},F=E,G=c(84433);(g=d||(d={})).PreviewCard="preview-card",g.PatternViewer="pattern-viewer-main",g.PatternDownloadButton="pattern-download-button";var H,I=c(64097),J=c.n(I),K=[null,"preview1","preview2","preview3"],L=(e={},(0,t.Z)(e,K[1],"Bar Graph"),(0,t.Z)(e,K[2],"Presentation Slide"),(0,t.Z)(e,K[3],"Landing Page"),e),M=function(a,b){return"".concat(G.GW,"/assets/images/").concat(a).concat(b?"":"-dark",".png")},N=function(a){var b=a.src,c=a.isDark,e=void 0===c||c,f=a.downloadHref,g=a.description,i=a.title,j=(0,u.useState)(0),k=j[0],l=j[1],n=K[k];return(0,h.jsxs)("div",{className:J().patternViewer,children:[(0,h.jsx)(y(),{children:(0,h.jsx)("link",{rel:"preload",as:"image",href:b})}),(0,h.jsxs)("div",{className:J().patternViewerInner,children:[(0,h.jsx)("div",{className:J().navWrapper,children:K.map(function(a,c){return(0,h.jsx)("div",{onClick:function(){return l(c)},className:w()(J().navElement,(0,t.Z)({},J().navElementActive,c===k)),style:{backgroundImage:"url(".concat(b,")")},"data-testid":d.PreviewCard,children:a?(0,h.jsx)(F,{priority:!0,src:M(a,e),layout:"fill",alt:"".concat(i," ").concat(L[a]," Example Overlay PNG")}):null},c)})}),(0,h.jsxs)("div",{className:J().content,children:[(0,h.jsx)("div",{className:w()(J().imageWrapper),style:{backgroundImage:"url(".concat(b,")")},"data-testid":d.PatternViewer,children:n?(0,h.jsx)(F,{src:M(n,e),layout:"fill",alt:"".concat(i," ").concat(L[n]," Example Overlay PNG")}):null}),g&&(0,h.jsx)("div",{className:J().description,children:(0,h.jsx)("p",{dangerouslySetInnerHTML:{__html:g}})})]})]}),f&&(0,h.jsx)("div",{className:J().viewerFooter,children:(0,h.jsx)(m.Z,{href:f,variant:"cta",testId:d.PatternDownloadButton,label:"Download Pattern",className:J().downloadButton,trackEventData:{action:"cta - download Pattern",params:{event_category:"interaction",event_label:"download (detail:".concat(i,")")}}})})]})},O=N,P=c(41664),Q=c.n(P);(H=f||(f={})).RelatedTagsLink="related-tags-link";var R=c(96341),S=c.n(R),T=function(a){var b=a.tag,c=void 0===b?"":b,d=a.href,e=void 0===d?"":d;return c.trim()&&e.trim()?(0,h.jsx)(Q(),{href:j.Z.tagPage(e),children:(0,h.jsx)("a",{className:S().relatedTag,"data-testid":f.RelatedTagsLink,children:c})}):null},U=T,V=c(34250),W=c(43481),X=c.n(W),Y=function(a){var b=a.heading,c=void 0===b?"":b,d=a.description,e=void 0===d?"":d,f=a.tags,g=void 0===f?[]:f;return c.trim()&&g.length?(0,h.jsx)(o.Z,{overrideStyles:X().relatedTags,fullWidth:!0,children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(V.Z,{title:c,variant:"blue"}),e&&(0,h.jsx)("p",{className:X().description,children:e}),(0,h.jsxs)("ul",{className:X().tags,children:[g.map(function(a){return(0,h.jsx)("li",{children:(0,h.jsx)(U,{href:a.href,tag:a.tag})},a.tag)}),(0,h.jsx)("li",{children:(0,h.jsx)(U,{href:"all",tag:"see all"})})]})]})}):null},Z=Y,$=c(48023),_=c(3447),aa=c.n(_),ab=function(){return(0,h.jsx)("span",{className:aa().separator,children:"|"})},ac=function(a){var b=a.pattern,c=b.title,d=b.image_url,e=b.description,f=b.tags,g=b.uploaded_at,t=b.author,u=b.author_website,v=a.relatedPatterns;return(0,h.jsxs)(p.Z,{title:(0,i.$e)(c,t),description:(0,i.NY)(c,t),skipHeaderTag:!0,children:[(0,h.jsx)(o.Z,{fullWidth:!0,children:(0,h.jsx)(V.Z,{title:(0,k.Z)((0,i.NO)(c)),as:"h1",type:"header",variant:"blue",children:(0,h.jsxs)("div",{className:aa().subtitle,children:[(0,h.jsx)(n.Z,{variant:"white",date:g}),(0,h.jsx)(ab,{}),(0,h.jsx)(l.Z,{variant:"white",author:t,authorWebsite:u})]})})}),(0,h.jsxs)(o.Z,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(O,{title:c,src:d,isDark:(null==f?void 0:f.indexOf("dark"))!== -1,downloadHref:d,description:e})}),(0,h.jsx)(q.Z,{title:"Related Patterns",isRelated:!0,children:v.map(function(a,b){return(0,h.jsx)(r.Z,{loading:b<3?"eager":"lazy",id:a.id,author:a.author,src:a.image_url,title:a.title,url:j.Z.pattern(a.slug),authorWebsite:a.author_website,timestamp:new Date(a.uploaded_at),description:a.description||"",viewMoreLabel:"View More",downloadLabel:"Download Pattern",trackEventDataDownload:{action:"cta - download Pattern",params:{event_category:"interaction",event_label:"download (list:related:".concat(a.title,")")}},trackEventDataNavigation:{action:"preview - thumbnail",params:{event_category:"interaction",event_label:"preview ".concat(b+1)}}},a.id)})}),(0,h.jsx)("div",{className:aa().viewAllPatterns,children:(0,h.jsx)(m.Z,{label:"View all patterns",testId:s.m.AllPatternsButton,variant:"white",href:"/patterns"})})]}),(0,h.jsx)($.Z,{size:8}),(0,h.jsx)(Z,{heading:"Related Tags",tags:(f||[]).map(function(a){return{id:a,tag:a,href:a}})})]})},ad=!0,ae=ac},93228:function(a){a.exports={card:"Card_card__gPbEF",top:"Card_top__82q2z",content:"Card_content__PqccE",bottom:"Card_bottom__1acuz"}},75343:function(a){a.exports={author:"CardAuthor_author__mFvV_",name:"CardAuthor_name__Z5QqK",white:"CardAuthor_white__xAUfo"}},60176:function(a){a.exports={description:"CardDescription_description__WMzkN"}},15944:function(a){a.exports={image:"CardImage_image__gVLMR"}},23051:function(a){a.exports={timestamp:"CardTimestamp_timestamp__Zpp5L",date:"CardTimestamp_date__oLWLG",white:"CardTimestamp_white__jHzVM"}},60624:function(a){a.exports={title:"CardTitle_title__KLV26"}},74259:function(a){a.exports={patterns:"PatternBlock_patterns__UvPoJ",related:"PatternBlock_related__aRCQN",title:"PatternBlock_title__nLMae"}},5625:function(a){a.exports={"pattern-previewer":"PatternPreviewer_pattern-previewer__cDFWm",patternPreviewer:"PatternPreviewer_pattern-previewer__cDFWm","is-tag":"PatternPreviewer_is-tag__zBcCz",isTag:"PatternPreviewer_is-tag__zBcCz"}},64097:function(a){a.exports={"pattern-viewer":"PatternViewer_pattern-viewer__UvNhB",patternViewer:"PatternViewer_pattern-viewer__UvNhB","pattern-viewer-inner":"PatternViewer_pattern-viewer-inner__OWbwc",patternViewerInner:"PatternViewer_pattern-viewer-inner__OWbwc","nav-wrapper":"PatternViewer_nav-wrapper__MpvoO",navWrapper:"PatternViewer_nav-wrapper__MpvoO","nav-element":"PatternViewer_nav-element__XuPxN",navElement:"PatternViewer_nav-element__XuPxN","nav-element-active":"PatternViewer_nav-element-active__rvL7E",navElementActive:"PatternViewer_nav-element-active__rvL7E","image-wrapper":"PatternViewer_image-wrapper__i1oGD",imageWrapper:"PatternViewer_image-wrapper__i1oGD","viewer-footer":"PatternViewer_viewer-footer__hnREY",viewerFooter:"PatternViewer_viewer-footer__hnREY",content:"PatternViewer_content__iUkM9",description:"PatternViewer_description__7W9gI","download-button":"PatternViewer_download-button__FOgM3",downloadButton:"PatternViewer_download-button__FOgM3"}},96341:function(a){a.exports={"related-tag":"RelatedTag_related-tag__Q66sD",relatedTag:"RelatedTag_related-tag__Q66sD"}},43481:function(a){a.exports={"related-tags":"RelatedTagsBlock_related-tags__XwMzF",relatedTags:"RelatedTagsBlock_related-tags__XwMzF",heading:"RelatedTagsBlock_heading__Q5y8G",description:"RelatedTagsBlock_description__8ESG0",tags:"RelatedTagsBlock_tags__a5zyp"}},3447:function(a){a.exports={"view-all-tags":"Home_view-all-tags___UIVo",viewAllTags:"Home_view-all-tags___UIVo","view-all-patterns":"Home_view-all-patterns__Vk35d",viewAllPatterns:"Home_view-all-patterns__Vk35d","upload-wrapper":"Home_upload-wrapper__oZWPn",uploadWrapper:"Home_upload-wrapper__oZWPn",separator:"Home_separator__mbs9X",subtitle:"Home_subtitle__z1QIT"}}},function(a){a.O(0,[799,295,752,167,269,774,888,179],function(){var b;return a(a.s=11587)}),_N_E=a.O()}])