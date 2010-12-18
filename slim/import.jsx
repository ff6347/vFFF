#include "glue code.jsx";
#include "findChange.jsx";
#include "doc.jsx";
main();
function main(){
	var doc;
	var p;
	var font1;
	var font2;
	var font3;
	var col1, col2;
	var root;
	var cs1, cs2;
	

	
	var theDiag = app.dialogs.add({name:"Setup Dialog"});
	//Add a dialog column.
	with(theDiag.dialogColumns.add()){
		staticTexts.add({staticLabel:"build a new document?"});
	}
	var result = theDiag.show();
	//If the user clicked OK, display one message;
	if(result == true){
		// this creates a new document
		doc = setupDoc();
	}else{
		doc = app.activeDocument;
		// this checks for the right setup in the doc to run all functions
		alert("if the doc: "+ doc.name +" is not build by this script. It won't work");
	}
	//Remove the dialog box from memory.
	theDiag.destroy();
	importXml(doc);
	// the xml is a bit messy for our purpouse
	// this cleans out the unneeded elements
	cleanUpXml(doc,root);
	makeAttributes(doc);

	
	//this is for making the textFrames like the pages margins
	var likeColumns = false;
	var theFrame = placeByAttribute(doc,likeColumns);
	// apply the basic paragraph style
	theFrame.parentStory.appliedParagraphStyle = doc.paragraphStyles.item("body");
	findStyleMeta(doc);
	findTags(doc);
	//this is experimental
	//findIMG(doc);
	DumbRunPages(doc,theFrame.parentStory,likeColumns);
	findNotes(doc);
	
	//this should be the last find/change
	takeOutTheTrash(doc);
	theFrame.associatedXMLElement.untag();
	//this comes from 
	//untagAllxmlElements(doc);
	doc.xmlElements.item(0).remove();
	
}

// based on dumbrunpages by dave saunders
function DumbRunPages(doc, theStory,likeColumns) {   
	// What makes this "dumb" is that default master pages are used.   
	//var uRuler = theDoc.viewPreferences.rulerOrigin;   
	//theDoc.viewPreferences.rulerOrigin = RulerOrigin.spreadOrigin;   
	while (theStory.textContainers[theStory.textContainers.length-1].overflows) {   
		var backPage = doc.pages.add();
		app.activeWindow.activePage = backPage;   
		var myPbounds = backPage.bounds;   
		 var myNewTF = backPage.textFrames.add({
			geometricBounds: getBounds(doc, backPage)
		});
		myNewTF.itemLayer = theStory.textContainers[theStory.textContainers.length-1].itemLayer;   
		myNewTF.previousTextFrame = theStory.textContainers[theStory.textContainers.length-1];   
	if(likeColumns==true){
		myNewTF.textFramePreferences.textColumnCount = backPage.marginPreferences.columnCount;   
		myNewTF.textFramePreferences.textColumnGutter = backPage.marginPreferences.columnGutter; 
		}  
		if (myNewTF.characters.length == 0){   
			//theDoc.viewPreferences.rulerOrigin = uRuler;   
			alert("Permanently overset"); // This indicates a permanent overset condition so break out of loop   
		}   
	}   
}
//
 //
 //param doc
 //returns nothing directly but the xml gets imported into InDesign
 ///
function importXml(doc) {
	var xmlImpPrf = doc.xmlImportPreferences;
	xmlImpPrf.allowTransform = false;
	xmlImpPrf.createLinkToXML = false;
	xmlImpPrf.ignoreUnmatchedIncoming = false;
	xmlImpPrf.ignoreWhitespace = true;
	xmlImpPrf.importCALSTables = false;
	xmlImpPrf.importStyle = XMLImportStyles.mergeImport;
	xmlImpPrf.importTextIntoTables = false;
	xmlImpPrf.importToSelected = false;
	xmlImpPrf.removeUnmatchedExisting = false;
	xmlImpPrf.repeatTextElements = false;

	try {
		root = doc.importXML(File.openDialog("Choose your .xml file"));
	} 
	catch (e) {
		alert(" :( Sorry, your XML Document seems broken." + e);
		exit();
	}
}

