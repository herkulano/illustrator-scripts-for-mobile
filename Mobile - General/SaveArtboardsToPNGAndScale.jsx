/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if (document && folder) {
	var scaleTo = prompt("Scale (1=100%)", "1");
}

if (document && folder && scaleTo) {
	var suffix = prompt("Suffix", "") || "";
}

if (document && folder && scaleTo) {
	var i, ab, file, options;

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];
		file = new File(folder.fsName + "/" + ab.name + suffix + ".png");

		options = new ExportOptionsPNG24();
		options.antiAliasing = true;
		options.transparency = true;
		options.artBoardClipping = true;
		options.verticalScale = parseFloat(scaleTo) * 100;
		options.horizontalScale = parseFloat(scaleTo) * 100;

		document.exportFile(file, ExportType.PNG24, options);
	}
}