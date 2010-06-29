/**
 * @author fabianmoronzirfas
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
