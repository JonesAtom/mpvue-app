// 工具函数库
import config from './config';

/**
 * 数字转字符串
 * @param {*n} 数字
 */
// function formatNumber(n) {
//   const str = n.toString();
//   return str[1] ? str : `0${str}`;
// }
/**
 * 时间格式化
 * @param {*date} 时间
 */
// export function formatTime(date) {
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();

//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const second = date.getSeconds();

//   const t1 = [year, month, day].map(formatNumber).join('/');
//   const t2 = [hour, minute, second].map(formatNumber).join(':');

//   return `${t1} ${t2}`;
// }

// export default {
//   formatNumber,
//   formatTime,
// };

/***
 * 网络请求封装
 */

// http get 获取数据
export function get(url, data) {
  return request(url, 'GET', data)
}
// http post 获取数据
export function post(url, data) {
  return request(url, 'POST', data)
}
// 网络请求--公共方法
function request(url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

/**
 * 模态弹窗
 * @param {*提示标题} title 
 * @param {*提示内容} content 
 */
export function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

/**
* 消息提示框
* @param {*提示内容 String} title 
* @param {*图标 String} icon 默认success
* @param {*延迟时间 Number} time 
*/
export function showToast(title, icon, time) {
  wx.showToast({
    title: title,
    icon: icon,
    duration: time?time:1500
  })
}

// wx.set
