var AppModel = Backbone.Model.extend({

  initialize: function () {
    this.wordList = new WordList();
    this.inputBox = new InputModel();
    this.set('wordIndex', 0);
    this.inputBox.on('wordChanged', this.compareWord, this);
    this.inputBox.on('wordCommited', this.wordCommit, this);
  },

  wordCommit: function (word) {
    var wordIndex = this.get('wordIndex');  
    if(this.wordList.length > wordIndex) {
      console.log("Word Accepted:", word);
      this.set('wordIndex', wordIndex + 1);
      this.inputBox.clear();
    } 
  },

  compareWord: function (word) {
    var currentWord;
    var wordIndex = this.get('wordIndex');
    if(this.wordList.length > wordIndex) {
      currentWord = this.wordList.at(wordIndex).get('word');
      currentWord = currentWord.slice(0, word.length);
      if(word !== currentWord)
        console.log(currentWord, word, ':invalid word');
      else
        console.log('valid word');
    }
  }


});