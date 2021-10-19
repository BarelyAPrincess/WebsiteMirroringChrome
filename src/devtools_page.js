console.log('DevTools Panel: Start');

chrome.devtools.panels.create(
	"Mirroring",
	"/assets/app_icon_default.png",
	"/devtools_panel.html",
	function(panel) { 
		console.log("DevTools Panel: Created"); 
	}
);