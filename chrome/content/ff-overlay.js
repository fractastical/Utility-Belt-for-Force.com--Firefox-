forcedotcomutilitybelt.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ forcedotcomutilitybelt.showFirefoxContextMenu(e); }, false);
};

forcedotcomutilitybelt.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-forcedotcomutilitybelt").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { forcedotcomutilitybelt.onFirefoxLoad(); }, false);
