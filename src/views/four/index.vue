<template>

  <div id="jsmind"></div>

</template>
<script setup>
import jsmind from 'jsmind';
import { onMounted } from 'vue';

onMounted(() => {

  var mind = {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    "meta": {
      "name": "example",
      "author": "hizzgdev@163.com",
      "version": "0.2"
    },
    /* 数据格式声明 */
    "format": "node_array",
    /* 数据内容 */
    "data": [
      { "id": "root", "isroot": true, "topic": "jsMind" },

      { "id": "easy", "parentid": "root", "topic": "Easy", "direction": "left" },
      { "id": "easy1", "parentid": "easy", "topic": "Easy to show" },
      { "id": "easy2", "parentid": "easy", "topic": "Easy to edit" },
      { "id": "easy3", "parentid": "easy", "topic": "Easy to store" },
      { "id": "easy4", "parentid": "easy", "topic": "Easy to embed" },

      { "id": "open", "parentid": "root", "topic": "Open Source", "expanded": false, "direction": "right" },
      { "id": "open1", "parentid": "open", "topic": "on GitHub" },
      { "id": "open2", "parentid": "open", "topic": "BSD License" },

      { "id": "powerful", "parentid": "root", "topic": "Powerful", "direction": "right" },
      { "id": "powerful1", "parentid": "powerful", "topic": "Base on Javascript" },
      { "id": "powerful2", "parentid": "powerful", "topic": "Base on HTML5" },
      { "id": "powerful3", "parentid": "powerful", "topic": "Depends on you" },
    ]
  };
  const options = {                   // options 将在下一章中详细介绍
    container: 'jsmind', // [必选] 容器的ID，或者为容器的对象
    editable: true,                // [可选] 是否启用编辑
    theme: 'orange'                // [可选] 主题
  };

  const jm = new jsmind(options);
  let data = { 'width': 100, 'leading-line-color': '#33ff33' }
  jm.show(mind);
  jm.add_node('powerful', 'powerful4', '你好', data, 'right')
})
</script>
<style>
#jsmind {
  width: 100%;
  height: 100%;
}
</style>