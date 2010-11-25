/**
 * This is set of JavaScripts for InDesign CS4
 * written for the FFF (Verlag für Form Forschung).
 * All code is under CC licensehttp://creativecommons.org/licenses/by/3.0/
 * the function main() is in wordPressImport_v0_02.js
 * the package includes also these following files:
 * vFFF_findChange_v0_01.js
 * vFFF_makeCharStyles_v0_02.js
 * vFFF_makeColors_v0_01.js
 * vFFF_makeParStyles_v0_02.js
 * vFFF_SetupDoc_v0_01.js
 *\/metaScripts\/glue code.jsx
 *\/xml\/wordpress_Example.xml
 *
 *
 * the pre-conditions to run this script are as follows
 * install Adobe InDesign CS4
 * place the whole package in the folder ~/Adobe InDesign CS4/Scripts/Script Panel/
 * set the Fonts in the script vFFF_SetupDoc_v*_**.js (right now it is line 34 and following)
 * 	var myFontReg = app.fonts.item("Your Font Regular");
 * 	var myFontBold = app.fonts.item("Your Font Bold");
 * 	var myFontItal = app.fonts.item("Your Font	Italic");
 * 	var myFontSemiBold = app.fonts.item("Your Font	SemiBold");
 * 	var myFontSemiBoldItal = app.fonts.item("Your Font	SemiBold Italic");
 * 
 * to a font that is on your machine.
 * 
 * Go to your wordpress (if you don't have it install it) and export an authors Posts as .xml
 * save the .xml on your machine (there is an example .xml provided with the code wordpress_Example.xml)
 * If you work wit you own wordpress:
 * the Script can only handle post with 1 Tag. Not 2 or 3 just one. This will be fixed or changed soon
 * 
 * you have now your .xml
 * Goto InDesign CS4 and run the script wordPressImport_v0_02.js from the Scripts Panel
 * 
 * See what happens!
 * 
 * if you have some problems contact me at github.com
 * 
 * find the code @ http://github.com/fabiantheblind/vFFF
 * 
 * thanx to hilfdirselbst.ch Skriptwerkstatt Forum
 * and
 * the Adobe InDesign Scripting Forum
 * 
 * @author fabiantheblind 2010 07 05 
 * @todo fis the try catch for the paragraph and characterstyles in function main() 
 * @todo fix the one Tag Problem
 * @todo maybee use The Title instead
 * @todo import Images from the web or 
 * @todo handel linebreak in GREP Expressions for InDesign
 * @todo add an Index Script (the Basics are already there)
 * @todo make a documatation
 * @todo beta test it. with help by O.O.
 */

//You must copy the file "glue code.jsx" from the XML Rules folder (inside the Scripts
//folder inside your InDesign folder) to the folder containing this script, or provide a full
//path to the file in the next line.
#include "./metaScripts/glue code.jsx";
#include "vFFF_findChange_v0_01.js";
#include "vFFF_SetupDoc_v0_01.js";


//the dumbRunMethod is taken from the "appendTextFrameIfStoryOverflows.js"
//#include "appendTextFrameIfStoryOverflows.js";

main();

function main() {

	var myDocument;
	var myPage;
	var myXMLImportPreferences;
	var myFont;
	var myFontReg;
	var myFontItal;
	var myColor1, myColor2;
	var myRoot;
	var myCharacterStyle01, myCharacterStyle02;

	var mySetupDialog = app.dialogs.add({name:"Setup Dialog"});
	//Add a dialog column.
	with(mySetupDialog.dialogColumns.add()){
		staticTexts.add({staticLabel:"Should i build a new document? (Press OK else Cancel) \n if not are u shure it is the right document"});
	}
	//Show the dialog box.
	var myResult = mySetupDialog.show();
	//If the user clicked OK, display one message;
	if(myResult == true){
		// this creates a new document
		myDocument = setupDoc();
	}else{
		// this checks for the right setup in the doc to run all functions
		myDocument = getSetup();
	}
	//Remove the dialog box from memory.
	mySetupDialog.destroy();

	
	importXml(myDocument);
	// the xml is a bit messy for our purpouse
	// this cleans out the unneeded elements
	cleanUpXml(myDocument,myRoot);
	//getArticleNumber();
	makeAttributes(myDocument);
	
	var myFrame = placeByAttribute(myDocument);
	// apply the basic paragraph style
	myFrame.parentStory.appliedParagraphStyle = myDocument.paragraphStyles.item("Body_Text");
	//this cleans out some syling stuff from the html
	findStyleMeta(myDocument);
	// this parses the html to our paragraph and character styles
	findH1(myDocument);
	findH2(myDocument);
	findH3(myDocument);
	findSTRONG(myDocument);
	findUL(myDocument);
	findLI(myDocument);
	findEM(myDocument);
	findQUOTE(myDocument);
	findIMG(myDocument);
	findCMT(myDocument);
	//this gets rid of the overflow
	DumbRunPages(myDocument,myFrame.parentStory);
	myFrame.associatedXMLElement.untag();
	myDocument.xmlElements.item(0).remove();
	
}

