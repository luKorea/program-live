class HGRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        data,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
  get(url, data) {
    return this.request(url, 'GET', data)
  }
  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

export const hgRequest = new HGRequest()