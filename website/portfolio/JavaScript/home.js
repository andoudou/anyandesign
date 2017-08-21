"use strict";

//navigation transform when scrolling
var scroll = function() {
    if ($("body").scrollTop() > 0.1 * $(window).height()) {
        $('#navibar').css("position", "fixed");
        $('#navibar').css("background-color", "rgba(255,255,255,0.95)");
        $('#navibar').css("box-shadow", "0px 0px 1px rgba(0,0,0,0.2)");
        $('#navibar').css("height", "48px");
        $('#bar').css("padding-top", "0");
        /*$('.bar').css("width","80%");*/
        $('.menu').css("color", "#222");
        $('#bar').css("letter-spacing", "1px");
        $('#bar').css("width", "96%");
        $('#logo').css("background", "url('http://www.anyandesign.cn/portfolio/images/icon/logo2.svg') no-repeat center");
        $('#logo').css("background-size", "100%");
        $('#godownbtn').css("opacity", "0");
        $('.headline').css("opacity", "0");
        $('.headline').css("top", "50vmin");
        $('.baudelaire').css("opacity", "0");
        $('.baudelaire').css("margin-top", "60vh");
    } else {
        $('#navibar').css("position", "absolute");
        $('#navibar').css("background", "none");
        $('#navibar').css("box-shadow", "0px 0px 1px rgba(0,0,0,0)");
        $('#navibar').css("height", "160px");
        $('#bar').css("padding-top", "110px");
        /*$('.bar').css("width","70%");*/
        $('.menu').css("color", "#222");
        $('#bar').css("letter-spacing", "2px");
        $('#bar').css("width", "80%");
        $('#logo').css("background", "url('http://www.anyandesign.cn/portfolio/images/icon/logo1.svg') no-repeat center");
        $('#logo').css("background-size", "100%");
        $('#godownbtn').css("opacity", "1");
        $('.headline').css("opacity", "1");
        $('.headline').css("top", "42vmin");
        $('.baudelaire').css("opacity", "1");
        $('.baudelaire').css("margin-top", "45vh");
    }
};

// rotator
var rotate = function(array, current, duration) {
    var next = current + 1;
    if (next >= array.length) {
        next = 0;
    }
    $(array[current]).fadeToggle({
        duration: 0 * duration,
        start: function() {
            $(array[next]).fadeToggle({
                duration: 2 * duration,
                complete: function() {
                    rotate(array, next, duration);
                }
            });
        }
    });
};

// update copyright for current year
var writeCopyrightYear = function() {
    $("div#rights span#year").text(new Date().getFullYear());
};

$(document).ready(function() {
    // 滚动到指定位置
    // Bind Events
    // language=JQuery-CSS
    $('.scroll_top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
    $('.scroll_projects').click(function() {
        $('html,body').animate({ scrollTop: $('.container').offset().top }, 700);
    });

    // scroll event
    $(window).scroll(function() {
        scroll();
    });

    writeCopyrightYear();
    scroll();
    rotate([$("#s2"), $("#s3"), $("#s4")], 0, 2000);

    // 延时加载图片
    /*var $img = $('img');
    $img.hide().each(function(index) {
        $(this).delay(800 * index).fadeToggle(700);
    });*/
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: true,
        anchors: ['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'top',
        navigationTooltips: ['', ''],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 500,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: true,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: null,
        scrollOverflowOptions: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });
});