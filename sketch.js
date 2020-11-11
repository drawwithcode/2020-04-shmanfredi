var input;
var title;
var start;

function setup() {

  title = createElement("h1","Hello,");
  input = createInput("").attribute("placeholder", "type your name");
  start = createButton("start!");

  start.mouseClicked(goTo);
}

function draw() {
  if (input.value() == ""){
  title.html("Hello, type your name!");
} else {
  title.html("Hello " + input.value() + "!")
}
}

function goTo(){
  if(input.value() != ""){
    window.open('index2.html', "_self");
  }
}
