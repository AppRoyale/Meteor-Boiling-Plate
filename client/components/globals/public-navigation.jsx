PublicNavigation = React.createClass({
  componentDidMount: function() {
    $(".button-collapse").sideNav();
  },
  render() {
    return (
      <div className="nav-wrapper">
        <a href="#" data-activates="public-navigation-encapsulated" className="button-collapse">
          <i className="fa fa-bars icon-margins-public-triplebar"></i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li className={FlowHelpers.currentRoute('login')}>
            <a href={FlowHelpers.pathFor('login')}>Login</a>
          </li>
          <li className={FlowHelpers.currentRoute('signup')}>
            <a href={FlowHelpers.pathFor('signup')}>Sign Up</a>
          </li>
        </ul>
        <ul className="side-nav" id="public-navigation-encapsulated">
          <li className={FlowHelpers.currentRoute('login')}>
            <a href={FlowHelpers.pathFor('login')}>
              <i className="fa fa-sign-in"></i>
              Login
            </a>
          </li>
          <li className={FlowHelpers.currentRoute('signup')}>
            <a href={FlowHelpers.pathFor('signup')}>
              <i className="fa fa-user-plus"></i>
              Sign Up
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="#">content</a>
          </li>
        </ul>
      </div>
    );
  }
});
