//console.log('background running');
var actual_url = window.location.href;
var searching = 'https://mbasic.facebook.com/group/leave/?group_id=';
var searching2 = 'https://mbasic.facebook.com/groups/';


//test if this is the website : 
if(actual_url.indexOf(searching) != -1){
		//found it! (for debug.. njareb)
		console.log("Found it Yeah");
		$("form[action='/a/group/leave/?qp=0']").submit();
		console.log("button clicked");
		setTimeout(
			  function() 
			  {
			chrome.runtime.sendMessage({type: "closeTab"});
			  }, 2000);
		
}




document.body.onload = function() { //everytime the popup is open

var d ;
$.get( "https://mbasic.facebook.com/groups/?seemore", { name: "John", time: "2pm" } )
  .done(function( data ) {
	  d = data;
		chrome.storage.local.set({'data': d}, function() {
          // notify that we saved...
          //console.log('FB HTML stored');
        });
		
  });
  
  
  


  
  

}
