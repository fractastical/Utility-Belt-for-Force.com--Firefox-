var urlBase;
var tabUrl;
var feedUrl = 'http://feeds.feedburner.com/SforceBlog?format=xml';
var maxFeedItems = 1;

var apexOptions=[];
apexOptions[0] = new Option("-- Choose a Topic --", "index.htm");
apexOptions[1] = new Option("Answers Class", "apex_classes_answers.htm");
apexOptions[2] = new Option("Apex Describe Information", "apex_dynamic_describe_objects_understanding.htm");
apexOptions[3] = new Option("Apex in AJAX", "apex_and_ajax.htm");
apexOptions[4] = new Option("Apex Properties", "apex_classes_properties.htm");
apexOptions[5] = new Option("Apex Scheduler", "apex_scheduler.htm");
apexOptions[6] = new Option("ApexPages Methods", "apex_methods_system_apexpages.htm");
apexOptions[7] = new Option("Approval Methods", "apex_methods_system_approval.htm");
apexOptions[8] = new Option("Batch Apex", "apex_batch_interface.htm");
apexOptions[9] = new Option("Callout Limits", "apex_callouts_timeouts.htm");
apexOptions[10] = new Option("Collections - List Methods", "apex_methods_system_list.htm");
apexOptions[11] = new Option("Collections - Map Methods", "apex_methods_system_map.htm");
apexOptions[12] = new Option("Collections - Set Methods", "apex_methods_system_set.htm");
apexOptions[13] = new Option("Cookie Class", "apex_classes_sites_cookie.htm");
apexOptions[14] = new Option("Crypto Class", "apex_classes_restful_crypto.htm");
apexOptions[15] = new Option("Custom Settings Methods", "apex_methods_system_custom_settings.htm");
apexOptions[16] = new Option("Database DMLOptions Methods", "apex_methods_system_database_dmloptions.htm");
apexOptions[17] = new Option("Database Error Object Methods", "apex_methods_system_database_error.htm");
apexOptions[18] = new Option("DML - ConvertLead Operation", "apex_dml_convertLead.htm");
apexOptions[19] = new Option("DML - Delete Operation", "apex_dml_delete.htm");
apexOptions[20] = new Option("DML - Insert Operation", "apex_dml_insert.htm");
apexOptions[21] = new Option("DML - Merge Statement", "apex_dml_merge.htm");
apexOptions[22] = new Option("DML - Update Operation", "apex_dml_update.htm");
apexOptions[23] = new Option("DML - Upsert Operation", "apex_dml_upsert.htm");
apexOptions[24] = new Option("Document Class", "apex_classes_xml_dom_document.htm");
apexOptions[25] = new Option("Dynamic DML", "apex_dynamic_dml.htm");
apexOptions[26] = new Option("Dynamic SOQL", "apex_dynamic_soql.htm");
apexOptions[27] = new Option("Dynamic SOSL", "apex_dynamic_sosl.htm");
apexOptions[28] = new Option("EncodingUtil Class", "apex_classes_restful_encodingUtil.htm");
apexOptions[29] = new Option("Exception Statements", "langCon_apex_exception_statements.htm");
apexOptions[30] = new Option("Future Annotation", "apex_classes_annotation.htm#future");
apexOptions[31] = new Option("Governors and Limits", "apex_gov_limits.htm");
apexOptions[32] = new Option("Http Class", "apex_classes_restful_http_http.htm");
apexOptions[33] = new Option("HttpRequest Class", "apex_classes_restful_http_httprequest.htm");
apexOptions[34] = new Option("HttpResponse Class", "apex_classes_restful_http_httpresponse.htm");
apexOptions[35] = new Option("Ideas Class", "apex_classes_ideas.htm");
apexOptions[36] = new Option("Limits Methods", "apex_methods_system_limits.htm");
apexOptions[37] = new Option("Matcher Methods", "apex_classes_pattern_and_matcher_matcher_methods.htm");
apexOptions[38] = new Option("Outbound Base Email Methods", "apex_classes_email_outbound_base.htm");
apexOptions[39] = new Option("Outbound EmailFileAttachment Methods", "apex_classes_email_outbound_attachment.htm");
apexOptions[40] = new Option("Outbound Mass Email Message Methods", "apex_classes_email_outbound_mass.htm");
apexOptions[41] = new Option("Outbound SendEmailError Object Methods", "apex_classes_email_outbound_sendemailerror.htm");
apexOptions[42] = new Option("Outbound SendEmailResult Object Methods", "apex_classes_email_outbound_sendemailresult.htm");
apexOptions[43] = new Option("Outbound Single Email Message Methods", "apex_classes_email_outbound_single.htm");
apexOptions[44] = new Option("Pattern Methods", "apex_classes_pattern_and_matcher_pattern_methods.htm");
apexOptions[45] = new Option("Primitive Data Types", "langCon_apex_primitives.htm");
apexOptions[46] = new Option("Primitives - Blog Methods", "apex_methods_system_blob.htm");
apexOptions[47] = new Option("Primitives - Boolean Methods", "apex_methods_system_boolean.htm");
apexOptions[48] = new Option("Primitives - Date Methods", "apex_methods_system_date.htm");
apexOptions[49] = new Option("Primitives - Datetime Methods", "apex_methods_system_datetime.htm");
apexOptions[50] = new Option("Primitives - Decimal Methods", "apex_methods_system_decimal.htm");
apexOptions[51] = new Option("Primitives - Double Methods", "apex_methods_system_double.htm");
apexOptions[52] = new Option("Primitives - Integer Methods", "apex_methods_system_integer.htm");
apexOptions[53] = new Option("Primitives - Long Methods", "apex_methods_system_long.htm");
apexOptions[54] = new Option("Primitives - String Methods", "apex_methods_system_string.htm");
apexOptions[55] = new Option("Primitives - Time Methods", "apex_methods_system_time.htm");
apexOptions[56] = new Option("Site Class", "apex_classes_sites.htm");
apexOptions[57] = new Option("Sites - UrlRewriter", "apex_site_urlRewriter.htm");
apexOptions[58] = new Option("sObject Describe Field Result Methods", "apex_methods_system_fields_describe.htm");
apexOptions[59] = new Option("sObject Describe Result Methods", "apex_methods_system_sobject_describe.htm");
apexOptions[60] = new Option("sObject Methods", "apex_methods_system_sobject.htm");
apexOptions[61] = new Option("sObject Schema Methods", "apex_methods_system_schema.htm");
apexOptions[62] = new Option("sObject Types", "langCon_apex_SObjects.htm");
apexOptions[63] = new Option("SOQL Injection", "pages_security_tips_soql_injection.htm");
apexOptions[64] = new Option("System Methods", "apex_methods_system_system.htm");
apexOptions[65] = new Option("Test Methods", "apex_methods_system_test.htm");
apexOptions[66] = new Option("Trigger Context Variable Considerations", "apex_triggers_context_variables_considerations.htm");
apexOptions[67] = new Option("Trigger Context Variables", "apex_triggers_context_variables.htm");
apexOptions[68] = new Option("Triggers and Bulk Requests", "apex_patterns_bulk.htm");
apexOptions[69] = new Option("Triggers and Order of Execution", "apex_triggers_order_of_execution.htm");
apexOptions[70] = new Option("Understanding Expression Operators", "langCon_apex_expressions_operators_understanding.htm");
apexOptions[71] = new Option("UserInfo Methods", "apex_methods_system_userinfo.htm");
apexOptions[72] = new Option("Using Exception Methods", "apex_classes_exception_methods.htm");
apexOptions[73] = new Option("WebService Methods", "apex_web_services_methods.htm");
apexOptions[74] = new Option("Working with Very Large SOQL Queries", "langCon_apex_SOQL_VLSQ.htm");
apexOptions[75] = new Option("XmlNode Class", "apex_classes_xml_dom_xmlnode.htm");
apexOptions[76] = new Option("XmlStreamReader Class", "apex_classes_xml_XmlStream_reader.htm");
apexOptions[77] = new Option("XmlStreamWriter Class", "apex_classes_xml_XmlStream_writer.htm");

