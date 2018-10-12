// hard refresh so don't have to refresh cache every time
// Windows: Fn+Ctrl+F5
// Mac: Cmd+Shift+R

var path = "/static/music/happy.mp3"
var imagePath = "/static/images/fist.png"
var song;
var button;
var amplitude;

function setup() {
  createCanvas(200, 200);
  song = loadSound(path, loaded);
  amp = new p5.Amplitude();
  background(51);
}

function preload() {
  fist = loadImage(imagePath)
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
    background(500);
    var vol = amp.getLevel();
    fill(255,0,255);
    image(fist, width/2, vol, vol*1000, vol*1000);
}

/* function newCircle(x, y){
  var sketch = function( p ) {

    p.draw = function() {
      var vol = amp.getLevel();
      ellipse(x, y, vol*1000, vol*1000);
    };
  };

  var myp5 = new p5(sketch);
} */

// hard refresh so don't have to refresh cache every time
// Windows: Fn+Ctrl+F5
// Mac: Cmd+Shift+R

// var path = "/static/music/inyourarms.mp3"
// var song;
// var button;
// var amplitude;
// var volhistory = [];

// // function preload() {
// //   song = loadSound(path)
// // }

// function setup() {
//   createCanvas(200, 200);
//   song = loadSound(path, loaded);
//   amplitude = new p5.Amplitude();
//   background(51);
// }

// function togglePlaying() {
//   if (!song.isPlaying()) {
//     song.play();
//     // song.setVolume(1);
//     button.html("pause");
//   } else {
//     song.stop();
//     button.html("play");
//   }
// }

// function loaded() {
//     button = createButton("play");
//     button.mousePressed(togglePlaying);
// }

// function draw(){
//     background(51);
//     var vol = amplitude.getLevel();
//     volhistory.push(vol);
//     stroke(255);
//     noFill();
    
//     translate(0, -height/2);
//     beginShape();
//     for(var i = 0; i < volhistory.length; i++){
//       var y = map(volhistory[i], 0, 1, height, 0);
//       vertex(i,y);
//     }
//     endShape();

//     if(volhistory.length > width- 50){
//       volhistory.splice(0,1);
//     }

//     stroke(255, 0,0);
//     line(volhistory.length, 0, volhistory.length, height);

//     // var diam = map(vol, 0, 0.3, 10, 200);
//     // fill(255,0,255);
//     // ellipse(width/2, height/2, diam, diam);
// }