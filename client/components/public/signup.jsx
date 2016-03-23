Signup = React.createClass({
  componentDidMount() {
    Modules.client.signup({
      form: "#signup"
    });
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel z-depth-5">
            <h4 className="center"> Material sign up form</h4>
            <div className="row">
              <form className="col s12 m12">
                <div className="row">
                  <div className="input-field col s12 m12">
                    <i className="mdi-action-account-circle prefix" />
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Username</label>
                  </div>
                  <div className="input-field col s12 m12">
                    <i className="mdi-communication-email prefix" />
                    <input id="icon_email" type="email" className="validate" />
                    <label htmlFor="icon_email">Your Email</label>
                  </div>
                  <div className="input-field col s12 m12">
                    <i className="fa fa-unlock-alt prefix" />
                    <input id="icon_password" type="password" className="validate" />
                    <label htmlFor="icon_password">Password</label>
                  </div>
                </div>
              </form>
            </div>{/*row*/}
            <button className="btn waves-effect waves-light center" type="submit" name="action">Sign Up
              <i className="fa fa-sign-in right" />
            </button>
          </div>{/*card*/}
        </div>{/*col*/}
      </div>
    );
  }
});
