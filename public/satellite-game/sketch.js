
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Events = Matter.Events,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

var canvas
var engine;
var world;
var earths = []; //The Earth
var particles = []; //The Satellites
var boundries =[];
var mousepress_x, mousepress_y;
var bg;
var backsound;
var shoot;
var boom;
var collisionCounter = 0;
var totalLifes = 5;
var scoreAtGameOver = 0;
var isGameOver = false;
var button;
var video;


function preload(){
  bg = loadImage("https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg");
  // backsound = loadSound("assets/background.wav");
  // shoot = loadSound("assets/shoot.mp3");
  // boom = loadSound("assets/collision.mp3");

}

function setup() {
   var w = window.innerWidth;
   var h = window.innerHeight;
   // backsound = loadSound("assets/background.wav");
   canvas = createCanvas(w, h);
   canvas.id("game");
   canvas.position(0,0);
   canvas.style('z-index' ,'1');
   canvas.scale(6, 6);
   // backsound.play();
   colorMode(HSB);

   engine = Engine.create();
   Matter.Events.on(engine, "collisionStart", collisionOccured); //Event to handle collision

   world = engine.world;
   world.gravity.scale = 1;

   //Create Earth
   var w = window.innerWidth;
   var h = window.innerHeight;

   earths.push(new Earth(w/2,h/2,30));
   //earths.push(new Earth(3*w/4,h/2,30));
   //earths.push(new Earth(w/4,h/2,30));

   engine.world.gravity.x = 0;
   engine.world.gravity.y = 0;

   new Boundary(-w/2, h/2, w, h, 0);
   new Boundary(w/2, -h/2, w, h, 0);
   new Boundary(1.5*w, h/2, w, h, 0);
   new Boundary(w/2, 1.5*h, w, h, 0);

 }

//The draw event
function draw() 
{
  //canvas.scale(0.5, 0.5);
  background(bg);
  stroke(226, 204, 0);
  Engine.update(engine);

  //Show the earths
  for (var i = 0; i < earths.length; i++)
  {
      earths[i].show();
  }
  //Show all the satellites
  for (var i = 0; i < particles.length; i++)
  {
     particles[i].show();
     if (particles[i].isOffScreen()){
      particles[i].removeFromWorld();
      particles.splice(i, 1); 
      i--;
     }
  }
 // button =createButton("Play Again" ,920,100);
 // button.mousePressed();
  textSize(32);
  fill(255);
  if(!isGameOver)
  {
    text("Satellites in orbit: " + particles.length, 920, 100);
    text("Collisions remaining: " + (totalLifes - collisionCounter), 920, 130);
  }
  else
  {
    text("Game Over!", 920, 100);
    text("Final Score : " + scoreAtGameOver, 920, 130);
  }
}


function mousePressed() 
{
  // backsound.play();
  mousepress_x = mouseX;
  mousepress_y = mouseY;

}


function mouseReleased() {
 // particles[i].show(mouseX, mouseY, 10);
  var satellite = new Particle(mouseX, mouseY, 10);
  particles.push(satellite);
  var scalingfactor = 1e-2;
  force_x = (mousepress_x - mouseX)*scalingfactor;
  force_y = (mousepress_y - mouseY)*scalingfactor;
  Matter.Body.applyForce(satellite.body, { x: 0, y: 0 }, { x: force_x, y: force_y });
  //shoot.play();  

}

function removeSatellite(body)
{
  if(body.label == "Satellite")
  {   
      console.log("Label of parent: " + body.parent.label);
      for (var i = 0; i < particles.length; )
      {
          if(particles[i].body == body )
          {
            console.log("Found sattelite to be removed");
            particles[i].removeFromWorld();
            particles.splice(i, 1);  
          }
          else i++;
      }
      collisionCounter++;
  }  
}

function collisionOccured(event)
{
  for (var i = 0; i < event.pairs.length; i++)
  {
    pair = event.pairs[i];
    console.log("Collision happened between "+ pair.bodyA.label + " And "+ pair.bodyB.label);
    removeSatellite(pair.bodyA);
    removeSatellite(pair.bodyB);

  }

  if(!isGameOver && collisionCounter >= totalLifes)
  {
    isGameOver = true;
    scoreAtGameOver = particles.length;
  }
  // boom.play();
}

function globalStart(){
  if (document.readyState === 'complete') {
  _globalInit();
} else {
  window.addEventListener('load', _globalInit , false);
}
 }
 function globalDestroy(){
  remove();
 }