namespace tree {

    class Node {
        public data: any;
        public left: Node;
        public right: Node;

        constructor(data: any) {
            this.data = data;
            this.left = null;
            this.right = null;
        }

    }

    class BinarySearchTree {
        public root: Node;

        constructor() {
            this.root = null
        }

        searchTree(node: Node, data: any) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                }
                return this.searchTree(node.left, data);
            }
            if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                }
                return this.searchTree(node.right, data);
            }
            return;
        }

        add(data: any): void {
            if (this.root === null) {
                this.root = new Node(data);
                return;
            }
            // if root exist
            let node = this.root;
            this.searchTree(node, data);
        }
    }
    let binarySearchTree = new BinarySearchTree();

    binarySearchTree.add(20);
    binarySearchTree.add(10);
    binarySearchTree.add(40);
    binarySearchTree.add(90);
    binarySearchTree.add(30);
    console.dir(binarySearchTree.root, { depth: null });
}
