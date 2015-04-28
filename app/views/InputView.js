var InputView = Backbone.View.extend({

  el: "<div class='inputView'></div>",

  initialize: function () {
    this.model.on('clear', this.clearInput, this);
    this.model.on('wordBad', this.wordBad, this);
    this.model.on('wordGood', this.wordGood, this);
    this.$input = $("<input type='text' class='input' autofocus />");
  },

  wordBad: function () {
    this.$input.addClass("wordBad");
  },

  wordGood: function () {
    this.$input.removeClass("wordBad");
  },

  clearInput: function () {
    this.$input.val("");
  },

  render: function () {
    var triggerChange = this.model.textChange.bind(this.model);
    this.$input.on('input', triggerChange);
    this.$el.html(this.$input);

    return this.$el;
  }

});