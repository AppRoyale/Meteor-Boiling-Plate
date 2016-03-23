AppHeader = React.createClass({
  brandLink() {
    if ( !Meteor.loggingIn() && !Meteor.userId() ) {
      return FlowRouter.path( 'login' );
    }
    return FlowRouter.path( 'index' );
  },
  navigationItems() {
    if ( !Meteor.loggingIn() && Meteor.user() ) {
      return <AuthenticatedNavigation />;
    } else {
      return <PublicNavigation />;
    }
  },
  render() {
    return (
      <nav>
           <a className="brand-logo" href={this.brandLink()}>LOGO</a>
           {this.navigationItems()}
       </nav>
    );
  }
});
