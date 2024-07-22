import Stack from "./array-datastruct/stack";

const stack = new Stack<string>();

stack.push("apple");
stack.push("banana");
// stack.push(1);
stack.clean();

const str = stack.printStack();
console.log(str.length);
