//Author: Joel Dietz @fractastical
//Must be loaded after utilitybelt.js

var autocompleteOpen = false;

function buildJson(option) {
	
	var jsonOptions = '[ ';
	
	baseUrl = "http://www.salesforce.com/us/developer/docs/apexcode/Content/";
	for(i=1; i < apexOptions.length; i++)
	 	jsonOptions += '{ "label" : "' + apexOptions[i].text + ' " , "url" : "' + baseUrl + apexOptions[i].value + '"},';				

	baseUrl = "http://www.salesforce.com/us/developer/docs/pages/Content/pages_compref_";
	for(i=1; i < vfOptions.length; i++)
 		jsonOptions += '{ "label" : "' + vfOptions[i].text + ' " , "url" : "' + baseUrl + vfOptions[i].value + '"},';				

	baseUrl = "http://www.salesforce.com/us/developer/docs/pages/Content/";
	for(i=1; i < vfMiscOptions.length; i++)
			jsonOptions += '{ "label" : "' + vfMiscOptions[i].text + ' " , "url" : "' + baseUrl + vfMiscOptions[i].value + '"},';				

	baseUrl = "http://www.salesforce.com/us/developer/docs/api/Content/";
	for(i=1; i < soqlOptions.length; i++)
		jsonOptions += '{ "label" : "' + soqlOptions[i].text + ' " , "url" : "' + baseUrl + soqlOptions[i].value + '"}, ';				
	
	baseUrl = "http://www.salesforce.com/us/developer/docs/ajax/Content/";
	for(i=1; i < ajaxOptions.length; i++)
		jsonOptions += '{ "label" : "' + ajaxOptions[i].text + ' " , "url" : "' + baseUrl + ajaxOptions[i].value + '"},';				

	baseUrl = "http://www.salesforce.com/us/developer/docs/api/Content/";
	for(i=1; i < aWebService.length; i++)
		jsonOptions += '{ "label" : "' + aWebService[i].text + ' " , "url" : "' + baseUrl + aWebService[i].value + '"},';				

	jsonOptions = jsonOptions.substring(0,jsonOptions.length - 1);
				
	jsonOptions += ' ]';
				
	return jsonOptions;
	
}

$(function() {

	initEventHandlers();

	var options = jQuery.parseJSON(buildJson());

	$( "#autocomplete" ).autocomplete({
		source: options,
		minLength: 2,
		select: function( event, ui ) {
			openIFrameFromAutoComplete( ui.item.url );
		},
		open: function(event, ui) { 
	 	   autocompleteOpen = true;
		},
		close: function(event, ui) { 
	 	   autocompleteOpen = false;
		}
	   
	});
});

function initEventHandlers() {
	
	//Initially closed window on mouse leave. Disabling for now.
	//$('#container').mouseleave(playMouseLeave);

}

function playMouseLeave() {
	
	if(!autocompleteOpen)
		closeMe();
}

function closeMe() {

	//window can't be closed directly from the same window in Firefox	
	window.opener.closeChild();
	
}

// NW (Northwest) is default location
function moveMe(newLoc) {
	
	var leftOffset = 0;
	var topOffset = 20;
	
	if(newLoc.indexOf('s') != -1)
		topOffset = screen.height - $(window).height();
		
	if(newLoc.indexOf('e') != -1)
	 	leftOffset = screen.width - $(window).width();
	
	window.moveTo(leftOffset, topOffset);
	
}