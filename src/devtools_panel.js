function info(message, clazz) {
    $("#messages").prepend("<li class=\"" + clazz + "\">" + message + "</li>");
}

function save_file(url) {

    // https://mcckc.blackboard.com/webapps/portal/execute/tabs/tabAction

    var filename = url.substring(url.indexOf("://") + 3);

    chrome.downloads.download({
        "filename": "mirroring/" + filename,
        "url": url,
        "conflictAction": "overwrite"
    }, (downloadItem) => {
        console.log(downloadItem);
    });
}

chrome.devtools.network.onRequestFinished.addListener((request) => {
    if (request.request.url.match("mcckc.blackboard.com")) {
        save_file(request.request.url)
        
        // console.log(request);
    }
    else
        info( "URL did not match: " + request.request.url, "text-muted" );
});
