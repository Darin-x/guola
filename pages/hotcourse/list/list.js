// pages/hotcourse/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        id: '0001',
        imgUrl: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
        name: 'ECMAScript6 快速入门',
        teacher: '陈潇冰',
        price: 600
      },
      {
        id: '0002',
        imgUrl: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516825103.jpg',
        name: '智能社：JavaScript教程-从入门到精通',
        teacher: '陈潇冰',
        price: 600
      },
      {
        id: '0003',
        imgUrl: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
        name: 'ECMAScript6 快速入门',
        teacher: '陈潇冰',
        price: 600
      },
      {
        id: '0004',
        imgUrl: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
        name: 'ECMAScript6 快速入门',
        teacher: '陈潇冰',
        price: 600
      }
    ],
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
  onShow: function () {
  
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
      console.log('到底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})