var newwindow;

var forcedotcomutilitybelt = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("forcedotcomutilitybelt-strings");
	firstRun();
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
  		newwindow = window.open("chrome://forcedotcomutilitybelt/content/utilitybelt.html", "Force.com Utility Belt", "width=600,height=370,titlebar=no,resizable=no,scrollbars=no");
  }

};

function closeChild(){
	newwindow.close();
}


function firstRun()
{

	var myId    = "forcedotcomutilitybelt-toolbar-button"; // ID of button to add
	var navBar  = document.getElementById("nav-bar");
	var curSet  = navBar.currentSet.split(",");

	if (curSet.indexOf(myId) == -1) {

	  var pos = curSet.length;
	  var set = curSet.slice(0, pos).concat(myId).concat(curSet.slice(pos));

	  navBar.setAttribute("currentset", set.join(","));
	  navBar.currentSet = set.join(",");
	  document.persist(navBar.id, "currentset");
	  try {
	    BrowserToolboxCustomizeDone(true);
	  }
	  catch (e) {
		alert(e);
	  }
   }
	
}

window.addEventListener("load", function () { forcedotcomutilitybelt.onLoad(); }, false);
