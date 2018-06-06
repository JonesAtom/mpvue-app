// 请求类库
import config from './config';

/**
 * GET 请求
 * @param {url} url
 * @param {data} data
 * @param {method} GET
 */
export function GET(url, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      data: data,
      method: GET,
      success: function (res) {
        if (res.data.code == 0) {
          reslove(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

/**
 * POST 请求
 * @param {url} url 
 * @param {data} data 
 * @param {method} POST 
 */
export function POST(url, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      data: data,
      method: POST,
      success: function (res) {
        if (res.data.code == 0) {
          reslove(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

/**
 * PUT 请求
 * @param {url} url 
 * @param {data} data 
 * @param {method} PUT 
 */
export function PUT(url, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      data: data,
      method: PUT,
      success: function (res) {
        if (res.data.code == 0) {
          reslove(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

/**
 * DELETE 请求
 * @param {url} url 
 * @param {data} data
 * @param {method} DELETE 
 */
export function DELETE(url, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: config.host + url,
      data: data,
      method: DELETE,
      success: function (res) {
        if (res.data.code == 0) {
          reslove(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
