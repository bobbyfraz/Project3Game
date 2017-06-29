var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;


var engine;
var world;
var path = [];
var particles = [];
var boundaries = [];
var mConstraint;


// var angle = 100;
var resolution = 70;

var earth;
var p;
var bound;

//var end;

function setup() {
  console.log("setup called");
  var canvas = createCanvas(600, 600);
  var engine = Engine.create(),
      world = engine.world;
  earth = new Orbit(width/2, height/2, width/6, 1);
  earth.addSatellite(100, 100, 50, 1);
  earth.addSatellite(150, 200, 50, 2);
  earth.addSatellite(200, 100, 40, 3);
  console.log("setup called2");

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  console.log(canvasmouse);
  var options = {
    mouse:canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  console.log(mConstraint);



function particle(){
 ///var p// = new Particle(10, 100, 10);
  // p.isOffScreen(10,100,10);
var prev = null;
  for (var x = 200; x < 400; x += 20) {

    var fixed = false;
    if (!prev) {
      fixed = true;
    }
    var p = new Particle(x, 100, 5, fixed);
     //var p2 = new Particle(200, 150, 10);
    particles.push(p);
    fill(0,255,0);

    if (prev) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 20,
        stiffness: 0.4
      }
      var constraint = Constraint.create(options);
      World.add(world, constraint);
    }

    prev = p;
  }
}
function boundry(){
bound = new Boundary(200, height, width, 50, 0);
boundaries.push(bound);
}

}


function draw() {

console.log("draw called");
  background(51); 

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
  // p.show(); 
    for (var i = 0; i < particles.length; i++)
     {
      particles[i].show();
      fill(0,255,0);
      console.log("particles")
     }
   //bound.show();

  for (var i = 0; i < boundaries.length; i++)
   {
    boundaries[i].show();
   }


    if (mConstraint.body) {
    var pos = mConstraint.body.position;
    fill(0,255,0);
    ellipse(pos.x ,pos.y, 20, 20);
    var offset = mConstraint.constraint.pointB;
    var m = mConstraint.mouse.position;
    stroke(0, 255, 0);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
  }

   beginShape();
  // //stroke(255, 0, 255);
  fill(0,255,0);
  // for (var pos of path) {
  //   vertex(pos.x, pos.y);
  // }
  // endShape();
}
