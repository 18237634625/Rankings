//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    countryList:[],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var list = new Array();
    
    var synthesize = ["美国", "中国", "俄罗斯", "印度", "法国", "日本", "英国", "德国", "韩国", "意大利"];//综合
    var military = ["美国", "俄罗斯", "中国", "印度", "法国", "英国", "德国", "韩国", "加拿大", "澳大利亚"];//军事
    var economics = ["美国", "中国", "日本", "德国", "法国", "英国", "印度", "巴西", "意大利", "加拿大"];//经济
    var environment = ["中国", "美国", "日本", "加拿大", "意大利", "英国", "法国", "德国", "布拉格", "捷克"];//环境
    
    for(var i =0;i<10;i++){
      var info = {};
      info["index"] = i+1;
      info["synthesize"] = synthesize[i];
      info["military"] = military[i];
      info["economics"] = economics[i];
      info["environment"] = environment[i];
      list[i]=info;
    }

    this.setData({
      'countryList':list
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
