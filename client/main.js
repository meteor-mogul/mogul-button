import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';

Meteor.startup(() => {

  // This Vue app renders in HTML element (el) with id="app" (#app)
  new Vue({
      el: '#app'
  });

  // Can have more Vue apps rendering in other targets.

});
