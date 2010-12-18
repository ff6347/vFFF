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

function makeColors(myDocument) {
	myColor1 = myDocument.colors.add({name:"Grey",
	model:ColorModel.process, colorValue:[0, 0, 0, 90]});

	myColor2 = myDocument.colors.add({name:"img",
	model:ColorModel.process, colorValue:[100, 100, 0, 13]});
}