var car,wall;

var speed,weight;



function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 50, 50);
  wall=createSprite(700,200,30,90);


 speed=random(55,90);
 weight=random(400,1500);

 car.velocityX=speed;
}
  
function draw() {
  background(0,0,0);  

if

  if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<car.width/2+wall.width/2 && 
     car.y-wall.y<car.height/2+wall.height/2 && wall.y-car.y<=car.height/2+wall.height/2){
      car.shapeColor="red";
      wall.shapeColor="red";
    }
else{
  car.shapeColor="blue";
  wall.shapeColor="blue";
}

if(car.isTouching(wall)){
car.velocityX=0;
}




  drawSprites();
}
