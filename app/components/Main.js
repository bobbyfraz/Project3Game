// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {
  

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>React Router</h1>
            <p><em>Space Game</em></p>
            <div className = "col-lg-offset-8 col-lg-4">
            <Link to="/register"><button className="btn btn-default">Register</button></Link>
            <Link to="/login"><button className="btn btn-default">Login</button></Link>
            <Link to="/play"><button className="btn btn-default">Play Game</button></Link>
            </div>

          </div>

          <div className="row">
            <div className="text-center">
            </div>
          </div>

          <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
