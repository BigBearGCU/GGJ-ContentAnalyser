var searchViewModel;
var requestURL="http://localhost:3000/"
var searchURL="searchTweet";

$( document ).ready(function() {
  searchViewModel=new SearchViewModel();
  ko.applyBindings(searchViewModel);
});
