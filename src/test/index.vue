<template>
  <div>
    <h2>开发测试</h2>
    <h3>{{data}}</h3>
    <div class="test"
      v-tap="(e) => swipeleft(1)"
      v-longTap="(e) => swipeleft(2)"
      v-swipe="(e) => swipeleft(3)"
      v-swipeup="(e) => swipeleft(4)"
      v-swipedown="(e) => swipeleft(5)"
      v-swipeleft="(e) => swipeleft(6)"
      v-swiperight="(e) => swipeleft(7)"></div>
  </div>
</template>

<script>
// <!-- 本地开发插件的使用 -->
import { ref } from 'vue'

export default {
  setup() {
    const data = ref()

    const swipeleft = (type) => {
      console.log(type)
      switch(type) {
        case 1: data.value = '点击'; break;
        case 2: data.value = '长按'; break;
        case 3: data.value = '移动'; break;
        case 4: data.value = '上'; break;
        case 5: data.value = '下'; break;
        case 6: data.value = '左'; break;
        case 7: data.value = '右'; break;
        default: break;
      }
    }

    return {
      data,
      swipeleft
    }
  }
}
</script>

<style scoped>
.test {
  height: 100px;
  margin: 0 10px;
  border: 2px solid #dededd;
}
</style>
