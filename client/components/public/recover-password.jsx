RecoverPassword = React.createClass({
  componentDidMount() {
    Modules.client.recoverPassword({form: "#recover-password"});
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  render() {
    return (
      <div className="row">
        <div className="col s12 z-depth-4 card-panel">
          <h4>Recover Password</h4>
          <form id="recover-password" className="recover-password" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"/>
                <input name="emailAddress" type="email" placeholder="Email"/>
                <label htmlFor="emailAddress" className="center-align">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                  <input type="submit" className="btn waves-effect waves-light col s4" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
