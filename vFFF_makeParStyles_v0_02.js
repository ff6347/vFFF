/**
 * @author fabianmoronzirfas
 */
app.scriptPreferences.version = 6 ;


function makeParStyles(myDocument,myFont) {
		var myName;
		var myParagraphStyle01,myParagraphStyle02h1,h2,h3,quote,img,pgNo;

		try{
		    	myParagraphStyle01 = myDocument.paragraphStyles.item("text");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    myName = myParagraphStyle01.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
				
				//At this point, the variable myParagraphStyle01 contains a reference to a Paragraph 
				//style object, which you can now use to specify formatting.
				//Now make the text look good.
				
		    	myParagraphStyle01 = myDocument.paragraphStyles.add({name:"text"})
				with(myParagraphStyle01){
				alignToBaseline = true;
				pointSize = "9pt";
				leading = "11.9pt";
				justification = 1818915700;//Justification.LEFT_JUSTIFIED;
				appliedFont = myFont;
				}
		    }

		
		try{
		    	myParagraphStyle02 = myDocument.paragraphStyles.item("text2");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = myParagraphStyle02.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	myParagraphStyle02 = myDocument.paragraphStyles.add({name:"text2"});
				with(myParagraphStyle02){
				alignToBaseline = true;
				pointSize = "9pt";
				leading = "11.9pt";
				//myParagraphStyle02.fillColor = "None";
				appliedFont = myFont;
				}
		    }


		try{
		    	h1 = myDocument.paragraphStyles.item("h1");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = h1.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	h1 = myDocument.paragraphStyles.add({name:"h1"});
				with(h1){
				alignToBaseline = true;
				pointSize = 23;
				appliedFont = myFont;
				}
		    }


		try{
		    	h2 = myDocument.paragraphStyles.item("h2");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = h2.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	h2 = myDocument.paragraphStyles.add({name:"h2"});
				with(h2){
				alignToBaseline = true;
				leading = 14;
				pointSize = 18;
				appliedFont = myFont;

				}
		    }

		
		
		try{
		    	h3 = myDocument.paragraphStyles.item("h3");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = h3.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	h3 = myDocument.paragraphStyles.add({name:"h3"});
				with(h3){
				alignToBaseline = true;
				leading = 14;
				appliedFont = myFont;
				}
		    }

		
		try{
		    	quote = myDocument.paragraphStyles.item("quote");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = quote.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	quote = myDocument.paragraphStyles.add({name:"quote"});
				with(quote){
				alignToBaseline = true;
				leading = 14;
				appliedFont = myFontItal;
				}
		    }

		
		try{
		    	img = myDocument.paragraphStyles.item("img");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = img.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	img = myDocument.paragraphStyles.add({name:"img"});
				with(img){			
				alignToBaseline = true;
				leading = 23;
				pointSize = 23;
				fillColor = "img";
				appliedFont = myFont;
				}
		    }

		try{
		    	pgNo = myDocument.paragraphStyles.item("pgNo");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = pgNo.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	pgNo = myDocument.paragraphStyles.add({name:"pgNo"})
				with(pgNo){
				alignToBaseline = false;
				leading = "11.5pt";
				pointSize = "9pt";
				justification = Justification.CENTER_ALIGN;
				appliedFont = myFont;
				}
		    }	
}


