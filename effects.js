var canvas;

var textContents = "Lucas Rumney";
var customTextSize = 300;
var customGraphic;
var density;
var currentPixelDensity

var myEffect;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('display', 'block');
    canvas.position(0,0);
    // background(0,0,0);
    canvas.style('z-index', -1);
    density = displayDensity()
    pixelDensity(density)
    drawText()
    myEffect = int(random(1, 4));
    print(myEffect)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawText()
}

function drawText() {
    customTextSize = 150 // TODO: calculateTextSize(windowWidth)
    customGraphic = createGraphics(windowWidth, windowHeight)
    customGraphic.clear()
    customGraphic.textFont('Lato')
    customGraphic.textSize(customTextSize)
    customGraphic.textStyle(BOLD)
    customGraphic.fill(255)
    customGraphic.textAlign(CENTER, TOP)
    customGraphic.text(textContents, canvas.width/2, canvas.height/4)
    customGraphic.loadPixels()

    var customGraphicPixels = 4 * customGraphic.width * density * customGraphic.height * density

    var i = 0;
    while (i < customGraphicPixels) {
        customGraphic.pixels[i] = 0
        customGraphic.pixels[i + 1] = 0
        customGraphic.pixels[i + 2] = 0
        customGraphic.pixels[i + 3] = 255 - customGraphic.pixels[i + 3]
        i += 4
    }
    customGraphic.updatePixels()
}

function effectOne() {
    //pointillism

    let x = random(windowWidth)
    let y = random(windowHeight/4)+windowHeight/4
    fill(random(245, 255))
    noStroke()
    ellipse(x, y, 30, 30)

}

function effectTwo() {
    //lazersweep
    //https://p5js.org/examples/input-storing-input.html
    push()
    background(0, 40)
    fill(255)
    noStroke()
    translate(millis()/2 % windowWidth, 0)
    rect(0, 0, 4, windowHeight)
    pop()
}

function effectFour() {
    //lazersweep Vertical
    //https://p5js.org/examples/input-storing-input.html
    push()
    background(0, 20)
    fill(255)
    noStroke()
    translate(0, millis()/2 % (windowHeight/2))
    rect(0, 0, windowWidth, 3)
    pop()
}

function effectThree(){
    background(255)
}

function draw() {

    // fill(200, 0, 0)
    // rect(canvas.width/6, canvas.height/4, 2*canvas.width/3, 30)
    //
    //
    // fill(0, 200, 0)
    // square(mouseX, mouseY, 30)

    if (myEffect == 1){
        effectOne()
    } else if (myEffect == 2) {
        effectTwo()
    } else if (myEffect == 3) {
        effectFour()
    }

    image(customGraphic, 0, 0)

}
