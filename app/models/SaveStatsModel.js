var SaveStatsModel = Backbone.Model.extend({

  url: '/savestats',

  clicked: function () {
    var username = prompt('Enter your username');
    this.save('username', username);
  }

});