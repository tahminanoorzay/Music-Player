let backward = document.querySelector(".backward-btn");
let play = document.querySelector(".play-btn");
let forward = document.querySelector(".forward-btn");

const songs = ["/music/hey.mp3", "/music/summer.mp3", "/music/ukulele.mp3"];
let currentIndex = 0;

const audio = new Audio(songs[currentIndex]);

play.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

forward.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  audio.src = songs[currentIndex];
  audio.play();
  play.innerHTML = '<i class="fa-solid fa-pause"></i>';
  updateSongTitle();
});

backward.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  audio.src = songs[currentIndex];
  audio.play();
  play.innerHTML = '<i class="fa-solid fa-pause"></i>';
  updateSongTitle();
});

function updateSongTitle() {
  document.querySelector(
    ".current-song"
  ).textContent = `Now Playing: ${songTitles[currentIndex]}`;
}

audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  audio.src = songs[currentIndex];
  audio.play();
  updateSongTitle();
});
