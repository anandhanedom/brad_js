### 3 browser-specific functions : alert, prompt, confirm

### Numeric conversion rules:

1. undefined : NaN
2. null : 0
3. true and false : 1 and 0
4. string : The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.

### Note:

1. The equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why null == 0 is false.

2. The value undefined shouldn’t be compared to other values. All false.

3. alert( null == undefined ); // true

### The OR || operator does the following:

1. Evaluates operands from left to right.
2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
3. If all operands have been evaluated (i.e. all were false), returns the last operand.

### The AND && operator does the following:

1. Evaluates operands from left to right.
2. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
3. If all operands have been evaluated (i.e. all were truthy), returns the last operand.

13 20
