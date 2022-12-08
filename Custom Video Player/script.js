// Get DOM Elements
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Create function for clicking on video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
// Create function for updating play / pause icons
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
    }
}
// Create funciton to update the progress
function updateProgress(){
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;
    // Set the time for the timestamp
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        // String used b/c in JS we can't add text '0' with numeric mins so we have to convert mins into text through String
        mins = '0' + String(mins); // String use as text in JS
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}
// Create funciton for stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}
// Create function to update the video progress using the slider
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}
// Event Listeners
// 1. Play video
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

// 2. Event listener for Play Button
play.addEventListener('click', toggleVideoStatus);

// 3. Event listener for Stop Button
stop.addEventListener('click', stopVideo);

// 4. Event listener for Progress Bar
progress.addEventListener('change', setVideoProgress);