function makeParStyles_v02(myDocument,myFontReg, myFontItal, myFontSemiBold) {
	 	var myName;
		var Kapitelueberschrift,Body_Text ,Inhaltsverzeichnis ,Zitate ,Ueberschrift ,Autorennamen ,Fussnoten, Pagina, Bildunterschriften, Impressum;
	
			try{
		    	Kapitelueberschrift = myDocument.paragraphStyles.item("Kapitelueberschrift");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Kapitelueberschrift.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Kapitelueberschrift = myDocument.paragraphStyles.add({name:"Kapitelueberschrift"})
			with(Kapitelueberschrift){

				pointSize = 9;
				leading = 11.5;
				tracking = 100;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.ALL_CAPS;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				
			
				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.CENTER_ALIGN; //1667591796;
				balanceRaggedLines  = false;

				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 133; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Body_Text = myDocument.paragraphStyles.item("Body_Text");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Body_Text.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Body_Text = myDocument.paragraphStyles.add({name:"Body_Text"})
			with(Body_Text){
					
				pointSize = 9;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED;
				balanceRaggedLines  = false;
				
				firstLineIndent = "3mm";
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120;// (Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Inhaltsverzeichnis = myDocument.paragraphStyles.item("Inhaltsverzeichnis");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Inhaltsverzeichnis.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Inhaltsverzeichnis = myDocument.paragraphStyles.add({name:"Inhaltsverzeichnis"})
			with(Inhaltsverzeichnis){
				basedOn = myDocument.paragraphStyles.item("Body_Text");	
				nextStyle =  myDocument.paragraphStyles.item("Inhaltsverzeichnis");	
				 
				pointSize = 9;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_ALIGN; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Zitate = myDocument.paragraphStyles.item("Zitate");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Zitate.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Zitate = myDocument.paragraphStyles.add({name:"Zitate"})
			with(Zitate){
				basedOn = myDocument.paragraphStyles.item("Body_Text");	
				nextStyle =  myDocument.paragraphStyles.item("Zitate");	
				 
				pointSize = 9;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontItal;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";
				
				firstLineIndent = "3mm";


				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Ueberschrift = myDocument.paragraphStyles.item("Ueberschrift");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Ueberschrift.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Ueberschrift = myDocument.paragraphStyles.add({name:"Ueberschrift"})
			with(Ueberschrift){
				basedOn = myDocument.paragraphStyles.item("Body_Text");	
				nextStyle =  myDocument.paragraphStyles.item("Ueberschrift");	
				 
				pointSize = 9;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontItal;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";
				
				firstLineIndent = "3mm";


				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.CENTER_ALIGN; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Autorennamen = myDocument.paragraphStyles.item("Autorennamen");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Autorennamen.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Autorennamen = myDocument.paragraphStyles.add({name:"Autorennamen"})
			with(Autorennamen){
				basedOn = myDocument.paragraphStyles.item("Body_Text");	
				nextStyle =  myDocument.paragraphStyles.item("Autorennamen");	
				 
				pointSize = 7;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontItal;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";
				
				firstLineIndent = "3mm";


				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.RIGHT_ALIGN; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Fussnoten = myDocument.paragraphStyles.item("Fussnoten");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Fussnoten.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Fussnoten = myDocument.paragraphStyles.add({name:"Fussnoten"})
			with(Fussnoten){
				nextStyle =  myDocument.paragraphStyles.item("Fussnoten");	
				 
				pointSize = 7;
				leading = 10;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; 
				balanceRaggedLines  = false;
				
				var tab1 = Fussnoten.tabStops.add();
				with(tab1){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "2.4mm";
					
				}
				var tab2 = Fussnoten.tabStops.add();
				with(tab2){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "3.7mm";
				
					
				}				
				
				var tab3 = Fussnoten.tabStops.add();
				with(tab3){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "5.0mm";
					
				}
				 
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 133; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
//				autoLeading = // 120%; (Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Bildunterschriften = myDocument.paragraphStyles.item("Bildunterschriften");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Bildunterschriften.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Bildunterschriften = myDocument.paragraphStyles.add({name:"Bildunterschriften"})
			with(Bildunterschriften){			
				basedOn = myDocument.paragraphStyles.item("Body_Text");	
				nextStyle =  myDocument.paragraphStyles.item("Bildunterschriften");	
				 
				pointSize = 7;
				leading = 10;
				tracking = 0;
				appliedFont = myFontSemiBold;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = true;			
				justification = Justification.LEFT_ALIGN; 
				balanceRaggedLines  = false;
				
				leftIndent  = "3mm";
				firstLineIndent = "-3mm";

				
				var tab1 = Fussnoten.tabStops.add();
			with(tab1){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "4mm";
					
				}
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Impressum = myDocument.paragraphStyles.item("Impressum");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Impressum.name;
			    }
			catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Impressum = myDocument.paragraphStyles.add({name:"Impressum"})
			with(Impressum){
				basedOn = myDocument.paragraphStyles.item("Body_Text");	
				nextStyle =  myDocument.paragraphStyles.item("Impressum");	
				 
				pointSize = 7;
				leading = 10;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; 
				balanceRaggedLines  = false;
				
				leftIndent  = "3mm";
				firstLineIndent = "-3mm";
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	Pagina = myDocument.paragraphStyles.item("Pagina");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Pagina.name;
			    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Pagina = myDocument.paragraphStyles.add({name:"Pagina"})
			with(Pagina){
				basedOn = myDocument.paragraphStyles.item("Fussnoten");	
				nextStyle =  myDocument.paragraphStyles.item("Pagina");	
				 
				pointSize = 9;
				leading = 11.5;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.CENTER_ALIGN; 
				balanceRaggedLines  = false;
				
				var tab1 = Fussnoten.tabStops.add();
				with(tab1){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "2.4mm";
					
				}
				var tab2 = Fussnoten.tabStops.add();
				with(tab2){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "3.7mm";
				
					
				}				
				
				var tab3 = Fussnoten.tabStops.add();
				with(tab3){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "5.0mm";
					
				}
				 
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 133; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

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
		    	img = myDocument.paragraphStyles.item("img");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = img.name;
			    }
			catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	img = myDocument.paragraphStyles.add({name:"img"});
			with(img){			
				alignToBaseline = true;
				leading = 23;
				pointSize = 23;
				fillColor = "img";
				appliedFont = myFontItal;
				}
		    }
}