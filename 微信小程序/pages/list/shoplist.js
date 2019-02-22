const fetch = require('../../utils/fetch.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0,
    pageSize:10,
    shoplist:[],
    listid:'',
    hasMore: true
  },
  /**
   * 加载更多数据 
   * */
  loadMore: function () {
    wx.showNavigationBarLoading();
    if (!this.data.hasMore && this.data.shoplist.length > 0) return wx.showToast({
      title: '没有更多数据了!',
      success() {
        wx.hideNavigationBarLoading();
      }
    });

    fetch(`https://locally.uieee.com/categories/${this.data.listid}/shops`, 'GET', { _limit: this.data.pageSize, _page: ++this.data.page })
      .then((res) => {
        var newList = this.data.shoplist.concat(res.data);
        const hasMore = this.data.page * this.data.pageSize < parseInt(res.header['X-Total-Count']);
        this.setData({ shoplist: newList, hasMore });
          //关闭下拉动画
          wx.stopPullDownRefresh();
          //关闭上拉提示
          wx.hideLoading();
          //导航加载关闭
          wx.hideNavigationBarLoading();
      })
      .catch((err) => {
        //关闭下拉动画
        wx.stopPullDownRefresh();
        //关闭上拉提示
        wx.hideLoading();
        //导航加载关闭
        wx.hideNavigationBarLoading();
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1111);
    this.setData({
      listid: options.list_id,
      title:options.title
    })
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置导航栏标题
    if (this.data.title) {
      wx.setNavigationBarTitle({
        title: this.data.title
      })
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉");
    this.setData({ 
        shoplist:[], 
        page: 0,
        hasMore:true
      });
    this.loadMore();
    // 停止加载动画,否则手机端会一直显示
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底");
    wx.showLoading({
      title: '加载中',
    })
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
})