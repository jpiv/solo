var SaveStatsView = Backbone.View.extend({

  el: "<button class = saveStats>Save Stats</button>",

  events: {
    'click': function () {
        this.model.clicked();
      }
  },

  render: function () {
    return this.$el;
  }

});