const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }

   ground = Bodies.rectangle(200, 380, 400, 20,ground_options);

   var ball_options={
   restitution:1.0
   }
   ball = Bodies.circle(200,100,30,ball_options)


  World.add(world,ground);
  World.add(world,ball);

  
  console.log(ground);
  console.log(ball);
}

function draw() { 
  background("pink");
  Engine.update(engine);
  fill("red")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  fill("blue")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
}