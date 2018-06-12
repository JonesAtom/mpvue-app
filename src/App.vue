<script>
import { get } from '@/utils/index';
import qcloud from 'wafer2-client-sdk';
import config from '@/utils/config';

export default {
  async created () {


    // const res = await get('/weapp/demo')
    // console.log('1212==', res);
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
    console.log('小程序启动了');

  },
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
/* btn */
.btn {
  color: #fff;
  background-color: #ea5a49;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
  text-align: center;
}
.btn:active{
  background-color: #fa5a49
}
</style>  
