//console.log('background running');
var actual_url = window.location.href;
var searching = 'https://mbasic.facebook.com/group/leave/?group_id=';
var searching2 = 'https://mbasic.facebook.com/groups/';


//test if this is the website : 
if(actual_url.indexOf(searching) != -1 && actual_url != 'https://mbasic.facebook.com/group/leave/?group_id=364997627165697'){
		//found it! (for debug.. njareb)
		console.log("Found it Yeah");
		$('form:eq( 1 )').submit();
		console.log("button clicked");
		chrome.runtime.sendMessage({type: "closeTab"});
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