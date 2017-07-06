// install plugin
Matter.use(
  'matter-attractors' // PLUGIN_NAME
);

function Particle(x, y, r) {
this.hue = random(360);
  var options = {
    mass:100,
        frictionAir: 0,
        plugin: {
          attractors: [
            MatterAttractors.Attractors.gravity
          ]
        }
      }
 
  this.body = Bodies.circle(x, y, r, options);
  this.body.label = "Satellite";
  this.r = r;
  World.add(world, this.body);

  this.isOffScreen = function() {
    var x = this.body.position.x;
    var y = this.body.position.y;
    return (x < -50 || x > width + 50 || y > height + 50);
  }

  this.removeFromWorld = function() {
    console.log("Removing particle's body from world");
    World.remove(world, this.body);
  }

  this.show = function() {
    fill(this.hue, 255, 255);
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    ellipse(0, 0, this.r * 2);
    pop();
  }

}


function Earth(x, y, r) {
  var inside = color(651, 351, 0);
    var options = {
    friction: 0,
    restitution: 1,
    plugin: {
          attractors: [
            MatterAttractors.Attractors.gravity
          ],
           wrap: {
            min: { x: 0, y: 0 },
            max: { x: 500, y: 500 }
          }
        }
  }
  this.body = Bodies.circle(x, y, r, options);
  this.body.label = "Earth";
  Matter.Body.setStatic(this.body, true);
  Matter.Body.setMass(this.body, 100000);
  this.r = r;
  World.add(world, this.body);

  this.show = function() {
   
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(inside);
    ellipse(0, 0, this.r * 2);
    pop();
  }

}