import Vue from 'vue';
import App from './Authorize';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '登陆授权',
  },
};
