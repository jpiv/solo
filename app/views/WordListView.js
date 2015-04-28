var WordListView = Backbone.View.extend({

  el: "<div class='wordList'></div>",

  render: function () {
    var wordView;

    this.$el.html("");
    this.collection.each(function (val, i) {
      wordView = new WordView({ model: val }).render(i);
      this.$el.append(wordView);
    }, this);

    console.log('Rendered word list.');
    return this.$el;
  }

});