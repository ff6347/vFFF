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
 *
 * based on RecordFindChange_cs3-cs5.js
 * from http://www.hilfdirselbst.ch
 */

main();
function main() {
	var myStringPar = "PARAGRAPH STYLES";
	var myStringChar = "CHARACTER STYLES";
	var myStringChar = "DOCUMENT PROPERTIES";
	
	var myDocument = app.activeDocument;
	var myFile = myGetFileName();   
	
	var myDataPar =analyseParStyles(myDocument,myStringPar);  
		myDataPar = myDataPar.replace( /, /g, '\n' );  
		
	var myDataChar =analyseCharStyles(myDocument,myStringChar);  
		myDataChar = myDataChar.replace( /, /g, '\n' );	  
		 
	var myDataDoc ="\n"+"This will be implemented soon";//analyseDocStyles(myDocument,myStringChar);  
		myDataDoc = myDataDoc.replace( /, /g, '\n' );	  
	
	var myData = myDataDoc + myDataPar + myDataChar;
		writeData (myFile,myData);  
 
   
}
function analyseParStyles(myDocument,myString) {
	
	//for (var i = myDocument.allParagraphStyles.length - 1; i >= 0; i--){
	//	 myString = myString + myDocument.paragraphStyles.item(i).properties.toSource()
	//	 			+"\n \n \n NEXT PAR STYLE\n";

//};

	var comp = myDocument.paragraphStyles[0].properties;
	var props;
	// empty object
	diff = {}

	for (var i = 1; i < myDocument.allParagraphStyles.length; i++){
		
		props = myDocument.paragraphStyles[i].properties;
		// iterate them
		for( n in props) {
		// display them
		//alert(n+"="+props[n]);
		// you want to compare instead
		if( props[n]!=comp[n] )
		diff[n] = props[n];
		}
		myString = myString + diff.toSource();

		//for(var j = 0;j <myDocument.paragraphStyles.item(i).properties.length;j++){
		//if(myDocument.paragraphStyles.item(i).properties.item(j) != myDocument.paragraphStyles.item(0).properties.item(j)){		
		//	myString = myString + paragraphStyles.item(i).properties.item(j).name+ " defaultValue of basic Paragraph";
		//}else{
		 //myString = myString + myDocument.paragraphStyles.item(i).properties.item(j).toSource();
		//	}
			
		//}
		myString = myString +"\n \n \n NEXT PAR STYLE\n";
	}
	
	return myString;
}


function analyseCharStyles(myDocument,myString) {
	
	//for (var i = myDocument.allCharacterStyles.length - 1; i >= 0; i--){
		 //myString = myString + myDocument.characterStyles.item(i).properties.toSource()
		//		+"\n \n \n NEXT CHAR STYLE\n";
//};
	//return myString;
	
	var comp = myDocument.paragraphStyles[0].properties;
	var props;
	// empty object
	diff = {}

	for (var i = 1; i < myDocument.allCharacterStyles.length; i++){
		
		props = myDocument.characterStyles[i].properties;
		// iterate them
		for( n in props) {
		// display them
		//alert(n+"="+props[n]);
		// you want to compare instead
		if( props[n]!=comp[n] )
		diff[n] = props[n];
		}
		myString = myString + diff.toSource();

		//for(var j = 0;j <myDocument.paragraphStyles.item(i).properties.length;j++){
		//if(myDocument.paragraphStyles.item(i).properties.item(j) != myDocument.paragraphStyles.item(0).properties.item(j)){		
		//	myString = myString + paragraphStyles.item(i).properties.item(j).name+ " defaultValue of basic Paragraph";
		//}else{
		 //myString = myString + myDocument.paragraphStyles.item(i).properties.item(j).toSource();
		//	}
			
		//}
		myString = myString +"\n \n \n NEXT CHAR STYLE\n";
	}
	
	return myString;
}

function analyseDocStyles(myDocument,myString) {
	
		 myString = myString + myDocument.properties.toSource()
		 			+"\n \n \n NEXT CHAR STYLE\n";

	
	return myString;
}
function myGetFileName()  
{   
   //if ( _param.file_2desk == true )  
   //{  
    //  var myFile =  new File( '~/Desktop/findChangeStrings.txt' )  
   //}  
   //else  
   //{  
      if( File.fs != 'Macintosh' )  
      {   
         //Filter files by extension.   
         var myFile = File.saveDialog( 'Save Text File As:', 'Text Files:*.txt;All Files:*' )   
      }   
      else  
      {   
         var myFile = File.saveDialog( 'Save Text File As:' )   
      }   
      if ( myFile == null )  
         exit();  
   //}  
   return myFile;   
} 

function writeData ( myFile, aData )  
{  
   if( myFile!='' )  
   {   
      //Open the file for writing.   
      myResult = myFile.open( 'w', undefined, undefined );   
   }  
   if( myResult != false )  
   {     
      myFile.writeln( aData );         
      myFile.close();   
    //  if ( _param.file_open == true )   
     //    myFile.execute();  
   }   
}