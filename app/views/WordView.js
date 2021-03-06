var WordView = Backbone.View.extend({

  el: "<span></span>",

  initialize: function () {
    this.model.on('bad', this.onBad, this);
    this.model.on('good', this.onGood, this);
  },

  onBad: function () {
    this.$el.addClass("wordBad");
  },

  onGood: function () {
    this.$el.addClass("wordGood");
  },

  render: function (id) {
    this.$el.attr('id', id);
    this.$el.text(this.model.get('word'));
    return this.$el;
  }

});