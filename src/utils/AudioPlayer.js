export const playAudio = () => {
    const audio = document.getElementById("audio");
    if (audio) {
        audio.play();
    }
};

export const setTime = (seconds) => {
    const audio = document.getElementById("audio");
    if (audio) {
        audio.currentTime = seconds;
    }
};