var vfMiscOptions=[];
vfMiscOptions[0] = new Option("-- Choose a Topic --", "index.htm");
vfMiscOptions[1] = new Option("Action Class", "apex_pages_action.htm");
vfMiscOptions[2] = new Option("ApexPages Methods", "apex_methods_system_apexpages.htm");
vfMiscOptions[3] = new Option("Building a Controller Extension", "pages_controller_extension.htm");
vfMiscOptions[4] = new Option("Building a Custom Controller", "pages_controller_custom.htm");
vfMiscOptions[5] = new Option("Building a Custom List Controller", "pages_custom_list_controller.htm");
vfMiscOptions[6] = new Option("Controller Methods", "pages_controller_methods.htm");
vfMiscOptions[7] = new Option("Functions", "pages_variables_functions.htm");
vfMiscOptions[8] = new Option("Global Variables", "pages_variables_global.htm");
vfMiscOptions[9] = new Option("Message Class", "apex_pages_message.htm");
vfMiscOptions[10] = new Option("PageReference Class", "apex_pages_pagereference.htm");
vfMiscOptions[11] = new Option("SelectOption Class", "apex_pages_selectoption.htm");
vfMiscOptions[12] = new Option("StandardController Class", "apex_pages_standardcontroller.htm");
vfMiscOptions[13] = new Option("StandardSetController Class", "apex_pages_standardsetcontroller.htm");
vfMiscOptions[14] = new Option("Understanding Execution Governors and Limits", "pages_apex_governor_limits.htm");
vfMiscOptions[15] = new Option("Using a JavaScript Library with Visualforce", "pages_javascript_libraries.htm");
vfMiscOptions[16] = new Option("Using JavaScript to Reference Components", "pages_access.htm");

