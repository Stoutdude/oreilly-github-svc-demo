'use strict';
// turns a `String` into HaCkErCaSe, optionally replacing some characters in
// the result with others (case-insenitively).
//
// Parameters:
// - 'text' is the 'String' to transform.
// - 'replaceMap' is an optional 'Object' acting as a map; keys are source characters
//   (or longer strings, really) and values are replacements (thise will be converted
//   to 'String', so you can use numbers, for instance).
//
// Example calls:
//
//   hakerCase('lively') // => 'LoVeLy'
//   hakerCase('ron weasley', {A: 4, E: 3, S: 5}) => 'RoN w345l3y'
//
module.exports = function hackerCase(text, replaceMap) {
  var upperCase = false;

  var result = text.replace(/\w/g, function(char) {
    return char[(upperCase = !upperCase) ? 'toLocaleUpperCase' : 'toLocaleLowerCase']();
  });

  if ('object' === typeof replaceMap) {
    for (var src in replaceMap) {
      if (replaceMap.hasOwnProperty(src)){
        result = result.replace(new RegExp(src, 'gi'), String(replaceMap[src]));
      }
    }
  }

  return result;
};
