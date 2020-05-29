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

        remove(data) {
            let node = this.root;
            function removeNode(node: Node, data: any): Node {
                if (node === null) {
                    return null;
                }
                if (data === node.data) {
                    // root node has 2
                    if (node.left === null && node.right === null) {
                        return null;
                    }
                    // node has right leaf
                    if (node.left === null) {
                        return node.right;
                    }
                    // node has left leaf
                    if (node.right === null) {
                        return node.left;
                    }
                    // node has two left
                    let tempt = node.right;
                    while (tempt.left !== null) {
                        tempt = tempt.left;
                    }
                    node.data = tempt.data;
                    removeNode(node.right, tempt.data);
                    return node;
                }
                if (data > node.data) {
                    node.right = removeNode(node.right, data);
                    return node;
                }
                if (data < node.data) {
                    node.left = removeNode(node.left, data);
                    return node;
                }
            };

            this.root = removeNode(node, data);
        }
        findMin() {
            let current = this.root;
            while (current.left !== null) {

                current = current.left
            }
            return current.data
        }

        printLeftNodeRight() {
            let temptNode = this.root;
            function LNR(node: Node) {
                if (node !== null) {
                    LNR(node.left);
                    console.log(node.data);
                    LNR(node.right);
                }
            }
            LNR(temptNode);
        }

        findMax() {
            let current = this.root;
            while (current.right !== null) {

                current = current.right
            }
            return current.data
        }
        find(data): any {
            let current: Node = this.root;
            while (current.data !== data) {

                if (data > current.data) {
                    current = current.right
                }

                if (data < current.data) {
                    current = current.left
                }

                if (current === null) {
                    return false;
                }
            }
            if (data === current.data) {
                return true;
            }


        }
    }
    let binarySearchTree = new BinarySearchTree();

    binarySearchTree.add(20);
    binarySearchTree.add(10);
    binarySearchTree.add(40);
    binarySearchTree.add(30);
    binarySearchTree.add(90);

    binarySearchTree.printLeftNodeRight();
    // binarySearchTree.remove(20)
    // console.dir(binarySearchTree.root, { depth: null });
    // console.log(binarySearchTree.findMin());
    // console.log(binarySearchTree.findMax());
    // console.log(binarySearchTree.find(30));
}
