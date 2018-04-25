[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

### Collection of Illustrator Scripts for Mobile

This is a collection of Adobe Illustrator Scripts that exports layers or artboards to PNGs of different densities (iOS Retina Display, Android Devices, etc).

### How to install

If you place the script in the Adobe Illustrator CS5/Presets/Scripts folder, the script will appear in the File > Scripts submenu.

If you place the script in another location on the hard disk, you can run the script in Illustrator by choosing File > Scripts > Browse.

### Notes

Artboards:  
Artboards with "!" in their name will not be exported.

Layers:  
Locked layers or with "!" in their name visibility will be ignored and will not be exported.
For example, this can be used to keep global layers visibility or guide layers from being exported.

Scale factor:  
**1** = 100% = 160dpi = mdpi, **2** = 200% = 320dpi = retina display (these values are only valid if you designed for 160dpi aka mdpi).

### Tip

If you use Effects change the Effect > Document Raster Effects Settings > Resolution to at least Medium (150ppi), so effects have enough resolution to scale.

Due to the lack of optimization of the PNGs exported by Illustrator I recommend the use of a PNG optimizer.

<http://imageoptim.pornel.net>

<http://code.google.com/p/imageoptim>

<http://optipng.sourceforge.net>

### Contributors

[@girafic](https://github.com/girafic)

### License

[BSD](https://github.com/herkulano/illustrator-scripts-for-mobile/blob/master/LICENSE)


[![Analytics](https://ga-beacon.appspot.com/UA-67903380-1/illustrator-scripts-for-mobile/)](https://github.com/igrigorik/ga-beacon)
