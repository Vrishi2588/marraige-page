/* eslint-disable no-var */
;(function ($) {
    'use strict'
  
    // Navbar on scrolling
    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 200) {
    //     $('.navbar').fadeIn('slow').css('display', 'flex')
    //   } else {
    //     $('.navbar').fadeOut('slow').css('display', 'flex')
    //   }
    // })
  
    // Smooth scrolling on the navbar links
    $('.navbar-nav a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault()
  
        $('html, body').animate(
          {
            scrollTop: $(this.hash).offset().top - 45,
          },
          1500,
          'easeInOutExpo'
        )
  
        if ($(this).parents('.navbar-nav').length) {
          $('.navbar-nav .active').removeClass('active')
          $(this).closest('a').addClass('active')
        }
      }
    })
  
    $(document).ready(function () {
      var full = window.location.host
      // window.location.host is subdomain.domain.com
      var parts = full.split('.')
      var subdomain = parts[0]
      var guestName = subdomain
        .split('-')
        .map(function (element) {
          return element.charAt(0).toUpperCase() + element.slice(1)
        })
        .join(' ')
      // document.getElementById('guest-name').textContent = guestName
      // document.getElementById('guest-name-main-page').textContent = guestName
  
      // sliding invite cover
      var timeleft = 5
      var downloadTimer = setInterval(function () {
        timeleft--
        var countdown = document.getElementById('countdown')
        if (countdown) {
          countdown.textContent = timeleft
        }
        if (timeleft <= 0) clearInterval(downloadTimer)
      }, 1000)
  
      setInterval(function () {
        const fade = { opacity: 0, transition: 'opacity 400ms', zIndex: -1 }
        $('#invite-cover').css(fade).slideUp()
      }, 5000)
  
      // venue map
      $('#venue-map').click(function () {
        //   $('.navigate-link').click()
        window.open(
          'https://www.google.com/maps/place/Kankaria+Bhavan/@20.9365276,74.7711324,16.1z/data=!4m6!3m5!1s0x3bdec57b50c785c1:0x27aef68d5d50367!8m2!3d20.937254!4d74.774248!16s%2Fg%2F1pyqv_pxg?authuser=0&entry=ttu'
        )
      })
  
      // Modal Video
      var $videoSrc
      $('.btn-play').click(function () {
        $videoSrc = $(this).data('src')
      })
  
      // Define the carousel settings on the window object
      window.galleryCarouselSettings = {
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 },
        },
      }
  
      // Function to initialize the carousel
      window.initGallery = function () {
        $('.gallery-carousel').owlCarousel(window.galleryCarouselSettings)
      }
  
      // Initial call to setup the carousel
      window.initGallery()
  
      $('#videoModal').on('shown.bs.modal', function (e) {
        $('#video').attr(
          'src',
          $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
        )
      })
  
      $('#videoModal').on('hide.bs.modal', function (e) {
        $('#video').attr('src', $videoSrc)
      })
    })
  
    // Scroll to Bottom
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-to-bottom').fadeOut('slow')
      } else {
        $('.scroll-to-bottom').fadeIn('slow')
      }
    })
  
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    })
    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('active')
      $(this).addClass('active')
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') })
    })
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow')
      } else {
        $('.back-to-top').fadeOut('slow')
      }
    })
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo')
      return false
    })
  
    // Gallery carousel
  })(jQuery)
  