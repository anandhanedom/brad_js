//Regex
let re;
re = /hello/;
re = /hello/i;

//Metacharacter symbols
re = /^h/i; //Must start with
re = /d$/i; //Must end with
re = /^hello$/i; //Must start and end with
re = /h.llo/i; //Matches any one character
re = /h*llo/i; //Must any character 0 or more times
re = /he?a?llo/i; //Optional character
re = /he?a?llo\?/i; //Optional character

//Brackets [] - Character Sets
re = /gr[ae]y/i; //Must be a or e
re = /[GF]ray/i; //Must be G or F
re = /[^GF]ray/i; //Match anything except G or F
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lower letter
re = /[A-Za-z]ray/; //Match any letter
re = /[0-9]ray/; //Any digit

//Braces {} - quantifiers
re = /Hel{2}o/i; //must occur exactly {m} times
re = /Hel{2,4}o/i; //must occur between {m,n} times
re = /Hel{2,}o/i; //must occur atleast {m} times

//Parentheses () -grouping
re = /([0-9]x){3}/;

//Shorthand character classes
re = /\w/; //word character- alphanumeric or _
re = /\w+/; //+ = one or more
re = /\W/; //non-word character
re = /\d/; //match any digit
re = /\d+/; //match any digit........
re = /\D/; //match any non digit
re = /\s/; //match white space char
re = /\S/; //match non-white space char
re = /Hell\b/i; //word boundary

//Assertions
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if NOT followed by y

//String to match
const str = '3x3x3x';

//Log matches
const res = re.exec(str);
console.log(res);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`String ${str} matches ${re.source}`);
  } else {
    console.log(`String ${str} doesn't match ${re.source}`);
  }
}

reTest(re, str);
