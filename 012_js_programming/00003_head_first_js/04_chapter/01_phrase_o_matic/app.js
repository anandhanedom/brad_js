function makePhrases() {
  //Words array
  var words1 = ['24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'win-win'];
  var words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned'];
  var words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision'];

  //Random index
  var random1 = Math.floor(Math.random() * words1.length);
  var random2 = Math.floor(Math.random() * words2.length);
  var random3 = Math.floor(Math.random() * words3.length);

  var phrase = words1[random1] + ' ' + words2[random2] + ' ' + words3[random3];

  //Display the magic phrase
  alert(phrase);
}
makePhrases();
