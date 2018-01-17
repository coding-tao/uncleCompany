Page({
    data: {
        markers: [{
            iconPath: '../../images/address.png',
            id: 0,
            latitude: 22.564033756616,
            longitude: 113.879331538354,
            width: 32,
            height: 32,
            title:"深圳市康晶达光电技术有限公司",
            label:{
                content:'深圳市康晶达光电技术有限公司',
                x:-80,
                y:10
            }
        }]
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    },
    tel() {
        wx.makePhoneCall({
            phoneNumber: '0755-26404363'
        })
    },
    tel1() {
        wx.makePhoneCall({
            phoneNumber: '13824341095'
        })
    },
})