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
    const currentNode = this.root;
    const newNode = new Node(val);
    if (!currentNode){
      this.root = newNode;
      return this.root;
    }
    while (currentNode){
      if (val < currentNode.val){
        if (!currentNode.left){
          currentNode.left = newNode;
          return this.root;
        }else{
          currentNode = currentNode.left;
        }
      }else{
        if (!currentNode.right){
          currentNode.right = newNode;
          return this.root;
        }else{
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    function recursionHelper(currentNode){
      if (!currentNode){
        return;
      }
      if (currentNode.val < val){
        if (!currentNode.left){
          currentNode.left = newNode;
          return;
        }else{
          recursionHelper(currentNode.left);
        }
      }else{
        if (!currentNode.right){
          currentNode.right = newNode;
          return;
        }else{
          recursionHelper(currentNode.right);
        }
      }
    }
    recursionHelper(this.root);
    return this.root;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    if (!this.root){
      return undefined;
    }

    while (currentNode){
      if (currentNode.val === val) return currentNode;
      if (val < currentNode.val){
        if (currentNode.left){
          currentNode = currentNode.left;
        }else{
          return undefined;
        }
      }else if (val > currentNode.val){
        if (currentNode.right){
          currentNode = currentNode.right;
        }else{
          return undefined;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root){
      return undefined;
    }
    function recursionHelper(currentNode){
      if (!currentNode){
        return undefined;
      }
      if (val === currentNode.val){
        return currentNode;
      }
      if (val < currentNode.val){
        if (currentNode.left){
          recursionHelper(currentNode.left);
        }else{
          return undefined;
        }
      }
      if (val > currentNode.val){
        if (currentNode.right){
          recursionHelper(currentNode.right);
        }else{
          return undefined;
        }
      }
    }
    return recursionHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const array = [];
    function recursionHelper(currentNode){
      array.push(currentNode);
      if (currentNode.left) recursionHelper(currentNode.left);
      if (currentNode.right) recursionHelper(currentNode.right);
    }
    recursionHelper(this.root);
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const array = [];
    function recursionHelper(currentNode){
      if (currentNode.left) recursionHelper(currentNode.left);
      array.push(currentNode);
      if (currentNode.right) recursionHelper(currentNode.right);
    }
    recursionHelper(this.root);
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const array = [];
    function recursionHelper(currentNode){
      if (currentNode.left) recursionHelper(currentNode.left);
      if (currentNode.right) recursionHelper(currentNode.right);
      array.push(currentNode);
    }
    recursionHelper(this.root);
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const array = [];
    const queue = [this.root];
    while (queue.length!==0){
      const currentNode = queue.shift();
      array.push(currentNode);
      if (currentNode.left){
        queue.push(currentNode.left);
      }
      if (currentNode.right){
        queue.push(currentNode.right);
      }
    }
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

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
