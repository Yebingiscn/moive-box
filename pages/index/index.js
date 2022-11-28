// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sentence: "",
    searchHotSelect: ['最新电影','热门电影']
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var self = this;
    //获取轮播图
    wx.request({
      url: 'https://movie.douban.com/j/search_subjects',
      data: {
        type: "movie",
        tag: "热门",
        page_limit: 5,
        page_start: 0
      },
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        self.setData({
          moviePoster: res.data.subjects
        })
      }
    })
    //获取每日一句
    this.getNewSentence();

    //获取电影搜索

    //获取小组热点
    wx.request({
      url: 'https://api.vvhan.com/api/hotlist?type=douban',
      data: {
      },
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        self.setData({
          doubanHot: res.data.data
        })
      }
    })
  },
  getNewSentence: function() {
    var self = this;
    wx.request({
      url: 'https://api.vvhan.com/api/en?type=sj',
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        self.setData({
          sentence: res.data,
        })
      }
    });
  },
  toDetail: function(e) {
    console.log(e.detail.value)
    wx.setStorageSync('search-url', e.detail.value)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  rediectToList:function() {
    wx.redirectTo({
      url: '../list/list',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})