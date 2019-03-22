/*
setTimeout(function () {
    $(".element1").css("display", "inherit");
    $(".element1").typed({
        strings: ["Researcher"],
        typeSpeed: 75, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        showCursor: false,
        callback: function () {
        } // call function after typing is done
    });
    $('#home').css("background-image", 'url(images/me_dreamer.jpg)');

}, 100);

setTimeout(function () {
    $(".element2").css("display", "inherit");
    $(".element2").typed({
        strings: ["Prototyper"],
        typeSpeed: 75, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        showCursor: false,
        callback: function () {
        } // call function after typing is done
    });
    $('#home').css("background-image", 'url(images/me_dancer.jpg)');

}, 1200);

setTimeout(function () {
    $(".element3").css("display", "inherit");
    $(".element3").typed({
        strings: ["Developer"],
        typeSpeed: 75, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        showCursor: false,
        callback: function () {
        } // call function after typing is done
    });


}, 2400);

setTimeout(function () {
    $(".element4").css("display", "inherit");
    $(".element4").typed({
        strings: ["Athlete"],
        typeSpeed: 75, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        showCursor: false,
        callback: function () {
        } // call function after typing is done
    });


}, 3600);

setTimeout(function () {
    $(".element5").css("display", "inherit");
    $(".element5").typed({
        strings: ["Dancer"],
        typeSpeed: 75, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        showCursor: false,
        callback: function () {
        } // call function after typing is done
    });


}, 4800);

setTimeout(function () {
    $(".element6").css("display", "inherit");
    $(".element6").typed({
        strings: ["Dreamer"],
        typeSpeed: 75, // typing speed
        backDelay: 750, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        showCursor: false,
        callback: function () {
        } // call function after typing is done
    });


}, 6000);

/!*
setTimeout(function () {
    var height = $('.left').height();
    var width = $('.left').width();
    if (height > width) {
        height = width;
    } else {
        width = height;
    }
    var svg1 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg1.setAttributeNS(null, "width", width);
    svg1.setAttributeNS(null, "height", height);
    svg1.setAttributeNS(null, "fill", "transparent");
    svg1.setAttributeNS(null, "stroke", "aqua");
    svg1.setAttributeNS(null, "class", "shape");
    svg1.setAttributeNS(null, "id", "researcher");
    document.getElementById("mysvg").appendChild(svg1);
    var svg2 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg2.setAttributeNS(null, "width", width);
    svg2.setAttributeNS(null, "height", height);
    svg2.setAttributeNS(null, "fill", "transparent");
    svg2.setAttributeNS(null, "stroke", "aqua");
    svg2.setAttributeNS(null, "class", "shape");
    svg2.setAttributeNS(null, "id", "prototyper");
    document.getElementById("mysvg2").appendChild(svg2);
    var svg3 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg3.setAttributeNS(null, "width", width);
    svg3.setAttributeNS(null, "height", height);
    svg3.setAttributeNS(null, "fill", "transparent");
    svg3.setAttributeNS(null, "stroke", "aqua");
    svg3.setAttributeNS(null, "class", "shape");
    svg3.setAttributeNS(null, "id", "developer");
    document.getElementById("mysvg3").appendChild(svg3);
    var svg4 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg4.setAttributeNS(null, "width", width);
    svg4.setAttributeNS(null, "height", height);
    svg4.setAttributeNS(null, "fill", "transparent");
    svg4.setAttributeNS(null, "stroke", "aqua");
    svg4.setAttributeNS(null, "class", "shape");
    svg4.setAttributeNS(null, "id", "athlete");
    document.getElementById("mysvg4").appendChild(svg4);
    var svg5 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg5.setAttributeNS(null, "width", width);
    svg5.setAttributeNS(null, "height", height);
    svg5.setAttributeNS(null, "fill", "transparent");
    svg5.setAttributeNS(null, "stroke", "aqua");
    svg5.setAttributeNS(null, "class", "shape");
    svg5.setAttributeNS(null, "id", "dancer");
    document.getElementById("mysvg5").appendChild(svg5);
    var svg6 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    svg6.setAttributeNS(null, "width", width);
    svg6.setAttributeNS(null, "height", height);
    svg6.setAttributeNS(null, "fill", "transparent");
    svg6.setAttributeNS(null, "stroke", "aqua");
    svg6.setAttributeNS(null, "class", "shape");
    svg6.setAttributeNS(null, "id", "dreamer");
    document.getElementById("mysvg6").appendChild(svg6);


    console.log("height", height);
    console.log("width", width);
}, 7200);


setTimeout(function () {

    var height = $('.left').height();
    var width = $('.left').width();
    if (height > width) {
        height = width;
    } else {
        width = height;
    }

    $('#mysvg2').transition({x: -width - 30}, 500);
    $('#mysvg5').transition({x: width + 30}, 500);

    /!* $('#mysvg2').transition({y: height + 40}, 1000);
     $('#mysvg').transition({y: height + 40}, 1000);
     *!/ //  $('#two').transition({x: -width}, 1000);
    $(".element2").hide();
    $(".element5").hide();

    //  $('#five').transition({y: -height}, 1000);
    //  $('#six').transition({y: -height}, 1000);
    //   $('#one').transition({y: height}, 1000);
    //  $('#two').transition({y: height}, 1000);

    /!*$(".element6").hide();
     $(".element1").hide();
     *!/
    /!*console.log("height", height);
     console.log("width", width);*!/

    /!*$('#five').fadeOut(500);
     $('#two').fadeOut(500);
     $('#one').fadeOut(500);
     $('#six').fadeOut(500);*!/

}, 8700);

setTimeout(function () {

    var height = $('.left').height();
    var width = $('.left').width();
    if (height > width) {
        height = width;
    } else {
        width = height;
    }

    $('#mysvg2').transition({y: +height + 65}, 500);
    $('#mysvg').transition({y: height + 65}, 500);
    $('#mysvg5').transition({y: -height - 65}, 500);
    $('#mysvg6').transition({y: -height - 65}, 500);

    /!* $('#mysvg2').transition({y: height + 40}, 1000);
     $('#mysvg').transition({y: height + 40}, 1000);
     *!/ //  $('#two').transition({x: -width}, 1000);
    $(".element1").hide();
    $(".element6").hide();

    //  $('#five').transition({y: -height}, 1000);
    //  $('#six').transition({y: -height}, 1000);
    //   $('#one').transition({y: height}, 1000);
    //  $('#two').transition({y: height}, 1000);

    /!*$(".element6").hide();
     $(".element1").hide();
     *!/
    /!*console.log("height", height);
     console.log("width", width);*!/


   // $('#developer').css("box-shadow", "0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important");
     $('#three').css("box-shadow", "0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important");

    $('#mysvg').fadeOut(500);
    $('#mysvg2').fadeOut(500);
    $('#mysvg5').fadeOut(500);
    $('#mysvg6').fadeOut(500);

}, 9700);*!/
*/
