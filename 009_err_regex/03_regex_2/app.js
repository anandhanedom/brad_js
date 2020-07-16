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

//String to match
const str = 'Hllo?';

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
