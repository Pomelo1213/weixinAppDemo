// pages/personalClass/personalClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hostName: 'Jenny蔡健玲',
    hostInfo: 'Jenny蔡健玲，师从世界著名心理学家菲利普·津巴多，同时担任津巴多学院院长。心理学泰斗、斯坦福荣退教授菲利普·津巴多先生做为本课程联合供稿人，在每一章均有真人献声。',
    lessons: [
      {title: '心理学真的有用吗？', time: '3:43'},
      {title: '津巴多带你入门心理学', time: '1:13'},
      {title: '心理学是什么？', time: '9:19' },
      {title: '心理学的主要流派有哪些？', time: '11:00' },
      {title: '津巴多：心理学的本质是什么？', time: '11:00' },
      {title: '通过一个案例学会心理学研究方法', time: '11:00' },
      {title: '如何判断一个研究靠不靠谱？', time: '11:00' },
      {title: '津巴多：心理学的硬功夫和软功夫', time: '11:00' },
      {title: '进化、遗传与人的心理间的关系是什么？', time: '11:00' },
      { title: '进化、遗传与人的心理间的关系是什么？', time: '11:00' }           
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.imageUrl)
    this.setData({
      imgUrl: options.imageUrl
    })
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