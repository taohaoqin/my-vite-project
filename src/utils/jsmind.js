import jsmind from 'jsmind';
import 'jsmind/screenshot'

class JSMind {
  constructor (options) {
    const { container, list, name } = options;
    const randomColor = () => {
      return '#' + Math.random().toString(16).substring(2, 8).padEnd(6, '0')
    }
    const formatData = (list, id) => {
      // 判断是否为根节点
      const isRoot = (item) => {
        return item.isroot
      }
      const rootId = id || list.filter(isRoot)[0].id
      if (!rootId) {
        throw new Error('rootId 不存在')
      }
      const ary = [...list]
      const children = ary.filter(item => item.parentid === rootId)
      let w = 'left'
      ary.forEach((item) => {
        if (children.includes(item)) {
          item.expanded = false
          item.direction = w
          w = w === 'left' ? 'right' : 'left'
        }
        const color = randomColor()
        item['background-color'] = color
        item['leading-line-color'] = color
      })
      return ary
    }
    const mind = {
      /* 元数据，定义思维导图的名称、作者、版本等信息 */
      "meta": {
        "name": name || "标签",
      },
      /* 数据格式声明 */
      "format": "node_array",
      /* 数据内容 */
      data: formatData(list),
    };
    const option = {                   // options 将在下一章中详细介绍
      container: container, // [必选] 容器的ID，或者为容器的对象
      editable: true,                // [可选] 是否启用编辑
      theme: 'primary',             // [可选] 主题
      support_html: false,
      editable: false,
      draggable: false,
      layout: {
        hspace: 40,          // 节点之间的水平间距
        vspace: 30,          // 节点之间的垂直间距
        pspace: 13,          // 节点与连接线之间的水平间距（用于容纳节点收缩/展开控制器）
        cousin_space: 0      // 相邻节点的子节点之间的额外的垂直间距
      },
      shortcut: {
        enable: false,
      }
    };
    this.jm = new jsmind(option);
    this.jm.show(mind);
  }
  expandAll () {
    this.jm.expand_all()
  }
  collapseAll () {
    this.jm.collapse_all()
  }
  exportImage () {
    this.jm.shoot();
  }
}

export default JSMind;