#include "toArabic.jsx";
function setFCopt(){
	
	emptyFC();
    //Set the find options.
    app.findChangeGrepOptions.includeFootnotes = false;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = false;
    app.findChangeGrepOptions.includeMasterPages = false;
	
}

function emptyFC(){
	//Clear the find/change grep preferences.
	app.findGrepPreferences = NothingEnum.nothing;
    	chngGrepPref = NothingEnum.nothing;

	
}

function findNotes(doc){
	setFCopt();
	
	var grp = new Array();
	grp[0] = "<a href=\"#sdendnote(\\d+?)anc\">(.*?)</a>";
	grp[1] = "<a href=\"#sdendnote(\\d+?)sym\"><sup>(.*?)</sup></a>";
	grp[2] = "<a href=\"#sdfootnote(\\d+?)anc\">(.*?)</a>";
	grp[3] = "<a href=\"#sdfootnote(\\d+?)sym\"><sup>(.*?)</sup></a>";
	// this is housekeeping
	grp[4] = "<sup>";
	grp[5] = "</sup>";
	
	
	
	for(var i = 0; i<grp.length; i++ ){
		app.findGrepPreferences.findWhat = grp[i];
		app.changeGrepPreferences.appliedCharacterStyle = doc.characterStyles.item( "endnote" );
		
		if(i < 1){
			app.changeGrepPreferences.changeTo = "[$1]~m";
		}else if(i > 1 && i < 4 ){
			app.changeGrepPreferences.changeTo = "$1~m";
			} else if(i > 3) {
			// we will clear empty spaces aout later
			app.changeGrepPreferences.changeTo = " ";
	
			}
		
		doc.changeGrep();
		emptyFC();
	}
	
	
}


function takeOutTheTrash(doc){
	
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;
	setFCopt();
	emptyFC();
	
	// this is housekeeping
	var greps = new Array();
	greps[0] = "</span>";
	
	for(var i = 0;i < greps.length;i++){
		findGrepPref.findWhat = greps[i];
		chngGrepPref.changeTo = "";
		doc.changeGrep();
		emptyFC();
	}
	emptyFC();
}
function findStyleMeta(doc) {
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;
	setFCopt();
	// this is housekeeping
	var greps = new Array();
	greps[0] = "style=\"(.*?)\"";
	greps[1] = "id=\"(.*?)\"";
	greps[2] = "<p >";
	greps[3] = "</p>";
	greps[4] = "<div>";
	greps[5] = "</div>";
	greps[6] = "<!-- (.*?) -->";
	
	emptyFC();
	for(var i = 0;i < greps.length;i++){
		findGrepPref.findWhat = greps[i];
		chngGrepPref.changeTo = "";
		doc.changeGrep();
		emptyFC();
	}
	emptyFC();
	//finally make the h1 work
	findGrepPref.findWhat = "<h1 >";
	chngGrepPref.changeTo = "<h1>";
	doc.changeGrep();
	emptyFC();
}
function findTags(doc) {
	setFCopt();
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;
	
	emptyFC();
	
	var easyTagToPS = new Array();
	easyTagToPS[0] = "h1";
	easyTagToPS[1] = "h2";
	easyTagToPS[2] = "h3";
	easyTagToPS[3] = "h4";
	easyTagToPS[4] = "h5";
	easyTagToPS[5] = "h6";


	for(var i = 0; i < easyTagToPS.length; i++){
	
		findGrepPref.findWhat = "<"+ easyTagToPS[i] + ">(.*?)</" + easyTagToPS[i] + ">";
		chngGrepPref.appliedParagraphStyle = doc.paragraphStyles.item( easyTagToPS[i] );
		chngGrepPref.appliedCharacterStyle = doc.characterStyles.item( 0 );
		
		chngGrepPref.changeTo = "$1";
		doc.changeGrep();
		emptyFC();
	}

	// this doesen't work that easy (see the names) so we parse outside the loop
	// blockqoute

	
	// blockqoute multiline
	findGrepPref.findWhat = "<blockquote>~b*?(.*?)~b*?</blockquote>";
	chngGrepPref.appliedParagraphStyle = doc.paragraphStyles.item("quote");
	chngGrepPref.changeTo = "$1";
	doc.changeGrep();
	emptyFC();
	
	// loop thru the easy char styles
	var easyTagToCS = new Array();
	easyTagToCS[0] = "strong";
	easyTagToCS[1] = "em";
	easyTagToCS[2] = "li";
	easyTagToCS[3] = "ul";

	for(var i = 0; i < easyTagToCS.length; i++){
	
		findGrepPref.findWhat = "<"+ easyTagToCS[i] + ">(.*?)</" + easyTagToCS[i] + ">";
		chngGrepPref.appliedCharacterStyle = doc.characterStyles.item(easyTagToCS[i]);
		chngGrepPref.changeTo = "$1";
		doc.changeGrep();
		emptyFC();
	}
	
	// ul mulitline
	findGrepPref.findWhat = "<ul>~b*?(.*?)~b*?</ul>";
	chngGrepPref.appliedCharacterStyle = doc.characterStyles.item("ul");
	chngGrepPref.changeTo = "$1";
	doc.changeGrep();
	emptyFC();
	
	// underline
	findGrepPref.findWhat = "<span style=\"text-decoration: underline\">(.*?)</span>"; 
	chngGrepPref.appliedCharacterStyle = doc.characterStyles.item("underline");
	chngGrepPref.changeTo = "$1";
	doc.changeGrep();
	emptyFC();

}

function findIMG(doc) {
	emptyFC();
	setFCopt();
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;	findGrepPref.findWhat = "\\[caption(.*?)caption\\]";
	chngGrepPref.appliedCharacterStyle = doc.characterStyles.item("img");
	chngGrepPref.changeTo = "Put Image Here";
	doc.changeGrep();
	emptyFC();
}

