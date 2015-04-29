var TimerView = Backbone.View.extend ({

  el: "<span class='timerView'>30</span>",

  initialize: function () {
    this.model.on('tick', this.render, this)
  },

  render: function (timeLeft) {
    this.$el.text(timeLeft);
    return this.$el;
  }
});