var vfOptions=[];
vfOptions[0] = new Option("-- Choose a Topic --", "index.htm");
vfOptions[1] = new Option("apex:actionFunction", "actionFunction.htm");
vfOptions[2] = new Option("apex:actionPoller", "actionPoller.htm");
vfOptions[3] = new Option("apex:actionRegion", "actionRegion.htm");
vfOptions[4] = new Option("apex:actionStatus", "actionStatus.htm");
vfOptions[5] = new Option("apex:actionSupport", "actionSupport.htm");
vfOptions[6] = new Option("apex:attribute", "attribute.htm");
vfOptions[7] = new Option("apex:column", "column.htm");
vfOptions[8] = new Option("apex:commandButton", "commandButton.htm");
vfOptions[9] = new Option("apex:commandLink", "commandLink.htm");
vfOptions[10] = new Option("apex:component", "component.htm");
vfOptions[11] = new Option("apex:componentBody", "componentBody.htm");
vfOptions[12] = new Option("apex:composition", "composition.htm");
vfOptions[13] = new Option("apex:dataList", "dataList.htm");
vfOptions[14] = new Option("apex:dataTable", "dataTable.htm");
vfOptions[15] = new Option("apex:define", "define.htm");
vfOptions[16] = new Option("apex:detail", "detail.htm");
vfOptions[17] = new Option("apex:enhancedList", "enhancedList.htm");
vfOptions[18] = new Option("apex:facet", "facet.htm");
vfOptions[19] = new Option("apex:flash", "flash.htm");
vfOptions[20] = new Option("apex:form", "form.htm");
vfOptions[21] = new Option("apex:iframe", "iframe.htm");
vfOptions[22] = new Option("apex:image", "image.htm");
vfOptions[23] = new Option("apex:include", "include.htm");
vfOptions[24] = new Option("apex:includeScript", "includeScript.htm");
vfOptions[25] = new Option("apex:inputCheckbox", "inputCheckbox.htm");
vfOptions[26] = new Option("apex:inputField", "inputField.htm");
vfOptions[27] = new Option("apex:inputFile", "inputFile.htm");
vfOptions[28] = new Option("apex:inputHidden", "inputHidden.htm");
vfOptions[29] = new Option("apex:inputSecret", "inputSecret.htm");
vfOptions[30] = new Option("apex:inputText", "inputText.htm");
vfOptions[31] = new Option("apex:inputTextarea", "inputTextarea.htm");
vfOptions[32] = new Option("apex:insert", "insert.htm");
vfOptions[33] = new Option("apex:listViews", "listViews.htm");
vfOptions[34] = new Option("apex:message", "message.htm");
vfOptions[35] = new Option("apex:messages", "messages.htm");
vfOptions[36] = new Option("apex:outputField", "outputField.htm");
vfOptions[37] = new Option("apex:outputLabel", "outputLabel.htm");
vfOptions[38] = new Option("apex:outputLink", "outputLink.htm");
vfOptions[39] = new Option("apex:outputPanel", "outputPanel.htm");
vfOptions[40] = new Option("apex:outputText", "outputText.htm");
vfOptions[41] = new Option("apex:page", "page.htm");
vfOptions[42] = new Option("apex:pageBlock", "pageBlock.htm");
vfOptions[43] = new Option("apex:pageBlockButtons", "pageBlockButtons.htm");
vfOptions[44] = new Option("apex:pageBlockSection", "pageBlockSection.htm");
vfOptions[45] = new Option("apex:pageBlockSectionItem", "pageBlockSectionItem.htm");
vfOptions[46] = new Option("apex:pageBlockTable", "pageBlockTable.htm");
vfOptions[47] = new Option("apex:pageMessage", "pageMessage.htm");
vfOptions[48] = new Option("apex:pageMessages", "pageMessages.htm");
vfOptions[49] = new Option("apex:panelBar", "panelBar.htm");
vfOptions[50] = new Option("apex:panelBarItem", "panelBarItem.htm");
vfOptions[51] = new Option("apex:panelGrid", "panelGrid.htm");
vfOptions[52] = new Option("apex:panelGroup", "panelGroup.htm");
vfOptions[53] = new Option("apex:param", "param.htm");
vfOptions[54] = new Option("apex:relatedList", "relatedList.htm");
vfOptions[55] = new Option("apex:repeat", "repeat.htm");
vfOptions[56] = new Option("apex:scontrol", "scontrol.htm");
vfOptions[57] = new Option("apex:sectionHeader", "sectionHeader.htm");
vfOptions[58] = new Option("apex:selectCheckboxes", "selectCheckboxes.htm");
vfOptions[59] = new Option("apex:selectList", "selectList.htm");
vfOptions[60] = new Option("apex:selectOption", "selectOption.htm");
vfOptions[61] = new Option("apex:selectOptions", "selectOptions.htm");
vfOptions[62] = new Option("apex:selectRadio", "selectRadio.htm");
vfOptions[63] = new Option("apex:stylesheet", "stylesheet.htm");
vfOptions[64] = new Option("apex:tab", "tab.htm");
vfOptions[65] = new Option("apex:tabPanel", "tabPanel.htm");
vfOptions[66] = new Option("apex:toolbar", "toolbar.htm");
vfOptions[67] = new Option("apex:toolbarGroup", "toolbarGroup.htm");
vfOptions[68] = new Option("apex:variable", "variable.htm");
vfOptions[69] = new Option("apex:vote", "vote.htm");
vfOptions[70] = new Option("ideas:detailOutputLink", "detailOutputLink.htm");
vfOptions[71] = new Option("ideas:listOutputLink", "listOutputLink.htm");
vfOptions[72] = new Option("ideas:profileListOutputLink", "profileListOutputLink.htm");
vfOptions[73] = new Option("knowledge::articleList", ":articleList.htm");
vfOptions[74] = new Option("knowledge:articleTypeList", "articleTypeList.htm");
vfOptions[75] = new Option("knowledge:categoryList", "categoryList.htm");
vfOptions[76] = new Option("messaging:attachment", "attachment.htm");
vfOptions[77] = new Option("messaging:emailHeader", "emailHeader.htm");
vfOptions[78] = new Option("messaging:emailTemplate", "emailTemplate.htm");
vfOptions[79] = new Option("messaging:htmlEmailBody", "htmlEmailBody.htm");
vfOptions[80] = new Option("messaging:plainTextEmailBody", "plainTextEmailBody.htm");
vfOptions[81] = new Option("site:googleAnalyticsTracking", "googleAnalyticsTracking.htm");
vfOptions[82] = new Option("site:previewAsAdmin", "previewAsAdmin.htm");

