// pages/personalClass/personalClass.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasPay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var infosId = options.infosId
    var infos = app.globalData.infos
    console.log(infos)
    console.log(infosId)
    var hostName, hostInfo, lessons, solutions
    for(let key = 0; key < infos.length; key++){
      if(infos[key].infosId === infosId){
        this.setData({
          hostName: infos[key].hostName,
          hostInfo: infos[key].hostInfo,
          lessons: infos[key].lessons,
          solutions: infos[key].solutions,
          imgUrl: infos[key].pic
        })
      }
    }

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
  
  }
})