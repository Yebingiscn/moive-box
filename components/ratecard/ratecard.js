// components/ratecard/ratecard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    },
    starsize: {
      type: Number,
      value: 25
    },
    scoresize: {
      type: Number,
      value: 25
    },
    scorecolor: {
      type: String,
      value: "black"
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached: function() {
      var self = this;
      var score = self.properties.score + 1
      var light = Math.floor(score / 2);
      var half = Math.floor(score % 2);
      var dark = 5 - light - half;

      self.setData({
        light: Array(light),
        half: Array(half),
        dark: Array(dark),
        score: self.data.score
      })
    }
  }
})
