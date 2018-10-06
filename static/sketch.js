// hard refresh so don't have to refresh cache every time
// Windows: Fn+Ctrl+F5
// Mac: Cmd+Shift+R

var path = "/static/music/happy.mp3"
var song;
var button;
var amplitude;

function setup() {
  createCanvas(200, 200);
  song = loadSound(path, loaded);
  amp = new p5.Amplitude();
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

function draw(){
    background(51);
    var vol = amp.getLevel();
    fill(255,0,255);
    ellipse(width/2, height/2, vol*1000, vol*1000);
}

console.log("hi")