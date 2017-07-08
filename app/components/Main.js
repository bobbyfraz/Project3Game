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
        <div className="firstrow col-lg-12 col-md-12 col-sm-12">
        <div className="col-lg-offset-2 col-lg-2 col-md-offset-3 col-md-1 col-sm-10" >
          <Link to="/register"><h4 className = "page-scroll" id="register" >Register</h4></Link>
          </div>
          <div className="col-lg-2 col-md-offset-1 col-md-1 col-sm-10" >
            <Link to="/login"><h4 className = "page-scroll" id="login">Chat</h4></Link>
            </div>
            <div className="col-lg-offset-1 col-lg-2 col-md-2 col-sm-10" >
            <Link to="/play"><h4 className = "page-scroll" id="play">Play Game</h4></Link>
          </div>
        </div>
          <div className="row">
          </div>
          </div>

          <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          </div>
        </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
