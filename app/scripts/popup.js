import Vue from 'vue';
import App from '../component/app.vue';

var _console = chrome.extension.getBackgroundPage().console;

var app=new Vue({
  el:'#app',
  data:{
    jsfiles: [],
    cssfiles: [],
    name:'vue-chrome-extension'
  },
  created (el) {
    this.loadFiles();
  },
  methods: {
    loadFiles () {
      var self = this;

      chrome.tabs.query({'active': true}, function(tabs) {
        tabs.forEach(function(currentTab) {

          chrome.extension.sendRequest({
            tabID: currentTab.id,
          }, function(result) {
            // _console.log('hello_: ', result);
            self.jsfiles = result.jsFiles;
            self.cssfiles = result.cssFiles;
          })
        })
      });
    }
  },
  render: h =>h(App)
})
