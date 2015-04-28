var WordList = Backbone.Collection.extend({

  model: WordModel,

  initialize: function () {
    this.generateWords();
  },

  generateWords: function () {
    this.add(new WordModel({word: 'dog'}));
    this.add(new WordModel({word: 'cat'}));
  }

});