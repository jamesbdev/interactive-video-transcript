
const video = document.querySelector("video");
const volumeInput = document.querySelector("#volume");


console.log(volumeInput);

const setVolume = (volume) => {
    video.volume = volume;
}

volumeInput.addEventListener("change", (event) => {
    console.log(event);
    setVolume(event.target.value / 10);
})







