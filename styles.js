function toggleAudio() {
    var audio_status = document.getElementById('pre_sunrise_audio').muted;
    if (audio_status == false) {
        document.getElementById('audio_icon').className = "fa fa-volume-off";
        document.getElementById('pre_sunrise_audio').muted = true;
    }
    else if (audio_status == true) {
        document.getElementById('audio_icon').className = "fa fa-volume-up";
        document.getElementById('pre_sunrise_audio').muted = false;
    }
}

function changeSection(newTime, currentContainer, newContainer) {

    /* remove current view and load next view */
    Velocity(document.getElementsByClassName(currentContainer), {opacity: 0}, {duration: 1250});
    Velocity(document.getElementsByClassName(newContainer), {opacity: 1}, {duration: 1250});
    var currentZ = document.getElementsByClassName(currentContainer)[0].style.zIndex;
    document.getElementsByClassName(currentContainer)[0].style.zIndex = currentZ - 5;
    var newZ = document.getElementsByClassName(newContainer)[0].style.zIndex;
    document.getElementsByClassName(newContainer)[0].style.zIndex = newZ + 15;

    /* transition the background */
    Velocity(document.getElementsByClassName(newContainer + "-background"), {opacity: 1}, {duration: 1250});

    /* change the time */
    var time = document.getElementById('time');
    Velocity(time, {opacity: 0}, {duration: 750});
    setTimeout(function () {
        time.innerHTML = newTime;
    }, 750);
    Velocity(time, {opacity: 1}, {duration: 750});

    /* change the call to action color */


}

