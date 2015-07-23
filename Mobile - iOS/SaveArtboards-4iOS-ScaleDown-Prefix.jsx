/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;
var prefix;

if (document && folder) {
	prefix = prompt("Prefix", "") || "";
}

if (document && folder) {
	saveToRes(50, "");
	saveToRes(100, "@2x");
	saveToRes(150, "@3x");
}

function saveToRes(scaleTo, densitySuffix) {
	var i, ab,
		file, options;

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];
		file = new File(folder.fsName + "/" + prefix + ab.name + densitySuffix + ".png");

		options = new ExportOptionsPNG24();
		options.antiAliasing = true;
		options.transparency = true;
		options.artBoardClipping = true;
		options.verticalScale = scaleTo;
		options.horizontalScale = scaleTo;

		document.exportFile(file, ExportType.PNG24, options);
	}
}
