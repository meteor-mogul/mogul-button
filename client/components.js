import { Vue } from 'meteor/meteormogul:vue-dist';

// VueJS components are defined in .js files.
// Templates for each components are defined in .html files.
// Render target for component is custom HTML tag of same name.

// This component looks for a render target of <hello>
Vue.component("hello", {
  // Looks for a template with id="hello-template"
  template: "#hello-template",
  // A bit of VueJS magic to get counter to be reactive.
  // For an explanation, see https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  data: function () {
    return {
      counter: 0
    }
  }
});

Vue.component("info", {
  template: "#info-template"
});
