import { createApp } from 'vue'
import App from './test/index'
import swipe from './plugin/touch'

const app = createApp(App)

app.use(swipe)

app.mount('#app')
