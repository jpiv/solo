var AppView = Backbone.View.extend({
  el: "<div class='app'></div>",

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.append(new WordListView(
      { collection: this.model.get('wordList') }
    ).render());

    this.$el.append(new InputView(
      { model: this.model.get('input') }
    ).render());

    $('body').append(this.el);
    console.log('Rendered.');
  }
});