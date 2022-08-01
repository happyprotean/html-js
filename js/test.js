import { treeData } from "./tree.js";
// function compartTwoShopList(shopList1 = [], shopList2 = []) {
//   if (!shopList1 || !shopList2) return false
//   if (shopList1.length !== shopList2.length) return false
//   let strShopList1 = shopList1.map(item => String(item.sort()))
//   let strShopList2 = shopList2.map(item => String(item.sort()))
//   console.log(strShopList1, strShopList2)
//   return strShopList1.every(strItem1 => {
//     return strShopList2.find(strItem2 => strItem1 === strItem2)
//   })
// }

// let a = [[1, 2], [2, 2], [3, 4]]
// let b = [[1, 2], [3, 2], [3, 4]]

// let res = compartTwoShopList(a, b)
// console.log(res)

function findNodeInTree(nodeId = "", tree = []) {
  for (const node of tree) {
    if (node.id === nodeId) {
      return node;
    } else if (node.children) {
      const result = findNodeInTree(nodeId, node.children);
      if (result) return result;
    }
  }
}

const setValue = (root, key, flag, object, value) => {
  for (let i = 0; i < root.length; i++) {
    if (root[i][flag] === key) {
      root[i][object] = value;
      return true;
    } else if (root[i].children) {
      const result = setValue(root[i].children, key, flag, object, value);
      if (result) return result;
    }
  }
};

// [2, 21].forEach((key) => {
//   setValue(treeData, key, "id", "isShow", 1);
// });
// console.log(treeData);


let tree = [{
  id: 2,
  children: [{
    id: 22,
    children: []
  }, {
    id: 21,
    children: []
  }]
}, {
  id: 1,
  children: [{
    id: 12,
    children: []
  }, {
    id: 11,
    children: []
  }]
}]

function sortTree(tree) {
  const sortFunc = (a, b) => a.id - b.id
  for (const node of tree) {
    if (node.children && node.children.length){
      sortTree(node.children)
    }
  }
  tree.sort(sortFunc)
}

// let res = tree.sort((a, b) => a.id - b.id)
sortTree(tree)
console.log(tree)
console.log(tree[0], tree[1])
