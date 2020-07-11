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
}

clickToScroll();
