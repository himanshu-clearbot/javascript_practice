// console.log('h');
// alert('juu');
class LinkedList
{
    constructor(data) {
        // object 
        this.head = {
            value:data,
            next : null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(data)
    {
        const newNode = 
        {
            value:data,
            next:null
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    print()
    {
        const arr=[]
        let current = this.head
        while (current!==null)
        {
            arr.push(current.value)
            // console.log(current.value);
            current=current.next;
        }
        console.log(arr)
    }

    prepend(data)
    {
        const newNode = 
        {
            value:data,
            next:null
        }
        newNode.next = this.head
        this.head=newNode
    }  
    
    traversing(req)
    {
        let counter = 0;
        let currentNode=this.head
        while(counter!=req)
        {
            counter++
            currentNode=currentNode.next
        }
        return currentNode
    }

    insert(index,data)
    {
        const newNode= {
            value:data,
            next:null
        }
        const leaderNode = this.traversing(index-1);
        const nextNode= leaderNode.next
        leaderNode.next = newNode;
        newNode.next =nextNode;
    }

    delete(index)
    {
        const leaderNode = this.traversing(index-1); //PICHLA NODE
        const removalnode = leaderNode.next  //NODE JO NIKALNA H , INDEX DIFINE KIYA
        const nextNODE = removalnode.next // USKE NEXT NODE JO NIKLEGA USKA NEXT 
        
        leaderNode.next = nextNODE;
        this.length--;
    }
}


const myList = new LinkedList(5)
myList.append(6)
myList.append(7)
myList.prepend(1)
myList.insert(2,8)
myList.delete(3)
myList.print()
// myList.print()
console.log(myList)