var soqlOptions=[];
soqlOptions[0] = new Option("-- Choose a Topic --", "index.htm");
soqlOptions[1] = new Option("Aggregate Functions", "sforce_api_calls_soql_select_agg_functions.htm");
soqlOptions[2] = new Option("Aggregate Functions - COUNT", "sforce_api_calls_soql_select_count.htm");
soqlOptions[3] = new Option("Aggregate Functions - Support for Field Types", "sforce_api_calls_soql_select_agg_functions_field_types.htm");
soqlOptions[4] = new Option("Comparison Operators", "sforce_api_calls_soql_select_comparisonoperators.htm");
soqlOptions[5] = new Option("Date Formats and Date Literals", "sforce_api_calls_soql_select_dateformats.htm");
soqlOptions[6] = new Option("Date Functions", "sforce_api_calls_soql_select_date_functions.htm");
soqlOptions[7] = new Option("GROUP BY", "sforce_api_calls_soql_select_groupby.htm");
soqlOptions[8] = new Option("GROUP BY - Using Aliases", "sforce_api_calls_soql_select_groupby_alias.htm");
soqlOptions[9] = new Option("GROUP BY ROLLUP", "sforce_api_calls_soql_select_groupby_rollup.htm");
soqlOptions[10] = new Option("GROUPING(fieldName) to Identify Subtotals", "sforce_api_calls_soql_select_groupby_grouping.htm");
soqlOptions[11] = new Option("HAVING", "sforce_api_calls_soql_select_having.htm");
soqlOptions[12] = new Option("ORDER BY", "sforce_api_calls_soql_select_orderby.htm");
soqlOptions[13] = new Option("Querying Multi-Select Picklists", "sforce_api_calls_soql_querying_multiselect_picklists.htm");
soqlOptions[14] = new Option("Relationship Queries", "sforce_api_calls_soql_relationships.htm");
soqlOptions[15] = new Option("SELECT Syntax", "sforce_api_calls_soql_select.htm");
soqlOptions[16] = new Option("WHERE Clause Syntax", "sforce_api_calls_soql_select_conditionexpression.htm");

