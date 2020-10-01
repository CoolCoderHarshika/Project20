var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 35, 35);
  wall=createSprite(650,200,20,100)

  speed=Math.round(random(50,90));
  weight=Math.round(random(400,1500));
  car.velocityX=speed;
}

function draw() {
  background("black");  
  drawSprites();
  if(car.isTouching((wall)))
  {
    car.velocityX=0;
    wall.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22509
    if (deformation<100) 
  {
    car.shapeColor="green";
  }
  if(deformation>180)
    {
      car.shapeColor="red";
    }
    if(deformation>100&&deformation<=180)
    {
      car.shapeColor="yellow"
    }
  }
  
  
}
