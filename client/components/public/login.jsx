Login = React.createClass({
  componentDidMount() {
    Modules.client.login({form: "#login"});
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col s12 z-depth-4 card-panel">
          <form id="login" className="login" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12 center">
                <h2>Login</h2>
                <p className="center login-form-text">LOGIN UND SO</p>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"/>
                <input id="email" name="emailAddress" type="email" placeholder="Email"/>
                <label htmlFor="emailAddress" className="center-align">Email</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"/>
                <input id="password" name="password" type="password" placeholder="Password"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                  <input type="submit" className="btn waves-effect waves-light col s1" value="Login" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m6 l6">
                <p className="margin medium-small">
                  <a href="/signup">Register Now!</a>
                </p>
              </div>
              <div className="input-field col s6 m6 l6">
                <p className="margin right-align medium-small">
                  <a href="/recover-password">Forgot password ?</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
