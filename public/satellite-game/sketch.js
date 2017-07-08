
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
//var backsound;
//var shoot;
//var boom;
var totalLifes, scoreAtGameOver, isGameOver, collisionCounter; //Variables needing reset
var bestScoreSoFar = 0;
var endgameButton, replaygameButton;


function preload()
{
  bg = loadImage("img.jpeg");
  //backsound = loadSound("background.wav");
  //shoot = loadSound("shoot.mp3");
  //boom = loadSound("collision.mp3");
}

function setup() {
   var w = window.innerWidth;
   var h = window.innerHeight;

   //Canvas
   canvas = createCanvas(w, h);
   canvas.position(0,0);
  
   //Buttons
   endgameButton = createButton("End Game");
   endgameButton.mouseClicked(endGame);
   endgameButton.position(120, 180);
  
   replaygameButton = createButton("Replay Game");
   replaygameButton.mouseClicked(replayGame); 
   replaygameButton.position(200, 180);

   //backsound.play();

   colorMode(HSB);

   populateTheWorld();
   replayGame();

}

function populateTheWorld()
{
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

//Replay the game
function replayGame(){

  //Remove all satellites if there are any remaining from previous run
  for (var i = 0; i < particles.length; i++)
  {
    particles[i].removeFromWorld();
  }
  particles = [];

  //Reset the variables
  totalLifes = 5;
  scoreAtGameOver = 0;
  isGameOver = false;
  collisionCounter = 0;

  endgameButton.hide();
  replaygameButton.hide();
 }

//End the game
function endGame()
{
  remove();
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

  textSize(30);
  fill(127);

  updateScore();
}

function updateScore()
{
  if(!isGameOver)
  {
    text("Satellites in orbit: " + particles.length, 70, 80);
    text("Collisions remaining: " + (totalLifes - collisionCounter), 70, 115);
    text("Best score so far: " + bestScoreSoFar, 70, 145);
  }
  else
  {
    text("Game Over!", 70, 80);
    text("Final Score : " + scoreAtGameOver, 70, 115);
    text("Best score so far: " + bestScoreSoFar, 70, 145);
    endgameButton.show();
    replaygameButton.show();
  }
}


/* Functions to launch a satellite using mouse */
function mousePressed() 
{
    mousepress_x = mouseX;
    mousepress_y = mouseY;
}

function mouseReleased() {
  if(!isGameOver)
  {
    var satellite = new Particle(mouseX, mouseY, 10);
    particles.push(satellite);
    var scalingfactor = 1e-2;
    force_x = (mousepress_x - mouseX)*scalingfactor;
    force_y = (mousepress_y - mouseY)*scalingfactor;
    Matter.Body.applyForce(satellite.body, { x: 0, y: 0 }, { x: force_x, y: force_y });
    //shoot.play();  
  }
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
    if(scoreAtGameOver > bestScoreSoFar)
    {
        bestScoreSoFar = scoreAtGameOver;  
    }
    //boom.play();
  }
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