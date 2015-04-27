var AppView = Backbone.View.extend({
  el: "<div class='app'></div>",

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.append(new WordListView(
      { collection: this.model.get('wordList') }
    ).render());

    $('body').append(this.el);
    console.log('Rendered.');
  }
});