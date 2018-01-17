//app.js
const AV = require('./utils/av-weapp-min.js');
AV.init({
  appId: 'P4n7a6Qf1RbXEqMvyxBIqrYq-gzGzoHsz',
  appKey: 'KjfcA37RHmjBwibxhPJpfV7T',
});
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null
  }
})