# Save Layers to PNGs and Scale

I created this Adobe Illustrator Script to help me export PNGs from layers for different densities (iOS Retina Display, Android Devices, etc).

## How to install

If you place the script in the Adobe Illustrator CS5/Presets/Scripts folder, the script will appear in the File > Scripts submenu.

If you place the script in another location on the hard disk, you can run the script in Illustrator by choosing File > Scripts > Browse.

## How to use

The script asks for 3 values in sequence:

1. The folder where you want to save the files.
2. The scale factor 1 = 100% = 160dpi = mdpi, 2 = 200% = 320dpi = retina display (these values are only valid if you designed for 160dpi aka mdpi).
3. A suffix if you want to use one, e.g., @2x for retina display in iOS. You can also leave it empty if you don't want a suffix or if you are exporting to android or iOS non-retina.

Locked layers visibility will be ignored and also they will not be exported.
For example, this can be used to keep global layers visibility or guide layers from being exported.

## Tip

If you use Effects change the Effect > Document Raster Effects Settings > Resolution to at least Medium (150ppi), so effects have enough resolution to scale. 
Medium (150ppi) is enough for most cases if you work @1x = 160dpi = mdpi, because mdpi = 160dpi = 72ppi and xhdpi = 320dpi(retina) = 150ppi.

Due to the lack of optimization of the PNGs exported by Illustrator I recommend the use of a PNG optimizer.

<http://imageoptim.pornel.net>

<http://code.google.com/p/imageoptim>

<http://optipng.sourceforge.net>