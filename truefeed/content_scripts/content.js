
// This method checks if an HTML element has a class element by class name
function hasClass(element, className) {
	return element.classList.contains(className);
}


function handleMessage(request, sender, sendResponse) {
	var linkPosts = document.getElementsByClassName("link");
	var selfPosts = document.getElementsByClassName("self");

    if(request.command === "hideSelf"){
    	console.log("Message from popup: hideSelf");    	

		for(var i = 0; i < selfPosts.length; i++) {
			var selfPost = selfPosts[i];

			selfPost.style.display = "none";
		    
		}
    } else if(request.command === "hideLink") {
    	console.log("Message from popup: hideLink");    	


    	for(var i = 0; i < linkPosts.length; i++) {
    		var linkPost = linkPosts[i];

    		// Checks if link posts also have link tag
    		// Should exclusively hide self tags
    		if(!hasClass(linkPost, "self")) {
		    	linkPosts[i].style.display = "none";
		    }
		}
    }
}

browser.runtime.onMessage.addListener(handleMessage);

