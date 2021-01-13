# Objects

### Note:

1. Other types(other then string or symbols) are automatically converted to strings.
2. To check if a property with the given key exists: "key" in obj.
3. To iterate over an object: for (let key in obj) loop
4. Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
5. When a function is executed with new, it does the following steps:
   1. A new empty object is created and assigned to this.
   2. The function body executes. Usually it modifies this, adds new properties to it.
   3. The value of this is returned.
6. Optional chaining : alert( user?.address?.street ) -- READ ONLY
   1. obj?.prop – returns obj.prop if obj exists, otherwise undefined. error if obj not defined to null.
   2. obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
   3. obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
