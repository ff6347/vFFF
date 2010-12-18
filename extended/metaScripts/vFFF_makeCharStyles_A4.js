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
//app.scriptPreferences.version = 6 ;

function makeCharStyles(areStyled,myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal) {
	
		var myName;
		var ZITAT_Namen, Inhaltsverzeichnis_Pagina, Fussnoten_unten, Fussnoten_oben, BUs_kursiv, semibold, versal;
		var myFillColor = myDocument.swatches.item("Black"); // Schwarz/Black
		var myStrokeColor =  myDocument.swatches.item("None");
		var thePointSize = 12;
		// use this for proportinal scaling of the fonts
		// makes it easier to control
		var thePointSizeFactorlow = 0.9;
		var thePointSizeFactorHigh = 1.2;
	
	
	
			try{
		    	ZITAT_Namen = myDocument.characterStyles.item("ZITAT_Namen");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = ZITAT_Namen.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ZITAT_Namen = myDocument.characterStyles.add({name:"ZITAT_Namen"})
			with(ZITAT_Namen){
				if(areStyled==true){
				pointSize = thePointSize*thePointSizeFactorlow;
				leading = 10;
				appliedFont = myFontItal;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
					}
				}
		    }	
	
			try{
		    	Inhaltsverzeichnis_Pagina = myDocument.characterStyles.item("Inhaltsverzeichnis_Pagina");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Inhaltsverzeichnis_Pagina.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Inhaltsverzeichnis_Pagina = myDocument.characterStyles.add({name:"Inhaltsverzeichnis_Pagina"})
			with(Inhaltsverzeichnis_Pagina){
				if(areStyled==true){

				pointSize = thePointSize;
				leading = 11.9;
				appliedFont = myFontBold;
				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
					}
				}
		    }
				
			try{
		    	Fussnoten_unten = myDocument.characterStyles.item("Fussnoten_unten");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Fussnoten_unten.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Fussnoten_unten = myDocument.characterStyles.add({name:"Fussnoten_unten"})
			with(Fussnoten_unten){
				if(areStyled==true){

				pointSize = thePointSize*thePointSizeFactorlow;
				leading = 9;
				appliedFont = myFontBold;
				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
					}
				}
		    }
				
			try{
		    	Fussnoten_oben = myDocument.characterStyles.item("Fussnoten_oben");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Fussnoten_oben.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Fussnoten_oben = myDocument.characterStyles.add({name:"Fussnoten_oben"})
			with(Fussnoten_oben){
				if(areStyled==true){
				
				pointSize = thePointSize*(thePointSizeFactorlow);
				leading = 9;
				appliedFont = myFontReg;
				
				baselineShift  = "2.5pt";
				
				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
				strikeThru = false;
					}
				}
		    }
				
			try{
		    	BUs_kursiv = myDocument.characterStyles.item("BUs_kursiv");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = BUs_kursiv.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	BUs_kursiv = myDocument.characterStyles.add({name:"BUs_kursiv"})
			with(BUs_kursiv){
				if(areStyled==true){
				
//				pointSize = 5.5;
//				leading = 9;
				appliedFont = myFontItal;
				
//				baselineShift  = "2.5pt";
//				
//				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
//				appliedLanguage : "de_DE_2006";
//
//				fillColor = myFillColor; // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myStrokeColor;
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
//				strikeThru = false;
					}
				}
		    }
				
			try{
		    	semibold = myDocument.characterStyles.item("semibold");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = semibold.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	semibold = myDocument.characterStyles.add({name:"semibold"})
			with(semibold){
				if(areStyled==true){

//				pointSize = 5.5;
//				leading = 9;
				appliedFont = myFontSemiBold;
				
//				baselineShift  = "2.5pt";
//				
//				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
//				appliedLanguage : "de_DE_2006";
//
//				fillColor = myFillColor; // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myStrokeColor;
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
//				strikeThru = false;
					}
				}
		    }
				
			try{
		    	versal = myDocument.characterStyles.item("versal");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = versal.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	versal = myDocument.characterStyles.add({name:"versal"})
			with(versal){
				if(areStyled==true){
				
//				pointSize = 7;
//				leading = 10;
				tracking = 75;
//				appliedFont = myFontItal;
//				kerningMethod : "Metrics";
				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
//				appliedLanguage : "de_DE_2006";
//
//				fillColor = myFillColor; // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myStrokeColor;
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
					}
				}
		    }
}