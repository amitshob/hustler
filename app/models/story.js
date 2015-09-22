import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  storyTitle: DS.attr(),
  image: DS.attr(),
});
