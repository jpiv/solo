var AppModel = Backbone.Model.extend({

  initialize: function () {
    this.wordList = new WordList();
    this.inputBox = new InputModel();
    this.set('wordIndex', 0);
    this.inputBox.on('wordChanged', this.compareWord, this);
    this.inputBox.on('wordCommited', this.wordCommit, this);
  },

  wordCommit: function (word) {
    console.log(word);
    this.inputBox.clear();
  },

  compareWord: function (word) {
    var currentWord = this.wordList.at(this.get('wordIndex')).get('word');
    currentWord = currentWord.slice(0, word.length);
    if(word !== currentWord)
      console.log(currentWord, word, ':invalid word');
    else
      console.log('valid word');
  }


});