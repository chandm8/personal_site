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

        var soc_icons = document.getElementsByClassName("social");
        for(var i=0, len=soc_icons.length; i<len; i++)
        {
            soc_icons[i].style.color = "black";
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

        var soc_icons = document.getElementsByClassName("social");
        for(var i=0, len=soc_icons.length; i<len; i++)
        {
            soc_icons[i].style.color = "white";
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

var first_crazy = true;
var capInterval_crazy;
var ogText;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

function crazyTxt(x) {
    var randIdx = 0;
    capInterval_crazy = setInterval(function() {
        if (first_crazy) {
            ogText = x.innerHTML;
            randIdx = Math.floor(Math.random() * x.innerHTML.length);
            while (x.innerHTML.charAt(randIdx) == ' ') {
                randIdx = Math.floor(Math.random() * x.innerHTML.length);
            }
            randChar = Math.floor(Math.random() * alphabet.length);
            while (alphabet.charAt(randChar) == x.innerHTML.charAt(randIdx)) {
                randChar = Math.floor(Math.random() * alphabet.length);
            }
            x.innerHTML = x.innerHTML.substring(0, randIdx) + alphabet.charAt(randChar) + x.innerHTML.substring(randIdx + 1, x.innerHTML.length);
            first_crazy = false
        }
        else {
            var randTmp = Math.floor(Math.random() * x.innerHTML.length);
            while (randTmp == randIdx && x.innerHTML.charAt(randTmp) == ' ') {
                randTmp = Math.floor(Math.random() * x.innerHTML.length);
            }
            randIdx = randTmp;
            randChar = Math.floor(Math.random() * alphabet.length);
            while (alphabet.charAt(randChar) == x.innerHTML.charAt(randIdx)) {
                randChar = Math.floor(Math.random() * alphabet.length);
            }

            x.innerHTML = x.innerHTML.substring(0, randIdx) + alphabet.charAt(randChar) + x.innerHTML.substring(randIdx + 1, x.innerHTML.length);
        }

    }, 25);
}

function fixTxt_crazy(x) {
    if (!first_crazy) {
        clearInterval(capInterval_crazy);
        var first_crazy = true; //reset in onmouseout
        x.innerHTML = ogText;
    }
}

function glitchText() {
    if (document.getElementsByClassName("glitch-actv").length != 0) {
        setInterval(function() {
            var text = document.getElementsByClassName("glitch-actv");
            var randIdx = Math.floor(Math.random() * text.length);
            var charIdx = Math.floor(Math.random() * text[randIdx].innerHTML.length);
            while (text[randIdx].innerHTML.charAt(charIdx) == ' ') {
                charIdx = Math.floor(Math.random() * text[randIdx].innerHTML.length);
            }
            var origText = text[randIdx].innerHTML;
            var randBin = Math.random() >= 0.5;
            if (randBin) {
                text[randIdx].innerHTML = text[randIdx].innerHTML.substring(0, charIdx) + "1" + text[randIdx].innerHTML.substring(charIdx + 1, text[randIdx].innerHTML.length);
            }
            else {
                text[randIdx].innerHTML = text[randIdx].innerHTML.substring(0, charIdx) + "0" + text[randIdx].innerHTML.substring(charIdx + 1, text[randIdx].innerHTML.length);
            }
            setTimeout(function() {
                text[randIdx].innerHTML = origText;
            }, 150);
        }, 4000);
    }
}

window.onload = function start() {
    glitchText();
}

$(document).ready(function() {

    var skills = ["java.", "python.", "git.", "C language.", "C++.", "html/css.", "javascript.", "django.", "jquery.", "android.", "agile.", "SQL.", "bootstrap.", "crowdsourcing.", "human-computer interaction.", "front-end development."];
    var tempSkills = ["java.", "python.", "git.", "C language.", "C++.", "html/css.", "javascript.", "django.", "jquery.", "android.", "agile.", "SQL.", "bootstrap.", "crowdsourcing.", "human-computer interaction.", "front-end development."];
    var sillySkills = ["sleeping.", "eating.", "mariokart."];
    var tempSillySkills = ["sleeping.", "eating.", "mariokart."];
    var idx = 0;
    var skillSelected = false;
    var silly = false
    var skill;
    var skillsTyped = 0;

    function typeWriterSkills() {
        var theInterval = setInterval(function() {

            if (!skillSelected) {

                var randSilly = Math.random() >= 0.9;
                if (!silly && skillsTyped > 3 && randSilly) {
                    silly = true;
                }
                else if (silly) {
                    silly = false
                }
                console.log(silly);

                var skillIdx;
                if (silly) {
                    skillIdx = Math.floor(Math.random() * tempSillySkills.length);
                    while (tempSillySkills[skillIdx] == skill) {
                        skillIdx = Math.floor(Math.random() * tempSillySkills.length);
                    }
                    skill = tempSillySkills[skillIdx];
                    tempSillySkills.splice(skillIdx, 1);
                }
                else {
                    skillIdx = Math.floor(Math.random() * tempSkills.length);
                    while (tempSkills[skillIdx] == skill) {
                        skillIdx = Math.floor(Math.random() * tempSkills.length);
                    }
                    skill = tempSkills[skillIdx];
                    tempSkills.splice(skillIdx, 1);
                }

                if (tempSkills.length == 0) {
                    for (var i = 0; i < skills.length; i++) {
                        tempSkills.push(skills[i]);
                    }
                }
                if (tempSillySkills.length == 0) {
                    for (var i = 0; i < sillySkills.length; i++) {
                        tempSillySkills.push(sillySkills[i]);
                    }
                }
                skillSelected = true;
            }
            $("#skill").append(skill.charAt(idx));
            idx++;
            if (idx == skill.length) {
                skillSelected = false;
                skillsTyped++;
                setTimeout(typeDeleterSkills, 1000);
                clearInterval(theInterval); // this stops the loop
            }

            // if (i == txt.length && done) {
            //     clearInterval(theInterval); // this stops the loop
            // }
        }, 50);
    }

    function typeDeleterSkills() {
        var theInterval = setInterval(function() {
            $('#skill').html($('#skill').html().substring(0,$('#skill').html().length - 1));
            idx--;
            if (idx == 0) {
                setTimeout(typeWriterSkills, 1000);
                clearInterval(theInterval);
            }
        }, 50);
    }
    if (document.getElementById("skill") != null) {
        setTimeout(typeWriterSkills, 1000);
    }
});

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
    document.getElementById("mySidebar").style.height = "275px";
    document.getElementById("mySidebar").style.paddingTop = "55px";
    document.getElementById("content").style.paddingTop = "300px";
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
