var WordList = Backbone.Collection.extend({

  model: WordModel,
  url: "/words",  

  initialize: function () {
    // this.fetch();
    var words = WORDS.split('\n');
    var models = [];
    var numWords = 200;
    var rndWord = "";
    for(var i = 0; i < numWords; i++) {
      rndWord = words[Math.floor(Math.random() * words.length)];
      models.push({ word: rndWord });
    }
    this.set(models);
    console.log(this.at(0));
  }

});