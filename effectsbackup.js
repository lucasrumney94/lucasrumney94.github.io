var mic
var canvas

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('display', 'block');
    canvas.position(0,0)
    // background(0,0,0);
    canvas.style('z-index', -1)
    mic = new p5.AudioIn()
    mic.start()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    var microphoneVolume = mic.getLevel()

    let c = color(255, 204, 0); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    //noStroke(); // Don't draw a stroke around shapes
    ellipse(width/2, height/2, microphoneVolume*3*windowWidth);
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

/*
Setup a random number generation to

make a scanline
glitch art (vernoi connected nodes) - subtle
mouse trail?
each pixel is a random pixel color

Flying terrain generation maybe audio interactive

base effects off of input like mouse position or click

base effects off of an source image


maybe microphone
outside
var mic

in setup
mic=new p5.AudioIn()
mic.start

draw
mic.volume

need p5.sound.js

MASKED by name
DFT of mic

*/
