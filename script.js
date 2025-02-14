
const video = document.querySelector("video");
//const volumeInput = document.querySelector("#volume");
const captions = document.querySelectorAll("span");
const captionContainer = document.querySelector("p");

console.log(captionContainer);

//function to convert data
// if the timestamp start time contains "1:"
// get the start time and add 60 seconds
const addSixtySec = (startTime) => {
   
}

//add functionality to skip to proper time in video when a span is clicked
//add event listener to spans
//get the start time of span that has been clicked
//move the video to that start time 

captionContainer.addEventListener("click", (event) => {
    const spanStartTime = event.target.dataset.start;
    //console.log(spanStartTime);
    //let newTime = spanStartTime;

    if (spanStartTime.includes("1:")) {
        spanStartTime.replace("1:", "")
        //convert spanStartTime to number
        console.log(spanStartTime);
        let newTime = parseInt(spanStartTime );
        console.log(newTime);

    }
    //set video current time to clicked span start time
    try {
        video.currentTime = event.target.dataset.start;
    } catch (error) {
        console.log(error);
    }
 
})

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
    console.log(video.currentTime);
    colorCaption(video.currentTime);

})

//add event listener to volume slider to update volume of video
// volumeInput.addEventListener("change", (event) => {
//     setVolume(event.target.value / 10);
// })









