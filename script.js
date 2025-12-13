let isBlack = false;

document.getElementById("invert").addEventListener("click", function() {
    if (isBlack) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isBlack = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isBlack = true;
    }
});