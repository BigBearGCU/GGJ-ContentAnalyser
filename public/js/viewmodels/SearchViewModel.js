function SearchViewModel(){
  var self=this;

  self.searchString = ko.observable("");
  self.startDate = ko.observable("");
  self.endDate=ko.observable("");
  self.searchResults=[];

  self.onSubmit=function()
  {
    var jsonData = ko.toJSON(self);
    console.log("Logining in ",jsonData);
    $.post(requestURL+searchURL,jsonData,function(searchResults)
    {
        self.searchResults=response;
    })
  }

};
