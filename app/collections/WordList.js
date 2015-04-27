var WordList = Backbone.Collection.extend({

  model: WordModel,

  initialize: function () {
    this.generateWords();
  },

  generateWords: function () {
    this.add(new WordModel({word: 'DOG'}));
    this.add(new WordModel({word: 'CAT'}));
  }

});