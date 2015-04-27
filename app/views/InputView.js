var InputView = Backbone.View.extend({

  el: "<div class='inputView'></div>",

  initialize: function () {
  },

  render: function () {
    var $input = $("<input type='text' size='32' />");
    var triggerChange = this.model.textChange.bind(this);
    $input.on('input', triggerChange);
    this.$el.append($input);

    return this.$el;
  }

});