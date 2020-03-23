var darkOn = false;

function darkTheme() {
    if (darkOn) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        var anchors = document.getElementsByClassName("anchor");
        for(var i=0, len=anchors.length; i<len; i++)
        {
            anchors[i].style["color"] = "black";
        }
        darkOn = true;
        darkOn = false;
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        var anchors = document.getElementsByClassName("anchor");
        for(var i=0, len=anchors.length; i<len; i++)
        {
            anchors[i].style["color"] = "white";
        }
        darkOn = true;
    }
}

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
