/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if (document && folder) {
	var oldWidth = Math.abs(app.activeDocument.artboards[0].artboardRect[0]-app.activeDocument.artboards[0].artboardRect[2]);
	var newWidth = prompt("Input a new non-retina width in pixels\n(Original width: "+oldWidth+")", "");
	var xScale = parseInt(newWidth)/oldWidth;
}

if (document && folder && xScale) {
	var oldHeight = Math.abs(app.activeDocument.artboards[0].artboardRect[1]-app.activeDocument.artboards[0].artboardRect[3]);
	var newHeight = prompt("Input a new non-retina width in pixels\n(Original height: "+oldHeight+")", "");
	var yScale = parseInt(newHeight)/oldHeight;
}

if (document && folder && xScale && yScale) {
	saveToRes(100, "", xScale, yScale);
	saveToRes(200, "@2x", xScale, yScale);
}

function saveToRes(scaleTo, densitySuffix, xScale, yScale) {
	var i, layer, 
		file, options;
	
	for (i = document.layers.length - 1; i >= 0; i--) {
		layer = document.layers[i];
		if (!layer.locked) {
			hideAllLayers();
			layer.visible = true;
			
			file = new File(folder.fsName + "/" + layer.name + densitySuffix + ".png");
			
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