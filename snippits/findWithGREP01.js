/**
 * @author fabianmoronzirfas
 */
var myDocument = app.documents.add();
//var myDocument = app.activeDocument;
var myPage = myDocument.pages.add();

		// calculate the position of the textFrame
		
var 	myTextFrame01 = myPage.textFrames.add();
var 	myTextFrame02 = myPage.textFrames.add();
var		myStory = myDocument.stories.add();
var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = 3;
var 	myX2 = myDocument.documentPreferences.pageWidth;
var		myString = "<em> This is some Text that has to be italic </em>"+"\n"+
		"This is some Text inbetween"+"\n"+
		"<em> This is some Text that has to be italic </em>"+"\n"+
		"this is just some Text that has an em"+"\n";

		//set the position of the text
		myTextFrame01.geometricBounds = [myY1, myX1, myY2, myX2];
		myTextFrame02.geometricBounds = [myY1+5, myX1, myY2+5, myX2];
		
		myTextFrame01.contents = myString;
		
		 //Clear the find/change grep preferences.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //Set the find options.
    app.findChangeGrepOptions.includeFootnotes = false;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = false;
    app.findChangeGrepOptions.includeMasterPages = false;
    //Regular expression for finding
    app.findGrepPreferences.findWhat = "<em>(.*?)</em>";
	app.changeGrepPreferences.fillTint = 50;
	app.changeGrepPreferences.changeTo = "$1";
	
    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //</fragment>
	
		myTextFrame01.characters.everyItem().appliedFont =  app.fonts.item("Arial");