var ajaxOptions=[];
ajaxOptions[0] = new Option("-- Choose a Topic --", "index.htm");
ajaxOptions[1] = new Option("API Calls", "sforce_api_ajax_calls.htm");
ajaxOptions[2] = new Option("Connecting to the API", "sforce_api_ajax_connecting.htm");
ajaxOptions[3] = new Option("Embedding API Calls in JavaScript", "sforce_api_ajax_embedding.htm");
ajaxOptions[4] = new Option("Error Handling", "sforce_api_ajax_errors.htm");
ajaxOptions[5] = new Option("Processing Results", "sforce_api_ajax_results.htm");
ajaxOptions[6] = new Option("Sample Visualforce Page", "sforce_api_ajax_introducing.htm#sforce_api_ajax_sample_scontrol");
ajaxOptions[7] = new Option("Using SOAP Header Options", "sforce_api_ajax_headers.htm");

var aWebService=[];
aWebService[0] = new Option("-- Choose a Topic --", "index.htm");
aWebService[1] = new Option("API Call Basics", "calls.htm");
aWebService[2] = new Option("API Field Properties", "access_for_fields.htm");
aWebService[3] = new Option("Core API Calls", "sforce_api_calls_list.htm");
aWebService[4] = new Option("Core Data Types - sObject & ID", "sforce_api_calls_concepts_core_data_objects.htm");
aWebService[5] = new Option("Custom Objects", "sforce_api_objects_custom_objects.htm");
aWebService[6] = new Option("Describe API Calls", "sforce_api_calls_list_describe.htm");
aWebService[7] = new Option("Error Handling", "sforce_api_concepts_errorhandling.htm");
aWebService[8] = new Option("Field Types", "field_types.htm");
aWebService[9] = new Option("Outbound Messaging", "sforce_api_om_outboundmessaging.htm");
aWebService[10] = new Option("Outbound Messaging - Building a Listener", "sforce_api_om_outboundmessaging_listener.htm");
aWebService[11] = new Option("Outbound Messaging - Setup", "sforce_api_om_outboundmessaging_setting_up.htm");
aWebService[12] = new Option("Partner WSDL - Create Sample", "sample_create_call.htm");
aWebService[13] = new Option("Partner WSDL - Objects, Fields, and Field Data", "sforce_api_partner_objects.htm");
aWebService[14] = new Option("Partner WSDL - Overview", "sforce_api_partner.htm");
aWebService[15] = new Option("Partner WSDL - Queries", "sforce_api_partner_queries.htm");
aWebService[16] = new Option("Partner WSDL - Query Sample", "sample_query_calls.htm");
aWebService[17] = new Option("Partner WSDL - Search Sample", "sample_search_call.htm");
aWebService[18] = new Option("Partner WSDL - Update Sample", "sample_update_call.htm");
aWebService[19] = new Option("Primitive Data Types", "primitive_data_types.htm");
aWebService[20] = new Option("Quick Start - Generate or Obtain the Web Service WSDL", "sforce_api_quickstart_steps.htm#step_2_generate_or_obtain_the_web_service_wsdl");
aWebService[21] = new Option("Quick Start - Import the WSDL", "sforce_api_quickstart_steps.htm#step_3_import_the_wsdl_file_into_your_development_platform");
aWebService[22] = new Option("Quick Start - Sample Code", "sforce_api_quickstart_steps.htm#step_4_walk_through_the_sample_code");
aWebService[23] = new Option("Relationships Among Objects", "relationships_among_objects.htm");
aWebService[24] = new Option("Security - Authentication, Token & Sharing", "sforce_api_concepts_security.htm");
aWebService[25] = new Option("SOAP Headers", "soap_headers.htm");
aWebService[26] = new Option("Standard objects & fields", "sforce_api_objects_list.htm");
aWebService[27] = new Option("Standard Objects Data Model (ERD)", "data_model.htm");
aWebService[28] = new Option("Utility API Calls", "utility_calls.htm");

