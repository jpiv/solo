var InputModel = Backbone.Model.extend({
  
  textChange: function (e) {
    var text = $(e.target).val();
    var lastChar = _.last(text);
    console.log(lastChar);
  }

});