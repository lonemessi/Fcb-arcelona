// pages/home/home.js
var homePageData = require("../../Data/HomePageData.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    championInfoData:[],
    NewsCasesData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       championInfoData: homePageData.championInfo,
       NewsCasesData: homePageData.NewsCases,
     });
  },

 



 


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})