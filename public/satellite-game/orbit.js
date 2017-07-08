var k = 2;

function Orbit(x, y, r, n, p) {
  this.hue = random(360);
  this.x = x;
  this.y = y;
  this.r = r;
  this.parent = p;
  this.child = [];
  this.speed = (radians(pow(k, n-1)))/resolution;
  this.angle = -PI/4;
  var xdiff = this.x-(p==null?0:p.x);
  var ydiff = this.y-(p==null?0:p.y);
  this.rsum = Math.sqrt(xdiff*xdiff+ydiff*ydiff);

  this.addSatellite = function(x, y, r, speed) {
    this.child.push(new Orbit(x, y, r, speed, this));
  }

  this.update = function() {
    var parent = this.parent;
    if (parent != null) {
      this.angle += this.speed;
      this.x = parent.x + this.rsum * cos(this.angle);
      this.y = parent.y + this.rsum * sin(this.angle);
    }
  }

  this.show = function() {
    fill(this.hue, 255, 255);
    stroke(255, 100);
    strokeWeight(1);
    ellipse(this.x, this.y, this.r*1, this.r*1);
  }
}
