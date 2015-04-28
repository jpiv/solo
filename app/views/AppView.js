var AppView = Backbone.View.extend({
  el: "<div class='app'></div>",

  initialize: function () {
    this.render();
    this.model.on('sync', this.render, this);
  },

  render: function () {
    this.$el.html("");
    this.$el.append(new WordListView(
      { collection: this.model.wordList }
    ).render());

    this.$el.append(new InputView(
      { model: this.model.inputBox }
    ).render());

    $('body').append(this.el);
    console.log('Rendered.');
  }
});