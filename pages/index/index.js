//index.js
var IndexPageData = require("../../Data/IndexPageData.js");

Page({
  data: {
    playerData:[],
    gameData:[],
   
  },
  
  onLoad: function (options) {
    this.setData({
      playerData: IndexPageData.player,
      gameData: IndexPageData.gamecontent
      
     
    })
  },
 
})