chrome.tabs.getSelected(null, function(tab) {
    myFunction(tab.url);
});

function myFunction(tablink) {
  tabUrl = tablink;
}

function initialize() {
	req = new XMLHttpRequest();
	req.onload = handleResponse;
	req.onerror = handleError;
	req.open("GET", feedUrl, true);
	req.send(null);
	document.getElementById("docsSection").style.display = "block";
	document.getElementById("docsSection").style.visibility = "visible";		
	hideIdConverterSection();
	hideSearchSection();
	hideIFrame();
}

// handles errors during the XMLHttpRequest.
function handleError() {
  handleFeedParsingFailed('Failed to fetch RSS feed.');
}

// handles parsing the feed data we got back from XMLHttpRequest.
function handleResponse() {
  var doc = req.responseXML;
  if (!doc) {
    handleFeedParsingFailed("Not a valid feed.");
    return;
  }
  parseEntry(doc);
}

function parseEntry(doc) {

  var entries = doc.getElementsByTagName('entry');
  if (entries.length == 0) {
    entries = doc.getElementsByTagName('item');
  }
  var count = Math.min(entries.length, maxFeedItems);
  for (var i = 0; i < count; i++) {
    item = entries.item(i);

    // Grab the title for the feed item.
    var itemTitle = item.getElementsByTagName('title')[0];
    if (itemTitle) {
      itemTitle = itemTitle.textContent;
    } else {
      itemTitle = "Get a Free Developer Edition";
    }

    // Grab the url for the feed item.
    var itemUrl = item.getElementsByTagName('link')[0];
    if (itemUrl) {
      itemUrl = itemUrl.getAttribute( 'href' );
    } else {
      itemUrl = "http://www.developer.force.com";
    }

    // Grab the description.
    var itemDesc = item.getElementsByTagName('description')[0];
    if (!itemDesc) {
      itemDesc = item.getElementsByTagName('summary')[0];
      if (!itemDesc) {
        itemDesc = item.getElementsByTagName('content')[0];
      }
    }
    if (itemDesc) {
      itemDesc = itemDesc.childNodes[0].nodeValue;
    } else {
      itemDesc = 'Learn to develop in the cloud.';
    }

  }

	if (itemDesc.length > 140)
		itemDesc = itemDesc.substring(0,136) + "....";

	document.getElementById("feedUrl").href=itemUrl;
	document.getElementById("feedUrl").innerHTML=itemTitle; 
	document.getElementById("feedDesc").innerHTML = itemDesc;

}


