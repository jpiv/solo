var AppModel = Backbone.Model.extend({

  initialize: function () {
    this.wordList = new WordList();
    this.inputBox = new InputModel();
    this.timer = new TimerModel();
    this.stats = new StatsModel();
    this.set('wordIndex', 0);
    this.timer.on('timerEnded', this.timeEnded, this);
    this.inputBox.on('wordChanged', this.compareWord, this);
    this.inputBox.on('wordCommited', this.wordCommit, this);
    this.wordList.on('sync', this.synced, this);
  },

  synced: function () {
    this.trigger('sync');
  },  

  timeEnded: function () {
    this.stats.timeEnded();
    console.log('Time ended (AppModel)');
  },

  wordCommit: function (word) {
    var wordIndex = this.get('wordIndex');  
    var isValid;
    console.log(this.timer.finished)
    if(this.wordList.length > wordIndex && !this.timer.finished) {
      isValid = this.checkWord(word);
      currentWord = this.wordList.at(wordIndex)
        .commitWord(isValid);


      this.stats.trigger('wordTyped', isValid);
      this.inputBox.trigger('wordGood');
      this.set('wordIndex', wordIndex + 1);
      this.inputBox.clear();
    } 
  },

  checkWord: function (word) {
    var currentWord;
    var wordIndex = this.get('wordIndex');
    if(this.wordList.length > wordIndex) {
      currentWord = this.wordList.at(wordIndex).get('word');
      if(word !== currentWord) return false;
      else return true;
    }
  },

  compareWord: function (word) {
    var currentWord;
    var wordIndex = this.get('wordIndex');

    if(!this.timer.isTicking && !this.timer.finished)
      this.timer.startTimer();

    if(this.wordList.length > wordIndex) {
      currentWord = this.wordList.at(wordIndex).get('word');
      currentWord = currentWord.slice(0, word.length);
      if(word !== currentWord) {
        this.inputBox.trigger('wordBad');
        return false;
      }
      else {
        this.inputBox.trigger('wordGood');
        return true;
      }
    }    
  }
});