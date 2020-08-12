//Specimen 1, expected 008, actual 008
// var secret = '007';
// function getSecret() {
//   var secret = '008';
//   function getValue() {
//     return secret;
//   }
//   return getValue();
// }
// console.log(getSecret());

//Specimen 2, expected 007, actual 008
var secret = '007';
function getSecret() {
  var secret = '008';
  function getValue() {
    return secret;
  }
  return getValue;
}
var getValueFun = getSecret();
console.log(getValueFun());
