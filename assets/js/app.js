"use strict";

function textTruncate(truncateClass){
  var descriptionTooltip = document.querySelectorAll(truncateClass);
  var maxTextLength = 180;
  for(var i = 0; i < descriptionTooltip.length; i++){
      var text = descriptionTooltip[i].textContent.trim();
      var textLength = text.length;
      if(textLength > maxTextLength){
          var truncatedText = text.substring(0, maxTextLength) + ' ...';
          descriptionTooltip[i].innerHTML = truncatedText
      }
      else{
          return text;
      }
  };
};

textTruncate('.perspectives-body');


//Function onScroll to add shadow to navbar

// $(document).ready(function(){
//     $(".header-section").load("header.html");
// });

var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
window.addEventListener("scroll", function (event) {
    // var scroll = this.scrollY;
    var header =  document.querySelector('.header');
    var scroll = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    if (scroll > 300) {
        if (!header.classList.contains('active')) {
            header.classList.add('active');
        }
    } else {
        header.classList.remove('active')
    }
});

function toggleHamberger(){
    var toggleHamberger = $('.toggleMenu');
    toggleHamberger.on('click', function(){
        $('#navbarNavDropdown').toggleClass('show');
        $(this).toggleClass('active');
    })

}

toggleHamberger();


function clickToScroll() {
    var scrollToBlog = $('.scrollToBlog');
    var scrollToContact = $('.scrollToContact');
    var scrollToAbout = $('.scrollToAbout');
    var searchForJob = $('.scrollToJobSearch');
    if(scrollToBlog){
        scrollToBlog.click(function () {
            $('html,body').animate({
                    scrollTop: $(".targeted-section-blog").offset().top - 100
                },
                'slow');
        });
    }
    if(scrollToContact){
        scrollToContact.click(function () {
            $('html,body').animate({
                    scrollTop: $(".targeted-section-contact").offset().top - 100
                },
                'slow');
        });
    }
    if(scrollToAbout){
        scrollToAbout.click(function () {
            $('html,body').animate({
                    scrollTop: $(".targeted-section-about").offset().top - 100
                },
                'slow');
        });
    }
    if(searchForJob){
        searchForJob.click(function () {
            $('html,body').animate({
                    scrollTop: $(".targeted-section-jobSearch").offset().top - 100
                },
                'slow');
        });
    }
}

clickToScroll();
