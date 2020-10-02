$("document").ready(function (){

  $(".all").click(function () {
    $(".filter-all").show("slow");
  });

  $(".dorabotka").click(function () {
    $(".filter-all").hide("slow");
    $(".filter-dorabotka").show("slow");
  });

  $(".key").click(function () {
    $(".filter-all").hide("slow");
    $(".filter-key").show("slow");
  });

});

$('body').append('<a href="#" id="go-top"><i class="fas fa-angle-double-up fa-3x"></i></a>');
    $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250")
    $(this).fadeIn("slow");
    var scrollDiv = $(this);
    $(window).scroll(function () {
    if ($(window).scrollTop() <= "250")
    $(scrollDiv).fadeOut("slow");
    else
    $(scrollDiv).fadeIn("slow");
    });
    $(this).click(function () {
    $("html, body").animate({scrollTop: 0}, "slow");
    });
    }
    $("#go-top").scrollToTop();