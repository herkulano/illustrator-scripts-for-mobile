/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if (document && folder) {
	saveToRes(75, "ldpi");
	saveToRes(100, "mdpi");
	saveToRes(150, "hdpi");
	saveToRes(200, "xhdpi");
}

function saveToRes(scaleTo, resFolderName) {
	var i, ab,
		file, options,
		resFolder;

	resFolder = new Folder(folder.fsName + "/drawable-" + resFolderName);

	if (!resFolder.exists) {
		resFolder.create();
	}

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];

		if (ab.name.indexOf("!") === -1) {
			file = new File(resFolder.fsName + "/" + ab.name + ".png");

			options = new ExportOptionsPNG24();
			options.antiAliasing = true;
			options.transparency = true;
			options.artBoardClipping = true;
			options.verticalScale = scaleTo;
			options.horizontalScale = scaleTo;

			document.exportFile(file, ExportType.PNG24, options);
		};
	}
}