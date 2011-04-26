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

// 
// var SCRIPT_NAME = "ReFoot 1.0b";
// 
// var FOOTNOTE_PATTERNS = {
// 	"**NOTE**" : ,
// 	"<note>NOTE</note>" : "<note>([^<]+)</note>",
// 	"<NOTE>" : "<([^>]+)>",
// 	};
// 
// /*var*/ comboBox = function(/*str*/msg, /*str[]*/items, /*str*/title)
// //----------------------------
// 	{
// 	var ddList,
// 		gValid,
// 		w = new Window('dialog',' '+title),
// 		i, s;
// 		
// 	(w.add('statictext',undefined,msg,{multiline:true})).characters = msg.length;
// 
// 	ddList = w.add('dropdownlist');
// 	for( i=0 ; i<items.length ; ++i )
// 		ddList.add((items[i] == '-') ? 'separator' : 'item', items[i]);
// 	
// 	gValid = w.add('group');
// 	w.defaultElement = gValid.add('button',undefined,"OK");
// 	w.cancelElement = gValid.add('button',undefined,"Cancel");
// 
// 	ddList.selection = ddList.items[0];
// 	return  ( w.show() == 1 ) ?
// 		{index: (s=ddList.selection).index, item:s.text} :
// 		false;
// 	};
// 
// /*void*/ Application.prototype.main = function()
// //----------------------------------------------------------
// {
// 
// var tg = this.selection[0] || this.activeDocument;
// if( 'appliedFont' in tg ) tg = tg.parent;
// if( tg.constructor == TextFrame ) tg = tg.parentStory;
// if(! ('findGrep' in tg) ) return;
// 
// var fnPattern = (function()
// 	{
// 	var ptn, ptnItems=[], ret;
// 	for( ptn in FOOTNOTE_PATTERNS ) ptnItems.push(ptn);
// 	//ret = comboBox("Select the footnote pattern used in the text:",	ptnItems, SCRIPT_NAME);
// 	return FOOTNOTE_PATTERNS[0];
// 	})();
// 
// if( !fnPattern ) return;
// 
// var fnFinds = (
// 	function(){
// 	this.findGrepPreferences = this.changeGrepPreferences = null;
// 	this.findGrepPreferences.findWhat = fnPattern;
// 	var ret = tg.findGrep();
// 	this.findGrepPreferences = this.changeGrepPreferences = null;
// 	return ret;
// 	}
// 	).call(this);
// 
// var fnFind,
// 	fnText,
// 	rg = new RegExp(fnPattern),
// 	ip, fnParent, fn, count=0;
// 
// while( fnFind=fnFinds.pop() )
// 	{
// 	fnText = fnFind.contents.match(rg)[1];
// 	fnParent = fnFind.parent.getElements()[0];
// 	ip = fnFind.insertionPoints[0].index;
// 	try	{
// 		fnFind.remove();
// 		fn = fnParent.footnotes.add(LocationOptions.BEFORE, fnParent.insertionPoints[ip]);
// 		fn.texts[0].insertionPoints[-1].contents = fnText;
// 		++count;
// 		}
// 	catch(_){}
// 	}
// 	
// 
// }
// 
// 
// // app.doScript('app.main();', ScriptLanguage.javascript,
// // undefined, UndoModes.entireScript, app.activeScript.displayName);