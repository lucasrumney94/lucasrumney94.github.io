//this overlays the content on the page but will capture input and
// not allow the user to click on things afaik.

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.position(0,0)
    // background(0,0,0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
