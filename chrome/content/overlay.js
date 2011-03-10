var newwindow;

var forcedotcomutilitybelt = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("forcedotcomutilitybelt-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
  		newwindow = window.open("chrome://forcedotcomutilitybelt/content/utilitybelt.html", "Force.com Utility Belt", "titlebar=no,resizable=no,scrollbars=no,width=600,height=320");
  }

};

function closeChild(){
	newwindow.close();
}

window.addEventListener("load", function () { forcedotcomutilitybelt.onLoad(); }, false);
