var WordList = Backbone.Collection.extend({

  model: WordModel,
  url: "/words",  

  initialize: function () {
    this.fetch();
  }

});