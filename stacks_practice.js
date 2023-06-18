// stacks is like array 
// sabse upar wala niklega phele LIFO

class Stack 
{
    constructor()
    {
        this.array = [];
    }

    append(data)
    {
        this.array.push(data);

    }

    display()
    {
        console.log(this.array)
    }
    
    remove()
    {
        this.array.pop()
    }
}
const myStack = new Stack();
myStack.append(5)
myStack.append(4)
myStack.append(7)
myStack.remove()
myStack.display()