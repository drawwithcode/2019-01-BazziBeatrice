function preload(){

}

function setup(){

  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(64);
  background(0);
}

function draw(){
  translate(width/2,height/2);

//tuorlo
if(frameCount<180){

  stroke("yellow");
  line(width/12,0,(cos(frameCount*2)*width/12),(sin(frameCount*2)*width/12));}

//albume
else if(frameCount<361){

  push();
  translate(50,20);
  rotate(-frameCount);
  stroke(238,244,216);
  var Xb=-frameCount;
  if (frameCount==800) {noLoop()}
  line(0, 0, Xb, 10+11*cos(7*frameCount));
  pop()

  push();
  translate(50,20);
  rotate(frameCount);
  stroke(238,244,216);
  var Xb=-frameCount;
  if (frameCount==800) {noLoop()}
  line(0, 0, Xb, 10+11*cos(6*frameCount));
  pop()

}

//tuorlo2
else if(frameCount<801){

  stroke("yellow");
  line(width/12,0,(cos(frameCount*2)*width/12),(sin(frameCount*2)*width/12));

  push()
  rotate(180)
  stroke("yellow");
  line(width/12,0,(cos(frameCount*2)*width/12),(sin(frameCount*2)*width/12));
  pop()

  push()
  translate(40,50,0)
  stroke(lerpColor(color(238,244,216),color(253,252,248),(frameCount-180)/450));
  line(width/40,0,(cos(frameCount*2)*width/40),(sin(frameCount*2)*width/40));

  rotate(180)
  stroke(lerpColor(color(238,244,216),color(253,252,248),(frameCount-180)/450));
  line(width/40,0,(cos(frameCount*2)*width/40),(sin(frameCount*2)*width/40));
  pop()
}

if (frameCount==540) {noLoop()}


}
