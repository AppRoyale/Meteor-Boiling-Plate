Index = React.createClass({
  logout() {
    return Meteor.logout();
  },
  render() {
    return (
      <div className="jumbotron text-center" style={{padding: '20px'}}>
        <h2>Is this real Life?</h2>
        <p>an initiave by André Skrimann</p>
      <div onClick={this.logout}><a href="#">Logout</a></div>
        <p><a className="btn btn-success" href="http://google.de" role="button">Viewers Discretion is avised</a></p>
        {/* {{ Passing inline style object with camel-case syntax }}*/}
        <p style={{fontSize: '16px', color: '#aaa'}}>Currently in Alpha</p>
      </div>
    );
  }
});
