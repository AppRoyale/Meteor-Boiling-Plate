AuthenticatedNavigation = React.createClass({
  componentDidMount: function() {
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
  },
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  },
  logout() {
    return Meteor.logout();
  },
  render() {
    return (
      <div>
        <ul id="private-dropdown-user" className="dropdown-content">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li>
            <a href="#!">Settings</a>
          </li>
          <li onClick={this.logout}>
            <a href="#">Logout</a>
          </li>
          <li className="divider"></li>
            <li className={FlowHelpers.currentRoute( 'index' )}><a href="/">Index</a></li>
            <li className={FlowHelpers.currentRoute( 'dashboard' )}><a href="/dashboard">Dashboard</a></li>
        </ul>
        <div className="nav-wrapper private-navigation-wrapper">
          <a href="#" data-activates="private-navigation-encapsulated" className="button-collapse">
            <i className="fa fa-bars icon-margins-private-triplebar"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a className="dropdown-button" href="#!" data-activates="private-dropdown-user">{this.currentUserEmail()}
                <i className="fa fa-sort-desc icon-private-dropdown-arrow"></i>
              </a>
            </li>
          </ul>
          <ul className="side-nav" id="private-navigation-encapsulated">
            <li className="private-navigation-sidenav-user">
              <span>
                {this.currentUserEmail()}
              </span>
            </li>
            <li className="divider"></li>
            <li>
              <a href="#">TODO</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
