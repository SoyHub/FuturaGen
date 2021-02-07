const url = "https://download.quranicaudio.com/quran/maher_256/002.mp3";
audioObj = new Audio(url);

// myAudioElement.addEventListener("quranButton", event => {
//     audioObj.play();
//   });
document.getElementById("quranButton").addEventListener("click", function() {
    if ( !audioObj.paused) {
        audioObj.pause()
        document.getElementById("quranButton").src = "img/btns/play.png";
    } else {
        audioObj.play()
        document.getElementById("quranButton").src = "img/btns/pause.png";
    }
 
  });

  