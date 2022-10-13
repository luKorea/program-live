const BASE_URl = 'http://codercba.com:1888/api'
class HGRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  request(options) {
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseUrl + options.url,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
  get(options) {
    return this.request({
      ...options,
      method: 'GET'
    })
  }
  post(options) {
    return this.request({
      ...options,
      method: 'POST'
    })
  }
}

export const hgRequest = new HGRequest(BASE_URl)