# brad_js
JS notes and free code camp

### Regular Expressions
* re.source
* re.exec()               -Return result in an array or null
* re.test()               -Return true or false
* str.match(re)           -Return result in an array or null
* str.search(ew)          -Return index of first match if not -1
* str.replace(re, 'Hi')   -Return new strign with some or all matches of pattern

* re = /^h/           -Must start with
* re = /d$/           -Must end with
* re = /hello/        -Must start and end with
* re = /h.llo/i       -Any 1 character
* re = /h*llo/i       -Any character 0 or more times
* re = /he?a?llo/     -Optional character
* re = /gr[ae]y/      -must be a or e
* re = /[^GF]ray/     -anything except G or F
* re = /[A-Z]ray/     -Match any uppercase letter
* re = /[A-Za-z]ray/  -Match any letter
* re = /Hel{2}o/      - 2 ls
* re = /Hel{2,4}o/    -must occur between {m,n} times
* re = /Hel{2,}o/     -must occur atleast m times
* re = /([0-9]x){3}/  -grouping

#### Shorthand character classes
* re = /\w/         word character- alphanumeric or _
* re = /\w+/        one or more
* re = /\W/         non-word character
* re = /\d/         match any digit
* re = /\d+/        match any digit........
* re = /\D/         match any non digit
* re = /\s/         match white space char
* re = /\S/         match non-white space char
* re = /Hell\b/     word boundary

#### Assertions
* re = /x(?=y)/   match x only if followed by y
* re = /x(?!y)/   match x only if NOT followed by y







 

