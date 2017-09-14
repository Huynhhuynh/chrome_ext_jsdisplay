// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly';

var cacheData = {};

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: ''});

chrome.extension.onMessage.addListener(function(result) {
  chrome.tabs.query({'active': true}, function(tabs) {
    tabs.forEach(function(currentTab) {
      cacheData['tabID_' + currentTab.id] = result;
    })
  });
});

chrome.extension.onRequest.addListener(function(request, sender, callback) {
  if(callback && typeof callback === "function") return callback(cacheData['tabID_' + request.tabID]);
  // console.log(cacheData['tabID_' + request.tabID]);
})
