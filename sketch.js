var bullet,wall,speed,weight,thickness
function setup() {
createCanvas(1600,400);
bullet = createSprite(50, 200, 50, 50);
bullet.shapeColor = ("white")
speed = random(223,321)
weight = random(32,55)
thickness = random(22,90)
bullet.velocityX = speed
wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = ("blue")
}

function draw() {
  background(0,0,0);  
  if (wall.x-bullet.x < bullet.width/2 + wall.width/2){
  bullet.velocityX = 0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  if (damage > 10 ){
  bullet.shapeColor = ("red")
  }
  if (damage < 10 ){
  bullet.shapeColor = ("green")
  }









}
  drawSprites();
}