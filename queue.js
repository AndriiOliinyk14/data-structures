class Queue {
  collection = [];

  print() {
    console.log(this.collection);
  }

  enqueue(data) {
    return this.collection.push(data);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }
}

const newQueue = new Queue();

newQueue.enqueue("test 1");
newQueue.enqueue("test 2");
newQueue.enqueue("test 3");
newQueue.enqueue("test 4");

console.log(newQueue.dequeue());
console.log(newQueue.isEmpty());
console.log(newQueue.size());
