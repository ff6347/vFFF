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
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;
	var grp = new Array();
	grp[0] = "<a href=\"#sdendnote(\\d+?)anc\">(.*?)</a>";
	grp[1] = "<a href=\"#sdendnote(\\d+?)sym\"><sup>(.*?)</sup></a>";
	grp[2] = "<a href=\"#sdfootnote(\\d+?)anc\">(.*?)</a>";
	grp[3] = "<a href=\"#sdfootnote(\\d+?)sym\"><sup>(.*?)</sup></a>";
	// this is housekeeping
	grp[4] = "<sup>";
	grp[5] = "</sup>";
	
	
	
	for(var i = 0; i<grp.length; i++ ){
		findGrepPref.findWhat = grp[i];
		if(i < 1){
			chngGrepPref.changeTo = "[$1]";
			chngGrepPref.appliedCharacterStyle = doc.characterStyles.item( "endnote" );
			
		}else if(i > 1 && i < 4 ){
			//use the asterix to identify them later
			chngGrepPref.changeTo = "*$1*";
			chngGrepPref.appliedCharacterStyle = doc.characterStyles.item( "footnote" );
			
			} else if(i > 3) {
			// we will clear empty spaces aout later
			chngGrepPref.changeTo = " ";
	
			}
		
		doc.changeGrep();
		emptyFC();
	}
	//something like the following whould be nice
	// at this time you have to sort out the stuff in the text and the stuff at the end
	//manually bäh
	/*	
	grp1 = "(\[\\d+?\])";
	findGrepPref.appliedCharacterStyle = doc.characterStyles.item( "endnote" );
	chngGrepPref.appliedCharacterStyle = doc.characterStyles.item("endnote_inText");
	chngGrepPref.changeTo = "$1";
	doc.changeGrep();
	emptyFC();
	

	grp1 = "*(\\d+?)*";
	findGrepPref.appliedCharacterStyle = doc.characterStyles.item( "footnote" );
	chngGrepPref.appliedCharacterStyle = doc.characterStyles.item( "footnote_inText" );
	chngGrepPref.changeTo = "$1";
	doc.changeGrep();
	emptyFC();
	*/
	
	
}


function takeOutTheTrash(doc){
	
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;
	var findTextPref  = app.findTextPreferences;
	var chngTextPref = app.changeTextPreferences;
	setFCopt();
	emptyFC();
	
	// this is housekeeping
	var strings = new Array();
	strings[0] = "</span>";
	strings[1] = "<span>";
	strings[2] = "<ol>";
	strings[3] = "</ol>";
	strings[4] = "<li>";
	strings[5] = "</li>";
	strings[6] = "\t";
	strings[7] = "<cite>";
	strings[8] = "</cite>";
	strings[9] = "</ul>";
	strings[10] = "<ul>";
	
	
	
	
	
	for(var i = 0;i < strings.length;i++){
		findTextPref.findWhat = strings[i];
		chngTextPref.changeTo = "";
		doc.changeText();
		emptyFC();
	}
	emptyFC();
	
	
	var greps = new Array();
	greps[0] = "  +";// 	Find all double spaces and replace with single spaces.
	greps[1] = "\r ";// 	Find all returns followed by a space And replace with single returns.
	greps[2] = " \r";// 	Find all returns followed by a space and replace with single returns.
	greps[3] = "\t\t+";// 	Find all double tab characters and replace with single tab characters.
	greps[4] = "\r\t";// 	Find all returns followed by a tab character and replace with single returns.
	greps[5] = "\t\r";// 	Find all returns followed by a tab character and replace with single returns.
	greps[6] = "\r\r+";// 	Find all double returns and replace with single returns.
	
	var changeTos = new Array();
	changeTos[0] = " ";
	changeTos[1] = "\r";
	changeTos[2] = "\r";
	changeTos[3] = "\t";
	changeTos[4] = "\r";
	changeTos[5] = "\r";
	changeTos[6] = "\r";
	
	
	emptyFC();
	for(var i = 0;i < greps.length;i++){
		findGrepPref.findWhat = greps[i];
		chngGrepPref.changeTo = changeTos[i];
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
		chngGrepPref.appliedCharacterStyle = doc.characterStyles.item(0);
		
		chngGrepPref.changeTo = "$1";
		doc.changeGrep();
		emptyFC();
	}

	// this doesen't work that easy (see the names) so we parse outside the loop
	// blockqoute

	
	//blockqoute multiline
	findGrepPref.findWhat = "<blockquote>~b*?(.*?)~b*?</blockquote>";
	chngGrepPref.appliedParagraphStyle = doc.paragraphStyles.item("body");
	chngGrepPref.changeTo = "$1";
	doc.changeGrep();
	emptyFC();
	
	// loop thru the easy char styles
	var easyTagToCS = new Array();
	easyTagToCS[0] = "strong";
	easyTagToCS[1] = "em";
	easyTagToCS[2] = "ul";
	//easyTagToCS[3] = "ul";

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

