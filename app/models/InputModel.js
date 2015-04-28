var InputModel = Backbone.Model.extend({
  
  textChange: function (e) {
    var text = $(e.target).val();
    var lastChar = _.last(text);
    if(lastChar !== " ")
      this.trigger('wordChanged', text);
    else
      this.trigger('wordCommited', text.slice(0,-1));
  },

  clear: function () {
    this.trigger('clear');
  }

});