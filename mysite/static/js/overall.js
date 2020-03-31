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

        var menu = document.getElementsByClassName("menu");
        for(var i=0, len=menu.length; i<len; i++)
        {
            menu[i].style.backgroundColor = "black";
        }

        var menu_dis = document.getElementsByClassName("menu-option-disabled");

        for(var i=0, len=menu_dis.length; i<len; i++)
        {
            menu_dis[i].style.color = "black";
        }

        if (document.getElementById("header-row") != null) {
            document.getElementById("header-row").style.backgroundColor = "white";
            document.getElementById("header-row").style.borderBottom = "2px solid black";
        }
        if (document.getElementById("mySidebar") != null) {

            document.getElementById("mySidebar").style.backgroundColor = "white";
            if (isOpen) {
                document.getElementById("mySidebar").style.borderBottom = "2px solid black";
            }
        }

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

        var menu = document.getElementsByClassName("menu");
        for(var i=0, len=menu.length; i<len; i++)
        {
            menu[i].style.backgroundColor = "white";
        }

        var menu_dis = document.getElementsByClassName("menu-option-disabled");
        for(var i=0, len=menu_dis.length; i<len; i++)
        {
            menu_dis[i].style.color = "white";
        }

        if (document.getElementById("header-row") != null) {

            document.getElementById("header-row").style.backgroundColor = "black";
            document.getElementById("header-row").style.borderBottom = "2px solid white";
        }
        if (document.getElementById("mySidebar") != null) {
            document.getElementById("mySidebar").style.backgroundColor = "black";
            if (isOpen) {
                document.getElementById("mySidebar").style.borderBottom = "2px solid white";
            }
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

function hamMenuTrans(x) {
    x.classList.toggle("change");
    navDecider();
}

var isOpen = false;

function navDecider() {
    if (isOpen) {
        closeNav()
    }
    else {
        openNav()
    }
}

function openNav() {
    document.getElementById("mySidebar").style.height = "325px";
    document.getElementById("mySidebar").style.paddingTop = "55px";
    document.getElementById("content").style.paddingTop = "350px";
    if (darkOn) {
        document.getElementById("mySidebar").style.borderBottom = "2px solid white";
    }
    else {
        document.getElementById("mySidebar").style.borderBottom = "2px solid black";
    }
    isOpen = true;
}

function closeNav() {
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("mySidebar").style.paddingTop = "0";
    document.getElementById("content").style.paddingTop = "150px";
    setTimeout(function() {
        document.getElementById("mySidebar").style.borderBottom = "none";
    }, 400);
    isOpen = false;
}
