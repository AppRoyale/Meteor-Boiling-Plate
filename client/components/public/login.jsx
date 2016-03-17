Login = React.createClass({
  componentDidMount() {
    Modules.client.login( { form: "#login" } );
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return (
      <div id="login-page" className="row">
       <div className="col s12 z-depth-4 card-panel">
         <form className="login-form">
           <div className="row">
             <div className="input-field col s12 center">
               <img src="images/login-logo.png" alt className="circle responsive-img valign profile-image-login" />
               <p className="center login-form-text">Material Design Admin Template</p>
             </div>
           </div>
           <div className="row margin">
             <div className="input-field col s12">
               <i className="mdi-social-person-outline prefix" />
               <input id="username" type="text" />
               <label htmlFor="username" className="center-align">Username</label>
             </div>
           </div>
           <div className="row margin">
             <div className="input-field col s12">
               <i className="mdi-action-lock-outline prefix" />
               <input id="password" type="password" />
               <label htmlFor="password">Password</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12 m12 l12  login-text">
               <input type="checkbox" id="remember-me" />
               <label htmlFor="remember-me">Remember me</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <a href="index.html" className="btn waves-effect waves-light col s12">Login</a>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s6 m6 l6">
               <p className="margin medium-small"><a href="page-register.html">Register Now!</a></p>
             </div>
             <div className="input-field col s6 m6 l6">
               <p className="margin right-align medium-small"><a href="page-forgot-password.html">Forgot password ?</a></p>
             </div>
           </div>
         </form>
       </div>
     </div>
    );
  }
});
