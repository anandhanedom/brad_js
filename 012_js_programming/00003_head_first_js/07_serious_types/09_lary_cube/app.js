function validate(ph) {
  if (ph.length < 7 || ph.length > 8) {
    return false;
  }

  for (var i = 0; i < ph.length; i++) {
    if (i === 3) {
      if (ph.length === 8 && ph.charAt(i) !== '-') {
        return false;
      } else if (ph.length === 7 && isNaN(ph.charAt(i))) {
        return false;
      }
    } else if (isNaN(ph.charAt(i))) {
      return false;
    }
  }

  return true;
}

console.log(validate('123-4567'));
