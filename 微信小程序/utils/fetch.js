module.exports = (url, type, data) =>{
  return new Promise((resolve, reject)=>{
    wx.request({
      url: url,
      data: data,
      header: {
        "Content-Type": 'json'
      },
      method: type,
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail: reject,
    })
  })
}