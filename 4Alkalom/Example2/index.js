// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        document.getElementById("result").innerHTML = request.source;
    }
});
'use strict';

function click(e) {
    window.close();
}

function display_a (results){
    var allLinks=results;
    console.log(results);
    var resultLinks = "";
    
    for (var i = 0; i < allLinks.length; i++) {
        resultLinks += "<li>\n" +
            "<h4>"+allLinks[i].value+"</h4>\n" +
            "<p>"+allLinks[i].href+"</p>\n" +
            "</li>"
    }
    document.getElementById("result").innerHTML = resultLinks;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("closeButton").addEventListener("click",click);
    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });
});
