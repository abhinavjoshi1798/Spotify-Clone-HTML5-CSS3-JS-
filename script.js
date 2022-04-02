console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/AajJaaneKiZid.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "AajJaaneKiZid", filePath: "Songs/AajJaaneKiZid.mp3", coverPath: "Covers/AajJaneKiJidNaKaro.jpg"},
    {songName: "BilloJeyBeeRapper", filePath: "Songs/BilloJeyBeeRapper.mp3", coverPath: "Covers/Billo.jpg"},
    {songName: "ChannaMereya", filePath: "Songs/ChannaMereya.mp3", coverPath: "Covers/ChannaMereYa.jfif"},
    {songName: "ChuraLiyaHaiTumnJoDilKo", filePath: "Songs/ChuraLiyaHaiTumnJoDilKo.mp3", coverPath: "Covers/ChuraLiyaHaTumNeJoDilKo.jfif"},
    {songName: "DafaKar", filePath: "Songs/DafaKar.mp3", coverPath: "Covers/DafaKar.jpg"},
    {songName: "JagGhoomeyaSultan", filePath: "Songs/JagGhoomeyaSultan.mp3", coverPath: "Covers/Sultan.jfif"},
    {songName: "MereRashkeQamar", filePath: "Songs/MereRashkeQamar.mp3", coverPath: "Covers/MereRashkeQuamar.jfif"},
    {songName: "NasheSiChadhGayi", filePath: "Songs/NasheSiChadhGayi.mp3", coverPath: "Covers/NisheSeChadGaye.jfif"},
    {songName: "RightNow", filePath: "Songs/RightNow.mp3", coverPath: "Covers/AkonRightNaNaNa.jfif"},
    {songName: "TeriDeewaniSanam", filePath: "Songs/TeriDeewaniSanam.mp3", coverPath: "Covers/teredeewani.jfif"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

