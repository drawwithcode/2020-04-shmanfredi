// colors
let colorPalette = ["Crimson", "Teal", "Chocolate", "Maroon"];
const bgColor = "Black";

// inital number of squares
var squares = 500;

// rotation angle
var angle = 360 * (Math.sqrt(5) - 1) / 2;

// sq dimension
var side = 3;

// scale
var zoom = 15;

// set sliders range
var squaresMin = 1;
var squaresMax = 2000;

var angleMax = 360;
var angleStep = 0.1;

var sideMin = 0.5;
var sideMax = 15;
var sideStep = 0.1;

var zoomMax = 50;
var zoomStep = 0.1;

var opacityMax = 255;

// declare the gui
var gui;

function setup() {

  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

  // create the gui
  gui = createGui("Play with the slider!");
  gui.addGlobals("squares", "angle", "side", "zoom");

  // only call draw when then gui is changed
  noLoop();

  //only changes color when page is refreshed
  let randomColor = random(colorPalette);
  stroke(randomColor);
  noFill();
}


function draw() {

  background(bgColor);
  var s = side * zoom;

  push();

  translate(width/2, height/2);

  // rotate around the center while going outwards
  for(var i = 0; i < squares; i++) {
    push();
    rotate(i * angle);
    // distance from the center
    var xR = sqrt(i + 0.5) * zoom;
    rect(xR, 0, s, s);
    pop();
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
