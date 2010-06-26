/**
 * @author fabianmoronzirfas
 */
function makeColors(myDocument) {
	myColor1 = myDocument.colors.add({name:"Grey",
	model:ColorModel.process, colorValue:[0, 0, 0, 90]});

	myColor2 = myDocument.colors.add({name:"img",
	model:ColorModel.process, colorValue:[100, 100, 0, 13]});
}