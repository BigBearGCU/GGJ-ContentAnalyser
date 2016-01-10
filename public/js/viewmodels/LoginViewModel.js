function LoginViewModel(){
  var self=this;

  self.username = ko.observable("");
  self.password = ko.observable("");
  self.response=ko.observable("");

  self.onSubmit=function()
  {
    //post login
    var jsonData = ko.toJSON(self);
    console.log("Logining in ",jsonData);
    $.post(requestURL+loginURL,jsonData,function(response)
    {
      self.responseJSON(response);
    })
  }

};
