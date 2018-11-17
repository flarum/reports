module.exports=function(t){var a={};function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=22)}([function(t,a){t.exports=flarum.core.compat.app},function(t,a,o){"use strict";function e(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a}o.d(a,"a",function(){return e})},function(t,a){t.exports=flarum.core.compat.extend},function(t,a){t.exports=flarum.core.compat.Model},function(t,a,o){"use strict";function e(){return(e=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}o.d(a,"a",function(){return e})},function(t,a){t.exports=flarum.core.compat["components/Button"]},function(t,a){t.exports=flarum.core.compat["components/Post"]},function(t,a){t.exports=flarum.core},function(t,a){t.exports=flarum.core.compat["utils/PostControls"]},,function(t,a){t.exports=flarum.core.compat["components/Page"]},function(t,a){t.exports=flarum.core.compat.Component},function(t,a){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,a){t.exports=flarum.core.compat["helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["helpers/username"]},function(t,a){t.exports=flarum.core.compat["helpers/icon"]},function(t,a){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["components/Modal"]},function(t,a){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,a){t.exports=flarum.core.compat["components/NotificationsDropdown"]},function(t,a){t.exports=flarum.core.compat["utils/ItemList"]},,function(t,a,o){"use strict";o.r(a);var e=o(4),n=o(0),s=o.n(n),r=o(3),i=o.n(r),l=o(1),c=function(t){function a(){return t.apply(this,arguments)||this}return Object(l.a)(a,t),a}(i.a);Object(e.a)(c.prototype,{type:i.a.attribute("type"),reason:i.a.attribute("reason"),reasonDetail:i.a.attribute("reasonDetail"),createdAt:i.a.attribute("createdAt",i.a.transformDate),post:i.a.hasOne("post"),user:i.a.hasOne("user")});var u=c,p=o(10),f=o.n(p),g=o(11),d=o.n(g),h=o(12),b=o.n(h),v=o(13),y=o.n(v),_=o(14),x=o.n(_),N=o(15),F=o.n(N),O=o(16),w=o.n(O),j=function(t){function a(){return t.apply(this,arguments)||this}Object(l.a)(a,t);var o=a.prototype;return o.init=function(){this.loading=!1},o.view=function(){var t=app.cache.flags||[];return m("div",{className:"NotificationList FlagList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("flarum-flags.forum.flagged_posts.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map(function(t){var a=t.post();return m("li",null,m("a",{href:app.route.post(a),className:"Notification Flag",config:function(t,o){m.route.apply(this,arguments),o||$(t).on("click",function(){return app.cache.flagIndex=a})}},y()(a.user()),F()("fas fa-flag",{className:"Notification-icon"}),m("span",{className:"Notification-content"},app.translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:x()(a.user()),em:m("em",null),discussion:a.discussion().title()})),w()(t.createdAt()),m("div",{className:"Notification-excerpt"},a.contentPlain())))}):this.loading?b.a.component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},app.translator.trans("flarum-flags.forum.flagged_posts.empty_text")))))},o.load=function(){var t=this;app.cache.flags&&!app.session.user.attribute("newFlagCount")||(this.loading=!0,m.redraw(),app.store.find("flags").then(function(t){app.session.user.pushAttributes({newFlagCount:0}),app.cache.flags=t.sort(function(t,a){return a.createdAt()-t.createdAt()})}).catch(function(){}).then(function(){t.loading=!1,m.redraw()}))},a}(d.a),P=function(t){function a(){return t.apply(this,arguments)||this}Object(l.a)(a,t);var o=a.prototype;return o.init=function(){t.prototype.init.call(this),app.history.push("flags"),this.list=new j,this.list.load(),this.bodyClass="App--flags"},o.view=function(){return m("div",{className:"FlagsPage"},this.list.render())},a}(f.a),k=o(2),A=o(8),C=o.n(A),D=o(5),M=o.n(D),B=o(17),L=function(t){function a(){return t.apply(this,arguments)||this}Object(l.a)(a,t);var o=a.prototype;return o.init=function(){t.prototype.init.call(this),this.success=!1,this.reason=m.prop(""),this.reasonDetail=m.prop("")},o.className=function(){return"FlagPostModal Modal--small"},o.title=function(){return app.translator.trans("flarum-flags.forum.flag_post.title")},o.content=function(){if(this.success)return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("flarum-flags.forum.flag_post.confirmation_message")),m("div",{className:"Form-group"},m(M.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("flarum-flags.forum.flag_post.dismiss_button")))));var t=app.forum.attribute("guidelinesUrl");return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"off_topic"===this.reason(),value:"off_topic",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_text")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"inappropriate"===this.reason(),value:"inappropriate",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_text",{a:t?m("a",{href:t,target:"_blank"}):void 0})),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"spam"===this.reason(),value:"spam",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_spam_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_spam_text")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"other"===this.reason(),value:"other",onclick:m.withAttr("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_other_label")),"other"===this.reason()?m("textarea",{className:"FormControl",value:this.reasonDetail(),oninput:m.withAttr("value",this.reasonDetail)}):""))),m("div",{className:"Form-group"},m(M.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.reason()},app.translator.trans("flarum-flags.forum.flag_post.submit_button")))))},o.onsubmit=function(t){var a=this;t.preventDefault(),this.loading=!0,app.store.createRecord("flags").save({reason:"other"===this.reason()?null:this.reason(),reasonDetail:this.reasonDetail(),relationships:{user:app.session.user,post:this.props.post}}).then(function(){return a.success=!0}).catch(function(){}).then(this.loaded.bind(this))},a}(o.n(B).a),I=function(){Object(k.extend)(C.a,"userControls",function(t,a){!a.isHidden()&&"comment"===a.contentType()&&a.canFlag()&&a.user()!==s.a.session.user&&t.add("flag",m(M.a,{icon:"fas fa-flag",onclick:function(){return s.a.modal.show(new L({post:a}))}},s.a.translator.trans("flarum-flags.forum.post_controls.flag_button")))})},T=o(18),S=o.n(T),E=o(19),R=function(t){function a(){return t.apply(this,arguments)||this}Object(l.a)(a,t),a.initProps=function(a){a.label=a.label||app.translator.trans("flarum-flags.forum.flagged_posts.tooltip"),a.icon=a.icon||"fas fa-flag",t.initProps.call(this,a)};var o=a.prototype;return o.init=function(){t.prototype.init.call(this),this.list=new j},o.goToRoute=function(){m.route(app.route("flags"))},o.getUnreadCount=function(){return app.cache.flags?app.cache.flags.length:app.forum.attribute("flagCount")},o.getNewCount=function(){return app.session.user.attribute("newFlagCount")},a}(o.n(E).a),H=function(){Object(k.extend)(S.a.prototype,"items",function(t){s.a.forum.attribute("canViewFlags")&&t.add("flags",m(R,null),15)})},U=o(6),G=o.n(U),q=o(20),z=o.n(q),V=function(){Object(k.extend)(G.a.prototype,"attrs",function(t){this.props.post.flags().length&&(t.className+=" Post--flagged")}),G.a.prototype.dismissFlag=function(t){var a=this.props.post;return delete a.data.relationships.flags,this.subtree.invalidate(),s.a.cache.flags&&s.a.cache.flags.some(function(t,o){if(t.post()===a){if(s.a.cache.flags.splice(o,1),s.a.cache.flagIndex===a){var e=s.a.cache.flags[o];if(e||(e=s.a.cache.flags[0]),e){var n=e.post();s.a.cache.flagIndex=n,m.route(s.a.route.post(n))}}return!0}}),s.a.request({url:s.a.forum.attribute("apiUrl")+a.apiEndpoint()+"/flags",method:"DELETE",data:t})},G.a.prototype.flagActionItems=function(){var t=this,a=new z.a,o=C.a.destructiveControls(this.props.post);return Object.keys(o.items).forEach(function(a){var e=o.get(a).props;e.className="Button",Object(k.extend)(e,"onclick",function(){return t.dismissFlag()})}),a.add("controls",m("div",{className:"ButtonGroup"},o.toArray())),a.add("dismiss",m(M.a,{className:"Button",icon:"far fa-eye-slash",onclick:this.dismissFlag.bind(this)},s.a.translator.trans("flarum-flags.forum.post.dismiss_flag_button")),-100),a},Object(k.extend)(G.a.prototype,"content",function(t){var a=this,o=this.props.post,e=o.flags();e.length&&(o.isHidden()&&(this.revealContent=!0),t.unshift(m("div",{className:"Post-flagged"},m("div",{className:"Post-flagged-flags"},e.map(function(t){return m("div",{className:"Post-flagged-flag"},a.flagReason(t))})),m("div",{className:"Post-flagged-actions"},this.flagActionItems().toArray()))))}),G.a.prototype.flagReason=function(t){if("user"===t.type()){var a=t.user(),o=t.reason(),e=t.reasonDetail();return[s.a.translator.trans(o?"flarum-flags.forum.post.flagged_by_with_reason_text":"flarum-flags.forum.post.flagged_by_text",{user:a,reason:o}),e?m("span",{className:"Post-flagged-detail"},e):""]}}},J={"flags/addFlagsToPosts":V,"flags/addFlagControl":I,"flags/addFlagsDropdown":H,"flags/models/Flag":u,"flags/components/FlagList":j,"flags/components/FlagPostModal":L,"flags/components/FlagsPage":P,"flags/components/FlagsDropdown":R},K=o(7);s.a.initializers.add("flarum-flags",function(){s.a.store.models.posts.prototype.flags=i.a.hasMany("flags"),s.a.store.models.posts.prototype.canFlag=i.a.attribute("canFlag"),s.a.store.models.flags=u,s.a.routes.flags={path:"/flags",component:m(P,null)},I(),H(),V()}),Object(e.a)(K.compat,J)}]);
//# sourceMappingURL=forum.js.map