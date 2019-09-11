$(function () {
  // get the current year for the copyright
  $('#year').text(new Date().getFullYear())
  
  // configure slider
  $('.carousel').carousel({
    interval: 5000,
    puase: 'hover'
  })

  // auto play modal video
  $(".video").click(function () {
 
    let theModal = $(this).data("target") // #videoModal
    let videoSRC = $(this).attr("data-video")
    let videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1"

    $(theModal + ' iframe').attr('src', videoSRCauto)
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC)
    })
  })

  // light box init
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault()
    $(this).ekkoLightbox()
  })

  // test monial slide
  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    sliderToScroll1: 1
  })
})
