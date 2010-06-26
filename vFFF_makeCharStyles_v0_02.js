/**
 * @author fabianmoronzirfas
 */
app.scriptPreferences.version = 6 ;


function makeCharStyles(myDocument,myFont1,myFont2,MyColor1) {
		var myName;
		
		
		try{
	    	myCharacterStyle01 = myDocument.characterStyles.item("text");
	    	//If the style does not exist, trying to get its name will generate an error.
	    	myName = myCharacterStyle01.name;
	    }
	    catch (myError){
	    	//The style did not exist, so create it.
	    	myCharacterStyle01 = myDocument.characterStyles.add({name:"text"});
	    }
		//At this point, the variable myCharacterStyle01 contains a reference to a character 
		//style object, which you can now use to specify formatting.
		//Now make the text look good.
		myCharacterStyle01.fillColor =  myColor1;
		myCharacterStyle01.appliedFont = myFont2;
		myCharacterStyle01.pointSize = 14;
	

//create another characterstyle
	try{
	    	myCharacterStyle02 = myDocument.characterStyles.item("ital");
	    	myName = myCharacterStyle02.name;
	    }
	    catch (myError){
	    	myCharacterStyle02 = myDocument.characterStyles.add({name:"ital"});
	    }
		myCharacterStyle02.fillColor =  myColor1;
		myCharacterStyle02.appliedFont = myFont2;
		myCharacterStyle02.pointSize = 14;


}

function makeCharStyles_v02(myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal) {
	
		var myName;
		var ZITAT_Namen, Inhaltsverzeichnis_Pagina, Fussnoten_unten, Fussnoten_oben, BUs_kursiv, semibold, versal;



	
	
	
			try{
		    	ZITAT_Namen = myDocument.characterStyles.item("ZITAT_Namen");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = ZITAT_Namen.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ZITAT_Namen = myDocument.characterStyles.add({name:"ZITAT_Namen"})
			with(ZITAT_Namen){

				pointSize = 7;
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

				fillColor = myDocument.swatches.item(2); // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myDocument.swatches.item(0);
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			
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

				pointSize = 9;
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

				fillColor = myDocument.swatches.item(2); // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myDocument.swatches.item(0);
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			
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

				pointSize = 7;
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

				fillColor = myDocument.swatches.item(2); // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myDocument.swatches.item(0);
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			
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

				pointSize = 5.5;
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

				fillColor = myDocument.swatches.item(2); // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myDocument.swatches.item(0);
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
				strikeThru = false;
			
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
//				fillColor = myDocument.swatches.item(2); // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myDocument.swatches.item(0);
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
//				strikeThru = false;
			
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
//				fillColor = myDocument.swatches.item(2); // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myDocument.swatches.item(0);
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
//				strikeThru = false;
			
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
//				fillColor = myDocument.swatches.item(2); // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myDocument.swatches.item(0);
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
			
				}
		    }
}