function cleanUpXml(doc,root) {
	doc.xmlComments.everyItem().remove();
for (var i=doc.xmlElements.item("rss").xmlElements.item("channel").xmlElements.length-1; i>=0 ; i--) {
	if(doc.xmlElements.item("rss").xmlElements.item("channel").xmlElements.item(i).markupTag.name =="item"){
		var myItem = doc.xmlElements.item("rss").xmlElements.item("channel").xmlElements.item(i).duplicate();
		myItem.move(LocationOptions.atEnd,doc.xmlElements.item("rss"));
	}
}
	doc.xmlElements.item("rss").xmlElements.item("channel").remove();

}

//
//
// param doc
// returns makes attributes from the first Tag
// todo fix that and use the Titel instead makes a lot of stuff easier i think

function makeAttributes(doc){

	var myRuleSet = new Array(new FindAttributeTitle());
	with(doc){
	var elements = xmlElements;
	__processRuleSet(elements.everyItem(), myRuleSet);
	}

}

//
// this gehts the data from the conc
//param doc
//returns
//
function placeByAttribute(doc,likeColumns) {
		
		var p = doc.pages.lastItem();
		 var txtFr = p.textFrames.add({
			geometricBounds: getBounds(doc, p)
		});
		if(likeColumns==true){
			txtFr.textFramePreferences.textColumnCount = p.marginPreferences.columnCount;   
			txtFr.textFramePreferences.textColumnGutter = p.marginPreferences.columnGutter; 
			}
			
		var myRuleSet = new Array(new FindAndPalceText(txtFr));
		with(doc){
			var elements = xmlElements;
			__processRuleSet(elements.item(0), myRuleSet);
		}
	return txtFr;
}


// RULESETS
function FindAttributeDomain(){
	this.name = "FindAttribute";
	this.xpath = "/rss/item/category[@domain = 'tag']||[@nicename]";
	this.apply = function(XML_e, myRuleProcessor){
			//XML_e.xmlAttributes.item("domain").remove();
			XML_e.parent.xmlAttributes.add("id", XML_e.texts.item(0).contents);
			//	alert("Yes I found it");
			return true;
			}

}
function FindAttributeTitle(){
	this.name = "FindAttribute";
	this.xpath = "/rss/item/title";//[@domain = 'tag']||[@nicename]
	this.apply = function(XML_e, myRuleProcessor){
			//XML_e.xmlAttributes.item("domain").remove();
			XML_e.parent.xmlAttributes.add("id", XML_e.texts.item(0).contents);
			//	alert("Yes I found it");
			return true;
			}

}


function FindAndPalceText(txtFr){
	var myInputString = myDialogUI();
    this.name = "FindAttributeCat";
    this.xpath = "/rss/item[@id = '"+ myInputString +"']";	
    this.apply = function(XML_e, myRuleProcessor){

		txtFr.placeXML(XML_e.xmlElements.item("content:encoded"));
        //XML_e.xmlElements.item(0).texts.item(0).fillColor = app.documents.item(0).swatches.item(-1);
        return true;
    }
}


function getBounds(doc, p){
	var pWidth = doc.documentPreferences.pageWidth;
	var pHeight = doc.documentPreferences.pageHeight
	if(p.side == PageSideOptions.leftHand){
		var myX2 = p.marginPreferences.left;
		var myX1 = p.marginPreferences.right;
	}
	else{
		var myX1 = p.marginPreferences.left;
		var myX2 = p.marginPreferences.right;
	}
	var myY1 = p.marginPreferences.top;
	var myX2 = pWidth - myX2;
	var myY2 = pHeight - p.marginPreferences.bottom;
	return [myY1, myX1, myY2, myX2];
}
// the pulldown ui

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
