
const video = document.querySelector("video");
const volumeInput = document.querySelector("#volume");
const captions = document.querySelectorAll("span");

//updates the volume of the video
const setVolume = (volume) => {
    video.volume = volume;
}

const colorCaption = (timestamp) => {
    //loops through captions
    captions.forEach((caption) => {
        //check if the time of the video is between the start and end of the caption
        // if yes gives a background colour to the caption
        if (timestamp >= caption.dataset.start && timestamp <= caption.dataset.end) {
            caption.style.background = "#42f54b";
        } else {
            caption.style.background = "white";
        }
    })
    
}

//add event listener to video to check when the time is changing
video.addEventListener("timeupdate", (event) => {
    colorCaption(video.currentTime);

})

//add event listener to volume slider to update volume of video
volumeInput.addEventListener("change", (event) => {
    setVolume(event.target.value / 10);
})









