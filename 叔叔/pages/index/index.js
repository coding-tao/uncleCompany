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
        interval: 3000,
        duration: 1000,
        listArr:[],
        swiperArr:[]
    },
    onShow () {
      new AV.Query('Todo')
        .descending('createdAt')
        .find()
        .then(todos =>{
          let arr = [];
          // this.setData({ listArr: todos })
          todos.forEach((item)=>{
            arr.push({
              img: item.attributes.img.attributes.url,
              content: item.attributes.content
            })
          })
          this.setData({
            listArr:arr
          })
        })
        .catch(console.error);
    },
    onReady() {
      console.log(1)
      new AV.Query('TestObject')
        .descending('createdAt')
        .find()
        .then(todos => {
          console.log(11)
          console.log(todos)
          let arr = [];
          // this.setData({ listArr: todos })
          todos.forEach((item) => {
            arr.unshift({
              img: item.attributes.img.attributes.url
            })
          })
          console.log(arr,'ff')
          this.setData({
            swiperArr: arr
          })
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
