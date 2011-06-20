(function($) {
    jQuery.slides = {
        t: 0,
        time: 0,
        ease: ''
    };

    $.fn.slider = function(options) {

        var defaults = {
            width: 250,
            height: 100,
            time: 50,
            ease: 'easeOutBounce',
            vetor: {
                content: 'abc',
                margin: 0
            }
        };
        if (options) {
            options.vetor = $.extend(defaults.vetor, options.vetor);
        }
        var options = $.extend(defaults, options);

        options.time = options.time + 1000;

        $.slides.ease = options.ease;
        $.slides.time = options.time;

        return this.each(function() {
            var o = options;

            var slides = $(this).find('.slide').size();
            var widthMax = o.width * slides;

            $(this).append(createPaginator(slides)).find('.slide').wrapAll('<div class="window" />').wrapAll('<div class="slide_reel" />');

            $(this).find('.paging a:first').addClass('active');

            $(this).css({
                width: o.width,
                height: o.height,
                float: 'left'
            }).find('.window').css({
                width: o.width,
                height: o.height,
                overflow: 'hidden'
            }).find('.slide_reel').css({
                height: o.height,
                width: widthMax
            }).find('.slide').css({
                width: o.width,
                height: o.height,
                float: 'left'
            });

            $(this).bind({
                mouseenter: function() {
                    $("#block_featured").stopAutoPlay();
                },
                mouseleave: function() {
                    $("#block_featured").startAutoPlay();
                }
            }).find('.paging a').bind({
                click: function() {
                    $(this).rotate();
                    clearTimeout($.slides.t);
                    return false;
                }
            });

            $(this).startAutoPlay();

        });
    };

    createPaginator = function(size) {
        var text = '<div class="paging">';
        for (i = 1; i <= size; i++) {
            text += '<a href="#" rel="' + i + '">' + i + '</a>';
        }
        text += '</div>';
        return text;
    };

    $.fn.rotate = function() {
        return this.each(function() {
            var i = parseInt($(this).text()) - 1;
            var slider = $('.slide').parent().parent().parent();
            slider.find('.slide_reel').stop().animate({
                left: $('.window').width() * -i
            },
            1000, $.slides.ease);
            slider.find('.paging a').removeClass('active');
            $(this).addClass('active');
            $.slides.t = setTimeout('$("#block_featured").prox()', $.slides.time);
        });
    };

    $.fn.prox = function() {
        return this.each(function() {
            var index = $('.paging a.active').attr('rel');
            var slider = $('.slide').parent().parent().parent();

            if (slider.find('.paging a.active').next().size() == 0) {
                slider.find('.paging a:first').rotate();
            } else {
                slider.find('.paging a.active').next().rotate();
            }
        });
    };

    $.fn.stopAutoPlay = function() {
        return this.each(function() {
            //alert('stopAutoPlay: ' + $(this).attr('id'));
            clearTimeout($.slides.t);
        });
    };

    $.fn.startAutoPlay = function(i) {
        return this.each(function() {
            $.slides.t = setTimeout('$("#block_featured").prox()', $.slides.time);
        });
    };

})(jQuery);

showPopUp = function() {
    var position = $(this).position();
    var popup = $(this).parent().find('.popup');
    var paddingTop = parseInt(popup.css("padding-top")) + parseInt(popup.css("border-top-width")) + 10;
    var paddingLeft = parseInt(popup.css("padding-left")) + parseInt(popup.css("border-left-width"));
    var popupWidth = popup.parent().width();
    popup.css({
        "position": "absolute",
        "top": position.top - paddingTop,
        "left": position.left - paddingLeft,
    });
		popup.width(popupWidth);
		
    popup.fadeIn("fast");

    popup.bind('mouseleave',
    function() {
        $(this).fadeOut("slow");
    });

};

$("#back_top").hide();

$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > ($('#content_area').position().top + $('#content_area').height() - $(window).height()) ) {
          $('#back_top').fadeIn();
      } else {
          $('#back_top').fadeOut();
      }
  });

  $('#back_top').click(function() {
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
});