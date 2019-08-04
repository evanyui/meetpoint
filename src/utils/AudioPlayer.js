export const playAudio = () => {
    const audio = document.getElementById("audio");
    audio.play();
};

export const setTime = (seconds) => {
    const audio = document.getElementById("audio");
    audio.currentTime = seconds;
};
