/*! * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(arguments.length>1&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});


/*************************************

Template Name: Zdex Multipurpose Business and Agency Template
Author: while_coder
Version: 1.0
Design and Developed by: while_coder

****************************************/
jQuery(document).ready(function($) {

/*------------------------------------
  Color Plate
--------------------------------------*/
style_switcher = $('.color-customizer'),
panelWidth = style_switcher.outerWidth(true);
$('.color-customizer .opener').on("click", function(){
	var $this = $(this);
	if ($(".color-customizer.closed").length>0) {
		style_switcher.animate({"right" : "0px"});
		$(".color-customizer.closed").removeClass("closed");
		$(".color-customizer").addClass("opened");
	} else {
		$(".color-customizer.opened").removeClass("opened");
		$(".color-customizer").addClass("closed");
		style_switcher.animate({"right" : '-' + panelWidth});
	}
	return false;
});


/*------------------------------------
  Style change
--------------------------------------*/
var link = $('link[data-style="styles"]'),
link_no_cookie = $('link[data-style="styles-no-cookie"]'); 


/*------------------------------------
  Color Change
--------------------------------------*/
$('.color-customizer .colorChange li').on('click',function(){
	if(link.length > 0 ) { 
		var $this = $(this),
			store_style = $this.data('style');
		$(".color-customizer .colorChange .selected").removeClass("selected");
		$this.addClass("selected");
		link.attr('href', 'css/color/' + store_style + '.css');
		if ($("body").hasClass("body-header-3")) {
			$('.logo-zone .standard-logo').attr("src", 'images/' + store_style + '-f.png');
			$('.logo-zone .sticky-logo').attr("src", 'images/' + store_style + '-logo.png');
		} else {
			$(".logo .logo-zone img").attr("src", 'images/' + store_style + '-logo.png');
		}	
		$(".footer-content .footer-logo").attr("src", 'images/' + store_style + '-f.png');

		if ($(".color-customizer").length > 0 ) {
			if ($(".z-progress-bar-s1").length > 0 ) {
				location.reload();
			}
		}	
	}	
	$.cookie('store_style', store_style, 30);
});

if (typeof $.cookie('store_style') === 'undefined'){
 	$(".color-customizer li.theme-default").addClass("selected");
 	link.attr('href', '#');
	if ($("body").hasClass("body-header-3")) {
		$('.logo-zone .standard-logo').attr("src", 'images/footer-logo.png');
		$('.logo-zone .sticky-logo').attr("src", 'images/logo.png');
	} else {
		$(".logo .logo-zone img").attr("src", 'images/logo.png');
	}	
	$(".footer-content .footer-logo").attr("src", 'images/footer-logo.png');
} else {
 	var cookieValue = $.cookie('store_style');
 	$(".color-customizer li."+cookieValue).addClass("selected");
 	link.attr('href', 'css/color/' + cookieValue + '.css');
	if ($("body").hasClass("body-header-3")) {
		$('.logo-zone .standard-logo').attr("src", 'images/' + cookieValue + '-f.png');
		$('.logo-zone .sticky-logo').attr("src", 'images/' + cookieValue + '-logo.png');
	} else {
		$(".logo .logo-zone img").attr("src", 'images/' + cookieValue + '-logo.png');
	}	
	if ($(".z-progress-bar-s1").length > 0 ) {
		var canvasColor = $(".colorChange li." +cookieValue+".selected").attr("data-color");
		$(".z-progress-bar-s1 canvas").each(function() {
			$(this).attr("data-bar-color", canvasColor);
			$(this).attr("data-bar-alt-color", canvasColor);
		});		
	}
	$(".footer-content .footer-logo").attr("src", 'images/' + cookieValue + '-f.png');
}

/*------------------------------------
  Reset all customize styles
--------------------------------------*/
$('.color-customizer .reset a.reset-btn').on('click',function() { 
	//Logo change
	$.cookie('store_style', 'theme-default', 30);
	var store_stylesheet = 'theme-default';
	$('.color-customizer .colorChange li.selected').removeClass("selected");
	$('.color-customizer .colorChange li[data-style="'+store_stylesheet+'"]').addClass("selected");
	link.attr('href', 'css/color/' + store_stylesheet + '.css');
	if ($("body").hasClass("body-header-3")) {
		$('.logo-zone .standard-logo').attr("src", 'images/' + store_stylesheet + '-f.png');
		$('.logo-zone .sticky-logo').attr("src", 'images/' + store_stylesheet + '-logo.png');
	} else {
		$(".logo .logo-zone img").attr("src", 'images/' + store_stylesheet + '-logo.png');
	}	
	$(".footer-content .footer-logo").attr("src", 'images/' + store_stylesheet + '-f.png');
	if ($(".color-customizer").length > 0 ) {
		if ($(".z-progress-bar-s1").length > 0 ) {
			location.reload();
		}
	}	
	$(window).trigger('resize');
	});
});