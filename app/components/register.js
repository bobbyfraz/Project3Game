// Include React
var React = require("react");

var register = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#UserModal" data-whatever="@mdo">SIGN UP</button>

    <div className="modal fade" id="UserModal" tabindex="-1" role="dialog" aria-labelledby="UserModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
             <h5 className="modal-title" id="UserModalLabel">Sign Up Here</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="first-name" className="form-control-label">First Name:</label>
            <input type="text" className="form-control" id="firstname"/>
            <label for="last-name" className="form-control-label">Last Name:</label>
            <input type="text" className="form-control" id="lastname"/>
            <label for="email" className="form-control-label">Email:</label>
            <input type="text" className="form-control" id="email"/>
             <label for="Phone" className="form-control-label">Phone Number:</label>
            <input type="text" className="form-control" id="number"/>
          </div>
          <div className="form-group">
            <label for="message-text" className="form-control-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" id="senduser" className="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div> 


      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = register;
