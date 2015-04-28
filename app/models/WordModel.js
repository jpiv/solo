var WordModel = Backbone.Model.extend({

  commitWord: function (isValid) {
    if(isValid) this.trigger('good');
    else this.trigger('bad');
  }

});