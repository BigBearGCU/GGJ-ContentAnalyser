var loginViewModel;
var requestURL="http://localhost:3000/"
var loginURL="login"

$( document ).ready(function() {
  loginViewModel=new LoginViewModel();
  ko.applyBindings(loginViewModel);
});
