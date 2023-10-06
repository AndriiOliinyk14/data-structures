class Node {
  data;
  next = null;

  constructor(data) {
    this.data = data;
    return { data: this.data, next: this.next };
  }
}

class List {
  length = 0;
  _head = null;

  add(data) {
    const node = new Node(data);
    if (!this._head) {
      this._head = node;
    } else {
      let currNode = this._head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
    }
    this.length++;
  }

  addAt(element, index) {
    const node = new Node(element);

    let currNode = this._head;
    let prevNode = null;
    let currIndex = 0;

    if (index > this.length) return;

    if (index === 0) {
      node.next = currNode;
      this._head = node;
    } else {
      while (currIndex < index) {
        currIndex++;
        prevNode = currNode;
        currNode = currNode.next;
      }

      node.next = currNode;
      prevNode.next = node;
    }

    this.length++;
  }

  remove(data) {
    let currNode = this._head;
    let prevNode = null;

    if (currNode.data === data) {
      this._head = currNode.next;
    } else {
      while (currNode?.data !== data) {
        if (!currNode.next) break;

        prevNode = currNode;
        currNode = currNode?.next;
      }

      if (currNode.next) {
        prevNode.next = currNode.next;
        this.length--;
      }
    }
  }

  removeByIndex(index) {
    let currNode = this._head;
    let prevNode = null;
    let currIndex = 0;

    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      this._head = currNode.next;
    } else {
      while (currIndex < index) {
        currIndex++;
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = currNode.next;
    }

    this.length--;

    return currNode.data;
  }

  indexOf(data) {
    let currNode = this._head;
    let index = -1;

    while (currNode) {
      index++;

      if (currNode.data === data) {
        return index;
      }
      currNode = currNode.next;
    }

    return -1;
  }

  getAll() {
    return this._head;
  }

  getByIndex(index) {
    let currNode = this._head;
    let currIndex = 0;

    if (index < 0 || index >= this.length) return undefined;

    while (currNode) {
      if (currIndex === index) {
        return currNode;
      } else {
        currNode = currNode.next;
        currIndex++;
      }
    }
  }
}

const newList = new List();

const data = Array(10)
  .fill("Element")
  .map((item, idx) => `${item} ${idx + 1}`);

data.forEach((el) => newList.add(el));

console.log(newList.getAll());
console.log(newList.length);
console.log(newList.remove(data[1]));

console.log("\x1b[46m", "After remove", "\x1b[0m");
console.log("\x1b[0m");

console.log(newList.getAll());
console.log(newList.length);

console.log(newList.getByIndex(1));

console.log(newList.removeByIndex(2));
console.log("\x1b[46m", "After remove by index", "\x1b[0m");
console.log("\x1b[0m");

console.log(newList.length);

newList.addAt("Add at 2", 8);
console.log(JSON.stringify(newList.getAll()));

console.log(newList.length);
