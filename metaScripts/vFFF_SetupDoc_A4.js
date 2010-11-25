/** * This is set of JavaScripts for InDesign CS4 * written for the FFF (Verlag f�r Form Forschung). * All code is under CC licensehttp://creativecommons.org/licenses/by/3.0/ * the function main() is in wordPressImport_v0_02.js * the package includes also these following files: * vFFF_findChange_v0_01.js * vFFF_makeCharStyles_v0_02.js * vFFF_makeColors_v0_01.js * vFFF_makeParStyles_v0_02.js * vFFF_SetupDoc_v0_01.js * vFFF_SetupDoc_A4.js *\/metaScripts\/glue code.jsx *\/xml\/wordpress_Example.xml * get the Gentium Font here http://scripts.sil.org/cms/scripts/page.php?item_id=Gentium_download *  *  * this version of setupDoc() is build to have a more basic layout A4 and stuff *  * @author fabiantheblind *///#include "vFFF_makeParStyles_A4.js";//#include "vFFF_makeCharStyles_A4.js";#include "makeStyles.jsx";#include "vFFF_makeColors_v0_01.js";function setupDoc() {	//create a new Document	var thePageHeight = "297mm";	var thePageWidth =  "210";	var theBleed = "3mm";	var theMarginLeft = "25mm";	var theMarginTop = "25mm";	var theMarginRight = "25mm";	var theMarginBottom = "35mm";	var theColumnCount = 3;	var theColumnGutter = "4mm";	var myFontReg = app.fonts.item("Gentium Book Basic	Regular");	var myFontBold = app.fonts.item("Gentium Book Basic	Bold");	var myFontItal = app.fonts.item("Gentium Book Basic	Italic");	var myFontSemiBold = app.fonts.item("Gentium Book Basic	Regular");	var myFontSemiBoldItal = app.fonts.item("Gentium Book Basic	Regular");			var myDocument = app.documents.add()	with (myDocument.documentPreferences) {		pageWidth = thePageWidth;		pageHeight = thePageHeight;		//BleedBox settings		documentBleedBottomOffset = theBleed;		documentBleedTopOffset = theBleed;		documentBleedInsideOrLeftOffset = theBleed;		documentBleedOutsideOrRightOffset = theBleed;	}		with (myDocument.viewPreferences) {		pageWidth = thePageWidth;		pageHeight = thePageHeight;		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;		rulerOrigin = RulerOrigin.pageOrigin;			}		with (myDocument.gridPreferences) {			//setup the masterGrid			baselineDivision = "11.936Pt";			baselineStart = "23.3mm";			baselineGridShown = true;		}		var areStyled = true;	// if "areStyled" in makeCharStyles / makeParStyles is true the already get their attributes.	//Taken from vFFF works	// if false they will be build but empty.	// whats the point of building empty Styles? 	//the Text will already have Paragraphstyles applied to format it only by change the styles	makeColors(myDocument);	makeStyles(areStyled,myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal);//	makeParStyles(areStyled, myDocument,myFontReg,myFontItal,myFontSemiBold);//	makeCharStyles(areStyled,myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal);			//setup margins and columns for the first masterpage		var myFirstMasterSpread = myDocument.masterSpreads.item(0)		with(myFirstMasterSpread.pages.item(0).marginPreferences){				left = theMarginLeft;				top = theMarginTop;				right = theMarginRight;				bottom = theMarginBottom;				columnCount = theColumnCount;				columnGutter = theColumnGutter;		}				var myWidth = myDocument.documentPreferences.pageWidth;		var myHeight = myDocument.documentPreferences.pageHeight;		var y1 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom;//myFirstMasterSpread.pages.item(0).marginPreferences.top;		var x1 = myFirstMasterSpread.pages.item(0).marginPreferences.right;		var y2 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom + 10;		var x2 = myWidth - myFirstMasterSpread.pages.item(0).marginPreferences.left;		var myLeftFooter = myFirstMasterSpread.pages.item(0).textFrames.add({geometricBounds:[y1,x1,y2,x2]})    	with (myLeftFooter.parentStory.insertionPoints.item(0)) {                contents = SpecialCharacters.sectionMarker;                contents = SpecialCharacters.emSpace;                contents = SpecialCharacters.autoPageNumber;        }			myLeftFooter.paragraphs.everyItem().appliedParagraphStyle = myDocument.paragraphStyles.item("Pagina");		var myFirstRightMS = myFirstMasterSpread.pages.item(1)		with(myFirstRightMS.marginPreferences){			left = theMarginLeft;			top = theMarginTop;			right = theMarginRight;			bottom = theMarginBottom;			columnCount = theColumnCount;			columnGutter = theColumnGutter;		}		 y1 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom;//myFirstMasterSpread.pages.item(0).marginPreferences.top;		 x1 = myFirstMasterSpread.pages.item(0).marginPreferences.left;		 y2 = myHeight - myFirstMasterSpread.pages.item(0).marginPreferences.bottom + 10;		 x2 = myWidth - myFirstMasterSpread.pages.item(0).marginPreferences.right;				var myRightFooter = myFirstMasterSpread.pages.item(1).textFrames.add({geometricBounds:[y1,x1,y2,x2]})    	with (myRightFooter.parentStory.insertionPoints.item(0)) {                contents = SpecialCharacters.sectionMarker;                contents = SpecialCharacters.emSpace;                contents = SpecialCharacters.autoPageNumber;        }		myRightFooter.paragraphs.everyItem().appliedParagraphStyle = myDocument.paragraphStyles.item("Pagina");		var mySecondMasterSpread = myDocument.masterSpreads.add()//myDocument.masterSpreads.item(1);				with(mySecondMasterSpread.pages.item(0).marginPreferences){					left = theMarginLeft;					top = theMarginTop;					right = theMarginRight;					bottom = theMarginBottom;					columnCount = theColumnCount;					columnGutter = theColumnGutter;				}				with(mySecondMasterSpread.pages.item(1).marginPreferences){					left = theMarginLeft;					top = theMarginTop;					right = theMarginRight;					bottom = theMarginBottom;					columnCount = theColumnCount;					columnGutter = theColumnGutter;						}			return myDocument;		}		