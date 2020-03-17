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