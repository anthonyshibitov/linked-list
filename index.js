import LinkedList from "./LinkedList.js";
import Node from "./Node.js";

let list = new LinkedList();

let newNode = new Node(10);
let newNode2 = new Node(20);
let newNode3 = new Node(30);
list.append(newNode);
list.append(newNode2);
list.toString();
console.log("nodes: ", list.size());
list.append(newNode3);
list.append(new Node(100));
console.log("nodes: ", list.size());
list.toString();
list.prepend(new Node(0));
list.prepend(new Node(-1));
list.toString();
console.log(list.head().value());
console.log(list.tail().value());
console.log(list.at(2).value());
console.log(list.at(5).value());
list.pop();
list.toString();
console.log(list.contains(30));
console.log(list.contains(100));
console.log(list.find(20));
