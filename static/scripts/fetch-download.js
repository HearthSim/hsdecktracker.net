function fetchDownload(repository, assetName, cb, prereleases) {
	if(typeof prereleases == "undefined") {
		prereleases = false;
	}
	var request = new XMLHttpRequest();
	request.open("GET", "https://api.github.com/repos/" + repository + "/releases");
	request.setRequestHeader("Accept", "application/json");
	request.addEventListener("load", function(event) {
		if (request.status >= 200 && request.status < 300) {
			var result = JSON.parse(request.responseText);
			for(var i = 0; i < result.length; i++) {
				var release = result[i];
				if(!prereleases && release.prerelease) {
					continue;
				}
				// found the latest release
				var assets = release.assets;
				for(var j = 0; j < assets.length; j++) {
					var asset = assets[j];
					if(asset.name !== assetName) {
						continue;
					}
					cb(asset.browser_download_url);
					return;
				}
				// don't return old release if we can't find executable
				break;
			}
		}
		else {
			console.warn(request.statusText, request.responseText);
		}
		cb();
	});
	request.send();
}
