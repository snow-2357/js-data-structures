console.log("hey");
import Queue from "./array-datastruct/queue";

let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.printQueue());
