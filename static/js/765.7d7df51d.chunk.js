"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[765],{7238:function(n,t,e){e.d(t,{Bt:function(){return g},MF:function(){return f},Mc:function(){return Z},mv:function(){return v},y:function(){return m}});var r=e(4165),a=e(5861),c=e(1243),u="519ac6d7fa65fad3709213360518958a",o="https://api.themoviedb.org/3",s="/trending/movie/day",i="/search/movie",p="/movie";function f(){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(o).concat(s,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(o).concat(i,"?api_key=").concat(u,"&language=en-US&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function Z(n){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(o).concat(p,"/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(o).concat(p,"/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(o).concat(p,"/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},9765:function(n,t,e){e.r(t);var r=e(4165),a=e(5861),c=e(9439),u=e(7238),o=e(8924),s=e(3174),i=e(559),p=e(2791),f=e(8746),l=e(184);t.default=function(){var n=(0,p.useState)(null),t=(0,c.Z)(n,2),e=t[0],v=t[1],h=(0,p.useState)(!1),Z=(0,c.Z)(h,2),d=Z[0],g=Z[1],x=(0,p.useState)(!1),m=(0,c.Z)(x,2),y=m[0],w=m[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),w(!1),v(null),n.prev=3,n.next=6,(0,u.MF)();case 6:if(t=n.sent,!((e=t.results).length>0)){n.next=12;break}v(e),n.next=13;break;case 12:throw new Error;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(3),w(!0);case 18:return n.prev=18,g(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[3,15,18,21]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)(f.$,{children:[(0,l.jsx)(f.D,{children:"Trending today"}),d&&(0,l.jsx)(o.Z,{}),e&&(0,l.jsx)(s.Z,{movies:e}),y&&(0,l.jsx)(i.Xl,{children:"Sorry... We couldn't find any day trends"})]})}},8746:function(n,t,e){e.d(t,{$:function(){return o},D:function(){return s}});var r,a,c=e(168),u=e(7109),o=u.Z.section(r||(r=(0,c.Z)(["\n  padding: 20px;\n"]))),s=u.Z.h1(a||(a=(0,c.Z)(["\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 20px;\n"])))},3174:function(n,t,e){e.d(t,{Z:function(){return i}});var r,a=e(7689),c=e(1087),u=e(168),o=e(7109).Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),s=e(184),i=function(n){var t=n.movies,e=(0,a.TH)();return(0,s.jsx)(o,{children:t.map((function(n){var t=n.id,r=n.title,a=n.original_title;return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:r||a})},t)}))})}},559:function(n,t,e){e.d(t,{S3:function(){return s},VY:function(){return i},Xl:function(){return p}});var r,a,c,u=e(168),o=e(7109),s=o.Z.h3(r||(r=(0,u.Z)(["\n  font-weight: 600;\n  margin-bottom: 8px;\n"]))),i=o.Z.p(a||(a=(0,u.Z)(["\n  margin-left: 20px;\n"]))),p=o.Z.p(c||(c=(0,u.Z)(["\n  margin-top: 20px;\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=765.7d7df51d.chunk.js.map