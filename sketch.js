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


var engine;
var world;
var path = [];
var circles = [];
var boundaries = [];
var mConstraint;


// var angle = 100;
var resolution = 70;

var earth;
var bound;
var img;



//var end;
Events.on(engine, 'collisionStart', function(e) {
    console.log("collision");
  var i, pair,
  length = e.pairs.length;
  for(i = 0; i < length; i++) {
    pair = event.pairs[i];
    if(!(pair.bodyA.label === 'circles' || pair.bodyB.label === 'circles')) {
      continue;
    }
  
  }
});


function setup() {
var canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index' ,'1');
colorMode(HSB);
   engine = Engine.create()
   world = engine.world;
   earth = new Orbit(width/2, height/2, width/6, 1);
  // earth.addSatellite(100, 100, 50, 1);
  // earth.addSatellite(150, 200, 50, 2);
   // earth.addSatellite(200, 100, 40, 3);
   // var parti = new Particle (50,450,10);
   // particles.push(parti);


 
}
function mousePressed() {

  var canvasmouse = Mouse.create(canvas.elt);
     console.log(canvasmouse); 
     canvasmouse.pixelRatio = pixelDensity();
     var options = 
     {
     mouse:canvasmouse
     }

     mConstraint = MouseConstraint.create(engine, options);
     World.add(world, mConstraint);
     console.log(mConstraint);

  earth.addSatellite(mouseX, mouseY, 50, 1);
  //circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}
    
  console.log("Mouse pressed");


function mouseReleased() {
    
  console.log("Mouse released");
  //earth.addSatellite(mouseX, mouseY, 50, 1);
  
}

function mouseDragged() {
  earth.addSatellite(mouseX, mouseY, 50, 1);
  //circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}



function draw() {
  background(0, 128, 0, 30); 

  for (var i = 0; i < resolution; i++) 
    {
    earth.update();
    for(var j = 0; j < earth.child.length; j++)
    {
      earth.child[j].update();
    }
  }

  earth.show();
    for(var j = 0; j < earth.child.length; j++)
    {
      earth.child[j].show();
    }
    console.log("earth show");

    for (var i = 0; i < circles.length; i++)
     {
      circles[i].show();
     }
   //bound.show();

  // for (var i = 0; i < boundaries.length; i++)
  //  {
  //   boundaries[i].show();
  //  }
    // if (mConstraint.body) {
    // var pos = mConstraint.body.position;
    // fill(0,255,0);
    // ellipse(pos.x ,pos.y, 20, 20);
    // var offset = mConstraint.constraint.pointB;
    // var m = mConstraint.mouse.position;
    // stroke(0, 255, 0);
    // line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
 }
