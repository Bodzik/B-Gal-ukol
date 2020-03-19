function changeImage(obj) {
    var idx = obj.id;
    var image = document.getElementById(idx);
    if (image.src.match("https://raw.githubusercontent.com/Bodzik/B-Gal-ukol/master/yas.png")) {
            image.src = "https://raw.githubusercontent.com/Bodzik/B-Gal-ukol/master/nope.png";
        }
        else {
            image.src = "https://raw.githubusercontent.com/Bodzik/B-Gal-ukol/master/yas.png";
        }
    }
function changeFontSize(obj) {
    var idx = obj.id;
  document.getElementById(idx).style.fontSize = "xx-small";
}
