import Vue from 'vue'
import App from './Book'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '图书列表页'
  }
}
