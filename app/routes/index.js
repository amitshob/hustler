import Ember from 'ember';
//
// var stories = [{
//   id: 1,
//   storyTitle: "Pope francis",
//   author:"Britny Alexander",
//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
// }, {
//   id: 2,
//   storyTitle: "Pope francis",
//   author:"Britny Alexander",
//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
// }, {
//   id: 3,
//   storyTitle: "Pope francis",
//   author:"Britny Alexander",
//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },
});