function convertId(id) { 
	if (id == null) return id;
	id = id.replace(/\"/g, '');
	if (id.length != 15) {
		return null;
	}
	var suffix = "";
	for (var i = 0; i < 3; i++) {
		var flags = 0;
		for (var j = 0; j < 5; j++) {
			var c = id.charAt(i * 5 + j);
			if (c >= 'A' && c <= 'Z') {
				flags += 1 << j;
			}
		}
		if (flags <= 25) {
			suffix += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(flags);
		} else {
			suffix += "012345".charAt(flags-26);
		}
	}
	return id + suffix;
}

function convert() {
	var cid = convertId(document.getElementById('idToConvert').value);
	if(cid == null)
		alert("Invalid ID");
	else	
		document.getElementById('convertedId').innerHTML = cid;	
}	

function showSubmenu() {
	document.getElementById("sub").style.visibility = "visible";
	document.getElementById("btnOpenWin").style.visibility = "visible";

	switch(parseFloat(document.getElementById("main").options[document.getElementById("main").selectedIndex].value)) {
		case 1:
			baseUrl = "http://www.salesforce.com/us/developer/docs/apexcode/Content/";
			fillSelectList(1);
			break;
		case 2:
			baseUrl = "http://www.salesforce.com/us/developer/docs/pages/Content/pages_compref_";
			fillSelectList(2);
			break;
		case 3:
			baseUrl = "http://www.salesforce.com/us/developer/docs/pages/Content/";
			fillSelectList(3);
			break;
		case 4:
			baseUrl = "http://www.salesforce.com/us/developer/docs/api/Content/";
			fillSelectList(4);
			break;
		case 5:
			baseUrl = "http://www.salesforce.com/us/developer/docs/ajax/Content/";
			fillSelectList(5);
			break;
		case 6:
			baseUrl = "http://www.salesforce.com/us/developer/docs/api/Content/";
			fillSelectList(6);
			break;
			
	}
}

function fillSelectList(option) {
	var list = document.getElementById("sub");
	list.length = 0;
	
	switch(option) {
		case 1:
			for(i=0; i < apexOptions.length; i++)
				list.options.add(apexOptions[i]);
			break;
		case 2:
			for(i=0; i < vfOptions.length; i++)
				list.options.add(vfOptions[i]);
			break;
		case 3:
			for(i=0; i < vfMiscOptions.length; i++)
				list.options.add(vfMiscOptions[i]);
			break;
		case 4:
			for(i=0; i < soqlOptions.length; i++)
				list.options.add(soqlOptions[i]);
			break;
		case 5:
			for(i=0; i < ajaxOptions.length; i++)
				list.options.add(ajaxOptions[i]);
			break;
		case 6:
			for(i=0; i < aWebService.length; i++)
				list.options.add(aWebService[i]);
			break;
	}
	
}


function search() {

	switch(parseInt(document.getElementById("searchScope").selectedIndex)) {
		
		// apex
		case 0:
			url = "http://www.salesforce.com/us/developer/docs/apexcode/index_Left.htm?"+document.getElementById('searchKeyword').value;
		  break;
		
		// apex discussion board
		case 1:
			url = "http://community.salesforce.com/t5/forums/searchpage/tab/message?location=Board%3Aapex&q="+document.getElementById('searchKeyword').value+"&search_page_size=10#message-list";
		  break;
		
		// visualforce
		case 2:
			url = "http://www.salesforce.com/us/developer/docs/pages/index_Left.htm?"+document.getElementById('searchKeyword').value;
		  break;
		
		// visualforce discussion board
		case 3:
			url = "http://community.salesforce.com/t5/forums/searchpage/tab/message?location=Board%3AVisualforce&q="+document.getElementById('searchKeyword').value+"&search_page_size=10#message-list";
		  break;
		
		// ws api
		case 4:
			url = "http://www.salesforce.com/us/developer/docs/api/index_Left.htm?"+document.getElementById('searchKeyword').value;
		  break;
		
		// ws api
		case 5:
			url = "http://www.salesforce.com/us/developer/docs/ajax/index_Left.htm?"+document.getElementById('searchKeyword').value;
		  break;
		
		// metadtaa api
		case 6:
			url = "http://www.salesforce.com/us/developer/docs/api_meta/index_Left.htm?"+document.getElementById('searchKeyword').value;
		  break;
		
		// bulk api
		case 7:
			url = "http://www.salesforce.com/us/developer/docs/api_asynch/index_Left.htm?"+document.getElementById('searchKeyword').value;
		  break;
		
		// blog
		case 8:
			url = "http://blog.jeffdouglas.com/?s="+document.getElementById('searchKeyword').value;
		  break;
		
		// cookbook
		case 9:
			url = "http://developer.force.com/cookbook/recipes/search/"+document.getElementById('searchKeyword').value;
		  break;
		
		// snipplr
		case 10:
			url = "http://snipplr.com/search.php?q="+document.getElementById('searchKeyword').value;
		  break;
		
		// handbook
		case 11:
			url = "http://www.delicious.com/search?p="+document.getElementById('searchKeyword').value+"&chk=&context=userposts|salesforcehandbook&fr=del_icio_us&lc=0";
		  break;
		
		// cod share
		case 12:
			url = "http://developer.force.com/codeshare/globalsearchresultspage?s="+document.getElementById('searchKeyword').value+"&t=CODESHARE";
		  break;
		
		// app exchange
		case 13:
			url = "http://sites.force.com/appexchange/results?type=Apps&keywords="+document.getElementById('searchKeyword').value;
		  break;
		
		// cloudgofer
		case 14:
			url = "http://www.cloudgofer.com/?q="+document.getElementById('searchKeyword').value;
		  break;

		default:
		  url = "http://www.google.com/#hl=en&q="+document.getElementById('searchKeyword').value+"&fp=1";
	
	}
	
	window.open(url);		
	document.getElementById('searchKeyword').value = "";
	self.close();
	
}

function parseUrlForId() {
	var id = "";
	try {
		id = tabUrl.substring(tabUrl.lastIndexOf("/")+1,tabUrl.length);
		if (id.length != 15) {
			id = tabUrl.substring(tabUrl.lastIndexOf("id=")+3,tabUrl.length);
			if (id.length != 15) id = "";
		}

	} catch (err) {
		// do nothing for now
	}
	
	document.getElementById('idToConvert').value = id;
}

function openWin() {
	gotoUrl = baseUrl + document.getElementById("sub").options[document.getElementById("sub").selectedIndex].value;
	window.open(gotoUrl);
}

function changeSubMenu() {
	showIFrame();
	gotoUrl = baseUrl + document.getElementById("sub").options[document.getElementById("sub").selectedIndex].value;
	var iframe = document.getElementById("frame");
	iframe.src = gotoUrl;
	iframe.height = 800;
	expandWindow();
}

function openIFrameFromAutoComplete(url)
{
	showIFrame();
	var iframe = document.getElementById("frame");
	iframe.src = url;
	iframe.height = 800;
	expandWindow();
}
	
function toggle(section) {
	
	// hide everything
	if (section == "docsSection") {
		hideIdConverterSection();
		hideSearchSection();
		document.getElementById("docsSection").style.display = "block";
		document.getElementById("docsSection").style.visibility = "visible";
	} else if (section == "idConverterSection") {
		hideDocSection();
		hideSearchSection();
		hideIFrame();
		shrinkWindow();
		document.getElementById("idConverterSection").style.display = "block";
		document.getElementById("idConverterSection").style.visibility = "visible";
		parseUrlForId();
	} else if (section == "searchSection") {
		hideDocSection();
		hideIdConverterSection();
		hideIFrame();
		shrinkWindow();
		document.getElementById("searchSection").style.display = "block";
		document.getElementById("searchSection").style.visibility = "visible";
	}
	
}

function hideDocSection() {
	document.getElementById("docsSection").style.display = "none";
	document.getElementById("docsSection").style.visibility = "hidden";
}

function hideIdConverterSection() {
	document.getElementById("idConverterSection").style.display = "none";
	document.getElementById("idConverterSection").style.visibility = "hidden";
}

function hideSearchSection() {
	document.getElementById("searchSection").style.display = "none";
	document.getElementById("searchSection").style.visibility = "hidden";
}

function hideIFrame() {
	// reset the sub menu
	document.getElementById("sub").selectedIndex = 0;
	// hide the open window button
	document.getElementById("btnOpenWin").style.display = 'none';
	document.getElementById("frame").style.display = 'none';
	document.getElementById("frame").style.visibility = "hidden";
}

function showIFrame() {
	// show the button
	document.getElementById("btnOpenWin").style.display = 'block';
	document.getElementById("frame").style.display = 'block';
	document.getElementById("frame").style.visibility = "visible";
	expandWindow();
}

function expandWindow() {
	window.resizeTo(800,600);		
}

function shrinkWindow() {
	window.resizeTo(600,370);
}
