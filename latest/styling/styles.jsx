#include "chooseFont.jsx";
function buildStyles(doc){
	
	//H1,H2,H3,H4,H5,H6,footnote,endnote,body;
var  basicParStyles = new Array();
basicParStyles[0] = "h1";
basicParStyles[1] = "h2";
basicParStyles[2] = "h3";
basicParStyles[3] = "h4";
basicParStyles[4] = "h5";
basicParStyles[5] = "h6";
basicParStyles[6] = "body";
basicParStyles[7] = "footnote";
basicParStyles[8] = "endnote";
basicParStyles[9] = "quote";
basicParStyles[10] = "pagina";
basicParStyles[11] = "pagina_Left";
basicParStyles[12] = "pagina_Right";




var  basicCharStyles = new Array();
basicCharStyles[0] = "strong";
basicCharStyles[1] = "em";
basicCharStyles[2] = "li";
basicCharStyles[3] = "span";
basicCharStyles[4] = "sup";
basicCharStyles[5] = "footnote";
basicCharStyles[6] = "endnote";
basicCharStyles[7] = "ul";
basicCharStyles[8] = "img";
basicCharStyles[9] = "footnote_inText";
basicCharStyles[10] = "endnote_inText";

// see "chooseFont.jsx";
var theFont = chooseFont();

	for(var i = 0; i < basicParStyles.length;i++){
	
		var ps;
		var aName;
		try{
		    	ps = doc.paragraphStyles.item(basicParStyles[i]);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = ps.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ps = doc.paragraphStyles.add({name:basicParStyles[i]})
			with(ps){
			appliedFont  = theFont
			}
		}
	}
	
	
	for(var i = 0; i < basicCharStyles.length;i++){
	
		var ps;
		var aName;
		try{
		    	ps = doc.characterStyles.item(basicCharStyles[i]);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = ps.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ps = doc.characterStyles.add({name:basicCharStyles[i]})
			with(ps){
				appliedFont  = theFont
			
			}
		}
	}
	
	
	
	// this is some manual tweak
		var ul = "underline";
		var cs;
		var aName;
		try{
		    	cs = doc.characterStyles.item(ul);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = cs.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	cs = doc.characterStyles.add({name:ul})
			with(cs){
			basedOn = doc.characterStyles.item("ul")
			}
		}
		
		var quote = doc.paragraphStyles.item("quote");
		var body = doc.paragraphStyles.item("body")
		var pagina = doc.paragraphStyles.item("pagina");
		var pagina_L = doc.paragraphStyles.item("pagina_Left");
		var pagina_R = doc.paragraphStyles.item("pagina_Right");
		
		
		quote.basedOn = body;
		body.alignToBaseline = true;
		body.pointSize = 13;
		body.leading = body.pointSize *1.5;
		pagina_L.basedOn = pagina;
		pagina_R.basedOn = pagina;
		pagina_L.justification = Justification.LEFT_ALIGN;
		pagina_R.justification = Justification.RIGHT_ALIGN;
		
}