function findFullPath (tree, lastItemValue) {
  let result = [];

  function traverse (node, path) {
    // 将当前节点的值加入路径
    path.push(node.value);

    // 判断当前节点的值是否是最后一项的值
    if (node.value === lastItemValue) {
      result = [ ...path ]; // 找到后保存路径
      return true; // 找到后返回真值
    }

    // 如果存在子节点，继续递归查找
    if (node.children) {
      for (const child of node.children) {
        // 如果找到结果就停止遍历
        if (traverse(child, path)) {
          return true;
        }
      }
    }

    // 如果没有找到，移除当前节点的值并返回假值
    path.pop();
    return false;
  }

  // 从树根开始遍历
  for (const node of tree) {
    if (traverse(node, [])) {
      break; // 找到结果后停止遍历
    }
  }

  return result; // 返回找到的完整路径
}

// 示例数据
const tree = [
  {
    value: 'A',
    children: [
      {
        value: 'B',
        children: [
          { value: 'C', },
          { value: 'D', }
        ]
      },
      {
        value: 'E',
        children: [
          { value: 'F', }
        ]
      }
    ]
  }
];

// 使用示例
const lastItem = 'D';
const fullPath = findFullPath(tree, lastItem);
console.log(fullPath); // 输出：['A', 'B', 'D']
