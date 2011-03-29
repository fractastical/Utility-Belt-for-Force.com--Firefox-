Force.com Utility Belt for Firefox README
Version 0.2

Prepared by Joel Dietz (@fractastical) 3.11.11


The following modifications have been made to the original Force.com Utility Belt by Jeff Douglas:

		(1) Convenient jQuery-powered autocomplete allows user to type in query and have the result load in iframe
		(2) Added basic error handling for ID Converter. Most invalid Ids now give an error
		(3) Changed HTML to conform to strict standards (e.g. closed <input /> instead of <input> )
		(4) Changed various elements to conform to standard javascript usage (some things were Chrome specific)
		(5) Moved javascript and css to separate files
		(6) Numerous other minor modifications to get thing working in Firefox correctly 
		(7) Added to git repository (will place on github as soon as challenge is complete)
		(8) Added close and navigation buttons so that the position of the window is not fixed
		(9) Added myself to the credits 

It has been tested in Firefox 3.6.x and Firefox 4 beta.

Notable files are: 

	/forcedotcomutilitybelt/  : this directory contains all the source
	/forcedotcomutilitybelt/content/ff-utilitybelt.js  : this file contains most of the javascript I added to implement new features
	/forcedotcomutilitybelt.xpi : Install file. Can be opened by Firefox. 

There are no known bugs at this time. Enjoy!

