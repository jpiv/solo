var AppView = Backbone.View.extend({
  el: "<div class='app'></div>",

  initialize: function () {
    this.model.on('sync', this.render, this);
  },

  render: function () {
    var $inputDiv = $('<div class="inputDiv"></div>');

    this.$el.html("");
    this.$el.append(new WordListView(
      { collection: this.model.wordList }
    ).render());

    $inputDiv.append(new InputView(
      { model: this.model.inputBox }
    ).render());

    $inputDiv.append(new TimerView(
      { model: this.model.timer }
    ).render());

    this.$el.append($inputDiv);

    this.$el.append(new StatsView(
      { model: this.model.stats }
    ).render());


    $('body').append(this.el);
    console.log('Rendered.');
  }
});