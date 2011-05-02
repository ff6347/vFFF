#include "glue code.jsx";
#include "findChange.jsx";
#include "footnote.jsx";
#include "../meta/FileWriter.jsx";






function importer(aDoc,xmlRef,list){
	var i_data = new Object();
	i_data.xml  = null;
	i_data.doc = null;
	i_data.title = null;
	i_data.count = 0;  
	i_data.txt = "";

	var doc = aDoc;
    
	var p;
	var font1;
	var font2;
	var font3;
	var col1, col2;
	var root;
	var cs1, cs2;
	var append = true;
	

	importXml(doc,xmlRef);
	// the xml is a bit messy for our purpouse
	// this cleans out the unneeded elements
	cleanUpXml(doc,root);
	makeAttributes(doc);

	
	//this is for making the textFrames like the pages margins
	var likeColumns = false;
	
	for(var i = 0; i < list.length; i++){
		var id = list[i];
		
		var theFrame = placeByAttribute(doc,likeColumns,append,id);
		theFrame.parentStory.appliedParagraphStyle = doc.paragraphStyles.item("body");
		DumbRunPages(doc,theFrame.parentStory,likeColumns);
		remove_empty_frames(doc);
		
		
	}
	remove_empty_pages(doc);
	alert("Done");
	
	
}

//
// this gehts the data from the content
//param doc
//returns
//
function placeByAttribute(doc,likeColumns,append,id) {
		
		var p;
		if(append == false){
		p = doc.pages.lastItem();
	}else{
		p = doc.pages.add();
		
		
	}
		 var txtFr = p.textFrames.add({
			geometricBounds: getBounds(doc, p)
		});
		if(likeColumns==true){
			txtFr.textFramePreferences.textColumnCount = p.marginPreferences.columnCount;   
			txtFr.textFramePreferences.textColumnGutter = p.marginPreferences.columnGutter; 
			}
			
		txtFr.contents = "";
		
		var items = doc.xmlElements.item(0).xmlElements.everyItem();
		for(var j = 0; j < doc.xmlElements.item(0).xmlElements.length; j++ ){
			
			var theItem = doc.xmlElements.item(0).xmlElements.item(j);
			
			var theName = theItem.xmlAttributes.item("id").value.toString();
			if(id.match(theName)){
			
			txtFr.contents = theItem.xmlElements.item("content").contents;
			}
		}
		
		return txtFr;
}


function remove_empty_frames(doc){

	var myStories = doc.stories.everyItem().getElements();
	for (i = myStories.length - 1; i >= 0; i--){
	    var myTextFrames = myStories[i].textContainers;
	    for (j = myTextFrames.length - 1; j >= 0; j--)    {
	        if (myTextFrames[j].contents == ""){
	            myTextFrames[j].remove();
	        }
	    }
	}
	
	// var inlines = doc.stories.everyItem().textFrames.everyItem().getElements();
	// while(tf=inlines.pop()){
	// 	if(tf.contents==""){tf.remove()}
	// }
}
	
	
function remove_empty_pages(doc){

	var pag=doc.pages;
	for(var i=pag.length-1; i>=0; i--){
	    if(pag[i].pageItems.length==0 && pag[i].guides.length==0){
	        pag[i].remove();
	        }
	    }
	
}	

function buildText(doc,list){
	//alert("i m here");
	var txt = "";
	for(var i = 0; i < list.length;i++){
	var id = list[i];
	alert(id);
	//i_data.txt = i_data.txt + "\n"+i +"\n"+i +"\n"+i +"\n"+i +"\n"+i +"\n"+i +"\n"+i +"\n"+i +"\n"+i +"\n";
	var rootNode = doc.xmlElements.firstItem();
   	//Call function traversXmlElements
   	txt = txt + traverseXmlElements(rootNode,id);

	//alert(txt);
	
	//txtFr.contents = txtFr.contents + txt;
	// var myRuleSet = new Array(new FindAndPlaceText(id,txtFr));
	// 	with(doc){
	// 		var elements = xmlElements;
	// 		__processRuleSet(elements.item(0), myRuleSet);
	// 	}
	
	}
	alert(txt + " in buildText()");
	return txt;
}

//Function alerts for each xml element name and text content
//when xml element has attributes the function show Attributes will be called
//when xml element has child nodes the function traverseXmlElements is called again


function traverseXmlElements(xmlNode,id){
	var txt = "";
   for(var i=0; i<xmlNode.xmlElements.length; i++){
      var actualNode = xmlNode.xmlElements[i];
     // alert("Element Name is: " + actualNode.markupTag.name);
     // alert("Element text: " +  actualNode.contents);
      if(actualNode.xmlAttributes.length != 0){
         txt = showAttributes(actualNode,id);
      }
      if(actualNode.xmlElements.length != 0){
         traverseXmlElements(actualNode,id);
      }
   }
	return txt;
}

//Function alerts the name and value of each attribute
function showAttributes(xmlNode,id){
	var txt = "";
      var attribute = xmlNode.xmlAttributes[0];
	var theName = attribute.value.toString();
		if(id.match(theName)){
			txt =  xmlNode.contents;
		//alert("Attribute name: "+ attribute.name);
		//alert("Attribute value: "+ attribute.value);
		}else{
			
		txt = "";
		}
	
	return txt;
}

function FindAndPlaceText(id,txtFr){
    this.name = "FindAndPlaceText";
    this.xpath = "/rss/item/content[@id ='"+id.toString()+"']";	
//	alert(this.name + " is processing "+id +" with this xPath "+this.xpath);
    this.apply = function(XML_e, myRuleProcessor){

			//txtFr.placeXML(XML_e.xmlElements.item("content:encoded"));
			
			txtFr.contents = txtFr.contents + XML_e.contents;
		//	i_data.txt = i_data.txt + XML_e.contents;
	        //XML_e.xmlElements.item(0).texts.item(0).fillColor = app.documents.item(0).swatches.item(-1);
	        return true;
		
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

function FindAttributeTitle(){
	this.name = "FindAttributeTitle";
	this.xpath = "/rss/item/title";//[@domain = 'tag']||[@nicename]
	this.apply = function(XML_e, myRuleProcessor){
		__skipChildren(myRuleProcessor);
	        
			//XML_e.xmlAttributes.item("domain").remove();
			XML_e.parent.xmlElements.item("content:encoded").xmlAttributes.add("id", XML_e.texts.item(0).contents);
			XML_e.parent.xmlAttributes.add("id", XML_e.texts.item(0).contents);
			XML_e.parent.xmlElements.item("content:encoded").markupTag = "content";
			//alert("Yes I found it");
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
function importXml(doc,xml) {
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
		root = doc.importXML(xml);
	} 
	catch (e) {
		alert(" :( Sorry, your .xml file seems to be broken.\n" + e);
		exit();
	}
}
