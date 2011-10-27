/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;
var suffix;

if (document && folder) {
	suffix = prompt("Suffix", "") || "";
}

if (document && folder) {
	saveToRes(100, "");
	saveToRes(200, "@2x");
}

function saveToRes(scaleTo, densitySuffix) {
	var i, layer, 
		file, options;
	
	for (i = document.layers.length - 1; i >= 0; i--) {
		layer = document.layers[i];
		if (!layer.locked) {
			hideAllLayers();
			layer.visible = true;
			
			file = new File(folder.fsName + "/" + layer.name + suffix + densitySuffix + ".png");
			
			options = new ExportOptionsPNG24();
			options.antiAliasing = true;
			options.transparency = true;
			options.artBoardClipping = true;
			options.verticalScale = scaleTo;
			options.horizontalScale = scaleTo;
			
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