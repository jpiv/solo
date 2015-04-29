var TimerModel = Backbone.Model.extend({

  initialize: function () {
    this.timeLeft = 30;
    this.finished = false;
    this.timer = 0;
    this.isTicking = false;
    console.log('Timer inititalized.');
  },

  startTimer: function () {
    var tick = this.onTick.bind(this);
    this.isTicking = true;
    this.timer = setInterval(tick, 1000);
    console.log('Timer started.');
  },

  onTick: function () {
    if(this.timeLeft > 0) {
      this.timeLeft--;
      this.trigger('tick', this.timeLeft);
      console.log('Timer ticked:', this.timeLeft);
    } else
      this.timerEnded();
  },

  timerEnded: function () {
    this.finished = true;
    this.isTicking = false;
    clearInterval(this.timer);
    console.log('Timer Ended.')
    this.trigger('timerEnded');
  }

});
