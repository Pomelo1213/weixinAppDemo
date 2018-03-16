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
    todayRecommend: [
      { infosId: 'fjkdsfdsfds2wq1', id: 1, img: 'https://pic4.zhimg.com/v2-7b342f37c650d3ccbcdf981d5df2e4fe_r.jpg', title: '大师带你重读经典，远离 「地摊心理学」', content: '看了许多星座运势和感情攻略，依然过不好这一生？心理学泰斗带你洞察人心深处的秘密', hostName: 'Jenny蔡健玲', hostInfo: 'Jenny蔡健玲，师从世界著名心理学家菲利普·津巴多，同时担任津巴多学院院长。心理学泰斗、斯坦福荣退教授菲利普·津巴多先生做为本课程联合供稿人，在每一章均有真人献声。'},
      {id: 2, img: 'https://pic1.zhimg.com/v2-b7c9e43e37811559282216e3aaa6a523_r.jpg', title: '你的专业，曾遭到亲戚的哪些误解', content: '每年过年，都要遭受亲朋好友的询问：你的专业是干啥的呀？如何度过这个难关？' },
      {id: 3, img: 'https://pic1.zhimg.com/v2-34c13a2dd2ac5522a6b861cd423bd79f_r.jpg', title: '关于阅读的一些微小经验', content: '如何选合适自己的读物？如何啃下艰涩的读物？如何养成日常阅读的习惯？如何记住读物中的知识？这是知名自由撰稿人张佳玮的高效率阅读经验分享。' },
      {id: 4, img: 'https://pic3.zhimg.com/v2-f4ba89850e1dcb8f8b5f8352c1d6b019_b.jpg', title: '谁都别落下共享单车，真假风口的幕后战事', content: '2016年的共享单车大战让真个创投圈疯狂，3场战争，看起来发生在对每个街角的争抢上，但真实的大战发生在腾讯、滴滴及红杉、DST等各大机构的的资本下注中。' }
    ],

    infos: [   
      { 
        infosId: 'fdisojfis213213', 
        id: 1, 
        title: '从0到100打造爆款品牌的秘密', 
        content: '如何打造新品牌？没钱怎么打造爆款品牌？你想知道的爆款品牌秘密都在这里。', 
        pic: 'https://pic4.zhimg.com/v2-5e275c2202a10549060bba06adf4df3a_r.jpg',
        hostName: '彭萦',
        hostInfo: '离开硅谷，回国创业，她打造了三个品牌。HeyJuice排毒果蔬汁，原麦山丘面包连锁店。',
        lessons: [
          { title: '打造爆款品牌最重要的一步', time: '3:43' },
          { title: '品牌最重要的是-你的Aha moment', time: '1:13' },
          { title: '如何从0到1打造一个新品牌', time: '9:19' },
          { title: '如何把一个小众品牌变成一个大众品牌', time: '11:00' },
          { title: '如何把一个大品类作出差异化', time: '11:00' },
          { title: '没钱，怎么做品牌', time: '11:00' },
          { title: '如何选择做哪个消费品类', time: '11:00' },
          { title: '如何定位你的品牌', time: '11:00' },
          { title: '如何做客户调查', time: '11:00' },
          { title: '品牌不应该有KPI', time: '11:00' }
        ],
        solutions: [
          { content: '提供给你一道从0到1打造品牌的体系方法' },
          { content: '叫你复制从0到1的成功，吧小众品牌大众化' },
          { content: '告诉你在预算不足的情况下，怎样达成品牌传播的效果' },
          { content: '打破品牌定位的局限-别再问目标客户是谁' },
          { content: '详解 品牌为什么不应该有KPI' },
          { content: '来测试下自己是否具备做品牌的潜质' }
        ], 
      },

      { 
        infosId: 'dijsf932923jjfi', 
        id: 2, 
        title: '巧用传播学，加持竞争力', 
        content: '向记者一样战斗：用传播学理念，高效处理信息，做信息时代的聪明人。', 
        pic: 'https://pic3.zhimg.com/v2-5057dca68b4989e51a87c1c19b9ce715_r.jpg',
        hostName: '潘玥',
        hostInfo: '毕业于香港浸会大学国际新闻系，曾多次参与海内外重大事件报道；新东方钱托福雅思听力口语教师，教学近四年间课程量问鼎。',
        lessons: [
          { title: '来吧，一起成为信息时代的聪明人', time: '3:43' },
          { title: '信息爆炸？新媒体时代的高效筛选', time: '1:13' },
          { title: '信息吸收加工，专注度与深度并重', time: '9:19' },
          { title: '碎片时间，争分夺秒也要积极思考', time: '11:00' },
          { title: '新领域无从下手，向记者一样战斗', time: '11:00' },
          { title: '认识平台属性，构建积极网络人设', time: '11:00' },
          { title: '克服知识诅咒，你表达清楚了吗', time: '11:00' },
          { title: '告别乏味套路，优化文稿写作技巧', time: '11:00' },
          { title: '当众即兴发言，克服胆怯提升气场', time: '11:00' },
          { title: '团队协作，成为沟通成本最低的人', time: '11:00' }
        ],
        solutions: [
          { content: '高效搜集信息，攻克全新领域' },
          { content: '优化文稿协作，提升发言技巧' },
          { content: '善用社交网络，打造个人品牌' },
          { content: '克服社交恐惧，拓展多元人脉' },
          { content: '提升沟通能力，优化职场表现' }
        ], 
      },
      { 
        infosId: 'cmkdviwiejrji3f', 
        id: 3, 
        title: '让你少奋斗10年的小白理财课', 
        content: '工作了几年依然月光？买房遥遥无期？从现在开始准备你的人生第一桶金', 
        pic: 'https://pic2.zhimg.com/v2-a1b08f5a1db30f9bcbd3dd19a16d760d_r.jpg',
        hostName: '周勇',
        hostInfo: '靠谱周0周勇，财富管理行家，钱耳朵财富学院CEO。拥有超过22年的投资经验和财经报道经验。',
        lessons: [
          { title: '从现在开始准备你的人生第一桶金', time: '3:43' },
          { title: '相信时间的力量，感受金钱的善意', time: '1:13' },
          { title: '厘清家底，你到底有多少钱', time: '9:19' },
          { title: '四个账户：让你的钱发挥最大的效用', time: '11:00' },
          { title: '现金管理，比收益还重要的现金流', time: '11:00' },
          { title: '用好银行的钱，买房生活品质不打折', time: '11:00' },
          { title: '投资是硬仗，保险须先行', time: '11:00' },
          { title: '高手的完美搭配', time: '11:00' },
          { title: '轻松越过假定投的哪些坑', time: '11:00' },
          { title: '做基金投资的马拉松赛跑者', time: '11:00' }
        ],
        solutions: [
          { content: '原理： 学习投资本质，做事件维度上的平衡消费' },
          { content: '分配： 标准普尔家庭资产限图，保证生活品质' },
          { content: '投资： 四大理财工具，学会钱生钱' }
        ], 
      },
      { 
        infosId: 'kodskofdisfji32', 
        id: 4, 
        title: '从0到1，学透区块链玩转比特币', 
        content: '知名比特币交易平台CTO亲授，学透区块链知识玩转比特币，把握未来先机。', 
        pic: 'https://pic1.zhimg.com/v2-c65d71fcedb7190de0102e7993da2fd4_r.jpg',
        hostName: '朱嘉伟',
        hostInfo: '知名比特币交易平台COO，比特币、区块链专家；清华、北大特邀区块链讲师',
        lessons: [
          { title: '人类社会货币的演变', time: '3:43' },
          { title: '比特币的转账机制和7个必修名词', time: '1:13' },
          { title: '比特币转账运行的原理', time: '9:19' },
          { title: '比特币的技术来源', time: '11:00' },
          { title: '比特币价格的含义', time: '11:00' },
          { title: '比特币的上游： 挖矿', time: '11:00' },
          { title: '全球各国比特币政策的变化', time: '11:00' }
        ]
      },
      { 
        infosId: 'fjkdsfdsfds2wq1', 
        id: 5, 
        title: '斯坦福课堂：津巴多巨著《心理学与生活》', 
        content: '心理学泰斗带你亲临顶级高效课堂，拆解学术概念，洞察人心深处的秘密。', 
        pic: 'https://pic4.zhimg.com/v2-7b342f37c650d3ccbcdf981d5df2e4fe_r.jpg',
        hostName: 'Jenny蔡健玲',
        hostInfo: 'Jenny蔡健玲，师从世界著名心理学家菲利普·津巴多，同时担任津巴多学院院长。心理学泰斗、斯坦福荣退教授菲利普·津巴多先生做为本课程联合供稿人，在每一章均有真人献声。',
        lessons: [
          { title: '心理学真的有用吗？', time: '3:43' },
          { title: '津巴多带你入门心理学', time: '1:13' },
          { title: '心理学是什么？', time: '9:19' },
          { title: '心理学的主要流派有哪些？', time: '11:00' },
          { title: '津巴多：心理学的本质是什么？', time: '11:00' },
          { title: '通过一个案例学会心理学研究方法', time: '11:00' },
          { title: '如何判断一个研究靠不靠谱？', time: '11:00' },
          { title: '津巴多：心理学的硬功夫和软功夫', time: '11:00' },
          { title: '进化、遗传与人的心理间的关系是什么？', time: '11:00' },
          { title: '进化、遗传与人的心理间的关系是什么？', time: '11:00' }
        ],
        solutions: [
          { content: '提供给你一套从0到1打造品牌的体系方法' },
          { content: '教你复制从0到1的成功，吧小众品牌大众化' },
          { content: '告诉你在预算不足的情况下，怎样达成品牌传播效果' },
          { content: '打破品牌定位的局限--别再问目标顾客是谁' },
          { content: '详解品牌为什么不应该有KPI' },
          { content: '来测试下自己是否具备做品牌的潜质' }
        ],
      },
      { 
        infosId: 'dkfdskfjd123233', 
        id: 6, 
        title: '人性皆有裂痕：人格心理学', 
        content: '探索自我，探索我们如何理解世界和其他人，如何与他人相处。', 
        pic: 'https://pic1.zhimg.com/v2-1abbdf3359a89ed6eb6ec667e5fc444b_r.jpg',
        hostName: '简里里',
        hostInfo: '原中央财经大学心理教育与咨询中心讲师、心理咨询师；创业者',
        lessons: [
          { title: '导论：人性皆有裂隙', time: '3:43' },
          { title: '自恋型人格', time: '1:13' },
          { title: '自虐型人格', time: '9:19' },
          { title: '抑郁性人格', time: '11:00' },
          { title: '你要知道，你也是可以悲伤的成品', time: '11:00' },
          { title: '强迫性人格', time: '11:00' },
          { title: '偏执型人格', time: '11:00' },
          { title: '表演性人格', time: '11:00' },
          { title: '反社会人格', time: '11:00' },
          { title: '冷血症', time: '11:00' }
        ],
        solutions: [
          { content: '人格是什么' },
          { content: '我们是如何形成自己的人格的' },
          { content: '如何发展成健康的人格' },
          { content: '我们怎么才能掌握自己的生活' },
          { content: '如何改善自己的人际关系' }
        ], 
      },
      { 
        infosId: 'loijicdfew2902j', 
        id: 7, 
        title: '罗永浩推荐：人人都需要的效率必修课', 
        content: '身陷「穷忙」没有时间提升自己？这十节课叫你效率倍增的秘诀', 
        pic: 'https://pic2.zhimg.com/v2-531277ab8a70fea64f93f2d34af6aa63_r.jpg',
        hostName: '少数派',
        hostInfo: '少数派是国内最好的生产力内容创作平台之一，汇聚2000多名专业坐着，精选原创内容13000多篇，目前专注于效率工具的方法研究和使用技巧',
        lessons: [
          { title: '现代人的效率新常识', time: '3:43' },
          { title: '任务管理', time: '1:13' },
          { title: '文件管理', time: '9:19' },
          { title: '邮件处理', time: '11:00' },
          { title: '思维导图', time: '11:00' },
          { title: '密码管理', time: '11:00' },
          { title: '信息摄取', time: '11:00' },
          { title: '为什么应该用PDF取代纸质文档', time: '11:00' },
          { title: '怎么用PDF阅读更有效', time: '11:00' },
          { title: '学会记账', time: '11:00' }
        ],
        solutions: [
          { content: '排列任务优先级，不在捡了芝麻丢了西瓜' },
          { content: '理顺文件归档，杜绝版本混乱' },
          { content: '掌握邮件礼仪' },
          { content: '善用思维导图' },
          { content: '理财多些小心思' }
        ], 
      },
      { 
        infosId: 'fkdsiwq12310ijf', 
        id: 7, 
        title: '斯坦福大学经济学思维课', 
        content: '快速掌握经济学思维，学会像经济学家一样理性思考，高效决策。', 
        pic: 'https://pic1.zhimg.com/v2-80e88c6618d75ca922de5ff6370dbd7f_r.jpg',
        hostName: '兰德尔·巴特利特',
        hostInfo: '美国斯坦福大学经济学博士、史密斯学院经济学教授，曾在美国联邦贸易委员会、华盛顿大学任职',
        lessons: [
          { title: '世上没有免费的午餐', time: '3:43' },
          { title: '谁也无法掌控一切', time: '1:13' },
          { title: '理性与边际分析', time: '9:19' },
          { title: '如何获得更多的利益', time: '11:00' },
          { title: '经济学家眼中的效率', time: '11:00' },
          { title: '解码 囚徒困境', time: '11:00' },
          { title: '用好制度做明智的决定', time: '11:00' },
          { title: '群体的理性决策', time: '11:00' },
          { title: '选择搭便车的使用方法', time: '11:00' },
          { title: '获取信息的最优办法', time: '11:00' }
        ],
        solutions: [
          { content: '打破学科门槛，快速入门经济学' },
          { content: '15个思维实验，理解经典的经济学原理' },
          { content: '20个历史案例+50个现实案例，直接应用于生活' },
          { content: '6个基本原则+3个核心概念，找到问题的最优的解决方案' },
          { content: '从经济学家的视角，找到问题的最优解决方案' }
        ], 
      }
    ]
  }
})