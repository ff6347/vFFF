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

myDoc = app.documents[0];
if (myDoc.indexes.length == 0)
  myDoc.indexes.add ();
app.findGrepPreferences = null;
app.findGrepPreferences.findWhat = "^.*";
app.findGrepPreferences.appliedParagraphStyle = myDoc.paragraphStyles.item (1);
myFound = myDoc.findGrep (true);
for (i = 0; i < myFound.length; i++)
  {
  try
    {
    newTopic = myDoc.indexes[0].topics.add (myFound[i].contents);
    newTopic.pageReferences.add (myFound[i], PageReferenceType.currentPage);
    }
  catch (_){}
  }