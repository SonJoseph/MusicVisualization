// hard refresh so don't have to refresh cache every time
// Windows: Fn+Ctrl+F5
// Mac: Cmd+Shift+R

var path = "/static/music/happy.mp3"
var slider

var song;
var button;

function setup() {
  createCanvas(200, 200);
  song = loadSound(path, loaded);
  background(51);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
}