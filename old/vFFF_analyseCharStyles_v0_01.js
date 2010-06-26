/**
 * @author fabianmoronzirfas
 * based on RecordFindChange_cs3-cs5.js
 * from http://www.hilfdirselbst.ch
 */

main();
function main() {
	var myString = "";
	var myDocument = app.activeDocument;
	//analyseParStyles(myDocument);
	
	var myFile = myGetFileName();   
	var myData =analyseParStyles(myDocument,myString);  
	   myData = myData.replace( /, /g, '\n' );   

	//myData = myData.replace(",",",\n");
	writeData (myFile,myData);  
 
   
   
}
function analyseParStyles(myDocument,myString) {
	
	for (var i = myDocument.allParagraphStyles.length - 1; i >= 0; i--){
		 myString = myString + myDocument.paragraphStyles.item(i).properties.toSource()
		 			+"\n \n \n NEXT STYLE\n";

};
	
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