var InputView = Backbone.View.extend({

  el: "<div class='inputView'></div>",

  initialize: function () {
    this.model.on('clear', this.clearInput, this);
    this.$input = $("<input type='text' size='32' />");
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