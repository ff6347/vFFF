// based on
//     ReFoot ::    Convert tagged text (back) to Footnotes            
//       [Ver: 1.0b]    [Author: Marc Autret]    [Modif: 04/03/10]      
//       [Lang: EN]     [Req: InDesign CS4]      [Creat: 04/02/10]
// http://www.indiscripts.com/post/2010/04/refoot-convert-markup-text-into-indesign-footnotes

function buildFootnotes(doc,theStory){
var findGrepPref  = app.findGrepPreferences;
var chngGrepPref = app.changeGrepPreferences;
var findTXTPref  = app.findTextPreferences;
var chngTXTPref = app.changeTextPreferences;
	app.loadFindChangeQuery ("FFF_footnote", SearchModes.grepSearch); 
//	chngGrepPref.changeTo = "$1";
	// Suchen und Ergebnisse in Variable speichern     
	var result = doc.findGrep(); 
	// Mit den Fundstellen der Reihe nach rückwärts was machen   
	for (var i = result.length-1; i >= 0; i--)  
	{ 	 
		fnText = result[i].contents;
		fnParent = result[i].parent.getElements()[0];
		ip = result[i].insertionPoints[0].index;
		result[i].remove();
		
		fn = theStory.footnotes.add(LocationOptions.BEFORE, fnParent.insertionPoints[ip]);
		fn.texts[0].insertionPoints[-1].contents = fnText;
		
		// for(var j = 0 ;j < fn.paragraphs.length;j++){
		// 		fn.paragraphs.item(j).appliedParagraphStyle = "footnote";
		// 		
		// 	}
	}
	doc.changeGrep(); 
	// Zurücksetzen der Sucheinstellungen     
	app.findGrepPreferences = null; 
	// -----------------
	

}
