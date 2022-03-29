var buttonMooi = document.getElementById('button_mooi');
var buttonMatig = document.getElementById('button_matig');
var buttonSlecht = document.getElementById('button_slecht');

var buttonGeluid = document.getElementById('button_geluid');

var video = document.getElementById('video');


buttonMooi.addEventListener('click', speelMooi);
buttonMatig.addEventListener('click', speelMatig);
buttonSlecht.addEventListener('click', speelSlecht);

buttonGeluid.addEventListener('click', toggleGeluid);


function speelMooi() {
    video.src = "img/videos/walk.mp4";
    console.log('run mooi');
}

function speelMatig() {
    video.src = "img/videos/skate.mp4";
    console.log('run matig');
}

function speelSlecht() {
    video.src = "img/videos/bike.mp4";
    console.log('sup slecht');
}


function toggleGeluid() {
    if (video.muted == true) {
        video.muted = false;
        buttonGeluid.querySelector("img").src = "img/icons/geluidAan.png";
    } else {
        video.muted = true;
        buttonGeluid.querySelector("img").src = "img/icons/geluidUit.png";
    }
}


window.onload = function() {
    video.src = "img/videos/walk.mp4";

    console.log("he");
};