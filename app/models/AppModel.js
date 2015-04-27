var AppModel = Backbone.Model.extend({

  initialize: function () {
    this.set('wordList', new WordList());
  }


});