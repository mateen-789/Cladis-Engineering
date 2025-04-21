
  const video = document.getElementById("customVideo");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
  });

  video.addEventListener("ended", () => {
    playButton.style.display = "block";
  });
