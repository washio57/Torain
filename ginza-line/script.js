let currentAudio = null;

function playMusic(file){

  stopMusic();

  currentAudio = new Audio(file);

  currentAudio.play();
}

function stopMusic(){

  if(currentAudio){

    currentAudio.pause();

    currentAudio.currentTime = 0;
  }
}
