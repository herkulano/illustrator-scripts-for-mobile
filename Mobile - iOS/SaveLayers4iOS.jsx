/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if (document && folder) {
	var oldWidth = Math.abs(app.activeDocument.artboards[0].artboardRect[0]-app.activeDocument.artboards[0].artboardRect[2]);
	var newWidth = prompt("Input a new non-retina width \n(Original width: "+oldWidth+"px)", "");
	var xScale = parseInt(newWidth)/oldWidth;
}

if (document && folder && xScale) {
	var oldHeight = Math.abs(app.activeDocument.artboards[0].artboardRect[1]-app.activeDocument.artboards[0].artboardRect[3]);
	var newHeight = prompt("Input a new non-retina width \n(Original height: "+oldHeight+"px)", "");
	var yScale = parseInt(newHeight)/oldHeight;
}

if (document && folder && xScale && yScale) {
	var prefix = prompt("Enter a prefix \n For instance, '16x16_' for a set of 16x16 images.", "");
}

if (document && folder && xScale && yScale && prefix) {
	saveToRes(100, "", xScale, yScale, prefix);
	saveToRes(200, "@2x", xScale, yScale, prefix);
}

function saveToRes(scaleTo, densitySuffix, xScale, yScale, userPrefix) {
	var i, layer, 
		file, options;
	
	for (i = document.layers.length - 1; i >= 0; i--) {
		layer = document.layers[i];
		if (!layer.locked) {
			hideAllLayers();
			layer.visible = true;
			
			file = new File(folder.fsName + "/" + userPrefix + layer.name + densitySuffix + ".png");
			
			options = new ExportOptionsPNG24();
			options.antiAliasing = true;
			options.transparency = true;
			options.artBoardClipping = true;
			options.horizontalScale = scaleTo * xScale;
			options.verticalScale = scaleTo * yScale;
			
			document.exportFile(file, ExportType.PNG24, options);
		}
	}
}

function hideAllLayers() {
	var i, layer;
	
	for (i = document.layers.length - 1; i >= 0; i--) {
		layer = document.layers[i];
		if (!layer.locked) {
			layer.visible = false;
		}
	}
}