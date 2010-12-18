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

// get an anonymous object with those properties
// this is equivalent to
// props = {name: myDoc.paragraphStyle[i].name ...}
var myDoc = app.activeDocument;
var props = myDoc.paragraphStyles[3].properties;
var comp = myDoc.paragraphStyles[0].properties;

// strip undesired stuff
//delete props.id;
//delete props.content;

// empty object
diff = {}

// iterate them
for( n in props) {
// display them
//alert(n+"="+props[n]);
// you want to compare instead
if( props[n]!=comp[n] )
diff[n] = props[n];
}

alert(diff.toSource());

// copy the changed values to another pstyle
 var myNewStyle = myDoc.paragraphStyles.add();
 with(myNewStyle){
 	properties = diff;
	
 }
