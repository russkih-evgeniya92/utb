function accordion(){$(".js-accordion__btn").on("click",function(){return $(this).toggleClass("open").siblings(".js-accordion").toggleClass("accordion_open").slideToggle(250),!1})}function rewriteSliderScaleItem(e,i,n){var t=e.find(".slider__scale-item"),s=Math.floor((n-i)/4),o=i;t.each(function(e){o=i+s*e,5==e&&(o=n),$(this).attr("rel",o).text(o.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(" "))})}function calc(){is_calc_now||(is_calc_now=!0,setTimeout(function(){var e=$('input[name="juridical_credit_2[month_revenue]"]').val(),i=$('input[name="juridical_credit_2[month_expenditure]"]').val(),n=$('input[name="juridical_credit_2[kmsb_p6]"]').val();e>75e5?(1e7==slider_gain_type&&(slider_gain_type=3e8,$("#slider-gain").slider("option","max",3e8),$("#slider-gain").slider("option","min",5e6),rewriteSliderScaleItem($(".js-slider-gain"),5e6,3e8)),e>3e8&&(e=3e8,$('input[name="juridical_credit_2[month_revenue]"]').val(e))):3e8==slider_gain_type&&(slider_gain_type=1e7,$("#slider-gain").slider("option","max",1e7),$("#slider-gain").slider("option","min",0),rewriteSliderScaleItem($(".js-slider-gain"),0,1e7)),i>1e7&&(i=1e7,$('input[name="juridical_credit_2[month_expenditure]"]').val(i)),n>$("#slider-time").slider("option","max")&&(n=$("#slider-time").slider("option","max"),$('input[name="juridical_credit_2[kmsb_p6]"]').val(n)),$("#slider-gain").slider("value",e),$("#slider-costs").slider("value",i),$("#slider-time").slider("value",n),$.ajax({url:$("#comcred_calc").data("calcurl"),method:"POST",data:$("form#custom_form_juridical_credit_2").serialize(),dataType:"json",success:function(e){$("#juridical_credit_2_result_limit").val(e.res_limit),$("#juridical_credit_2_result_month_pay").val(e.res_month_sum),$("#juridical_credit_2_result_prc").val(e.res_prc),$("#result_limit").text(number_format(e.res_limit,2,","," ")),$("#result_month_pay").text(number_format(e.res_month_sum,2,","," ")),$("#result_prc").text(e.res_prc),$("#credit-application-btn").is(":hidden")&&$("#credit-application-btn").show()}}),is_calc_now=!1},500))}function menuTop(){function e(){n.removeClass(t).next(i).slideUp(150),s.removeClass(o).prev(l).removeClass(c)}var i=$(".js-submenu"),n=$(".js-submenu__link"),t="menu_top__item-link_open",s=$(".js-submenu__btn"),o="submenu__btn_open",l=$(".js-submenu__list"),c="submenu__list_open";n.on("click",function(){if($(this).hasClass(t))e();else if($("."+t).length){var n=$(this);e(),setTimeout(function(){n.addClass(t).next(i).slideDown(250)},150)}else $(this).addClass(t).next(i).slideDown(250);return!1}),$(document).click(function(t){$(t.target).closest(i).length||$(t.target).closest(n).length||e()}),s.on("click",function(){$(this).toggleClass(o).prev(l).toggleClass(c)})}function menuMain(){function e(){n.find("ul").height("");var e=0;n.find("ul").filter(":visible").each(function(){var i=parseInt($(this).height());i>e&&(e=i)}),n.find("ul").filter(":visible").height(e)}function i(){n.find(t).removeClass(s),n.find(l).hide()}var n=$(".js-menu_main"),t=$(".menu_main__item-link_parent"),s="menu_main__item-link_active",o=$(".js-menu_main__btn"),l=$(".menu_main__list_children"),c=$(".js-shadow");o.on("click",function(){$(this).toggleClass("panel-btn_open"),c.fadeToggle(250),i(),window.innerWidth>=992?n.slideToggle(250).find("ul").height(""):$(this).hasClass("panel-btn_open")?($(".page").css({"overflow-y":"hidden"}),n.show(0),setTimeout(function(){n.css({right:45})},50)):($(".page").css({"overflow-y":""}),n.css({right:""}),setTimeout(function(){n.hide(0)},200))}),c.on("click",function(){o.removeClass("panel-btn_open"),i(),window.innerWidth>=992?n.slideUp(250):(n.css({right:""}).hide(),$(".page").css({"overflow-y":""}))}),n.find(t).on("click",function(){return window.innerWidth>=992?($(this).closest("ul").find(t).removeClass(s),$(this).closest("ul").find("ul").hide(),$(this).addClass(s).next("ul").show(),e()):$(this).hasClass(s)?$(this).removeClass(s).next("ul").slideUp(250):($(this).closest("ul").find(t).removeClass(s),$(this).closest("ul").find("ul").slideUp(250),$(this).addClass(s).next("ul").slideDown(250)),!1}),$(window).resize(function(){window.innerWidth>=992&&$(".js-popup_ajax:visible").length<1&&(n.css({right:""}),$(".page").css({"overflow-y":""}),setTimeout(e,50)),o.hasClass("panel-btn_open")&&window.innerWidth<992&&($(".page").css({"overflow-y":"hidden"}),n.css({right:45}).find("ul").height(""))})}function search(){var e=$(".js-search__form"),i=$(".js-shadow");e.on("click",function(){window.innerWidth>=992&&($(this).addClass("search_top__form_active"),i.fadeIn(250))}),i.on("click",function(){e.removeClass("search_top__form_active")}),$(".js_submit_search").on("click",function(){return e.submit(),!1})}function mobileViews(){function e(e){window.innerWidth<992?$(e+"_desktop").children().appendTo($(e+"_mobile")):$(e+"_mobile").children().appendTo($(e+"_desktop"))}e(".js-footer__links"),e(".js-socials"),e(".js-panel-btn"),e(".js-header__links-1"),e(".js-header__links-2"),e(".js-search"),e(".js-loginname"),e(".js-loginlinks")}function popup(){function e(){n.fadeOut(250),n.scrollTop(0),i.fadeOut(250),t.removeClass(s),$(".page").css({"overflow-y":"","padding-right":""})}var i=$(".popup"),n=$(".js-shadow"),t=$(".js-popup_city__btn"),s="info-block__btn_open",o=window.innerWidth-$(window).width();n.on("click",function(i){$(i.target).closest(".popup").length||e()});var l=$(".js-menu_main__btn");$("[class *= js-popup__btn]").on("click",function(){for(var e=$(this).attr("class").split(" "),t=0;t<e.length;t++){var s=e[t];if(s.indexOf("js-popup__btn")+1)break}var c=s.replace("js-popup__btn","");window.innerWidth<992&&l.hasClass("panel-btn_open")&&l.trigger("click"),$(".page").css({"overflow-y":"hidden","padding-right":o}),n.fadeIn(250),i.fadeOut(),$(".js-popup"+c).fadeIn(250)}),$(".js-popup__close").on("click",function(){e()}),t.on("click",function(){$(this).toggleClass(s),n.fadeToggle(250),$(".js-popup_city").slideToggle(250)})}function toggle(){function e(){var e=$(".ui-tabs-active"),i=e.position();$(".js-toggle__switch").css({left:i.left-1,width:e.outerWidth()+2})}$(".toggle").length&&e(),$(".js-toggle__item").on("click",function(){e()}),$(".js-toggle_l__switch").on("click",function(){$(this).siblings('[aria-selected="false"]').find("a").trigger("click")})}function widgets(){function e(){$(i).css({"max-height":$(n+":eq(0)").height()+$(n+":eq(1)").height()+$(n+":eq(2)").height()+45})}var i=$(".widget_services__list"),n=".widget_services__item";$(".js-widget_services__btn").on("click",function(){$(this).toggleClass("more-btn_open"),$(this).hasClass("more-btn_open")?i.css({"max-height":1e3}):e()}),$(".js-widget_courses__btn").on("click",function(){$(".widget_courses__item:eq(1)").slideToggle(150),$(this).toggleClass("more-btn_open")}),window.innerWidth<768?e():i.css({"max-height":""}),$(window).resize(function(){window.innerWidth>=768?i.css({"max-height":""}):$(".js-widget_services__btn").hasClass("more-btn_open")?i.css({"max-height":1e3}):e()})}$(document).ready(accordion);var slider_gain_type=1e7,is_calc_now=!1;$(document).ready(function(){$("#slider-gain").slider({range:"min",min:0,max:1e7,value:35e5,change:calc,slide:function(e,i){$("#gain").val(i.value)}}),$("#gain").val($("#slider-gain").slider("value")),$("#slider-costs").slider({range:"min",min:0,max:1e7,value:15e5,change:calc,slide:function(e,i){$("#costs").val(i.value)}}),$("#costs").val($("#slider-costs").slider("value")),$("#slider-time").slider({range:"min",min:0,max:60,value:15,change:calc,slide:function(e,i){$("#time").val(i.value)}}),$("#time").val($("#slider-time").slider("value"))}),$(function(){$("form#custom_form_juridical_credit_2").on("click","#juridical_credit_2_calc",calc),$("#juridical_credit_2_kmsb_p5_0, #juridical_credit_2_kmsb_p5_1, #juridical_credit_2_kmsb_p7_0, #juridical_credit_2_kmsb_p7_1").on("click",function(){var e,i=$("#time");$(".p6_sliders").hide();var n=$("input[name='juridical_credit_2[kmsb_p5]']:checked").val(),t=$("input[name='juridical_credit_2[kmsb_p7]']:checked").val();0==n&&0==t&&(e=60),0==n&&1==t&&(e=24),1==n&&(e=24),$("#slider-time").slider("option","max",e),$(".js_slider_time_scale .slider__scale-link").each(function(i){var n=parseInt(e/4);$(this).text(i*n)}),i.val()>e&&(i.val(e),$("#slider-time").slider("value",e))}),$("form#custom_form_juridical_credit_2 input").on("change keyup",calc)}),$(document).ready(function(){menuTop(),menuMain(),search()}),$(document).ready(mobileViews),$(window).resize(mobileViews),$(document).ready(function(){popup()});var Frontend_Banner_Component=function(e,i){var n=this;n.pos=0,n.periods=e,n.timeout=null,n.direction="f",n.is_mouse_over=!1;var t=(i=$(i)).find(".js-scroller__content"),s=i.find(".js-nav-btn_next"),o=i.find(".js-nav-btn_prev"),l=i.find(".js-scroller__menu");n.next=function(){if(n.pos>=n.getCount()-1)return!1;n.pos++,n.highlightMenu();var e=-100*n.pos;t.animate({left:e+"%"},500,"linear"),n.checkNavigation(),n.planScroll()},n.prev=function(){if(n.pos<=0)return!1;n.pos--,n.highlightMenu();var e=-100*n.pos;t.animate({left:e+"%"},500,"linear"),n.checkNavigation(),n.planScroll()},n.highlightMenu=function(e){var i=void 0===e?n.pos:e;l.find("a.act").removeClass("act"),l.find("a:eq("+i+")").addClass("act")},n.checkNavigation=function(){var e=1==n.getCount()||!n.is_mouse_over||0==n.pos,i=1==n.getCount()||!n.is_mouse_over||n.pos==n.getCount()-1;e?o.hide():o.show(),i?s.hide():s.show()},n.getCount=function(){return e.length},n.getDirection=function(){return 0==n.pos&&"b"==n.direction?n.direction="f":n.getCount()-1==n.pos&&"f"==n.direction&&(n.direction="b"),n.direction},n.planScroll=function(){clearTimeout(n.timeout),1!=n.getCount&&(n.timeout=setTimeout(function(){"f"==n.getDirection()?n.next():n.prev()},1e3*n.periods[n.pos]))},n.moveToSelected=function(){if($(this).hasClass("act"))return!1;var e=l.find("a").index(l.find("a.act")),i=l.find("a").index($(this)),s=i-e;n.pos=n.pos+s,n.highlightMenu(i);var o=-100*n.pos;return t.animate({left:o+"%"},500,"linear"),n.checkNavigation(),n.planScroll(),!1},n.__init__=function(){o.on("click",n.prev),s.on("click",n.next),l.find("a").on("click",n.moveToSelected),n.is_mouse_over=!0,n.checkNavigation(),n.planScroll()},n.__init__(),$(l).find("ul").bind("mousewheel",function(e,i){this.scrollLeft-=30*i,e.preventDefault()}),Modernizr.touchevents&&t.swipe({swipeLeft:function(){s.click()},swipeRight:function(){o.click()}})};$(document).ready(function(){$(".js-tabs").tabs(),toggle()}),$(window).resize(function(){setTimeout(toggle,100)}),$(document).ready(widgets);