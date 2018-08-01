/*************************************

Template Name: Zdex Multipurpose Business and Agency Template
Author: while_coder
Version: 1.0
Design and Developed by: while_coder

****************************************/

(function($) {
	"use strict";


    //========================
    // fixed Header
    //========================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
          $("header").addClass('fixedHeader');
          if($("header").hasClass("fixedHeader")) {
            $(".mean-container .mean-bar").css({"position": "fixed", "z-index": "99999999", "top": "8px"});
            $(".body-header-3 .standard-logo").css("display", "none");
            $(".body-header-3 .sticky-logo").css("display", "block");
          }
        } else {
          $("header").removeClass('fixedHeader');
          $(".mean-container .mean-bar").css({"position": "absolute", "z-index": "400", "top": "25px"});
          $(".body-header-3 .standard-logo").css("display", "block");
          $(".body-header-3 .sticky-logo").css("display", "none");      
        }
    });

    if ($(window).scrollTop() > 40) {
      $("header").addClass('fixedHeader');
      if($("header").hasClass("fixedHeader")) {
        $(".mean-container .mean-bar").css({"position": "fixed", "z-index": "99999999", "top": "8px"});
        $(".body-header-3 .standard-logo").css("display", "none");
        $(".body-header-3 .sticky-logo").css("display", "block");     
      }      
    } else {
      $("header").removeClass('fixedHeader');
      $(".mean-container .mean-bar").css({"position": "absolute", "z-index": "400", "top": "25px"});
      $(".body-header-3 .standard-logo").css("display", "block");
      $(".body-header-3 .sticky-logo").css("display", "none");        
    }

    //========================
    // BACK TO TOP
    //======================== 
    $(document).ready(function() {
      if ($('.back-to-top').length) {
        var scrollTrigger = 100, // px
            ScrollToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        ScrollToTop();
        $(window).on('scroll', function () {
            ScrollToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 900);
        });
      }
    });
    //========================
    // Triangle Sections
    //========================    

    $(window).on('resize', function () {
      $('section').each(function () {
        if ( $(this).find(".sec-triangle").length > 0 ) {
          var wWidth = $(window).width();
          var splitWidth = parseInt(wWidth) / 2 + 1;
          $(".sec-triangle").css("border-left-width", splitWidth);
        }
      });
    });

    $('section').each(function () {
      if ( $(this).find(".sec-triangle").length ) {
        var wWidth = $(window).width();
        var splitWidth = parseInt(wWidth) / 2 + 1;
        $(".sec-triangle").css("border-left-width", splitWidth);
      }
    });


    /*=============================
                Search Box 
    ==============================*/
    if( $(".search-area").length > 0 ) {
      var searchContainer = ".search-area";
      var searchBar = ".z-search-bar";
      $("#z-extra-list .fa.fa-search").on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 900);
        $(searchContainer).addClass("search-area-yes search-fadeIn");
        $(searchBar).addClass("search-animated");
      });
      $(".search-close i").on('click', function(e) {
        e.preventDefault();
        $(searchContainer).removeClass("search-area-yes search-fadeIn");
        $(searchBar).removeClass("search-animated");
      });
    }

    /*=============================
                DD Slick
    ==============================*/
    if($("#z-lang-list").length > 0) { 
      $('#z-lang-list').ddslick({
        onSelected: function(selectedData){}   
      });    
    }  

    //==========================
    // Slider
    //==========================
    if($("#slider-sections").length > 0){ 
      $(".carousel-single-slide").owlCarousel({
        loop:true,
        center: true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }   
      });      
    }  

    /*=============================
                PRELOADER JS
    ==============================*/

    $(window).on('load', function(){
      /*======== Preloder ===========*/
      $("#pree-wrap").delay(200).fadeOut();
    });


   /*=============================
              LIGHTBOX POPUP
    ==============================*/
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });


  /*=========================================
              jQuery mixItUp
  =======================================*/  
  if($(".project-wrapper").length > 0){   
    $('.project-wrapper').mixItUp();
  }

	/*------------------------------------------*/
	/*           /* 02. Fixed Search /*
	/*------------------------------------------*/

  $(document).ready(function() {
    if ($('.fixedHeader #z-extra-list .fa.fa-search').length > 0) {
      $('.fixedHeader #z-extra-list .fa.fa-search').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
            scrollTop: 0
          }, 900);
      });
    }
  });

  /*=============================
          MOBILE MENU
  ==============================*/
  if($('nav.header-nav').length > 0 ) { 
    var logoText = $("#main-header .logo").html();
    $('nav.header-nav').meanmenu({
        siteLogo: logoText
    });
  }

  /*=============================
          WOW js
  ==============================*/
  new WOW({
      mobile: false
  }).init();

	/*------------------------------------------*/
	/*           /* Contact Submit  /*
	/*------------------------------------------*/
  if ($("#contact-form").length > 0)
  {
    $("#contact-form").validate({
        ignore: ":hidden",
        rules: {
           name: {
              required: true,
           },
           email: {
              required: true
           },
           message: {
              required: true,
           }
        },
        submitHandler: function (form) {
           $("#contact-btn").html('Sending... <i class="fa fa-paper-plane"></i>');
           $.ajax({
                type: "POST",
                url: "php/contact-send.php",
                data: $("#contact-form").serialize(),
                success: function () {
                  $("#contact-btn").html('Success <i class="fa fa-paper-plane"></i>');
                  $("#contact-form")[0].reset();
              }
          });
          return false; // required to block normal submit since you used ajax
        }

     });
  }  


  //========================
  // Our Skill
  //======================== 
  var z$ = jQuery;
  z$.noConflict();
  setTimeout(function(){
    z$('.z-progress-bar-s1').waypoint(function() {
      var zClass = ".zp-canvas";
      var x = 260;
      var y = 200;
      var r = 194;
      var linewidth = 15;
      var set_percentage = z$(this).children(zClass).data('percentage-value');
      var bar_color = z$(this).children(zClass).data('bar-color');
      var alt_color = z$(this).children(zClass).data('bar-alt-color');

      var c = z$(this).children(zClass).get(0);
      var id =z$(this).attr('id');
      var status = z$('#'+id +'.z-progress-status');
      var loaded = false;

      window.onload = function() {
        loaded = true;
      }

      var rotation = 0;
      function setcanvas() {
        var ctx = c.getContext("2d");
        ctx.translate(x,y);
        ctx.rotate((Math.PI/180)*(-rotation));
        ctx.translate(-x,-y);
        ctx.clearRect(0,0,c.width,c.height);
        ctx.beginPath();
        ctx.lineWidth = 170;     
      }
      function getPoint(c1,c2,radius,angle){
        return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
      }    

      function setPercent(uplimit) {
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.translate(x,y);
        rotation=340;
        ctx.rotate((Math.PI/180)*rotation);
        ctx.translate(-x,-y);
        ctx.lineWidth = linewidth;//40
        var my_gradient=ctx.createLinearGradient(-0,0,0,520);
        my_gradient.addColorStop(0, bar_color);
        my_gradient.addColorStop(1, alt_color);
        ctx.strokeStyle=my_gradient;
        ctx.arc(x,y,r,(Math.PI/180)*(uplimit),0);
        ctx.globalAlpha=1;
        ctx.stroke();
      }

      function callcanvas(degree) {
        setcanvas();
        setPercent(360-degree);
      }
      var degree = parseInt((set_percentage*360)/100);
      var start = 0;
      var it = window.setInterval(function(){
        callcanvas(start);
        start++;
        if(start == degree){start = degree;window.clearInterval(it);}
        if(loaded) status.html( parseInt((start*100)/360)+'%');
      },1);

      z$(this).children('.zp-canvas').removeClass('zp-canvas');

      // Skill counter
      z$('.z-progress-status').each(function() {
        var countS = z$(this),
        countNumber = countS.find('.z-number-count');
        countNumber.countTo({
          onComplete: function () {
          }
        });
      });

    }, {offset: '85%' });
  }, 300);
	// =========================
	// Testimonials
	// =========================
  if($("#testimonial-area").length > 0 ) {
  	var testimonial = $("#testimonial-area");
  	testimonial.owlCarousel({
  	  autoplay : true,
  	  nav:true,
  	  dots: true,
  	  loop: true,
  	  items: 1,
      navText: '',
  	});
  }  

  // =========================
  // Blog Slider
  // =========================
 // if($(".blog-slider").length > 0 ) {
 //   var blogSlider = $(".blog-slider");
 //   blogSlider.owlCarousel({
 //     nav:false,
 //     dots: true,
 //     loop: true,
 //     margin: 15,
 //     items: 3,
 //     autoplay:true,
 //     navText: '',
 //     responsive:{
 //       0:{
 //         items:1
 //       },
 //       575: {
 //         items: 2
 //       },
 //       767:{
 //         items:1
 //       },
 //       992:{
 //         items:3
 //       }
 //     } 
 //   });
 // }  

})(jQuery);

