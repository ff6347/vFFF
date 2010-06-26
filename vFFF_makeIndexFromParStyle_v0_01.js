/*
	Marking up index words from colours
	Version: 1.1
	
    Script by Thomas Silkjær
	http://indesigning.net/
*/

var my_document = app.documents.item(0);
	
// Create a list of swatches
var list_of_swatches = my_document.paragraphStyles.everyItem().name;

// Make dialog box for selecting the swatch
var swatch_dialog = app.dialogs.add({name:"Index from colour"});
with(swatch_dialog.dialogColumns.add()) {
	with(borderPanels.add()) {
		with(dialogColumns.add()) {
			staticTexts.add({staticLabel:"ParStyles:"});
		}
		with(dialogColumns.add()) {
			var selected_swatch = dropdowns.add({stringList:list_of_swatches, selectedIndex:0});
		}
	}
}
swatch_dialog.show();

// Set find text options to find all words with the selected swatch
app.findChangeTextOptions.caseSensitive = false;
app.findChangeTextOptions.wholeWord = false;
app.findChangeTextOptions.includeFootnotes = false;
app.findChangeTextOptions.includeHiddenLayers = false;
app.findChangeTextOptions.includeLockedLayersForFind = false;
app.findChangeTextOptions.includeLockedStoriesForFind = false;
app.findChangeTextOptions.includeMasterPages = false;

app.findTextPreferences = NothingEnum.nothing;
app.findTextPreferences.appliedParagraphStyle = my_document.paragraphStyles.item(selected_swatch.selectedIndex)

// Search the document
var found_words =  my_document.findText();
	
// Make index
var my_index = my_document.indexes.add()

// Loop through the paragraphs and create a list of words and mark them as index words
myCounter = found_words.length-1;
do {
	var found_word = found_words[myCounter];
	var my_topic_name = found_word.contents;			
	var my_topic = my_index.topics.add({name:my_topic_name});
	
	// Create the page reference
	my_topic.pageReferences.add(found_word);
	
	myCounter--;
} while (myCounter >= 0);

alert("Done indexing!");