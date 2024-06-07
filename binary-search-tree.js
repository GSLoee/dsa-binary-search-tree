class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this; // if empty, make val the root
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    }
    if(val < currentNode.val){
      if(currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left)
    } else {
      if(currentNode.right === null) {
        currentNode.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, currentNode.right);
    }
      
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root
    while(currentNode){
      if(currentNode.val === val) return currentNode;
      if(currentNode.val > val){
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root === null) return undefined;

    if(val < current.val) {
      if(current.left=== null) return undefined;
      return this.findRecursively(val, current.left)
    } else if(val < current.val) {
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right)
  }
  return current;
}

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = []
    let currentNode = this.root
    
    function traverse(node){
      arr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(currentNode)
    return arr; 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() { //t left, myself, t right
    let arr = []
    let currentNode = this.root
    
    function traverse(node){
      if (node.left) traverse(node.left);
      arr.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(currentNode)
    return arr; 

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = []
    let currentNode = this.root
    
    function traverse(node){
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.val);
    }

    traverse(currentNode)
    return arr; 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = []
    let queue = []
    let node = this.root 

    queue.push(node)

    while(queue.length){
      node = queue.shift()
      arr.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right)
    }
    return arr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let removeNode = this.root 
    let parent; 

    while(removeNode.val !== val){
      parent = removeNode;
      if(val<removeNode.val){
        removeNode = removeNode.left
      } else {
        removeNode = removeNode.right
      }
    }

    if(removeNode !== this.root){
      if(removeNode.left === null && removeNode.right === null){
        if(parent.left === removeNode){
          parent.left = null
        } else {
          parent.right = null 
        }
      } else if (removeNode.left !== null && removeNode.right !== null){
        let rightParent = removeNode;
        let right = removeNode.right;
        if(right.left === null){
          right.left = removeNode
          if(parent.left === removeNode) {
            parent.left =  right 
          } else {
            parent.right = right
          }
        } else {
          while (right.left !== null) {
            rightParent = right
            right = right.left
          }
          if(parent.left === removeNode) {
            parent.left.val = right.val
          } else {
            parent.right.val = right.val 
          }
          if(right.right !== null) {
            rightParent.left = right.right
          } else {
            rightParent.left = null 
          }
        }
      } else {
        if(parent.left === removeNode){
          if(removeNode.right === null){
            parent.left = removeNode
          } else {
            parent.left = removeNode
          }
        } else {
          if(removeNode.right === null) {
            parent.right =  removeNode.left
          } else {
            parent.right = removeNode.right
          }
        }
      }
    }
    return removeNode
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
