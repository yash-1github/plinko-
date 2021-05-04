var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var part;
var particles = [];
var plinkos = [];
var divisions = [];




var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for( var i= 50; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 100);
    plinkos.push(p1);
  }
  for( var i= 75; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 170);
    plinkos.push(p1);
  }
    
  for( var i= 50; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 240);
    plinkos.push(p1);
  }
  for( var i= 75; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 310);
    plinkos.push(p1);
  }
    
  for( var i= 50; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 380);
    plinkos.push(p1);
  }
  for( var i= 75; i<750 ; i= i+ 50){
    p1 = new Plinko(i , 450);
    plinkos.push(p1);
  }
     
   g = new Ground(400,780,width, 20);


   for(var i = 100; i<750; i = i+120){
     d1 = new Divisions(i, 630,10,280 );
     divisions.push(d1);
   }
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  for( var i = 0; i< plinkos.length  ;  i++ ){
    plinkos[i].display();
  }
  for(var i = 0; i<divisions.length ; i++){
    divisions[i].display();
  }

  if(mouseIsPressed){
     part = new Particle( mouseX , -10 ,20);
  }

 part.display();

  g.display();
 
}
