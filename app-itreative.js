class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.parent = parentNode;
    this.value = value;
  }

  addNode(value) {
    const node = new Node(value, this);
    this.children.push(node);

    return { node: node, index: this.children.length - 1 };
  }

  removeNode(index) {
    this.children.slice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

const user = new Tree("root");

const userInfoNode = user.root.addNode("userInfo");
const cartNode = user.root.addNode("cart");

userInfoNode.node.addNode('reyhane')
cartNode.node.addNode('book')

console.log(user);