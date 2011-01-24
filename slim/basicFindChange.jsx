/*
 @author fabianmoronzirfas
*/

main();
//--------------

function main() {
	var myDoc = app.activeDocument;
	var myDate = new Date();
	var myLogFile = myGetFileName();
	var myFileContent = myLogFile.read();
	var myErrorLog = myFileContent +"\n"+"Starting Log file at "+myDate +"\n";

	var strings = new Array();
	strings[0] = "FFF_end_li";
	strings[1] = "FFF_end_ol";
	strings[2] = "FFF_li";
	strings[3] = "FFF_linksb";
	strings[4] = "FFF_mittela";
	strings[5] = "FFF_ol";
	strings[6] = "FFF_rechtsb";
	strings[7] = "FFF_span_style";
	strings[8] = "FFF_span";
	strings[9] = "FFF_underl";
	


for (var i = 0; i < strings.length;i++){
try {
	app.loadFindChangeQuery (strings[i], SearchModes.grepSearch); 
myErrorLog = myErrorLog +  myDoc.findGrep().toString() +"\n";
app.activeDocument.changeGrep(); 

} catch (e) {

	myErrorLog = myErrorLog + e.toString() + strings[i]+" .xml could not be processed  \n";
	
}
}
		var myFile = myLogFile;   
		var myData = myErrorLog;
		writeData (myFile, myData );
		alert("Done");
}
function myGetFileName()  
{   

	var myFolder = app.activeDocument.filePath;

      var myFile =  new File( myFolder+'/findChangeLog.txt' )  
//      if ( myFile == null ){exit()};  
   return myFile;   
} 

function writeData (myFile , aData )  
{ 
	var myResult;
   if( myFile!='' )  
   {   
      //Open the file for writing.   
      myResult = myFile.open( 'e', undefined, undefined );   
   }  
   if( myResult != false )  
   {     
	   myFile.seek(0);
      myFile.writeln( aData );         
      myFile.close();   
//      myFile.execute();  
   }
}

