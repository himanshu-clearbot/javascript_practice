class Node 
{
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree
{
    constructor()
    {
        this.root = null;
    }

    isTreeEmpty()
    {
        return this.root=== null;
    }

    makeTree(val)
    {
        let newNode=new Node(val)
        if(this.root===null)
        {
            this.root=newNode;
        }
        else
        {
            this.insertNode(this.root,newNode)   
        }   
    }
    insertNode(root,newNode)
    {
        if(root.value>newNode.value)
        {
            root.left=newNode
        }
        else
        {
            root.right=newNode
        }
        // else
        // {
        //     root.right=newNode
        // }
    }
}
let bst = new BSTree();
bst.makeTree(4)
bst.makeTree(3)
bst.makeTree(5)

console.log(bst)
console.log(bst.isTreeEmpty())