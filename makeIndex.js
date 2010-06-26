/**
 * @author fabianmoronzirfas
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