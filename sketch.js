var car,wall;
var spd,wgt;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(1500,200,60,200);
  wall.shapeColor=color(100,250,200);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=color(255,255,255);
 
  spd=Math.round(random(55,90));
  wgt=Math.round(random(400,1500));
}

function draw() {
  background(0,0,0);  
  car.velocityX=spd;
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX = 0;
    car.x = (wall.x-(car.width/2+wall.width/2));
    var df=0.5*wgt*spd*spd/22509;
    if(df>180){
      car.shapeColor=color(255,0,0);
      }
      if(df<180 && df>130){
        car.shapeColor=color(230,230,0);
      }
      if(df<130){
        car.shapeColor=color(0,255,0);
      }
  }
  drawSprites();
}