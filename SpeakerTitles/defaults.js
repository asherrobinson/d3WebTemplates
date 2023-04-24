/**
 * Here are all the options you can expose in d3:
 * Properties exposed in d3 are updated to override the defaults specified below in
 * this file. Anything you don't expose is governed by the settings in this file.
 *
 * - - - - - - - - - -
 * Text Properties:
 *
 * textLine1        Manually set the first line of text in d3
 * textLine2        Manually set the second line of text in d3
 * textColor1       Set the font color of the first line of text (any valid CSS color expr)
 * textColor1       Set the font color of the second line of text (any valid CSS color expr)
 * shadowColor1     Set the shadow color of the first line of text (any valid CSS color expr)
 * shadowColor2     Set the shadow color of the second line of text (any valid CSS color expr)
 * font             Specify a font or CSS font-family to attempt to override the default: 'sans-serif'
 * filename         Specify a filename formatted like the '01 names.js' included in this project
 *                  to read the text strings out of, controlled by fileTextIndex and useFile below...
 *                  When specifying a filename in d3, only use the name, without an extension, i.e.: `01 names`
 *
 * - - - - - - - - - -
 * Number Properties:
 *
 * useFile          Enables/Disables the use of external files for reading strings (cast to bool)
 * fileTextIndex    Specifies which item to read out of the names array from the active names file
 * centered         Enables text centering (cast to bool)
 * dropShadows      Enables drop shadows (cast to bool)
 * shadowDistX      Offset horizontally for drop shadows (interpreted as px)
 * shadowDistY      Offset vertically for drop shadows (interpreted as px)
 * shadowBlur       Blur distance for drop shadows (interpreted as px)
 * fadeTime         Cross-fade time between text updates
 *
 */


const textModuleDefaults = {

  // Default Colors - use any valid CSS color syntax: 'name', '#00AA33', 'rgba(128, 255, 32, 0.5)', etc.
  textColor1   : "gray",
  textColor2   : "gray",
  shadowColor1 : "blue",
  shadowColor2 : "blue",

  // Specify a font or CSS font-family to attempt to override the default: 'sans-serif'. Falls back to that default in the event of an invalid entry
  font         : "",

  // Bool options - values are coerced to bool at evaluation time
  centered     : 0,
  dropShadows  : 1,

  // Specify distances for shadows, in pixels (default) or with a valid CSS dimension string, ex: '1em', '0.2rem', etc.
  shadowDistX  : 5,
  shadowDistY  : 5,
  shadowBlur   : 10,

  // Specify Fade Time in seconds
  fadeTime     : 0,

};
