var StatsView = Backbone.View.extend({
  el: "<div class='statsView'></div>",

  initialize: function () {
    this.model.on('renderStats', this.render, this);
  },

  render: function (timeOut) {
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
    // $stats.append(new SaveStatsView(
    //   { model: new SaveStatsModel(this.model.stats) }
    // ).render());
    this.$el.html($stats);
    this.$el.hide();
    if(timeOut) this.$el.slideDown(700);

    return this.$el;
  }
});