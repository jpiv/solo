var StatsModel = Backbone.Model.extend({

  initialize: function () {
    this.stats = {
      Wpm: 0,
      WordsTyped: 0,
      CorrectWords: 0,
      FailedWords: 0,
    };

    this.on('wordTyped', this.wordTyped);
    this.on('timeEnded', this.timeEnded);
    console.log('Stats initialized');
  },

  wordTyped: function (isValid) {
    console.log('Word typed:', isValid);
    if(isValid)
      this.stats.CorrectWords++;
    else
      this.stats.FailedWords++;
    this.stats.WordsTyped++;
  },

  timeEnded: function () {
    this.stats.Wpm = this.stats.CorrectWords;
    console.log(this.stats);
    this.trigger('renderStats');
  }

});