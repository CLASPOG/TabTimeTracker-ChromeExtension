function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let activeTab = tabs[0];
  chrome.storage.local.get("tabTimes", function (result) {
    const tabTimes = result.tabTimes || {};
    const tabTime = tabTimes[activeTab.id];
    const trackerDiv = document.getElementById("tracker");

    if (tabTime) {
      let totalTime = tabTime.total + (tabTime.end ? tabTime.end - tabTime.start : Date.now() - tabTime.start);
      trackerDiv.textContent = `Time on this tab: ${formatTime(totalTime)}`;
    } else {
      trackerDiv.textContent = "No time tracked yet for this tab.";
    }
  });
});
