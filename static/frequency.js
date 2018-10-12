// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4

var song;
var fft;
var button;
var amplitude;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('/static/music/inyourarms.mp3');
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 64);
  amplitude = new p5.Amplitude();
  
}

function draw() {
  background(500);
  var spectrum = fft.analyze();
  //console.log(spectrum);
  //stroke(255);
  noStroke();
  translate(width / 2, height / 2);
  //beginShape();
  
  for(var j = 0; j < 4; j++){
    for (var i = 0; i < spectrum.length; i++) {
      var angle = map(i, 0, spectrum.length, 0, 90);
      var amp = spectrum[i];
      var r = map(amp, 0, 256, 100, 4*height/9);
      //fill(i, 255, 255);
      if (j % 2 == 0) {
        var x = r * cos(angle+j*90);
        var y = r * sin(angle+j*90);
      } else {
        var x = r * cos(-angle+j*90+90);
        var y = r * sin(-angle+j*90+90);
      }
      var vol = amplitude.getLevel();
      var ampColor = map(vol, 0, 1, 0, 255)
      stroke(ampColor+i, 100, 100);
      line(0, 0, x, y);
      //vertex(x, y);
      //var y = map(amp, 0, 256, height, 0);
      //rect(i * w, y, w - 2, height - y);
    }
    //endShape();
  }
  
  
  


}