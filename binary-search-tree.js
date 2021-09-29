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
    while (!currentNode){
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

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

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
