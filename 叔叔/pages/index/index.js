//index.js
const AV = require('../../utils/av-weapp-min.js');
Page({
    data: {
        imgUrls: [
            '../../images/1.jpg',
            '../../images/2.jpg',
            '../../images/3.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    onShow () {
      new AV.Query('Todo')
        .descending('createdAt')
        .find()
        .then(todos =>{
          console.log(todos)
          this.setData({ todos })
        })
        .catch(console.error);
    },
    tel(){
        wx.makePhoneCall({
          phoneNumber: '0755-26404363' 
        })
    },
    tel1() {
          wx.makePhoneCall({
            phoneNumber: '13824341095' 
          })
    },
    openMap(){
      wx.openLocation({
        latitude: 22.564033756616,
        longitude: 113.879331538354
      })
    },
    linkToAbout(){
        wx.switchTab({
            url: '/pages/about/index'
        })
    },
    linkToConcat() {
        wx.switchTab({
            url: '/pages/concat/index'
        })
    },
    linkToList() {
        wx.switchTab({
            url: '/pages/list/index'
        })
    },
  onLoad: function () {

  }
})
