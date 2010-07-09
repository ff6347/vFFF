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