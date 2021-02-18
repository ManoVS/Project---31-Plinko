const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var ground;
var cols = 10;
var rows = 9;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300; 

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(60,height,1200,20);

  var spacing = width / cols;
  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols; i++){
      var x = i * spacing;
      if(j % 2 == 0){
        x += spacing / 2;
      }
      var y = spacing + j * spacing;
      var p = new Plinko(x,y,4);
      plinkos.push(p);
    }
  }

  for(var i = 0; i < cols; i++){
    var x = i * spacing;
    var h = 300;
    var w = 10;
    var y = height - h/2;
    var b = new Ground(x,y,w,h);
    divisions.push(b);
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();

  for(var i = 0; i < cols; i++){
    divisions[i].display();
  }

  if(frameCount % 60 === 0){
    var p = new Particle(random(100,700),10,10)
    particles.push(p);
  }

  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for (var r = 0; r < plinkos.length; r++){
    plinkos[r].display();
  }

  drawSprites();
}
