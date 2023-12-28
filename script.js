var progress = document.getElementById("progress");
let sound =document.getElementById("sound");
let control_icon = document.getElementById("control_icon");

var play_pause = document.getElementById("play_pause").addEventListener("click", ()=>{
    if(control_icon.classList.contains("fa-pause")){
        sound.pause();
        control_icon.classList.remove("fa-pause");
        control_icon.classList.add("fa-play");
    }else{
        sound.play();
        control_icon.classList.add("fa-pause");
        control_icon.classList.remove("fa-play");
    }
})

if(sound.play()){
    setInterval(()=>{
        progress.value = sound.currentTime;
    },500)
}
progress.addEventListener("change", ()=>{
    sound.play();
    sound.currentTime = progress.value;
    control_icon.classList.add("fa-pause");
    control_icon.classList.remove("fa-play");
})

sound.onloadedmetadata = function(){
    progress.max = sound.duration;
    progress.value  = sound.currentTime;
}