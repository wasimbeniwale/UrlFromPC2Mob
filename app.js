function displayQRCode(locationText){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: locationText,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

//thanks to http://stackoverflow.com/a/12189958
chrome.tabs.query(
    {
        currentWindow: true, 
        active: true
    },
    function (foundTabs) {
        if(foundTabs.length > 0){
            var url = foundTabs[0].url;
            displayQRCode(url)
        }
    }
);