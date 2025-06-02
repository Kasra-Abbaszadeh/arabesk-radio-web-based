const player = document.getElementById("player");
const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const volumeSlider = document.getElementById("volume-slider");
const stationName = document.getElementById("station-name");

let isPlaying = false;
let currentStation = null;

function changeStation(url, name) {
    if (currentStation !== url) {
        player.pause();  
        player.src = url;
        player.load(); 
        currentStation = url;
        stationName.innerText = `Live : ${name}`;

        let playPromise = player.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                playIcon.src = "src/stop.png"; 
                isPlaying = true;
            }).catch(error => {
                console.error("error !!!!", error);
                playIcon.src = "src/play.png"; 
                isPlaying = false;
            });
        }
    }
}

playBtn.onclick = () => {
    if (isPlaying) {
        player.pause();
        playIcon.src = "src/play.png";
        isPlaying = false;
    } else {
        let playPromise = player.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                playIcon.src = "src/stop.png"; 
                isPlaying = true;
            }).catch(error => {
                console.error("erorr !!!!", error);
            });
        }
    }
};

volumeSlider.oninput = () => {
    player.volume = volumeSlider.value / 100;
};
