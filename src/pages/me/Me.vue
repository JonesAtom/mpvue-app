<template>
  <div class="container">
    <div class="userInfo">
      <img :src="userInfo.avatarUrl" class="avatar" @click="login">
      <span class="name">{{ userInfo.nickName }}</span>
    </div>
    <YearProgress></YearProgress>
    <button @click="scanBook" class="btn">添加图书</button>

  </div>
</template>

<script>
import { get, post, showToast } from '@/utils/index';
import qcloud from 'wafer2-client-sdk';
import config from '@/utils/config';

import YearProgress from '@/components/YearProgress';

export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userInfo: {
        avatarUrl: "../../static/img/unlogin.png",
        nickName: "点击登陆"
      }
    };
  },
  onShow () {
    let user = wx.getStorageSync('userInfo')
    if (user) {
      this.userInfo = user;
    }
  },
  methods: {
    // 登陆
    login () {
      let user = wx.getStorageSync('userInfo'),
        that = this;
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
          success: function (userInfo) {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showToast("登陆成功");
                that.userInfo = userRes.data.data;
                wx.setStorageSync('userInfo', userRes.data.data);
              }
            })

          }, fail: function (err) {
            wx.navigateTo({
              url: "/pages/authorize/main"
            })
          }
        })
      } else {
        that.userInfo = user;
      }
    },
    // 扫码
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    // 添加图书
    async addBook (isbn) {
      console.log(isbn);
      const res = await post('/weapp/addBook', {
        isbn,
        openid: this.userInfo.openId
      })
      console.log(res);
    },
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30rpx;
  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20rpx;
    .avatar {
      width: 150rpx;
      height: 150rpx;
      border-radius: 50%;
    }
    .name {
      font-size: 30rpx;
      color: #666;
      padding-top: 10rpx;
    }
  }
}
</style>


