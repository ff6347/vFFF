function setFCopt(){
	
	emptyFC();
    //Set the find options.
    app.findChangeGrepOptions.includeFootnotes = true;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = true;
    app.findChangeGrepOptions.includeMasterPages = true;
	
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
	// this endnote end of text
	grp[0] = "<a href=\"#sdendnote(\\d+?)anc\">(.*?)</a>";
	// this is endnote within text
	grp[1] = "<a href=\"#sdendnote(\\d+?)sym\"><sup>(.*?)</sup></a>";
	// this is footnote end of text
	grp[2] = "<a href=\"#sdfootnote(\\d+?)anc\">(.*?)</a>";
	//this is footnote within text
	grp[3] = "<a href=\"#sdfootnote(\\d+?)sym\"><sup>(.*?)</sup></a>";
	// this is housekeeping
	grp[4] = "<sup>";
	grp[5] = "</sup>";
	
	
	
	for(var i = 0; i<grp.length; i++ ){
		findGrepPref.findWhat = grp[i];
		if(i == 0){
			chngGrepPref.changeTo = "$1";
			chngGrepPref.appliedParagraphStyle = doc.paragraphStyles.item( "endnote" );
		}
		if(i ==1){
			chngGrepPref.changeTo = "$1";
			chngGrepPref.appliedCharacterStyle = doc.characterStyles.item( "endnote_inText" );
		}
		if(i ==2){
			chngGrepPref.changeTo = "$1";
			chngGrepPref.appliedParagraphStyle = doc.paragraphStyles.item( "footnote" );
		}
		if(i ==3){
			chngGrepPref.changeTo = "$1";
			chngGrepPref.appliedCharacterStyle = doc.characterStyles.item( "footnote_inText" );
		}else if(i > 3 ){

			// we will clear empty spaces out later
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
	strings[11] = "<..>";
	strings[12] = "<...>";
	strings[13] = "<.>";
	strings[14] = "</p>";
	strings[15] = "<p>";
	strings[16] = "<p >";
	strings[17] = "</p >";
	strings[18] = "style=“color: #000000;“";
	strings[19]  = "style=“text-decoration: underline;“";
	strings[20]  = "style=“text-decoration: underline;“";
	strings[21]  = "style=“text-align: left;“";
	strings[22]  = "style=“text-align: right;“";
	strings[23]  = "style=“text-align: center;“";
	strings[24]  = "</span >";
	strings[25]  = "<span >";
	strings[26]  = "style=“color: #";
	strings[27]  = "span ";
	strings[28]  = ";“";
	

	for(var i = 0;i < strings.length;i++){
		setFCopt();
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
//	greps[6] = "\r\r+";// 	Find all double returns and replace with single returns.
//	greps[7] = "<div>";// 	Find all double returns and replace with single returns.
	
	var changeTos = new Array();
	changeTos[0] = " ";
	changeTos[1] = "\r";
	changeTos[2] = "\r";
	changeTos[3] = "\t";
	changeTos[4] = "\r";
	changeTos[5] = "\r";
	changeTos[6] = "\r";
	changeTos[7] = "\r";
	
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
	greps[7] = 	"style=“color: #\d+;“";
	greps[8] = 	"\"color: #\d+\"";
//	greps[9] = 	"<(\d+?)>";
	
	

	emptyFC();
	for(var i = 0;i < greps.length;i++){
		
		if((i == 4) || (i == 5)){
			
			setFCopt();
			emptyFC();
			findGrepPref.findWhat = greps[i];
			chngGrepPref.changeTo = "\n";
			doc.changeGrep();
			emptyFC();
		}else{
			setFCopt();
			emptyFC();
			findGrepPref.findWhat = greps[i];
			chngGrepPref.changeTo = "";
			doc.changeGrep();
			emptyFC();	
			
		}

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
	
	var findTXTPref  = app.findTextPreferences;
	var chngTXTPref = app.changeTextPreferences;
	
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
	
	// div
	findTXTPref.findWhat = "<div>"; 
	//chngGrepPref.appliedCharacterStyle = doc.characterStyles.item("underline");
//	chngTXTPref.changeTo = "\r";
	doc.changeText();
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

// by Mark Lawson November 2007
// found on http://www.1stclassmedia.co.uk/developers/clean-ms-word-formatting.php
function CleanWordHTML( str )
{
str = str.replace(/<o:p>\s*<\/o:p>/g, "") ;
str = str.replace(/<o:p>.*?<\/o:p>/g, "&nbsp;") ;
str = str.replace( /\s*mso-[^:]+:[^;"]+;?/gi, "" ) ;
str = str.replace( /\s*MARGIN: 0cm 0cm 0pt\s*;/gi, "" ) ;
str = str.replace( /\s*MARGIN: 0cm 0cm 0pt\s*"/gi, "\"" ) ;
str = str.replace( /\s*TEXT-INDENT: 0cm\s*;/gi, "" ) ;
str = str.replace( /\s*TEXT-INDENT: 0cm\s*"/gi, "\"" ) ;
str = str.replace( /\s*TEXT-ALIGN: [^\s;]+;?"/gi, "\"" ) ;
str = str.replace( /\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi, "\"" ) ;
str = str.replace( /\s*FONT-VARIANT: [^\s;]+;?"/gi, "\"" ) ;
str = str.replace( /\s*tab-stops:[^;"]*;?/gi, "" ) ;
str = str.replace( /\s*tab-stops:[^"]*/gi, "" ) ;
str = str.replace( /\s*face="[^"]*"/gi, "" ) ;
str = str.replace( /\s*face=[^ >]*/gi, "" ) ;
str = str.replace( /\s*FONT-FAMILY:[^;"]*;?/gi, "" ) ;
str = str.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3") ;
str = str.replace( /<(\w[^>]*) style="([^\"]*)"([^>]*)/gi, "<$1$3" ) ;
str = str.replace( /\s*style="\s*"/gi, '' ) ;
str = str.replace( /<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '&nbsp;' ) ;
str = str.replace( /<SPAN\s*[^>]*><\/SPAN>/gi, '' ) ;
str = str.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3") ;
str = str.replace( /<SPAN\s*>(.*?)<\/SPAN>/gi, '$1' ) ;
str = str.replace( /<FONT\s*>(.*?)<\/FONT>/gi, '$1' ) ;
str = str.replace(/<\\?\?xml[^>]*>/gi, "") ;
str = str.replace(/<\/?\w+:[^>]*>/gi, "") ;
str = str.replace( /<H\d>\s*<\/H\d>/gi, '' ) ;
str = str.replace( /<H1([^>]*)>/gi, '' ) ;
str = str.replace( /<H2([^>]*)>/gi, '' ) ;
str = str.replace( /<H3([^>]*)>/gi, '' ) ;
str = str.replace( /<H4([^>]*)>/gi, '' ) ;
str = str.replace( /<H5([^>]*)>/gi, '' ) ;
str = str.replace( /<H6([^>]*)>/gi, '' ) ;
str = str.replace( /<\/H\d>/gi, '<br>' ) ; //remove this to take out breaks where Heading tags were
str = str.replace( /<(U|I|STRIKE)>&nbsp;<\/\1>/g, '&nbsp;' ) ;
str = str.replace( /<(B|b)>&nbsp;<\/\b|B>/g, '' ) ;
str = str.replace( /<([^\s>]+)[^>]*>\s*<\/\1>/g, '' ) ;
str = str.replace( /<([^\s>]+)[^>]*>\s*<\/\1>/g, '' ) ;
str = str.replace( /<([^\s>]+)[^>]*>\s*<\/\1>/g, '' ) ;
//some RegEx code for the picky browsers
var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)","gi") ;
str = str.replace( re, "<div$2</div>" ) ;
var re2 = new RegExp("(<font|<FONT)([^*>]*>.*?)(<\/FONT>|<\/font>)","gi") ;
str = str.replace( re2, "<div$2</div>") ;
str = str.replace( /size|SIZE = ([\d]{1})/g, '' ) ;

return str ;
}