/**
 * 
 * @param myDocument
 * @returns nothing directly but the xml gets imported into InDesign
 */
function importXml(myDocument) {
	myXMLImportPreferences = myDocument.xmlImportPreferences;
    myXMLImportPreferences.allowTransform = false;
    myXMLImportPreferences.createLinkToXML = false;
    myXMLImportPreferences.ignoreUnmatchedIncoming = false;
    myXMLImportPreferences.ignoreWhitespace = true;
    myXMLImportPreferences.importCALSTables = false;
    myXMLImportPreferences.importStyle = XMLImportStyles.mergeImport;
    myXMLImportPreferences.importTextIntoTables = false;
    myXMLImportPreferences.importToSelected = false;
    myXMLImportPreferences.removeUnmatchedExisting = false;
    myXMLImportPreferences.repeatTextElements = false;

    try {
        myRoot = myDocument.importXML(File.openDialog("Choose your .xml file"));
    } 
    catch (e) {
        alert(" :( Sorry, your XML Document seems broken. \r" + e);
        exit();
    }
}
/**
 * 
 * @param myDocument app.activeDocument
 * @param myRoot the Root level of the InDesign xmlElemtents
 * @returns
 */
function cleanUpXml(myDocument,myRoot) {
	
	myDocument.xmlComments.everyItem().remove();
	
for (var i=myDocument.xmlElements.item("rss").xmlElements.item("channel").xmlElements.length-1; i>=0 ; i--) {
	
	if(myDocument.xmlElements.item("rss").xmlElements.item("channel").xmlElements.item(i).markupTag.name =="item"){
		var myItem = myDocument.xmlElements.item("rss").xmlElements.item("channel").xmlElements.item(i).duplicate();
		myItem.move(LocationOptions.atEnd,myDocument.xmlElements.item("rss"));
	}
}
	myDocument.xmlElements.item("rss").xmlElements.item("channel").remove();

}

/**
 * 
 * @param myDocument
 * @returns makes attributes from the first Tag
 * @todo fix that and use the Titel instead makes a lot of stuff easier i think
 */
function makeAttributes(myDocument){

	var myRuleSet = new Array(new FindAttributeTitle());
	with(myDocument){
	var elements = xmlElements;
	__processRuleSet(elements.everyItem(), myRuleSet);
	}

}
/**
 * this gehts the data from the conc
 * @param myDocument
 * @returns
 */
function placeByAttribute(myDocument) {
		
		var myPage = myDocument.pages.lastItem();
		 var myTextFrame = myPage.textFrames.add({
			geometricBounds: myGetBounds(myDocument, myPage)
		});
		var myRuleSet = new Array(new FindAndPalceText(myTextFrame));
		with(myDocument){
			var elements = xmlElements;
			__processRuleSet(elements.item(0), myRuleSet);
		}
	return myTextFrame;
}

function DumbRunPages(myDocument, theStory) {   
	// What makes this "dumb" is that default master pages are used.   
	//var uRuler = theDoc.viewPreferences.rulerOrigin;   
	//theDoc.viewPreferences.rulerOrigin = RulerOrigin.spreadOrigin;   
	while (theStory.textContainers[theStory.textContainers.length-1].overflows) {   
		//Seite nach der letzten Textrahmenseite einfügen  
		var backPage = myDocument.pages.add();
		
		//LocationOptions.after,theStory.textContainers[theStory.textContainers.length-1].parent);    
		app.activeWindow.activePage = backPage;   
		//backPage.appliedMaster = myDocument.pages[-2].appliedMaster;   
		var myPbounds = backPage.bounds;   
		//var myNewTF = backPage.textFrames.add();   
		
		 var myNewTF = backPage.textFrames.add({
			geometricBounds: myGetBounds(myDocument, backPage)
		});
		
		
		//if ( (!myDocument.documentPreferences.facingPages) || (backPage.side == PageSideOptions.rightHand) ) {   
		//	myNewTF.geometricBounds =    
		//	[myPbounds[0] + backPage.marginPreferences.top,    
		//	myPbounds[1] + backPage.marginPreferences.left,    
		//	myPbounds[2] - backPage.marginPreferences.bottom,    
		//	myPbounds[3] - backPage.marginPreferences.right];   
		//} else {   
		//	myNewTF.geometricBounds =    
		//	[myPbounds[0] + backPage.marginPreferences.top,    
		//	myPbounds[1] + backPage.marginPreferences.right,    
		//	myPbounds[2] - backPage.marginPreferences.bottom,    
		//	myPbounds[3] - backPage.marginPreferences.left];   
		//}   
		myNewTF.itemLayer = theStory.textContainers[theStory.textContainers.length-1].itemLayer;   
		myNewTF.previousTextFrame = theStory.textContainers[theStory.textContainers.length-1];   
		myNewTF.textFramePreferences.textColumnCount = backPage.marginPreferences.columnCount;   
		myNewTF.textFramePreferences.textColumnGutter = backPage.marginPreferences.columnGutter;   
		if (myNewTF.characters.length == 0){   
			//theDoc.viewPreferences.rulerOrigin = uRuler;   
			alert("Permanently overset"); // This indicates a permanent overset condition so break out of loop   
		}   
	}   
	//theDoc.viewPreferences.rulerOrigin = uRuler;   
} 
// RULESETS
function FindAttributeDomain(){
	this.name = "FindAttribute";
	this.xpath = "/rss/item/category[@domain = 'tag']||[@nicename]";
	this.apply = function(myElement, myRuleProcessor){
			//myElement.xmlAttributes.item("domain").remove();
			myElement.parent.xmlAttributes.add("id", myElement.texts.item(0).contents);
			//	alert("Yes I found it");
			return true;
			}

}
function FindAttributeTitle(){
	this.name = "FindAttribute";
	this.xpath = "/rss/item/title";//[@domain = 'tag']||[@nicename]
	this.apply = function(myElement, myRuleProcessor){
			//myElement.xmlAttributes.item("domain").remove();
			myElement.parent.xmlAttributes.add("id", myElement.texts.item(0).contents);
			//	alert("Yes I found it");
			return true;
			}

}


