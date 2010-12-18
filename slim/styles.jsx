function buildStyles(theDoc){
	
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
basicParStyles[9] = "pagina";
basicParStyles[10] = "quote";



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






	for(var i = 0; i < basicParStyles.length;i++){
	
		var ps;
		var aName;
		try{
		    	ps = theDoc.paragraphStyles.item(basicParStyles[i]);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = ps.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ps = theDoc.paragraphStyles.add({name:basicParStyles[i]})
			with(ps){
			
			}
		}
	}
	
	
	for(var i = 0; i < basicCharStyles.length;i++){
	
		var ps;
		var aName;
		try{
		    	ps = theDoc.characterStyles.item(basicCharStyles[i]);
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	aName = ps.name;
		    }
		catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ps = theDoc.characterStyles.add({name:basicCharStyles[i]})
		with(ps){
		}
		}
	}

}