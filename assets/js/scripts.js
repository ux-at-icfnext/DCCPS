// JavaScript Document
$(document).ready(function () {
    "use strict";
  // Sticky notransform
      var distance = $('.navbar').offset().top,
          $window = $(window);
  
      $window.scroll(function() {
          if ( $window.scrollTop() >= distance ) {
              $("body").addClass("notransform");
          } else {
              $("body").removeClass("notransform");
          }
      });
  // Smooth scroll back to top
      $('.scrollToTop').click(function(){
          $('body,html,document').animate({scrollTop:0}, 'slow');
          return false;
      });
  // Lightbox
      $('.magnify').click(function() {
          $(this).next('.modal').css({'display':'block'});
          $('body').css({ transform:'inherit'});
      });
      $('.close').click(function() {
          $(this).parent('.modal').css({'display':'none'});
          $("body").removeAttr("style").attr({transform:'inherit'});
      });
  // ************** Sort Toggle ************** 
      $('.sort-toggle > ul.nav-pills > li > a').not('active').click(function() {
          $('.sort-toggle > ul.nav-pills > li > a.active').removeClass('active');
          $(this).addClass('active');	
      });
  // ************** Dark Overlay Functions ************** 
      function open_overlay() {
          $(document.createElement('div'))
          .addClass('dark-overlay')
          .appendTo($(document.body));
      }
      function close_overlay() {
          $('.dark-overlay').remove();
      }
  // ************** Navigation ************** 
      // Dropdown on Hover or Tab
      $('ul.navbar-nav > li').children().hover(function () {
          $('ul.navbar-nav > li').removeClass('open');
              $(this).parent().addClass('open');
          }, function() {
              $('ul.navbar-nav > li').removeClass('open');
      });
      $('ul.navbar-nav > li > a').focusin(function () {
          $('ul.navbar-nav > li').removeClass('open');
          $(this).parent().addClass('open');
      });
      $('ul.dropdown-menu > li:last-child').focusout(function () {
          $('ul.navbar-nav > li').removeClass('open');
          $(this).parent().removeClass('open');
      });
      // Mobile Menu Open
      $('.navbar-toggler').click(function() {
          open_overlay();
          $('#navbar-responsive').collapse('show');
      });
      // Close Mobile Nav
      $('.nav-close').click(function() {
          $('#navbar-responsive').collapse('hide');
          close_overlay();
      });
      // Change Mobile SubNav
      $('.submenu-1-btn').click(function() {
          $('ul.landingpage-menu').animate({left: '-310px'});
          $('ul.submenu-1').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });
      $('.submenu-2-btn').click(function() {
          $('ul.landingpage-menu').animate({left: '-310px'});
          $('ul.submenu-2').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });
      $('.submenu-3-btn').click(function() {
          $('ul.landingpage-menu').animate({left: '-310px'});
          $('ul.submenu-3').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });
      $('.submenu-4-btn').click(function() {
          $('ul.landingpage-menu').animate({left: '-310px'});
          $('ul.submenu-4').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });
      $('.submenu-5-btn').click(function() {
          $('ul.landingpage-menu').animate({left: '-310px'});
          $('ul.submenu-5').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });
      $('.submenu-6-btn').click(function() {
          $('ul.landingpage-menu').animate({left: '-310px'});
          $('ul.submenu-6').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });
      $('.nav-back').click(function() {
          $('ul.submenu-1').animate({left: '-310px'});
          $('ul.submenu-2').animate({left: '-310px'});
          $('ul.submenu-3').animate({left: '-310px'});
          $('ul.submenu-4').animate({left: '-310px'});
          $('ul.submenu-5').animate({left: '-310px'});
          $('ul.submenu-6').animate({left: '-310px'});
          $('ul.landingpage-menu').animate({left: '0px'});
          $('.nav-back').fadeToggle();
      });    
  // Mobile Search Button toggle
      $('.header-search-form__toggle').click(function() {
          $('.search-overlay').addClass('open');
      });
      $('.search-overlay .btn-close').click(function() {
          $('.search-overlay').removeClass('open');
      });
  });