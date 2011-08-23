/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if(document && folder) {
	var resFolderName, resFolder,
			ab,	abObj, abName, abFolder,
			file, options;
				
	for (var i = document.artboards.length - 1; i >= 0; i--){
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];
		abObj = ab.name.split("+", 2);
		abName = abObj[0];
		abFolder = abObj[1];
		
		switch(abFolder) {
			case "m":
				resFolderName = "mdpi";
				break;
			case "h":
				resFolderName = "hdpi";
				break;
			case "xh":
				resFolderName = "xhdpi";
				break;				
			default:
				resFolderName = "mdpi";
				break;
		}
		
		resFolder = new Folder( folder.fsName + "/" + resFolderName );
		if(!resFolder.exists) {
			resFolder.create();
		}

		file = new File(resFolder.fsName + "/" + abName + ".png");
	 	
 		options = new ExportOptionsPNG24();
 		options.antiAliasing = true;
 		options.transparency = true;
 		options.artBoardClipping = true;
 		options.verticalScale = 100;
 		options.horizontalScale = 100;
 		
 		document.exportFile(file, ExportType.PNG24, options);
	}	
}