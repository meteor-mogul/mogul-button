import { Vue } from 'meteor/meteormogul:vue-dist';

Vue.component("hello", {
  template: "#hello-template",
  data: function () {
    return {
      counter: 0
    }
  }
});

Vue.component("info", {
  template: "#info-template"
});
