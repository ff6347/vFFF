/**
 * @author fabianmoronzirfas
 */
app.scriptPreferences.version = 6 ;

function findStyleMeta(myDocument) {
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
    app.findGrepPreferences.findWhat = "style=\"(.*?)\"";
	//app.changeGrepPreferences.fillTint = 50;
	//app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("h1");
	app.changeGrepPreferences.changeTo = "";
    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
	app.findGrepPreferences.findWhat = "id=\"(.*?)\"";
	app.changeGrepPreferences.changeTo = "";
	myDocument.changeGrep();
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
	app.findGrepPreferences.findWhat = "<p >";
	app.changeGrepPreferences.changeTo = "";
	myDocument.changeGrep();
	app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
		app.findGrepPreferences.findWhat = "</p>";
	app.changeGrepPreferences.changeTo = "";
	myDocument.changeGrep();
	app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
	app.findGrepPreferences.findWhat = "<div>";
	app.changeGrepPreferences.changeTo = "";
	myDocument.changeGrep();
	app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
	app.findGrepPreferences.findWhat = "</div>";
	app.changeGrepPreferences.changeTo = "";
	myDocument.changeGrep();
	app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
	
	//finally make the h1 work
	app.findGrepPreferences.findWhat = "<h1 >";
	app.changeGrepPreferences.changeTo = "<h1>";
	myDocument.changeGrep();
	app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;

	
}
function findH1(myDocument) {
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
    app.findGrepPreferences.findWhat = "<h1>(.*?)</h1>";
	//app.changeGrepPreferences.fillTint = 50;
	app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("Kapitelueberschrift");
	app.changeGrepPreferences.changeTo = "$1";

    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //</fragment>
}

function findH2(myDocument) {
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
    app.findGrepPreferences.findWhat = "<h2>(.*?)</h2>";
	//app.changeGrepPreferences.fillTint = 50;
	app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("Ueberschrift");
	app.changeGrepPreferences.changeTo = "$1";

    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //</fragment>
}
function findH3(myDocument) {
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
    app.findGrepPreferences.findWhat = "<h3>(.*?)</h3>";
	//app.changeGrepPreferences.fillTint = 50;
	app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("Ueberschrift");
	app.changeGrepPreferences.changeTo = "$1";

    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //</fragment>
}
function findEM(myDocument) {
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
	//app.changeGrepPreferences.fillTint = 50;
	app.changeGrepPreferences.appliedCharacterStyle = myDocument.characterStyles.item("BUs_kursiv");
	app.changeGrepPreferences.changeTo = "$1";

    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //</fragment>
}
function findQUOTE(myDocument) {
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    app.findChangeGrepOptions.includeFootnotes = false;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = false;
    app.findChangeGrepOptions.includeMasterPages = false;
    app.findGrepPreferences.findWhat = "<blockquote>(.*?)</blockquote>";
	app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("Zitate");
	app.changeGrepPreferences.changeTo = "$1";
    myDocument.changeGrep();
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
	
	
	// find multiline blockquote
	app.findGrepPreferences.findWhat = "<blockquote>~b*?(.*?)~b*?</blockquote>";
	app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("Zitate");
	app.changeGrepPreferences.changeTo = "$1";
	myDocument.changeGrep();
	app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;

}
function findIMG(myDocument) {
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    app.findChangeGrepOptions.includeFootnotes = false;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = false;
    app.findChangeGrepOptions.includeMasterPages = false;
    app.findGrepPreferences.findWhat = "\\[caption(.*?)caption\\]";
	app.changeGrepPreferences.appliedParagraphStyle = myDocument.paragraphStyles.item("img");
	app.changeGrepPreferences.changeTo = "Put Image Here";
    myDocument.changeGrep();
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
}
function findCMT(myDocument) {
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    app.findChangeGrepOptions.includeFootnotes = false;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = false;
    app.findChangeGrepOptions.includeMasterPages = false;
    app.findGrepPreferences.findWhat = "<!-- (.*?) -->";	
	app.changeGrepPreferences.changeTo = "";
    myDocument.changeGrep();
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
}
