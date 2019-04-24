/*jslint browser: true*/
var title = document.getElementById("title");

function hideSelf() {
	title.innerHTML = "Hide Self";
	browser.tabs.query({active: true, currentWindow: true})
        .then(send)
    function send(tabs) { 
      browser.tabs.sendMessage(tabs[0].id, {
        command: "hideSelf"
        });
    }
}


function hideLink() {
	title.innerHTML = " Hide Link";
	browser.tabs.query({active: true, currentWindow: true})
        .then(send)
    function send(tabs) { 
      browser.tabs.sendMessage(tabs[0].id, {
        command: "hideLink"
        });
    }
}

document.getElementById("hide_self").addEventListener("click", hideSelf);

document.getElementById("hide_link").addEventListener("click", hideLink);