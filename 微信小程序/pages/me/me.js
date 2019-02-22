// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 页面事件
   */
  radioChangeHandle:function (enevt) {
    console.log(enevt)
    console.log(enevt.detail.value);
    console.log(enevt.target.dataset.param);
  },
  fatherTapHandle:function (){
    // bindtap 产生事件冒泡
    console.log("点击父亲");
  },
  sonTapHandle: function () {
    // catchtap 阻止事件冒泡  vue中使用@click.stop阻止事件冒泡
    console.log("点击儿子");
  }
})