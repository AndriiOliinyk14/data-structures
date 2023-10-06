class Stack {
  storage = {};
  count = 0;

  add(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) return undefined;

    this.count--;

    const removedValue = this.storage[this.count];
    delete this.storage[this.count];

    return removedValue;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  size() {
    return this.count;
  }
}

const newStack = new Stack();

newStack.add("test1");
newStack.add("test2");
newStack.add("test3");
newStack.add("test4");
newStack.add("test5");
newStack.pop();
console.log(newStack.peek());
console.log(newStack.size());
