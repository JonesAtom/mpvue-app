<template>
  <div class="authen-wrapper">
    <image class="authen-img" src="../../static/img/authen-img.png" />
    <button v-if="canIUse" type="primary" class="authen-btn" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">去授权</button>
    <div v-else>请升级微信版本</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    };
  },
  methods: {
    bindGetUserInfo: function (e) {
      if (e.mp.detail.userInfo) {
        wx.switchTab({
          url: '/pages/me/main'
        })
      }
     
    }
  },
};
</script>

<style scoped>
.authen-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 40rpx;
}
.authen-img {
  width: 428rpx;
  height: 536rpx;
}
.authen-btn {
  display: block;
  width: 100%;
  margin-top: 20rpx;
}
</style>
