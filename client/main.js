import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';

Meteor.startup(() => {

  new Vue({
      el: '#app'
  });

});
