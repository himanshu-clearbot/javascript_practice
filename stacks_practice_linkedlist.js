// stack is LiFO
class Node
{
    constructor(data)
    {
        this.value =data,
        this.next = null
    }
} 
class Stack
{
    constructor()
    {
        this.top = null
        this.length = 0;
    }
// 1 --> 2 --> 4
    append(data)
    {
        const newNode = new Node(data)

        if(this.length ==0)
        {
            this.top= newNode;
        }
        else {
            let holdingPoint = this.top;
            this.top = newNode
            newNode.next= holdingPoint;
        }
        this.length++;
    }
    display()
    {
        console.log(this.top);
    }
    remove()
    {
        const Newtop = this.top.next
        this.top = Newtop;
        this.length--;

    }
    toArray() {
        const stackArray = [];
        let current = this.top;
        while (current) {
          stackArray.push(current.value);
          current = current.next;
        }
        // return stackArray;
        console.log(stackArray);
      }

}

const Mystack = new Stack();
Mystack.append(2)
Mystack.append(3)
Mystack.append(11)
Mystack.append(12)
Mystack.append(13)
Mystack.remove()
Mystack.toArray()
Mystack.display()

// [ 13, 12, 11, 3, 2 ] stack
// 13 removed 