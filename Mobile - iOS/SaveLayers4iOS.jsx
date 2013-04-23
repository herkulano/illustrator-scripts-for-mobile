/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;
var xyScale,
	oldWidth, newWidth;

if (document && folder) {
	oldWidth = Math.abs(app.activeDocument.artboards[0].artboardRect[0]-app.activeDocument.artboards[0].artboardRect[2]);
	newWidth = prompt("Input a new non-retina width in pixels\n(Original width: "+oldWidth+")", oldWidth);
	xyScale = parseInt(newWidth)/oldWidth || 1;
}

if (document && folder && xyScale) {
	saveToRes(100, "", xyScale);
	saveToRes(200, "@2x", xyScale);
}

function saveToRes(scaleTo, densitySuffix, xyScale) {
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
			options.horizontalScale = scaleTo * xyScale;
			options.verticalScale = scaleTo * xyScale;

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