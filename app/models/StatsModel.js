var StatsModel = Backbone.Model.extend({

  initialize: function () {
    this.stats = {
      'Wpm': 0,
      'Words Typed': 0,
      'Correct Words': 0,
      'Failed Words': 0,
    };

    this.on('wordTyped', this.wordTyped);
    this.on('timeEnded', this.timeEnded);
    console.log('Stats initialized');
  },

  wordTyped: function (isValid) {
    console.log('Word typed:', isValid);
    if(isValid)
      this.stats['Correct Words']++;
    else
      this.stats['Failed Words']++;
    this.stats['Words Typed']++;
  },

  timeEnded: function () {
    this.stats.Wpm = this.stats['Correct Words'] * 2;
    this.trigger('renderStats', true);
  }

});