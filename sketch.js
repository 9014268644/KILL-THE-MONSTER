Engine
World 
Bodies
MouseConstraints

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);

}

function mouseDragged(){
  MutationObserver.body.setPosition(hero.body,{x:mouseX,y:mouseY});
}