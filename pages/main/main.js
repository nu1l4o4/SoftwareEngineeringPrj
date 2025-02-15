// pages/main/main.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    creditScore:60,
    swiperImage:[
      {
        imageUrl:'/images/swiper01.png'
      },
      {
        imageUrl:'/images/swiper02.png'
      },
      {
        imageUrl:'/images/swiper03.png'
      }
    ],
    name:""
  },
  // 顶部轮播框点击事件
  redirectToUrl(e){
    console.log(e.currentTarget.dataset.index);//此为将图片顺序的索引传入该事件函数
    var index = e.currentTarget.dataset.index;
    switch(index){
      case 0://登录送好礼
      //跳转到一篇文章
      break;
      case 1://下单
      //navigateTo createOrder页面
      break;
      case 2://完成十单有福利
      //跳转至微信公众号
      break;
      case 3://跑腿员认证
      //跳转到跑腿员认证页面
      break;
    }
  },
  navigateToMine: function(){
    wx.switchTab({
      url: '/pages/mine/mine',
    })
  },


  navigateToSendOrder: function() {
    wx.navigateTo({
      url: '/pages/sendOrder/sendOrder' 
    });
  },

  navigateToTakeOrder: function() {
    wx.navigateTo({
      url: '/pages/takeOrder/takeOrder' 
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {


    this.setData({
      name:app.globalData.userInfo.account
    });
    console.log(this.data.name);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})