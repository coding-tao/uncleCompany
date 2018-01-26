// pages/list/index.js
const AV = require('../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    new AV.Query('Todo')
      .descending('createdAt')
      .find()
      .then(todos => {
        console.log(todos[0])
        let arr = [];
        // this.setData({ listArr: todos })
        todos.forEach((item) => {
          arr.push({
            img: item.attributes.img.attributes.url,
            content: item.attributes.content
          })
        })
        this.setData({
          listArr: arr
        })
      })
      .catch(console.error);
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