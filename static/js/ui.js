/*! frontui v1.0.0
*  by frontpay FE Team
*  (c) 2015-08-31 www.frontpay.cn
*  Licensed under Apache License
*/+function(t){"use strict";t.fn.accordion=function(i){var e={item:"li",target:">div",active:"active",except:!1};return i=t.extend({},e,i),t(this).switcher(i),t(this).each(function(){var e=t(this).find(i.item);t(this).on("select.ui.switcher",function(o){var n=t(o.relatedTarget),s=n.hasClass(i.active),a=e.find(i.target),r=n.find(i.target);!i.except&&a.slideUp(),r.stop()[s?"slideDown":"slideUp"](),o.stopPropagation(),o.preventDefault()})})}}(jQuery),+function(t){"use strict";function i(i){return t(this).each(function(){var e=t(this),o=e.data("ui.alert");o||e.data("ui.alert",o=new n(this,i)),"string"==typeof i&&o[i].call(t(this))})}var e='[data-dismiss="alert"]',o="em",n=function(i,e){var n=this;"function"==typeof e?t(i).on("click",o,function(){var i=t(this);e(function(){n.close.call(i)})}):t(i).on("click",o,this.close)};n.VERSION="1.0.0",n.TRANSITION_DURATION=150,n.prototype.close=function(i){function e(){var i=t.Event("closed.ui.alert",{relatedTarget:a});a.detach().remove(),o.trigger(i)}var o=t(this),s=t(this).attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);i&&i.preventDefault(),a.length||(a=o.closest(".alert")),a.trigger(i=t.Event("close.ui.alert")),i.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("uiTransitionEnd",e).emulateTransitionEnd(n.TRANSITION_DURATION):a.fadeOut(n.TRANSITION_DURATION,e))},t.fn.alert=i,t.fn.alert.Constructor=n,t(function(){t(document).on("click.ui.alert",e,n.prototype.close)})}(jQuery),+function(t){"use strict";function i(i){return t(this).each(function(){var e=t(this),n=e.data("ui.checkAll");n||e.data("ui.checkAll",n=new o(this)),"string"==typeof i&&n[i]()})}var e='[data-toggle="checkAll"]',o=function(i){var e=this;e.$el=t(i),e.$target=t(e.$el.data("target")),e.isReverse=e.$el.data("reverse"),e.$el.on("click",t.proxy(e.isReverse?this.reverse:this.activate,this))};o.VERSION="1.0.0",o.prototype.activate=function(){var i=this.$el.is(":checked"),e=t.Event("checked.ui.checkAll",{relatedTarget:this.$el});this.$target.prop("checked",i),this.$el.trigger(e)},o.prototype.reverse=function(){var i=t.Event("reversed.ui.checkAll",{relatedTarget:this.$el});this.$target.map(function(){return t(this).prop("checked",!this.checked)}),this.$el.trigger(i)},t.fn.checkAll=i,t.fn.checkAll.Constructor=o,t(document).ready(function(){t(e).checkAll()})}(jQuery),+function(t){"use strict";function i(t,i){var o=a(t);c=t.data("active")||c;var n=o.hasClass(c);void 0===i&&e(),n||(o.addClass(c),t.attr("aria-expanded",!0).trigger("show.ui.dropdown",this))}function e(i,e){t(d).each(function(){var o=t(this),s=a(o),r=s.find(d);c=o.data("active")||c,s.hasClass(c)&&(i&&i.isDefaultPrevented()||(e&&n(o,r),s.removeClass(c).find(f).removeClass("hover").show(),o.attr("aria-expanded","false").trigger("hide.ui.dropdown",this).data("currentItem",-1),r.length&&r.trigger("blur")))})}function o(t){e(t,1)}function n(i,e){var o,n=r(i),s=0,a="",l=t.trim(e.val());o=n.filter(function(){return t(this).is(":visible")?(0===s&&(a=t.trim(t(this).text()),s=a==l?1:0),!0):!1}),s||(0===o.length?n.eq(0).trigger("click"):o.eq(0).trigger("click.ui.dropSelect"))}function s(){var i=t(this),e=i.attr("placeholder"),o=t.trim(i.val()),n=r(i);""!==o&&o!==e&&n.hide().filter(function(){var i=t.trim(t(this).text())||"";return i==o&&t(this).addClass("hover"),i.indexOf(o)>-1}).show()}function a(i){var e=t(i).data("target")||t(i).parent();return e}function r(t){var i=a(t);return i.find(f)}function l(t,i){var e=t.parent(),o=t.eq(i).position().top;e.scrollTop(o)}function h(i){return t(this).each(function(){var e=t(this),o=e.data("ui.dropdown");o||e.data("ui.dropdown",o=new g(this)),"string"==typeof i&&o[i].call(t(this))})}var c="active",d='[data-toggle="dropdown"],.form-control-dropdown-value',u='.form-control-dropdown-btn, [data-toggle="dropdown-btn"]',p=".form-control-dropdown-menu",f='.form-control-dropdown-menu li, [role="list"] li',g=function(i){t(i).on("click.ui.dropdown",this.toggle),/input/i.test(i.tagName)&&t(i).on("keyup.ui.dropFilter",this.filter);var e=a(i);e.on("click.ui.dropSelect",f,this.selected(e))};g.VERSION="1.0.0",g.prototype.toggle=function(e){var o=t(this);if(!o.is(".disabled,:disabled"))return i(o),!1},g.prototype.keydown=function(i){if(27===i.which)return void e(i);if(/(38|40|27|32|13|46|8)/.test(i.which)){var o=t(this),n=void 0===o.data("currentItem")?-1:o.data("currentItem");if(i.stopPropagation(),!o.is(".disabled, :disabled")){var s=a(o);c=o.data("active")||c;var r=s.hasClass(c);if(!r&&27!=i.which||r&&27==i.which)return 27==i.which&&s.find(d).trigger("focus"),o.trigger("click");var h=s.find(f).filter(":visible");if(h.length){if(13==i.which&&h.filter(".hover").length)return void h.filter(".hover").trigger("click.ui.dropSelect");var u=h.index(i.target)>-1?h.index(i.target):n;38==i.which&&u>=0&&u--,40==i.which&&u<h.length&&u++,0>u&&(u=h.length-1),u>=h.length&&(u=0),l(h,u),o.data("currentItem",u),h.removeClass("hover").eq(u).addClass("hover").trigger("focus")}}}},g.prototype.selected=function(i){var o=i.find(d);return function(i){i.preventDefault(),i.stopPropagation();var n=/input/i.test(o[0].tagName),s=t.trim(t(this)[n?"text":"html"]());return o[n?"val":"html"](s).trigger("selected.ui.dropdown",this),e(),!1}},g.prototype.filter=function(i){if(/input/i.test(i.target.tagName)){var e=t(this),o=t.trim(e.val()),n=r(e);return""===o?void n.show():void(n.length&&n.map(function(){var i=t(this).text();return i.indexOf(o)>-1?t(this).show():t(this).hide()}))}},g.prototype.focusIn=function(e){var o=t(this);i(o,!0)},t.fn.dropdown=h,t.fn.dropdown.Constructor=g,t(function(){t(d).dropdown(),t(document).on("click.ui.dropdown",o).on("click.ui.dropdown-btn",u,function(i){var e=t(this).siblings(d);return e.length&&e.dropdown("toggle"),!1}).on("click.ui.dropdown",p,function(t){return t.stopPropagation(),!1}).on("focus.ui.dropdown",d,s).on("keydown.ui.dropdown",d,g.prototype.keydown)})}(jQuery),+function(t){"use strict";function i(i,o){if(!t(this).length&&i&&/^#(\w*)/gi.test(t(this).selector)){var n,s;"string"==typeof i&&(s=i,i={title:"标题",content:""}),i.mid=t(this).selector.replace(/^#/g,"");var a=e.CreateModal(i);a.data("mid",i.mid);var r=t.extend({},e.DEFAULTS,"object"==typeof i&&i);return a.data("ui.modal",n=new e(a,r)),s&&"function"==typeof n[s]&&n[s](o),i.callback&&i.callback.call(a),n.show(o),t(this)}return t(this).each(function(){var n=t(this),s=n.data("ui.modal"),a=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i);s||n.data("ui.modal",s=new e(this,a)),"string"==typeof i?s[i](o):a.show&&(a.title&&s.setTitle(a.title),a.content&&s.setContent(a.content),s.show(o))})}var e=function(i,e){this.$el=t(i),this.options=e,this.$body=t(document.body),this.$dialog=this.$el.find(".modal-wrap"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.options.remote&&this.$el.find(".modal-body").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.ui.modal")},this))};e.VERSION="1.0.0",e.TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.TEMPLATE=['<div class="modal-background fade" id="{{mid}}">','<div class="modal-layer">','<div class="modal-position">','<div class="modal-wrap">','<div class="modal-head">','<span class="modal-title">{{title}}</span>','<button class="modal-close">',"<i></i>","</button>","</div>",'<div class="modal-body">',"{{content}}","</div>","</div>","</div>","</div>","</div>"].join(""),e.CreateModal=function(i){var o,n=t(document.body);return i&&"object"==typeof i&&(o=e.TEMPLATE.replace(/{{(\w*)}}/gi,function(e,o){return i[o]&&"string"==typeof i[o]?/^(\.|#)\w*/gi.test(i[o])?t(i[o]).html():i[o]:i[o]&&i[o].length&&i.length>0?i[o].html():void 0}),o=t(o).hide().appendTo(n)),o},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(i){var o=this,n=t.Event("show.ui.modal",{relatedTarget:i});if(!this.isShown&&!n.isDefaultPrevented()){this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$el.on("click.dismiss.ui.modal",'[data-dismiss="modal"],.modal-close',t.proxy(this.hide,this));var s=t.support.transition&&o.$el.hasClass("fade");o.$el.show().scrollTop(0),o.adjustDialog(),s&&o.$el[0].offsetWidth,o.enforceFocus(),s?(o.$el.addClass("in").attr("aria-hidden",!1),o.$dialog.one("uiTransitionEnd",function(){o.$el.trigger("focus").trigger(n)}).emulateTransitionEnd(e.TRANSITION_DURATION)):o.$el.hide().addClass("in").attr("aria-hidden",!1).fadeIn(e.TRANSITION_DURATION,function(){t(this).trigger("focus").trigger(n)}).attr("aria-hidden",!1)}},e.prototype.hide=function(i){i&&i.preventDefault();var o=this;(this.$el.is(":visible")||this.isShown)&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.ui.modal"),this.$el.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.ui.modal").off("mouseup.dismiss.ui.modal"),this.$dialog.off("mousedown.dismiss.ui.modal"),t.support.transition&&this.$el.hasClass("fade")?this.$el.one("uiTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):function(){o.$el.fadeOut(e.TRANSITION_DURATION,function(){o.hideModal()})}())},e.prototype.close=function(i){t(i).data("ui.modal").hide()},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$el.on("keydown.dismiss.ui.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$el.off("keydown.dismiss.ui.modal")},e.prototype.hideModal=function(){var i=this,e=t.Event("hide.ui.modal",{relatedTarget:i.$el});i.$el.hide(),i.$body.removeClass("modal-open"),i.resetAdjustments(),i.resetScrollbar(),i.$el.trigger(e)},e.prototype.resize=function(){},e.prototype.handleUpdate=function(){this.adjustDialog()},e.prototype.adjustDialog=function(){return},e.prototype.resetAdjustments=function(){this.$el.css({paddingLeft:"",paddingRight:""})},e.prototype.enforceFocus=function(){t(document).off("focusin.ui.modal").on("focusin.ui.modal",t.proxy(function(t){this.$el[0]===t.target||this.$el.has(t.target).length||this.$el.trigger("focus")},this))},e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var i=document.documentElement.getBoundingClientRect();t=i.right-Math.abs(i.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var i=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),i},e.prototype.setContent=function(t){var i=this.$el.find(".modal-body");i.length&&i.html(t||"")},e.prototype.setTitle=function(t){var i=this.$el.find(".modal-title");i.length&&i.html(t||"")},t.fn.modal=i,t.fn.modal.Constructor=e,t.fn.showLoading=function(i,e){var i=i||"处理中...",e=e||"请不要关闭浏览器，系统正在处理";if(t(this).length)i&&t(this).find(".modal-body h3").html(i),e&&t(this).find(".loading-content").html(e),t(this).modal("show");else{var o=['<div class="notice-wrap waiting in-modal">','<div class="notice-box">','<span class="notice-img"></span>',"<h3>"+i+"</h3>",'<div class="loading-content">'+e+"</div>","</div>","</div>"].join("");t(this).modal({title:"提示",content:o,callback:function(){t(this).find(".modal-close").hide()}})}},t.fn.hideLoading=function(){t(this).length&&t(this).modal("hide")},t.fn.modalLayer=function(i){var e={icon:"success",title:"成功",content:"",buttons:[{text:"确定",href:!1,style:"btn primary",target:!1,ok:t.noop}]},o=t.extend({},e,i),n=t(this);if(n.length)n.modal("show");else{for(var s=['<div class="notice-wrap '+o.icon+' in-modal">','<div class="modalLayer notice-box">','<span class="notice-img"></span>','<h3 class="modalLayer-title '+(""==t.trim(o.content)?"fn-mt-20":"")+'">'+o.title+"</h3>",'<div class="modalLayer-content">'+o.content+"</div>","</div>","</div>",'<div class="in-modal-btns text-align-center">',"</div>"],a=[],r=o.buttons,l=0;l<r.length;l++)r[l].href?a.push('<a href="'+r[l].href+'" '+(r[l].target?'target="'+r[l].target+'"':"")+' class="'+(r[l].style||"btn primary")+'" data-index="'+l+'">'+r[l].text+"</a>"):a.push('<button type="button" class="'+(r[l].style||"btn primary")+'" data-index="'+l+'">'+r[l].text+"</button>");s.splice(-1,0,a.join("")),n=t(this).modal({title:"提示",content:s.join(""),callback:function(i){t(this).on("click",".in-modal-btns .btn",function(){var i=t(this).data("index"),e=!0;o.buttons.length&&o.buttons[i]&&o.buttons[i].ok&&o.buttons[i].ok&&"function"==typeof o.buttons[i].ok&&(e=o.buttons[i].ok.call(null,t(this),i)===!1?!1:!0),e&&t(n.selector).modal("hide")})}})}};var o=function(){t(document).on("click.ui.modal",'[data-toggle="modal"]',function(e){var o=t(this),n=t(this).attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("ui.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());i.call(s,a,this)})};t(document).ready(o)}(jQuery),+function(t){"use strict";function i(i){return t(this).on("click",function(){i="string"==typeof i?{message:i}:i;var t=new a(i);t.show()})}var e={},o={},n=function(i){return"string"==typeof i&&(i={message:i}),arguments[1]&&(i=t.extend(i,"string"==typeof arguments[1]?{status:arguments[1]}:arguments[1])),new a(i).show()},s=function(t,i){var e;if(t)for(e in o)t===o[e].group&&o[e].close(i);else for(e in o)o[e].close(i)},a=function(i){this.timeout=!1,this.currentStatus="",this.group=!1,this.options=t.extend({},a.DEFAULTS,i),this.uuid="Notify_"+Math.random().toString(36).substr(2),this.$el=t(['<div class="notify-message">','<a class="notify-close">&times;</a>',"<div></div>","</div>"].join("")).data("ui.notify",this),this.content(this.options.message),this.options.status&&(this.$el.addClass("notify-message-"+this.options.status),this.currentStatus=this.options.status),this.group=this.options.group,o[this.uuid]=this,e[this.options.pos]||(e[this.options.pos]=t('<div class="notify notify-'+this.options.pos+'"></div>').appendTo(t("body")).on("click",".notify-message",function(){var i=t(this).data("ui.notify");i.$el.trigger("manualclose.ui.notify",[i]),i.close()}))};a.VERSION="1.0.0",a.DEFAULTS={message:"",status:"",opacity:.85,timeout:5e3,group:null,pos:"top-center",onClose:function(){}},a.prototype.show=function(){if(!this.$el.is(":visible")){var t=this;e[this.options.pos].show().prepend(this.$el);var i=parseInt(this.$el.css("margin-bottom"),10);return this.$el.css({opacity:0,"margin-top":-1*this.$el.outerHeight(),"margin-bottom":0}).animate({opacity:this.options.opacity,"margin-top":0,"margin-bottom":i},function(){if(t.options.timeout){var i=function(){t.close()};t.timeout=setTimeout(i,t.options.timeout),t.$el.hover(function(){clearTimeout(t.timeout)},function(){t.timeout=setTimeout(i,t.options.timeout)})}}),this}},a.prototype.close=function(t){var i=this,n=function(){i.$el.remove(),e[i.options.pos].children().length||e[i.options.pos].hide(),i.options.onClose.apply(i,[]),i.$el.trigger("close.ui.notify",[i]),delete o[i.uuid]};this.timeout&&clearTimeout(this.timeout),t?n():this.$el.animate({opacity:0,"margin-top":-1*this.$el.outerHeight(),"margin-bottom":0},function(){n()})},a.prototype.content=function(t){var i=this.$el.find(">div");return t?(i.html(t),this):i.html()},a.prototype.status=function(t){return t?(this.$el.removeClass("nofity-message-"+this.currentStatus).addClass("notify-message-"+t),this.currentStatus=t,this):this.currentStatus},t.notify=n,t.notify.closeAll=s,t.fn.notify=i,t.fn.notify.Constructor=a}(jQuery),+function(t){"use strict";function i(i){var e=arguments;return t(this).each(function(){var o=t(this),s=o.data("ui.pagination");s||o.data("ui.pagination",s=new n(o,t.extend({},o.data(),i))),"string"==typeof i&&s[i].apply(s,[].slice.call(e,1))})}var e="active",o='<p class="pull-left fs-12 lh-26">共{$pages}页，{$items}条记录，每页显示{$itemsOnPage}条。</p>',n=function(i,e){this.$el=t(i),this._init(e)};n.VERSION="1.0.0",n.DEFAULTS={items:1,itemsOnPage:1,pages:0,displayedPages:8,edges:1,currentPage:0,pageStr:{show:!1,template:""},lblPrev:"上一页",lblNext:"下一页",onSelectPage:function(){}},n.prototype._init=function(i,e){var o=this;this._setOption(i),o.itemsOnPage=this.options.itemsOnPage,o.items=this.options.items,o.current=this.options.currentPage,o.pages=o.options.pages?o.options.pages:Math.ceil(o.items/this.itemsOnPage)?Math.ceil(o.items/o.itemsOnPage):1,o.currentPage=o.options.currentPage-1,o.halfDisplayed=o.options.displayedPages/2,o._render(),!e&&o.$el.on("click","a[data-page]",function(i){i.preventDefault(),o.selectPage(t(this).data("page"))})},n.prototype.init=function(t){this._init(t,!0)},n.prototype._setOption=function(i){this.options=t.extend({},n.DEFAULTS,i)},n.prototype.selectPage=function(t,i){this.currentPage=t-1,this.current=t,this.render(i),this.options.onSelectPage(t,this),this.$el.trigger("select.ui.pagination",[t,this])},n.prototype._render=function(){var t,i=this.options,e=this._getInterval();if(this.$el.empty(),!(this.pages<=1)){if(i.lblPrev&&this.currentPage-1>=0&&this._append(this.currentPage-1,{text:i.lblPrev},!0),e.start>0&&i.edges>0){var o=Math.min(i.edges,e.start);for(t=0;o>t;t++)this._append(t);i.edges<e.start&&e.start-i.edges!=1?this.$el.append("<li><span>...</span></li>"):e.start-i.edges==1&&this._append(i.edges)}for(t=e.start;t<e.end;t++)this._append(t);if(e.end<this.pages&&i.edges>0){this.pages-i.edges>e.end&&this.pages-i.edges-e.end!=1?this.$el.append("<li><span>...</span></li>"):this.pages-i.edges-e.end==1&&this._append(e.end++);var n=Math.max(this.pages-i.edges,e.end);for(t=n;t<this.pages;t++)this._append(t)}i.lblNext&&this.currentPage<this.pages-1&&this._append(this.currentPage+1,{text:i.lblNext},!0),this.renderPageStr()}},n.prototype.renderPageStr=function(){if(this.options.pageStr&&this.options.pageStr.show){var i=this,e=i.$el.prevAll(),n=this.options.pageStr.template||o;n=n.replace(/{\$(\w*)}/gi,function(t,e,o){return i[e]?i[e]:0}),e.length&&e.remove(),i.$el.before(t(n))}},n.prototype.render=function(t){this.pages=t?t:this.pages,this._render()},n.prototype._getInterval=function(){return{start:Math.ceil(this.currentPage>this.halfDisplayed?Math.max(Math.min(this.currentPage-this.halfDisplayed,this.pages-this.options.displayedPages),0):0),end:Math.ceil(this.currentPage>this.halfDisplayed?Math.min(this.currentPage+this.halfDisplayed,this.pages):Math.min(this.options.displayedPages,this.pages))}},n.prototype._append=function(i,o,n){var s,a,r=this;i=0>i?0:i<this.pages?i:this.pages-1,a=t.extend({text:i+1},o),s=i==this.currentPage?"<li "+(n?"":'class="'+e+'"')+'><a href="javascript:void(0);">'+a.text+"</a></li>":'<li><a href="#page-'+(i+1)+'" data-page="'+(i+1)+'">'+a.text+"</a></li>",r.$el.append(s)},t.fn.pagination=i,t.fn.pagination.Constructor=n,t(document).ready(function(){t("[ui-pagination],.pagination").pagination()})}(jQuery),+function(t){"use strict";function i(){return t(this).each(function(){var i=t(this),e=i.data("ui.placeholder");e||i.data("ui.placeholder",e=new s(this))})}var e="input[placeholder]",o=document.createElement("input"),n="placeholder"in o,s=function(i){var e=this;e.$el=t(i),this.init()};s.VERSION="1.0.0",s.prototype.init=function(){if(!n){var i=this;if(this.$placeholder=i.$el.data("placeholder"),!n&&!this.$placeholder){var e=i.$el.attr("placeholder");i.$placeholder=t('<label class="form-placeholder" />').html(e),i.$el.data("placeholder",i.$placeholder).before(i.$placeholder)}i.$el.on("focus",t.proxy(this.focus,this)),i.$el.on("blur",t.proxy(this.blur,this)),i.$placeholder.on("click",t.proxy(this.focus,this))}},s.prototype.focus=function(){this.$placeholder.hide()},s.prototype.blur=function(){this.$placeholder[""===t.trim(this.$el.val())?"show":"hide"]()},t.fn.placeholder=i,t.fn.placeholder.Constructor=s,t(document).ready(function(){t(e).placeholder()})}(jQuery),+function(t){"use strict";function i(i){return function(){var e=t.Event("done.ui.smoothscroll",{relatedTarget:i});i.trigger(e)}}function e(e,o,s){s=t.extend({},n.DEFAULTS,s);var a=o.offset().top-s.offset,r=t(document).height(),l=t(window).height();a+l>r&&(a=r-l),t("html,body").stop().animate({scrollTop:a},s.duration,s.transition).promise().done([s.complete,i(e)])}function o(i){return t(this).each(function(){var e=t(this),o=e.data("ui.smoothScroll");o?e.trigger("click.ui.smoothScroll"):e.data("ui.smoothScroll",new n(this,t.extend({},e.data(),i)))})}t.easing.easeOutExpo||(t.easing.easeOutExpo=function(t,i,e,o,n){return i==n?e+o:o*(-Math.pow(2,-10*i/n)+1)+e});var n=function(i,e){this.$el=t(i),this.options=e,this.init()};n.VERSION="1.0.0",n.DEFAULTS={duration:500,transition:"easeOutExpo",offset:0,complete:t.noop},n.prototype.init=function(){this.$el.on("click.ui.smoothScroll",this.scroll(this.$el,this.options))},n.prototype.scroll=function(i,o){return function(n){n.preventDefault(),e(i,t(t(this.hash).length?this.hash:"body"),o)}},t.fn.smoothScroll=o,t.fn.smoothScroll.Constructor=n,t(document).ready(function(){t('[data-toggle="smooth-scroll"]').smoothScroll()})}(jQuery),+function(t){"use strict";function i(i){return t(this).each(function(){var e=t(this),n=e.data("ui.switcher");n||e.data("ui.switcher",n=new o(this,i)),"string"==typeof i&&n[i]()})}var e='[data-toggle="switcher"]',o=function(i,e){var n=this;this.$el=t(i),this.option=t.extend({},o.DEFAULTS,e,this.$el.data()),this.$el.on("click.ui.switcher",this.option.item,function(i){i.stopPropagation(),i.preventDefault(),n.select(t(this))})};o.VERSION="1.0.0",o.DEFAULTS={item:"li",active:"active",except:!1,keep:!1},o.prototype.select=function(i){var e=this.option,o=t.Event("select.ui.switcher",{relatedTarget:i});e.keep&&i.hasClass(e.active)||(i.toggleClass(e.active).trigger(o),e.except||i.siblings(e.item).removeClass(e.active))},t.fn.switcher=i,t.fn.switcher.Constructor=o,t(document).ready(function(){t(e).switcher()})}(jQuery),+function(t){"use strict";function i(i){return t(this).each(function(){var e=t(this),n=e.data("ui.tab");n||e.data("ui.tab",n=new o(this)),"string"==typeof i&&n[i]&&n[i]()})}var e='[data-toggle="tab"],.tabs-btn',o=function(i){this.$el=t(i)};o.VERSION="1.0.0",o.TRANSITION_DURATION=150,o.prototype.show=function(){var i=this.$el,e=i.closest(".tabs"),o=i.data("target");if(o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!i.hasClass("active")){var n=e.find(".active a"),s=t.Event("hide.ui.tab",{relatedTarget:i[0]}),a=t.Event("show.ui.tab",{relatedTarget:n[0]});if(n.trigger(s),i.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(i.closest("li"),e),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.ui.tab",relatedTarget:i[0]}),i.trigger({type:"shown.ui.tab",relatedTarget:n[0]})})}}},o.prototype.activate=function(i,n,s){function a(){r.removeClass("active").find(e).attr("aria-expanded",!1),i.addClass("active").find(e).attr("aria-expanded",!0),l?(i[0].offsetWidth,i.addClass("in")):i.removeClass("fade"),s&&s()}var r=n.find("> .active"),l=s&&t.support.transition&&(r.length&&r.hasClass("fade")||!!n.find("> .fade").length);r.length&&l?r.one("uiTransitionEnd",a).emulateTransitionEnd(o.TRANSITION_DURATION):a(),r.removeClass("in")},t.fn.tab=i,t.fn.tab.Constructor=o;var n=function(e){t(e.target).hasClass("tab-disabled")||e.preventDefault(),i.call(t(this),"show")};t(function(){t(document).on("click.ui.tab",e,n)})}(jQuery),+function(t){"use strict";function i(i){return t(this).each(function(){var e=t(this),n=e.data("ui.tooltips");n||e.data("ui.tooltips",n=new o(this,i)),"string"==typeof i&&n[i]()})}var e='[data-toggle="tooltips"]',o=function(i,e){this.$el=t(i),this.options=t.extend({},o.DEFAULTS,this.$el.data(),e&&"object"==typeof e),this.$tooltip=null,this.content="",this.tooltipdelay=null,this.checkdelay=null,this.init()};o.VERSION="1.0.0",o.TRANSITION_DURATION=150,o.DEFAULTS={offset:9,pos:"top",animation:!0,delay:0,cls:"",active:"active",content:function(t,i){return i=t.attr("title"),i&&t.data("cached-title",i).removeAttr("title"),t.data("cached-title")}},o.prototype.init=function(){var i=this;i.$tooltip||(i.$tooltip=t('<div class="tooltips"><div class="tooltips-inner"></div><span class="tips-arrow-border"></span><span class="tips-arrow"></span></div>').appendTo("body")),i.$el.on({focus:function(){i.show()},blur:function(){i.hide()},mouseenter:function(){i.show()},mouseleave:function(){i.hide()}})},o.prototype.show=function(){if(this.content="function"==typeof this.options.content?this.options.content(this.$el):this.options.content,this.tooltipdelay&&clearTimeout(this.tooltipdelay),this.checkdelay&&clearTimeout(this.checkdelay),this.content.length){this.$tooltip.stop().css({top:-2e3,visibility:"hidden"}).removeClass(this.options.active).show(),this.$tooltip.find(".tooltips-inner").html(this.content);var i=this,e=t.extend({},this.$el.offset(),{width:this.$el[0].offsetWidth,height:this.$el[0].offsetHeight}),o=this.$tooltip[0].offsetWidth,n=this.$tooltip[0].offsetHeight,s="function"==typeof this.options.offset?this.options.offset.call(this.$el):this.options.offset,a="function"==typeof this.options.pos?this.options.pos.call(this.$el):this.options.pos,r=a.split("-"),l={display:"none",visibility:"visible",top:e.top+e.height+n,left:e.left},h={bottom:{top:e.top+e.height+s,left:e.left+e.width/2-o/2},top:{top:e.top-n-s,left:e.left+e.width/2-o/2},left:{top:e.top+e.height/2-n/2,left:e.left-o-s},right:{top:e.top+e.height/2-n/2,left:e.left+e.width+s}};t.extend(l,h[r[0]]),2==r.length&&(l.left="left"==r[1]?e.left:e.left+e.width-o);var c=this.checkBoundary(l.left,l.top,o,n);if(c){switch(c){case"x":a=2==r.length?r[0]+"-"+(l.left<0?"left":"right"):l.left<0?"right":"left";break;case"y":a=2==r.length?(l.top<0?"bottom":"top")+"-"+r[1]:l.top<0?"bottom":"top";break;case"xy":a=2==r.length?(l.top<0?"bottom":"top")+"-"+(l.left<0?"left":"right"):l.left<0?"right":"left"}r=a.split("-"),t.extend(l,h[r[0]]),2==r.length&&(l.left="left"==r[1]?e.left:e.left+e.width-o)}l.left-=t("body").position().left,this.tooltipdelay=setTimeout(function(){i.$tooltip.css(l).attr("class",["tooltips","tooltips-"+a,i.options.cls].join(" ")),i.options.animation?i.$tooltip.css({opacity:0,display:"block"}).addClass(i.options.active).animate({opacity:1},parseInt(i.options.animation,10)||400):i.$tooltip.show().addClass(i.options.active),i.tooltipdelay=!1,i.checkdelay=setInterval(function(){i.$el.is(":visible")||i.hide()},150)},parseInt(this.options.delay,10)||0)}},o.prototype.hide=function(){if(!this.$el.is("input")||this.$el[0]!==document.activeElement)if(this.tooltipdelay&&clearTimeout(this.tooltipdelay),this.checkdelay&&clearTimeout(this.checkdelay),this.$tooltip.stop(),this.options.animation){var t=this;this.$tooltip.fadeOut(parseInt(this.options.animation,10)||400,function(){t.$tooltip.removeClass(t.options.active)})}else this.$tooltip.hide().removeClass(this.options.active)},o.prototype.checkBoundary=function(i,e,o,n){var s="";return(0>i||i-t(document).scrollLeft()+o>t(window).width())&&(s+="x"),(0>e||e-t(document).scrollTop()+n>t(window).height())&&(s+="y"),s},t.fn.tooltips=i,t.fn.tooltips.Constructor=o;var n=function(){t(this).tooltips("show")};t(function(){t(document).on("mouseenter.tooltip.ui focus tooltip.ui",e,n)})}(jQuery),+function(t){"use strict";function i(){var t=document.createElement("ui"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in i)if(void 0!==t.style[e])return{end:i[e]};return!1}t.fn.emulateTransitionEnd=function(i){var e=!1,o=this;t(this).one("uiTransitionEnd",function(){e=!0});var n=function(){e||t(o).trigger(t.support.transition.end)};return setTimeout(n,i),this},t(function(){t.support.transition=i(),t.support.transition&&(t.event.special.uiTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(i){return t(i.target).is(this)?i.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);