function FindAndPalceText(myTextFrame){
	var myInputString = myDialogUI();
    this.name = "FindAttributeCat";
    this.xpath = "/rss/item[@id = '"+ myInputString +"']";	
    this.apply = function(myElement, myRuleProcessor){

		myTextFrame.placeXML(myElement.xmlElements.item("content:encoded"));
        //myElement.xmlElements.item(0).texts.item(0).fillColor = app.documents.item(0).swatches.item(-1);
        return true;
    }
}


function getSetup(myDocument){
try {
		myDocument = app.activeDocument;

} catch (e) {
	alert("You have no Document");
	exit();
	}


	try {
		myPage = myDocument.pages.add();
		
	} 
	catch (e) {
	
	alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	try {
		h1 = myDocument.paragraphStyles.item("h1");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		h2 = myDocument.paragraphStyles.item("h2");
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	
	try {
		h3 = myDocument.paragraphStyles.item("h3");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		quote = myDocument.paragraphStyles.item("Zitat");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myParagraphStyle01 = myDocument.paragraphStyles.item("Body_Text");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myParagraphStyle02 = myDocument.paragraphStyles.item("text2");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		img = myDocument.paragraphStyles.item("img");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
		try {
		pgNo = myDocument.paragraphStyles.item("Pagina");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myColor1 = myDocument.colors.item("Grey");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myColor2 = myDocument.colors.item("img");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myCharacterStyle01 = myDocument.characterStyles.item("text");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myCharacterStyle02 = myDocument.characterStyles.item("ital");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myFontReg = app.fonts.item("Gentium Basic	Regular");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myFontItal = app.fonts.item("Gentium Basic	Italic");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	return myDocument;
}
	

/**
 * 
 * @param myDocument
 * @param myPage
 * @returns the geomatricBounds of the pages raster
 */
function myGetBounds(myDocument, myPage){
	var myPageWidth = myDocument.documentPreferences.pageWidth;
	var myPageHeight = myDocument.documentPreferences.pageHeight
	if(myPage.side == PageSideOptions.leftHand){
		var myX2 = myPage.marginPreferences.left;
		var myX1 = myPage.marginPreferences.right;
	}
	else{
		var myX1 = myPage.marginPreferences.left;
		var myX2 = myPage.marginPreferences.right;
	}
	var myY1 = myPage.marginPreferences.top;
	var myX2 = myPageWidth - myX2;
	var myY2 = myPageHeight - myPage.marginPreferences.bottom;
	return [myY1, myX1, myY2, myX2];
}
/**
 * the pulldown dialog to choose the text to place from
 * 
 * @returns
 */
function myDialogUI(){
	var myList = app.activeDocument.xmlElements.item("rss").xmlElements.everyItem().xmlAttributes.item("id").value;
	var myDialog = app.dialogs.add({name: "CHOOSE THE TEXT TO PLACE",canCancel: true});
with (myDialog){
		//Add a dialog column.
		with (dialogColumns.add()){
			//Create a border panel.
			with (borderPanels.add()){
				with (dialogColumns.add()){
					//The following line shows how to set a property as you create an object.
					staticTexts.add({staticLabel: "Use Text Tagged With:"});
				}

				with(dialogColumns.add()){
				var myDropDown = dropdowns.add({
					stringList:myList
					//selectedIndex:0
			});	
				
				}
			}
		}
		if (myDialog.show() == true) {
			var myTag;
			//myTag = myDropDown.selectedIndex;
			myTag = myList[myDropDown.selectedIndex];
			myDialog.destroy();
			return myTag;
		}else {
			myDialog.destroy();
		}
	}
}
