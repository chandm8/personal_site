$(document).ready(function() {

    var i = 0;
    var txt = 'this is my website.'; /* The text */
    var tempTxt = ''
    var removeIdx = 0;
    var done = false;

    function typeWriter() {

        if (!done) {
            document.getElementById("welcome-title-cursor").id = "welcome-title-cursor2";
        }
        var theInterval = setInterval(function() {
            if (!done) {
                $("#welcome-title").append(tempTxt.charAt(i));
            }
            else {
                $("#welcome-title").append(txt.charAt(i));
            }
            i++;
            if (i == txt.length & !done) {
                document.getElementById("welcome-title-cursor2").id = "welcome-title-cursor";
                setTimeout(typeDeleter, 750);
                setTimeout(fadeInElems, 500);
                clearInterval(theInterval); // this stops the loop
            }

            if (i == txt.length && done) {
                document.getElementById("welcome-title-cursor2").id = "welcome-title-cursor";
                clearInterval(theInterval); // this stops the loop
            }
        }, 100);
    }

    function typeDeleter() {
        document.getElementById("welcome-title-cursor").id = "welcome-title-cursor2";
        var theInterval = setInterval(function() {
            $('#welcome-title').html($('#welcome-title').html().substring(0,$('#welcome-title').html().length - 1));
            i--;
            if (i == removeIdx) {
                done = true;
                typeWriter();
                clearInterval(theInterval);
            }
        }, 100);
    }

    function fadeInElems() {
        $("#name-btn").css('display', 'none').fadeIn(1000);
        $("#food-btn").css('display', 'none').fadeIn(1000);
        $("#music-btn").css('display', 'none').fadeIn(1000);
        $("#words-btn").css('display', 'none').fadeIn(1000);
        $("#business-btn").css('display', 'none').fadeIn(1000);
    }

    function breakWelcome() {
        var array = [0,1,2,3,5,6,8,9,11,12,13,14,15,16,17];
        var randIdx = Math.floor(Math.random() * array.length);
        removeIdx = array[randIdx];

        var remChar = txt.charAt(removeIdx);
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        var newChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));;
        while (newChar == remChar) {
            newChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        tempTxt = txt.substring(0, removeIdx) + newChar + txt.substring(removeIdx + 1, txt.length);
    }



    //
    breakWelcome()
    setTimeout(typeWriter, 3000);

});

var first = true;
var capInterval;

function funnyTxt(x) {
    var randIdx = 0;
    capInterval = setInterval(function() {
        x.innerHTML = x.innerHTML.toLowerCase();
        if (first) {
            randIdx = Math.floor(Math.random() * x.innerHTML.length);
            x.innerHTML = x.innerHTML.substring(0, randIdx) + x.innerHTML.charAt(randIdx).toUpperCase() + x.innerHTML.substring(randIdx + 1, x.innerHTML.length);
            first = false
        }
        else {
            var randTmp = Math.floor(Math.random() * x.innerHTML.length);
            while (randTmp == randIdx) {
                randTmp = Math.floor(Math.random() * x.innerHTML.length);
            }
            x.innerHTML = x.innerHTML.substring(0, randTmp) + x.innerHTML.charAt(randTmp).toUpperCase() + x.innerHTML.substring(randTmp + 1, x.innerHTML.length);
            randIdx = randTmp;
        }

    }, 150);
}

function fixTxt(x) {
    clearInterval(capInterval);
    var first = true; //reset in onmouseout
    x.innerHTML = x.innerHTML.toLowerCase();
}
