This is an InDesign CS4 JavaScript Project for importing XML  
=============  
This is more playground than enything else  
------------
The script set in the folder "slim" and the prvided XML in folder "xml" is all you need  
It works also in ID CS 5 but not allways. seems like ID CS 5 doesent suport .untag() 
  
**How To:**  

Wordpress  
--

- **Install the latest [wordpress](http://wordpress.org/download/)** follow the provided instructions  

Create some Content  
--

- **Make some Posts.** They don't need to be published  
- At this moment the following formating is supported  
     H1  
     H2  
     H3  
     H4  
     H5  
     H6  
     Bold  
     Italic  
     Endnote  
     Footnote  
  
- You can also write in openoffice or word and use the basic paragraph styles  
- In the Post Editor within worpress you can use the option **"Paste from Word"**  
- it is a bit hiddne feature look around  

Export  
--  

- Logged in as Admin go to "Tools / Export"  
- and export the posts of the author you want to import to InDesign  

Download Scripts  
--  

- go here and download the latest version of [vFFF](http://fabiantheblind.github.com/vFFF/)  

Install Scripts  
--

- place everything in the InDesign Scripts Folder following these [instructions](http://lmgtfy.com/?q=indesign+install+script)  

Install Find CHange Queries  
--
On Mac under:
/Applications/Adobe InDesign CS4/Presets/Find-Change Queries/GREP/de_DE/  
or  
/Users/[YOUR USERNAME]/Library/Preferences/Adobe InDesign/Version 6.0/de_DE/Find-Change Queries/GREP/

In InDesign  
--  

- now **execute the script:** _"/vFFF/slim/import.jsx"_  
- the script will ask to **build a doc** or use a working one  
- then it **asks for a font** with a pulldown  
- then it **asks for the wordpress.xml** file you downloaded  
- within the package is a folder called "xml" there is a basic .xml file provided  
- then it ask you to** select a post** from the xml  
- now it runs  
- everything that could be parsed into InDesign character and paragraph syles is parsed  

TODO  
--
Create a document sampler to take par char obj styles from a existing doc

LOG  
-- 
**Mon Jan 24 14:15:16 CET 2011** added styles_editor.jsx for OO
 
**Thu Jan  6 20:59:27 CET 2011** added how to  
  
**Sun Dec 19 11:11:46 CET 2010** realised that this is not the way to get data into InDesign.  
A real html parser would be usefull instead of the findChange.jsx  
Watch out for moreTime4design == mehrZeitZumGestalten  
  
**Sat Dec 18 21:33:02 CET 2010** the blockqote tag is making bad stuff  
  
**Sat Dec 18 16:42:55 CET 2010** made some big housekeeping  
moved old and the whole formatting stuff to extended  
added folder slim. This conains now a reduced but working version  
  
**Sa 18 Dez 2010 10:39:17 CET** Set up some more html tags  
  
**Thu Nov 25 16:43:44** CET 2010 InDesign CS 5 Tested - works  
**Thu Nov 25 17:38:05** CET 2010 Worpress 3.0.1 Tested - Has new Filterfunctions for export and works  
  
**Thu Nov 25 2010**
This is an autopuplishing project by fabiantheblind  
go [here->](http://scripts.sil.org/cms/scripts/page.php?item_id=Gentium_download)  
to get the Gentium font  
  
BUGS  
--  
- xml untag in CS5  