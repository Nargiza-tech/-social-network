(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(70),s=n.n(r),c=(n(55),n(56),n(74),s.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"93cd86f2-51fc-46cf-938d-e69b264c9ac0"}})),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))},getProfile:function(e){return console.warn("obsalete method. Please profileApi object"),a.getProfile(e)}},a={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status",{status:e})}},o={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return c.delete("auth/login")}}},13:function(e,t,n){e.exports={nav:"Nav_nav__RNeYM",item:"Nav_item__25v-i",friends:"Nav_friends__w8rBa",activeLink:"Nav_activeLink__3TPNl"}},164:function(e,t,n){},165:function(e,t){},289:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(69),i=n.n(c),a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))},o=n(33),u=n(34),l=n(36),d=n(35),j=(n(164),n(13)),f=n.n(j),b=(n(165),n(14)),p=n(1),h=function(e){return Object(p.jsxs)("nav",{className:f.a.nav,children:[Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"DialogsMessages"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(b.b,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/news",activeClassName:f.a.activeLink,children:"News"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/music",activeClassName:f.a.activeLink,children:"Music"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/settings",activeClassName:f.a.activeLink,children:"Settings"})})]})},O=n(10),g=function(){return Object(p.jsx)("div",{children:"hello"})},m=function(){return Object(p.jsx)("div",{children:"Im News"})},v=function(){return Object(p.jsx)("div",{children:"hi im music"})},x=n(19),w=n(16),P=n.n(w),N=n(29),k=n(42),y=n(5),S=n(12),C="FOLLOW",E="UNFOLLOW",T="SETUSERS",I="SET_CURRENT_PAGE",U="TOGGLE_IS_FOLLOWING_PROGRESS",L="SET_TOTAL_USERS_COUNT",F="TOGGLE_IS_FETCHING",A={users:[],pageSize:10,totalUsersCount:54,currentPage:1,isFetching:!0,followingInProgress:[]},z=function(e){return{type:C,userId:e}},W=function(e){return{type:E,userId:e}},D=function(e){return{type:I,currentPage:e}},J=function(e){return{type:F,isFetching:e}},H=function(e,t){return{type:U,isFetching:e,userId:t}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(y.a)(Object(y.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(y.a)(Object(y.a)({},e),{},{followed:!0}):e}))});case E:return Object(y.a)(Object(y.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(y.a)(Object(y.a)({},e),{},{followed:!1}):e}))});case T:return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case I:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case L:return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.count});case F:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case U:return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(k.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},V=n(129),X=n(54),B=n.n(X),K=n.p+"static/media/user.ab7efdc7.png",R=(n(70),function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);var c=Math.ceil(t/e.pageSize),i=Object(r.useState)(1),a=Object(V.a)(i,2),o=a[0],u=a[1],l=(o-1)*e.pageSize+1,d=o*e.pageSize;return Object(p.jsxs)("div",{className:B.a.container,children:[Object(p.jsxs)("div",{children:[o>1&&Object(p.jsx)("button",{className:B.a.btn,onClick:function(){u(o-1)},children:"PREV"}),n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(p.jsx)("span",{className:e.currentPage===t&&B.a.selectedPage,onClick:function(n){e.onPageChanged(t)},children:t})})),c>o&&Object(p.jsx)("button",{onClick:function(){u(o+1)},children:"NEXT"})]}),e.users.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:K,className:B.a.usersPhoto})})})}),Object(p.jsx)("span",{children:Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"unfollow"}):Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})})}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsx)("span",{})]})]},t.id)}))]})}),Y=n(72),q=n(9),G=n(134),Z=Object(G.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Q=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.totalUsersCount},$=function(e){return e.usersPage.currentPage},ee=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(Y.a,{}):null,Object(p.jsx)(R,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),re=Object(q.d)(Object(x.b)((function(e){return{users:Z(e),pageSize:Q(e),totalUsersCount:_(e),currentPage:$(e),isFetching:ee(e),followingInProgress:te(e)}}),{follow:function(e){return function(){var t=Object(N.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=z,n(H(!0,e)),t.next=4,S.c.follow(e);case 4:0==t.sent.data.resultCode&&n(r(e)),n(H(!1,e));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(N.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S.c.unfollow.bind(S.c),W,n(H(!0,e)),0==S.c.unfollow(e).data.resultCode&&n(W(e)),n(H(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrent:D,toggleFollowingInProgress:H,getUsers:function(e,t){return function(){var n=Object(N.a)(P.a.mark((function n(r){var s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(D(e)),n.next=4,S.c.getUsers(e,t);case 4:s=n.sent,r(J(!1)),r((i=s.items,{type:T,users:i})),r((c=s.totalCount,{type:L,count:c}));case 8:case"end":return n.stop()}var c,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ne),se=n(95),ce=n.n(se),ie=function(e){return Object(p.jsxs)("header",{className:ce.a.header,children:[Object(p.jsx)("img",{src:"data:image/png;base64,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"}),Object(p.jsx)("div",{className:ce.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[" ",e.login,"  - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(b.b,{to:"/login",children:"Login"})})]})},ae=n(43),oe="samurai-network/auth/SET_USER_DATA",ue={userId:null,email:null,login:null,isAuth:!1},le=function(e,t,n,r){return{type:oe,payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(){return function(){var e=Object(N.a)(P.a.mark((function e(t){var n,r,s,c,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.b.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,c=r.login,i=r.email,t(le(s,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ie,Object(y.a)({},this.props))}}]),n}(s.a.Component),be=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(N.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.b.logout();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(fe),pe=n(127),he=n(128),Oe=n(59),ge=n(60),me=n(51),ve=n.n(me),xe=Object(he.a)({form:"login"})((function(e){return console.log(e),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(pe.a,{component:Oe.a,name:"email",placeholder:"email",validate:[ge.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(pe.a,{component:Oe.a,type:"password",name:"password",placeholder:"Password",validate:[ge.b]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(pe.a,{component:Oe.a,name:"rememberMe",type:"checkbox",validate:[ge.b]})," remember me"]}),e.error&&Object(p.jsx)("div",{className:ve.a.formSummeryError,children:e.error}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})})),we=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(N.a)(P.a.mark((function r(s){var c,i;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.b.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?s(de()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",s(Object(ae.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(O.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(xe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Pe="INITIALIZED_SUCCESS",Ne={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},ye=n(55),Se=n(56),Ce=n(74),Ee=n(133),Te=n(130),Ie=Object(q.c)({profilePage:ye.b,dialogsPage:Se.a,sidebar:Ce.a,usersPage:M,auth:je,form:Te.a,app:ke}),Ue=Object(q.e)(Ie,Object(q.a)(Ee.a)),Le=function(e){return function(t){return Object(p.jsx)(s.a.Suspense,{fallback:Object(p.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(p.jsx)(e,Object(y.a)({},t))})}},Fe=s.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Ae=s.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),ze=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(be,{}),Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(O.b,{path:"/dialogs/",render:Le(Fe)}),Object(p.jsx)(O.b,{path:"/profile/:userId?",render:Le(Ae)}),Object(p.jsx)(O.b,{path:"/users",render:function(){return Object(p.jsx)(re,{})}}),Object(p.jsx)(O.b,{path:"/login",render:function(){return Object(p.jsx)(we,{})}}),Object(p.jsx)(O.b,{path:"/settings",component:g}),Object(p.jsx)(O.b,{path:"/news",component:m}),Object(p.jsx)(O.b,{path:"/music",component:v})]})]}):Object(p.jsx)(Y.a,{})}}]),n}(s.a.Component),We=Object(q.d)(O.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then((function(){e({type:Pe})}))}}}))(ze),De=function(e){return Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{store:Ue,children:Object(p.jsx)(We,{})})})};i.a.render(Object(p.jsx)(De,{}),document.getElementById("root")),a()},51:function(e,t,n){e.exports={formControl:"formControls_formControl__2BsVd",error:"formControls_error__QHZCE",formSummeryError:"formControls_formSummeryError__1Qb43"}},54:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__3KiNm",container:"users_container__1o0Zb",selectedPage:"users_selectedPage__30O_w"}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(42),s=n(5),c=n(12),i="ADD-POST",a="SET_USER_PROFILE",o="SET_STATUS",u="DELETE_POST",l={posts:[{id:1,message:"hi how are you?",likesCount:15},{id:2,message:"its my first post",likesCount:11},{id:3,message:"how are you",likesCount:13},{id:4,message:"Yo!",likesCount:17},{id:5,message:"Yo!",likesCount:10},{id:6,message:"Yo!",likesCount:20}],profile:null,status:""},d=function(e){return{type:i,newPostsText:e}},j=function(e){return{type:o,status:e}},f=function(e){return function(t){c.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:a,profile:n}))}))}},b=function(e){return function(t){c.a.getStatus(e).then((function(e){t(j(e.data))}))}},p=function(e){return function(t){c.a.updateStatus(e).then((function(n){0===n.data.resultCode&&t(j(e))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:5,message:t.newPostsText,likesCount:0},c=Object(s.a)({},e);return c.posts=Object(r.a)(e.posts),c.posts.push(n),c.newPostsText=" ",c;case o:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case a:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case u:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(42),s=n(5),c="SEND-MESSAGE",i={messages:[{id:1,message:"hi"},{id:2,message:"hello"},{id:3,message:"how are you"},{id:4,message:"Yo!"},{id:5,message:"Yo!"},{id:6,message:"Yo!"}],dialogs:[{id:1,name:"Nargiza"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Viktor"},{id:5,name:"Valeryi"},{id:6,name:"Andrey"}]},a=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}},59:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(5),s=n(77),c=(n(0),n(51)),i=n.n(c),a=n(1),o=["input","meta","child"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=(e.child,Object(s.a)(e,o)),r=t.touched&&t.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(a.jsx)("div",{children:n.children}),r&&Object(a.jsxs)("span",{children:['"',t.error]})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,u));return Object(a.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,l));return Object(a.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){return e?void 0:"Field is required"},s=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},72:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader-3.66564601.gif",s=n(1);t.a=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:r,style:{width:"500px"}})," "]})}},74:function(e,t,n){"use strict";var r={};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return e}},95:function(e,t,n){e.exports={header:"Header_header__UbILT",loginBlock:"Header_loginBlock__mrCuB"}}},[[289,1,2]]]);
//# sourceMappingURL=main.26e65a9d.chunk.js.map