(function() {
  var sendData = function() {

    this.isLinkOrScriptTag = function(e) {
      return e.srcElement.nodeName === 'SCRIPT' || e.srcElement.nodeName === 'LINK';
    }

    this.queryScriptFiles = function () {
      var scriptTags = document.querySelectorAll('script');
      var data = [];

      if(scriptTags.length > 0) {
        scriptTags.forEach(function(item) {
          if(item.src) data.push({name: item.src.split('/').slice(-1).pop(), url: item.src});
        })
      }

      return data;
    }

    this.queryCssFiles = function () {

      var linkTags = document.querySelectorAll('link[rel="stylesheet"]');
      var data = [];

      if(linkTags.length > 0) {
        linkTags.forEach(function(item) {
          if(item.href) data.push({name: item.href.split('/').slice(-1).pop(), url: item.href});
        })
      }

      return data;
    }

    this.queryForScriptAndCssNodes = function() {
      return {
        jsFiles: this.queryScriptFiles(),
        cssFiles: this.queryCssFiles(),
      }
    }

    this.sendMessage = function(files) {
      chrome.extension.sendMessage(files);
    }

    this.sendMessage(this.queryForScriptAndCssNodes());

    var self = this;
    document.addEventListener('DOMNodeInserted', function(e) {
      if (self.isLinkOrScriptTag(e)) {
        self.sendMessage(self.queryForScriptAndCssNodes());
      }
    }, false);

  }

  new sendData();
}())
