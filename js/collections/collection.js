var music = music || {};

music.Collection = Backbone.Collection.extend({
  initialize: function() {
    /*
       this.listenTo(this, "add", this.changeLocation);
       this.on("add", this.changeLocation, this);
     */
  },

  changeLocation: function() {
    console.log("data initialized");
  },

  model: music.model,
  url:"http://www.api.com"
});
