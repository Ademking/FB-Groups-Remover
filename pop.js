
  chrome.storage.local.get("data", function(items) {
    if (!chrome.runtime.error) { // all code here
		
      //console.log(items.data);
	  
	  
		   var s = items.data;
		   var datahtml = s;
		   
		   
		   
		   
		  // get Names  
		   var nameArray = $(datahtml).find("li.bj > table > tbody > tr > td.t > a").map(function(){
					   return $(this).text();
					}).get();
					
					
					
					
		 // get Links of Groups	
		  var linksArray = $(datahtml).find("li.bj > table > tbody > tr > td.t > a").map(function(){
					   return $(this).attr("href");
					}).get();
				
				
				
				
				
				var  linksArray2 = linksArray.slice();
				
		// Make full link of group	
		  for(var i=0; i < linksArray2.length; i++) {
			 linksArray2[i] = linksArray2[i].replace("/groups/", 'https://www.facebook.com/groups/');
		   } 
			



			
			//make ids array copy
		  var idsArray = linksArray.slice();  
		   // remove from href strings
		  for(var i=0; i < idsArray.length; i++) {
			 idsArray[i] = idsArray[i].replace("/groups/", '');
			 idsArray[i] = idsArray[i].replace(/\?refid=\d\d/g, '');
		   }

		chrome.browserAction.setBadgeText({text: nameArray.length.toString()});
		chrome.browserAction.setBadgeBackgroundColor({color: "red"});	
		   //console.log(nameArray);	//names
		   //console.log(linksArray2); //links
		   //console.log(idsArray); // ids

			//make text shorter
	  function truncate(string){
		   if (string.length > 25)
			  return string.substring(0,25)+' ...';
		   else
			  return string;
		};
  
	
	
			
		
		for(var i=0; i < idsArray.length; i++) {
	
			var x = truncate(nameArray[i]);
			//$("ul").append('<li class="list-group-item"><span class="badge" ><a href="'+linksArray2[i]+'"><button linko="'+idsArray[i]+'" type="button" class="btn btn-success btn-lg btn3d"><span class="glyphicon glyphicon-ok"></span> Open</button></a>&nbsp;<a href="https://mbasic.facebook.com/group/leave/?group_id='+idsArray[i]+'" target="_blank"><button type="button" class="btn btn-danger btn-lg btn3d"><span class="glyphicon glyphicon-remove"></span> Remove</button></a></span><img src="http://static.iconarchive.com/static/images/social/facebook-icon.png"></img>&nbsp;&nbsp;'+x+'</li>');
			$("ul").append('<li class="list-group-item"><span class="badge" ><button linko="'+idsArray[i]+'" type="button" class="btn btn-success btn-lg btn3d"><span class="glyphicon glyphicon-ok"></span> Open</button>&nbsp;<button linko="'+idsArray[i]+'" type="button" class="btn btn-danger btn-lg btn3d"><span class="glyphicon glyphicon-remove"></span> Remove</button></span><img src="http://static.iconarchive.com/static/images/social/facebook-icon.png"></img>&nbsp;&nbsp;'+x+'</li>');
		}
	  
	  
	  
	  
	  $('.btn-danger').on("click", function() { // remove button
         var id_del = $( this ).attr("linko") ;
		 var full_url = "https://mbasic.facebook.com/group/leave/?group_id=" + id_del;
		console.log(full_url);
		
		
		var answer = confirm("Are You Sure ?")
					if (answer) {
						chrome.tabs.create({ url: full_url, active: false, });
						
						
						$(this).parent().parent().fadeOut(300, function(){ $(this).remove();});
					    //$(this).parent().remove();
					}
					else {
						
					}
		
		
		
		
    });
	
	
	
	
	
		  $('.btn-success').on("click", function() { // open button
				 var id_del = $( this ).attr("linko") ;
				 var full_url = "https://www.facebook.com/groups/" + id_del;
				  chrome.tabs.create({ url: full_url, active: true, });
		});
	
	
	
	
	
	if(nameArray.length < 1){ 
		chrome.browserAction.setBadgeText({text: "0"});
		chrome.browserAction.setBadgeBackgroundColor({color: "black"});	
		$(".list-group").remove;
		$("body").append('<h2 class="text-center">You Must Login in...</h2><img class="img-responsive center-block" src="error.jpg"></img>')
		$("body").css("height", "200px");
	}
	
	
	
	  
	  
    }
  });

  

  

  
  
