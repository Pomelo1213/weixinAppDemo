//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //console.log(res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: {},
    hasUserInfo: false,
    todayRecommendVersion: 0,
    todayRecommend: [    //这里的数据应该在小程序启动的时候去请求，对比版本号，如果版本号相同，就直接使用缓存的。不同再去请求。
      { id: 1, img: 'https://pic4.zhimg.com/v2-7b342f37c650d3ccbcdf981d5df2e4fe_r.jpg', title: '大师带你重读经典，远离 「地摊心理学」', content: '看了许多星座运势和感情攻略，依然过不好这一生？心理学泰斗带你洞察人心深处的秘密' },
      { id: 2, img: 'https://pic1.zhimg.com/v2-b7c9e43e37811559282216e3aaa6a523_r.jpg', title: '你的专业，曾遭到亲戚的哪些误解', content: '每年过年，都要遭受亲朋好友的询问：你的专业是干啥的呀？如何度过这个难关？' },
      { id: 3, img: 'https://pic1.zhimg.com/v2-34c13a2dd2ac5522a6b861cd423bd79f_r.jpg', title: '关于阅读的一些微小经验', content: '如何选合适自己的读物？如何啃下艰涩的读物？如何养成日常阅读的习惯？如何记住读物中的知识？这是知名自由撰稿人张佳玮的高效率阅读经验分享。' },
      { id: 4, img: 'https://pic3.zhimg.com/v2-f4ba89850e1dcb8f8b5f8352c1d6b019_b.jpg', title: '谁都别落下共享单车，真假风口的幕后战事', content: '2016年的共享单车大战让真个创投圈疯狂，3场战争，看起来发生在对每个街角的争抢上，但真实的大战发生在腾讯、滴滴及红杉、DST等各大机构的的资本下注中。' }
    ],

    infosVersion: 0,
    infos: [    //这里的数据应该在小程序启动的时候去请求，对比版本号，如果版本号相同，就直接使用缓存的。不同再去请求。
      { id: 1, title: '从0到100打造爆款品牌的秘密', content: '如何打造新品牌？没钱怎么打造爆款品牌？你想知道的爆款品牌秘密都在这里。', pic: 'https://pic4.zhimg.com/v2-5e275c2202a10549060bba06adf4df3a_r.jpg' },
      { id: 2, title: '巧用传播学，加持竞争力', content: '向记者一样战斗：用传播学理念，高效处理信息，做信息时代的聪明人。', pic: 'https://pic3.zhimg.com/v2-5057dca68b4989e51a87c1c19b9ce715_r.jpg' },
      { id: 3, title: '让你少奋斗10年的小白理财课', content: '工作了几年依然月光？买房遥遥无期？从现在开始准备你的人生第一桶金', pic: 'https://pic2.zhimg.com/v2-a1b08f5a1db30f9bcbd3dd19a16d760d_r.jpg' },
      { id: 4, title: '从0到1，学透区块链玩转比特币', content: '知名比特币交易平台CTO亲授，学透区块链知识玩转比特币，把握未来先机。', pic: 'https://pic1.zhimg.com/v2-c65d71fcedb7190de0102e7993da2fd4_r.jpg' },
      { id: 5, title: '斯坦福课堂：津巴多巨著《心理学与生活》', content: '心理学泰斗带你亲临顶级高效课堂，拆解学术概念，洞察人心深处的秘密。', pic: 'https://pic4.zhimg.com/v2-7b342f37c650d3ccbcdf981d5df2e4fe_r.jpg' },
      { id: 6, title: '人性皆有裂痕：人格心理学', content: '探索自我，探索我们如何理解世界和其他人，如何与他人相处。', pic: 'https://pic1.zhimg.com/v2-1abbdf3359a89ed6eb6ec667e5fc444b_r.jpg' },
      { id: 7, title: '罗永浩推荐：人人都需要的效率必修课', content: '身陷「穷忙」没有时间提升自己？这十节课叫你效率倍增的秘诀', pic: 'https://pic2.zhimg.com/v2-531277ab8a70fea64f93f2d34af6aa63_r.jpg' },
      { id: 7, title: '斯坦福大学经济学思维课', content: '快速掌握经济学思维，学会像经济学家一样理性思考，高效决策。', pic: 'https://pic1.zhimg.com/v2-80e88c6618d75ca922de5ff6370dbd7f_r.jpg' }
    ]
  }
})