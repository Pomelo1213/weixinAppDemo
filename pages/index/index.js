//index.js
const requestRecommendUrl = require('../../config').requestRecommendUrl
const util = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    time: {
      month: 0,
      day: 0,
      weekend: ''
    },
    searchName: false,
    bigFocus: false,
    smallFocus: false,
    bodyCover: false,
    isBarClick: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    tempFreeImage: 'https://pic4.zhimg.com/v2-33404db8d994c18d4f637d811fff375e_r.jpg',
    tempFreeTitle: '如何重塑自己的职业价值最终克服焦虑？',
    tempFreeContent: '2017年，互联网人为什么会焦虑？我们焦虑的根本原因是什么？如何才能保持自己的价值稳步提升？点击立即收听！',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: [],
    todayRecommend: [],
    infos: [],
    indicatorDots: false,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //点击搜索框搜索
  bindUserTap: function(){
    this.setData({
      searchName: true,
      bigFocus: true,
      bodyCover: true
    }) 
  },
  bindSearchCancel: function(){
    this.setData({
      searchName: false,
      bodyCover: false
    })
  },
  bindCoverTap: function(){
    this.setData({
      searchName: false,
      bodyCover: false
    })
  },
  bindTempFree: function(){
    wx.navigateTo({
      url: '../infoLive/infoLive',
    })
  },
  bindNavigatorClass: function(e){
    console.log(e.currentTarget.dataset.item.img)
    var imageUrl = e.currentTarget.dataset.item.img
    wx.navigateTo({
      url: '../personalClass/personalClass?imageUrl=' + imageUrl,
      success: function(res) {
        //console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function () {
    //获取时间
    var date = new Date()
    var weekend = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    //var weekend = date.getDay()
    this.setData({
      ['time.month']: date.getMonth()+1,
      ['time.day']: date.getDate(),
      ['time.weekend']: weekend[date.getDay()]
    })

    //今日推荐，在页面里，不应该去请求，应该交给app加载的时候去请求。
    this.setData({
      todayRecommend: app.globalData.todayRecommend,
    })
      
    //编辑推荐
    this.setData({
      infos: app.globalData.infos,
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
