var StatsView = Backbone.View.extend({
  el: "<div class='statsView'></div>",

  initialize: function () {
    this.model.on('renderStats', this.render, this);
  },

  render: function () {
    var $stats = $('<div class="stats"></div>');
    var statsHtml = "";

    statsHtml += "<div class='statsHeader'>Stats</div>";
    statsHtml += "<br />";

    for(var key in this.model.stats) {
      statsHtml += "<span class='label'>" + key + "</span>: ";
      statsHtml += "<span class='stat'>" + this.model.stats[key] + "</span>";
      statsHtml += "<br />"
    }

    $stats.html(statsHtml);
    this.$el.html($stats);

    return this.$el;
  }
});