<template>
  <div>
    <h2>开发测试</h2>
    <h3>{{data}}</h3>
    <div class="test"
      v-tap="(e) => swipeleft(1)"
      v-longTap="(e) => swipeleft(2)"
      v-swipe="(e, dis) => swipeleft(3, e, dis)"
      v-swipeup="(e) => swipeleft(4)"
      v-swipedown="(e, dis) => swipeleft(5, e, dis)"
      v-swipeleft="(e, dis) => swipeleft(6, e, dis)"
      v-swiperight="(e) => swipeleft(7)"
      v-swiping="(e, dis) => swipeleft(8, e, dis)"></div>
  </div>
</template>

<script>
// <!-- 本地开发插件的使用 -->
import { ref } from 'vue'

export default {
  setup() {
    const data = ref()

    const swipeleft = (type, e, dis) => {
      console.log(type, dis)
      switch(type) {
        case 1: data.value = '点击'; break;
        case 2: data.value = '长按'; break;
        case 3: data.value = '移动'; break;
        case 4: data.value = '上'; break;
        case 5: data.value = '下'; break;
        case 6: data.value = '左'; break;
        case 7: data.value = '右'; break;
        case 8: data.value = '滑动'; break;
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
