var WordListView = Backbone.View.extend({

  el: "<div class='wordList'></div>",

  render: function () {
    this.collection.each(function (val) {
      console.log(val, ': Value');
    });
    return this.el;
  }

});