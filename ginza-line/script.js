const player = document.getElementById("audio-player");

function playMusic(src) {

  // 同じ曲を押した時も再読み込み
  player.pause();
  player.currentTime = 0;

  // パス設定
  player.src = src;

  // iPad Safari対策
  player.load();

  // 再生
  player.play().catch(error => {
    console.error("再生エラー:", error);
    alert("音声を再生できませんでした");
  });
}

function stopMusic() {
  player.pause();
  player.currentTime = 0;
}
