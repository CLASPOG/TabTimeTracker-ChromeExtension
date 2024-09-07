let activeTabId = null;
let tabTimes = {};

// Load previously saved tab times from storage on startup
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("tabTimes", (result) => {
    if (result.tabTimes) {
      tabTimes = result.tabTimes;
    }
  });
});

// Handle tab activation
chrome.tabs.onActivated.addListener((activeInfo) => {
  const now = Date.now();
  if (activeTabId !== null && tabTimes[activeTabId]) {
    tabTimes[activeTabId].end = now;
    tabTimes[activeTabId].total += tabTimes[activeTabId].end - tabTimes[activeTabId].start;
  }

  activeTabId = activeInfo.tabId;
  if (!tabTimes[activeTabId]) {
    tabTimes[activeTabId] = { start: now, end: null, total: 0 };
  } else {
    tabTimes[activeTabId].start = now;
  }

  // Save the updated tabTimes to storage
  chrome.storage.local.set({ tabTimes });
});

// Handle when a tab is removed (closed)
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabTimes[tabId];
  chrome.storage.local.set({ tabTimes });
});

// Handle window focus changes
chrome.windows.onFocusChanged.addListener((windowId) => {
  const now = Date.now();
  if (windowId === chrome.windows.WINDOW_ID_NONE && activeTabId && tabTimes[activeTabId]) {
    tabTimes[activeTabId].end = now;
    tabTimes[activeTabId].total += tabTimes[activeTabId].end - tabTimes[activeTabId].start;
    chrome.storage.local.set({ tabTimes });
  }
});
