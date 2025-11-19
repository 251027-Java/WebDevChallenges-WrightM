function redAndBold() {
    document.getElementById("mainParagraph").style.color = "red";
    document.getElementById("mainParagraph").style.fontWeight = "bold";
}

function normal() {
    document.getElementById("mainParagraph").style.color = "black";
    document.getElementById("mainParagraph").style.fontWeight = "normal";
}

document.getElementById("redandBoldBtn").addEventListener("click", redAndBold);
document.getElementById("normalBtn").addEventListener("click", normal);