// Include React
var React = require("react");

var helpers= require("./utils/helper");


var register = React.createClass({

  getInitialState: function(){
    return { r_name: "", r_email: "", r_mobile:"", r_password: "", l_email: "", l_password: ""};
  },
  componentDidMount: function(){
    $("#myModal").modal()
  },
  loginSubmitHandler: function(event){
    event.preventDefault();
    console.log("testing submit");
    console.log(this.state.l_email);
    var loginObj ={};
  },
  handleLoginEmailChange: function(event){
    console.log("changing");
    this.setState({l_email: event.target.value});
  },
  registrationSubmitHandler: function(event){
    event.preventDefault();
    console.log("testing reg");
    console.log(this.state.r_email, this.state.r_mobile, this.state.r_password);
    var loginObj ={
    "name": this.state.r_name,
    "email": this.state.r_email,
    "mobile": this.state.r_mobile,
    "password": this.state.r_password
    };
    console.log(loginObj);
    console.log(helpers.postSignup(loginObj));
  },
  handleRegistratioNameChange: function(event){
    this.setState({r_name: event.target.value});
  },

  handleRegistrationEmailChange: function(event){
    // console.log("changing");
    this.setState({r_email: event.target.value});
  },
  handleRegistrationMobileChange: function(event){
    // console.log("changing");
    this.setState({r_mobile: event.target.value});
  },
  handleRegistrationPasswordChange: function(event){
    // console("mobile changing");
    this.setState({r_password: event.target.value});
  },
  // Here we render the component
  render: function() {

    return (
      <div className="container">

       
 <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                    ×</button>
                <h4 className="modal-title" id="myModalLabel">
                    Game Login/Registration</h4>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-8">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#Login" data-toggle="tab">Login</a></li>
                            <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="Login">
                                <form role="form" method="post" action="/" className="form-horizontal" onSubmit={this.loginSubmitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-sm-2 control-label">
                                        Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email1" placeholder="Email" onChange={this.handleLoginEmailChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="col-sm-2 control-label">
                                        Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary btn-sm"  >
                                            Submit</button>
                                        <a href="javascript:;">Forgot your password?</a>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="Registration">
                                <form role="form" className="form-horizontal" onSubmit={this.registrationSubmitHandler}>
                                <div className="form-group">
                                    <label htmlFor="name" className="col-sm-2 control-label">
                                        Name</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <select className="form-control">
                                                    <option>Mr.</option>
                                                    <option>Ms.</option>
                                                    <option>Mrs.</option>
                                                </select>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" id="name" placeholder="Name" onChange ={this.handleRegistrationNameChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-sm-2 control-label">
                                        Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Email" onChange ={this.handleRegistrationEmailChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile" className="col-sm-2 control-label">
                                        Mobile</label>
                                    <div className="col-sm-10">
                                        <input type="mobile" className="form-control" id="mobile" placeholder="Mobile" onChange ={this.handleRegistrationMobileChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-sm-2 control-label">
                                        Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="password" placeholder="Password" onChange = {this.handleRegistrationPasswordChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary btn-sm" id="save">
                                            Save & Continue</button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            Cancel</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
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
