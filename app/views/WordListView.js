var WordListView = Backbone.View.extend({

  el: "<div class='wordList'></div>",

  render: function () {
    var $wordContainer = $('<span></span>');
    var html = "";

    this.collection.each(function (val, i) {
      $wordContainer.attr('id', i);
      $wordContainer.text(val.get('word'));
      html += $wordContainer.prop('outerHTML') + " ";
    }, this);

    return this.$el.html(html);
  }

});