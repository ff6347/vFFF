#include "styles.jsx";

function setupDoc() {
	//create a new Document
	var pH = "297mm";
	var pW =  "210";
	var theBleed = "3mm";
	var theMarginLeft = "25mm";
	var theMarginTop = "25mm";
	var theMarginRight = "25mm";
	var theMarginBottom = "35mm";
	var theColumnCount = 3;
	var theColumnGutter = "4mm";


	var doc = app.documents.add()
	with (doc.documentPreferences) {
		pageWidth = pW;
		pageHeight = pH;
		facingPages = true;
		//BleedBox settings
		documentBleedBottomOffset = theBleed;
		documentBleedTopOffset = theBleed;
		documentBleedInsideOrLeftOffset = theBleed;
		documentBleedOutsideOrRightOffset = theBleed;
	}
		with (doc.viewPreferences) {
		pageWidth = pW;
		pageHeight = pH;
		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		rulerOrigin = RulerOrigin.pageOrigin;
		
	}
		with (doc.gridPreferences) {
			//setup the masterGrid
			baselineDivision = "17Pt";
			baselineStart = "40mm";
			baselineGridShown = true;
		}
		
		
		buildStyles(doc);
		
		
		//setup margins and columns for the first masterpage
		var ms1 = doc.masterSpreads.item(0)
		with(ms1.pages.item(0).marginPreferences){
				left = theMarginLeft;
				top = theMarginTop;
				right = theMarginRight;
				bottom = theMarginBottom;
				columnCount = theColumnCount;
				columnGutter = theColumnGutter;
		}
		
		var w = doc.documentPreferences.pageWidth;
		var h = doc.documentPreferences.pageHeight;
		var y1 = h - ms1.pages.item(0).marginPreferences.bottom;//ms1.pages.item(0).marginPreferences.top;
		var x1 = ms1.pages.item(0).marginPreferences.right;
		var y2 = h - ms1.pages.item(0).marginPreferences.bottom + 10;
		var x2 = w - ms1.pages.item(0).marginPreferences.left;

		var paginaLeft = ms1.pages.item(0).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
    	with (paginaLeft.parentStory.insertionPoints.item(0)) {
                contents = SpecialCharacters.sectionMarker;
                contents = SpecialCharacters.emSpace;
                contents = SpecialCharacters.autoPageNumber;
        }	
		paginaLeft.paragraphs.everyItem().appliedParagraphStyle = doc.paragraphStyles.item("pagina");

		var ms1right = ms1.pages.item(1)
		with(ms1right.marginPreferences){
			left = theMarginLeft;
			top = theMarginTop;
			right = theMarginRight;
			bottom = theMarginBottom;
			columnCount = theColumnCount;
			columnGutter = theColumnGutter;
		}
		 y1 = h - ms1.pages.item(0).marginPreferences.bottom;//ms1.pages.item(0).marginPreferences.top;
		 x1 = ms1.pages.item(0).marginPreferences.left;
		 y2 = h - ms1.pages.item(0).marginPreferences.bottom + 10;
		 x2 = w - ms1.pages.item(0).marginPreferences.right;
		
		var paginaRight = ms1.pages.item(1).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
    	with (paginaRight.parentStory.insertionPoints.item(0)) {
                contents = SpecialCharacters.sectionMarker;
                contents = SpecialCharacters.emSpace;
                contents = SpecialCharacters.autoPageNumber;
        }
		paginaRight.paragraphs.everyItem().appliedParagraphStyle = doc.paragraphStyles.item("pagina");

		var ms2 = doc.masterSpreads.add()//doc.masterSpreads.item(1);
				with(ms2.pages.item(0).marginPreferences){
					left = theMarginLeft;
					top = theMarginTop;
					right = theMarginRight;
					bottom = theMarginBottom;
					columnCount = theColumnCount;
					columnGutter = theColumnGutter;
				}
				with(ms2.pages.item(1).marginPreferences){
					left = theMarginLeft;
					top = theMarginTop;
					right = theMarginRight;
					bottom = theMarginBottom;
					columnCount = theColumnCount;
					columnGutter = theColumnGutter;
		
				}
			return doc;

		}
		

