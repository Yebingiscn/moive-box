// pages/list/list.js
let distance = 0
let tags = ''
let page_fisrt_start = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectList: ['热门电影', '最新电影', '欧美电影', '日韩电影'],
    activeIndex: 0,
    heightArr: [],
    toView: 'content0'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let query = wx.createSelectorQuery(),
      self = this
    query.selectAll('.content-item').boundingClientRect((rect) => {
      rect.forEach(ele => {
        self.calculateHeight(ele.height)
      })
    }).exec();
    tags = '热门'
    this.getData(tags)
  },
  titleChange(e) {
    console.log(e.currentTarget.dataset.index)
    if (e.currentTarget.dataset.index == 0) {
      //热门电影
      tags = '热门'
      this.getData(tags)
    }
    if (e.currentTarget.dataset.index == 1) {
      //最新电影
      tags = '最新'
      this.getData(tags)
    }
    if (e.currentTarget.dataset.index == 2) {
      //热门电影
      tags = '欧美'
      this.getData(tags)
    }
    if (e.currentTarget.dataset.index == 3) {
      //热门电影
      tags = '日韩'
      this.getData(tags)
    }
    this.setData({
      activeIndex: e.currentTarget.dataset.index,
    })
  },
  getData(e) {
    var self = this;
    wx.request({
      url: 'https://movie.douban.com/j/search_subjects',
      data: {
        type: "movie",
        tag: e,
        page_limit: 20,
        page_start: page_fisrt_start
      },
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        self.setData({
          toView: res.data.subjects
        })
      }
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
  onReachBottom: function () {
    wx.showToast({
      title: '已经到底了哦',
      duration: 500,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  toDetail: function(e) {
    console.log(e)
    wx.setStorageSync('moive-url', e.currentTarget.dataset.url)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})