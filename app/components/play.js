var React = require("react");
var Global = require("react-global");
// var boundry = require("./satellite-game/boundry.js");
// var orbit = require("./satellite-game/orbit.js");
// var particle = require("./satellite-game/particle.js");
// var sketch = require("./satellite-game/sketch.js");

// var matterAttractors = require("./satellite-game/libraries/matter-attractors.js");
// var matterWrap = require("./satellite-game/libraries/matter-wrap.js");
// var matter = require("./satellite-game/libraries/matter.js");
// var p5Dom = require("./satellite-game/libraries/p5.dom.js");
// var p5 = require("./satellite-game/libraries/p5.js");
// var p5Sound = require("./satellite-game/libraries/p5.sound.js");

var play = React.createClass({
componentDidMount(){
  console.log("Play Mounted");
  var myStart = Global.get("globalStart");
  myStart();
},
componentWillUnmount(){
  console.log("Play Destroyed");
  var Destroy = Global.get("globalDestroy");
  Destroy();
},


  // Here we render the component
  render: function() {

return(

	<div className="container">
	<button type="button" className="btn btn-primary" id ="click">Click Me!</button>

          <div className="row">
            <div className="text-center" id="game-space">
             Canvas
            </div>
          </div>
          </div>
)
}
});
module.exports = play;