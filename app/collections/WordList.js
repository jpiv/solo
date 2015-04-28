var WordList = Backbone.Collection.extend({

  model: WordModel,
  url: "/words",  

  initialize: function () {
    this.fetch();
    this.on('sync', this.synced);
  },

  synced: function () {
    console.log('synced');
    var numWords = 200;
    var totalWords = this.length;
    console.log(totalWords);
    for(var i = 0; i < totalWords; i++){

    }
  }

});