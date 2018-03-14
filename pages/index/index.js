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
    iconSize: 10,
    //iconColor: rgb(0, 255, 255),
    iconType: 'search',
    searchName: false,
    bigFocus: false,
    smallFocus: false,
    bodyCover: false,
    isBarClick: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    tempFreeImage: 'https://pic4.zhimg.com/v2-33404db8d994c18d4f637d811fff375e_r.jpg',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: [],
    todayRecommend: [],
    todayRecommendVersion: 0, //用版本号来标记 '今日推荐' 是否是最新的
    infos: [],
    infosVersion: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
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

    //今日推荐
    if (this.data.todayRecommendVersion !== app.globalData.todayRecommendVersion){
      if (app.globalData.todayRecommend.length !== 0){
        this.setData({
          todayRecommend: app.globalData.todayRecommend,
          todayRecommendVersion: app.globalData.todayRecommendVersion
        })
      }else{
        wx.request({  //如果全局中也没有，就去请求
          url: requestRecommendUrl,
          data: {
            hello: 'world'
          },
          success: function(e){
            console.log('request success: ', e.data)
            //这里请求成功了，会设置app中的变量值，然后在设置一个callback来设置当前page的变量值
          },
          fail: function(err){
            //console.log('request fail: ', err.data)
          }
        })
      }
    }

    //编辑推荐
    if (this.data.infosVersion !== app.globalData.infosVersion) {
      if (app.globalData.infos.length !== 0) {
        this.setData({
          infos: app.globalData.infos,
          infosVersion: app.globalData.infosVersion
        })
      } else {
        wx.request({
          url: requestRecommendUrl,
          data: {
            hello: 'world'
          },
          success: function (e) {
            console.log('request success: ', e.data)
            //这里请求成功了，会设置app中的变量值，然后在设置一个callback来设置当前page的变量值
          },
          fail: function (err) {
            console.log('request fail: ', err.data)
          }
        })
      }
    }

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
