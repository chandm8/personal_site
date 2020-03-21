var darkOn = false;

function darkTheme() {
    if (darkOn) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkOn = false;
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkOn = true;
    }
}
