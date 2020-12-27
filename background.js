chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "address-lookup",
        "title": "Lookup '%s' as an address",
        "type": "normal",
        "contexts": ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    var w = 550, h = 420
    var url = 'http://api.macvendors.com/' + encodeURIComponent(info.selectionText)
    window.open(url, "_blank", "width = " + w + ", height = " + h +
        ", left = " + (screen.width - w) / 2 + ", top = " + (screen.height - h) / 2 +
        ", scrollbars = yes, resizable = yes, toolbar = no, location = yes")
});
