class Stack {
  constructor() {
    this.stack = [];
    this.tos = -1;
  }

  //Add element to TOS
  push(item) {
    this.tos++;
    this.stack[this.tos] = item;
    console.log(`${item} added to ${this.tos}!`);
    return this.tos;
  }

  //Return and remove top element in stack
  //Return undefined if stack is empty
  pop() {
    if (this.tos == -1) {
      return undefined;
    }

    let delItem = this.stack[this.tos];
    this.tos--;
    console.log(`${delItem} removed!`);
    return delItem;
  }

  //Check top element in stack
  peek() {
    console.log(`Top element is ${this.stack[this.tos]}`);
    return this.stack[this.tos];
  }

  //Check if stack is empty
  isEmpty() {
    if (this.tos > -1) console.log('NOT empty!');
    else console.log('EMPTY!');
  }

  //Check size of the stack
  size() {
    console.log(`${this.tos + 1} element(s)`);
  }

  //Print stack elements
  print() {
    let str = '';
    for (let i = 0; i <= this.tos; i++) str += this.stack[i] + ' ';
    console.log(str);
  }

  //Clear stack
  clear() {
    this.stack = [];
    this.tos = -1;
    console.log('Stack cleared!');
  }
}

const stack = new Stack();

stack.isEmpty();
stack.size();
stack.push(100);
stack.push(200);
stack.size();
stack.push(300);

stack.pop();
stack.pop();
stack.size();

stack.peek();
stack.isEmpty();

stack.print();

stack.push(100);
stack.push(200);
stack.push(300);

stack.print();

stack.clear();
stack.print();
