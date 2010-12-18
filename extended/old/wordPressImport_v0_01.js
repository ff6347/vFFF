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
 * @author fabiantheblind
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
		myDocument = setupDoc();
	}else{
		myDocument = getSetup();
	}
	//Remove the dialog box from memory.
	mySetupDialog.destroy();

	importXml(myDocument);
	cleanUpXml(myDocument,myRoot);
	//getArticleNumber();
	makeAttributes(myDocument);
	var myFrame = placeByAttribute(myDocument);
	myFrame.parentStory.appliedParagraphStyle = myDocument.paragraphStyles.item("text");
	findH1(myDocument);
	findH2(myDocument);
	findEM(myDocument);
	findQUOTE(myDocument);
	findIMG(myDocument);
	findCMT(myDocument);	
	DumbRunPages(myDocument,myFrame.parentStory);
}


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

function makeAttributes(myDocument){

	var myRuleSet = new Array(new FindAttributeDomain());
	with(myDocument){
	var elements = xmlElements;
	__processRuleSet(elements.everyItem(), myRuleSet);
	}

}

function placeByAttribute(myDocument) {

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
	alert("in Find Attribute Nic");

	this.name = "FindAttribute";
	this.xpath = "/rss/item/category[@domain = 'tag']||[@nicename]";
	//this.xpath = "/rss/item/category@nicename";

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
		quote = myDocument.paragraphStyles.item("quote");
		
	} 
	catch (e) {
		alert("something is missing\n"+"maybee you should check you document again");
	exit();
	}
	
	try {
		myParagraphStyle01 = myDocument.paragraphStyles.item("text");
		
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
		pgNo = myDocument.paragraphStyles.item("pgNo");
		
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

function myDialogUI(){
	var myDialog = app.dialogs.add({
		name: "User Interface Example Script",
		canCancel: true
	});
	with (myDialog) {
		//Add a dialog column.
		with (dialogColumns.add()) {
			//Create a border panel.
			with (borderPanels.add()) {
				with (dialogColumns.add()) {
					//The following line shows how to set a property as you create an object.
					staticTexts.add({
						staticLabel: "Message:"
					});
				}
				
				with (dialogColumns.add()) {
					//The following line shows how to set multiple properties as you create an object.
					var myTextEditField = textEditboxes.add({
						editContents: "Write tag you want to place!",
						minWidth: 180
					});
				}
			}
		}
		//Create another border panel.
		//with(borderPanels.add()){
		//with(dialogColumns.add()){
		//staticTexts.add({staticLabel:"Point Size:"});
		//		}
		//	with(dialogColumns.add()){
		//Create a number entry field. Note that this field uses editValue
		//rather than editText (as a textEditBox would).
		//	var myPointSizeField = measurementEditboxes.add({editValue:72});
		//}
		//}
		//Create another border panel.
		//with(borderPanels.add()){
		//with(dialogColumns.add()){
		//staticTexts.add({staticLabel:"Vertical Justification:"});
		//}	
		//with(dialogColumns.add()){
		//Create a pop-up menu ("dropdown") control.
		//	var myVerticalJustificationMenu = dropdowns.add({stringList:["Top", "Center", "Bottom"], selectedIndex:0});
		//}
		//}
		//Create another border panel.
		//with(borderPanels.add()){
		//	staticTexts.add({staticLabel:"Paragraph Alignment:"});
		//	var myRadioButtonGroup = radiobuttonGroups.add();
		//	with(myRadioButtonGroup){
		//		var myLeftRadioButton = radiobuttonControls.add({staticLabel:"Left", checkedState:true});
		//		var myCenterRadioButton = radiobuttonControls.add({staticLabel:"Center"});
		//		var myRightRadioButton = radiobuttonControls.add({staticLabel:"Right"});
		//	}
		//	}
		//}
		//}
		//Display the dialog box.
		
		if (myDialog.show() == true) {
			var myTag;//, myString, myPointSize, myVerticalJustification;
			//If the user didn’t click the Cancel button,
			//then get the values back from the dialog box.	
			//Get the example text from the text edit field.
			myTag = myTextEditField.editContents;
			//Get the point size from the point size field.
			//myPointSize = myPointSizeField.editValue; 
			//Get the vertical justification setting from the pop-up menu.
			//if(myVerticalJustificationMenu.selectedIndex == 0){
			//	myVerticalJustification = VerticalJustification.topAlign;	
			//}
			//else if(myVerticalJustificationMenu.selectedIndex == 1){
			//	myVerticalJustification = VerticalJustification.centerAlign;
			//}
			//else{
			//	myVerticalJustification = VerticalJustification.bottomAlign;
			//}
			//Get the paragraph alignment setting from the radiobutton group.
			//if(myRadioButtonGroup.selectedButton == 0){
			//	myParagraphAlignment = Justification.leftAlign;
			//}
			//else if(myRadioButtonGroup.selectedButton == 1){
			//	myParagraphAlignment = Justification.centerAlign;
			//}
			//else{
			//	myParagraphAlignment = Justification.rightAlign;
			//}
			myDialog.destroy();
			return myTag;
		}
		else {
			myDialog.destroy()
		}
	}
}
