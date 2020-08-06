function validate(phoneNumber) {
  if (phoneNumber.length > 8 || phoneNumber.length < 7) {
    return false;
  }

  var first = phoneNumber.substring(0, 3);
  var second = phoneNumber.substring(phoneNumber.length - 4);

  if (isNaN(first) || isNaN(second)) {
    return false;
  }

  if (phoneNumber.length === 8) {
    return phoneNumber.charAt(3) === '-';
  }

  return true;
}

console.log(validate('123-267'));
