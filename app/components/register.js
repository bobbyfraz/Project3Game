// Include React
var React = require("react");


var register = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">

       <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Login modal</button>
 <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                    ×</button>
                <h4 className="modal-title" id="myModalLabel">
                    Login/Registration - <a href="http://www.jquery2dotnet.com">jquery2dotnet.com</a></h4>
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
                                <form role="form" method="post" action="/" className="form-horizontal">
                                <div className="form-group">
                                    <label for="email" className="col-sm-2 control-label">
                                        Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email1" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="col-sm-2 control-label">
                                        Password</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary btn-sm">
                                            Submit</button>
                                        <a href="javascript:;">Forgot your password?</a>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="Registration">
                                <form role="form" className="form-horizontal">
                                <div className="form-group">
                                    <label for="email" className="col-sm-2 control-label">
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
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="email" className="col-sm-2 control-label">
                                        Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="mobile" className="col-sm-2 control-label">
                                        Mobile</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="mobile" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="col-sm-2 control-label">
                                        Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-10">
                                        <button type="button" className="btn btn-primary btn-sm" id="save">
                                            Save & Continue</button>
                                        <button type="button" className="btn btn-default btn-sm">
                                            Cancel</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div id="OR" className="hidden-xs">
                            OR</div>
                    </div>
                    <div className="col-md-4">
                        <div className="row text-center sign-with">
                            <div className="col-md-12">
                                <h3>
                                    Sign in with</h3>
                            </div>
                            <div className="col-md-12">
                                <div className="btn-group btn-group-justified">
                                    <a href="#" className="btn btn-primary">Facebook</a> <a href="#" className="btn btn-danger">
                                        Google</a>
                                </div>
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
