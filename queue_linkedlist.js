// queue is FIFO 2 <-- 3 <--- 5<--- so here 2 went in first and 5 was the last , but while removing 2 will be removed

class Node
{
    constructor(data)
    {
        this.value = data;
        this.next = null;

    }
}

class Queue 
{
    constructor()
    {
        this.first=null;
        this.last = null;
        this.length = 0;
    }

    Enqueue(data)
    {
        const newNode = new Node(data);
        if (this.length ==0)
        {
            this.first = newNode;
            this.last = newNode;
            this.length++;
        }
        else 
        {
            this.last.next = newNode;
            this.last = newNode;
            this.length++
        }
    }
    display()
    {
        console.log(this.first);
        console.log(this.last);
    }
    dequeue()
    {
        this.first= this.first.next
    }

    toArray() {
        const queueArray = [];
        let current = this.first;
        while (current) {
          queueArray.push(current.value);
          current = current.next;
        }
        // return queueArray;
        console.log(queueArray);
      }
}

const myQueue = new Queue();
myQueue.Enqueue(5)
myQueue.Enqueue(6)
myQueue.Enqueue(7)
myQueue.Enqueue(8)
myQueue.Enqueue(9)

// myQueue.Enqueue(5)
myQueue.dequeue()
myQueue.toArray()
myQueue.display()

// [ 5, 6, 7, 8, 9 ] queue 
// 5 removed 