
# Tab Time Tracker

A Chrome extension that monitors and displays the time spent on each active tab.

## Directory Structure

```
tab-time-tracker/
│
├── background.js          # Service worker script handling tab tracking and time management
├── manifest.json          # Extension metadata and configuration
├── popup.html             # HTML for the popup displayed when the extension icon is clicked
├── popup.js               # JavaScript for the popup, displaying the tracked time
├── icon16.png             # Icon for the extension (16x16 pixels)
├── icon48.png             # Icon for the extension (48x48 pixels)
└── icon128.png            # Icon for the extension (128x128 pixels)
```

## Files Explained

- **`background.js`**: 
  - Contains the service worker script responsible for tracking the time spent on each tab.
  - Handles tab activation, tab removal, and window focus changes to update and save the time data.

- **`manifest.json`**: 
  - Defines the extension's metadata, permissions, and background script setup.
  - Specifies the icons and the popup HTML file.

- **`popup.html`**: 
  - HTML layout for the extension’s popup interface.
  - Provides a simple UI to display the tracked time for the current tab.

- **`popup.js`**: 
  - JavaScript file that retrieves the tracked time from storage and updates the popup display.

- **`icon16.png`**, **`icon48.png`**, **`icon128.png`**:
  - Icons of different sizes for the extension, used in various places within the Chrome browser.

## How to Use

1. **Load the Extension:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch at the top-right.
   - Click **Load unpacked** and select the extension’s directory.

2. **Track Time:**
   - Click the extension icon in the Chrome toolbar to open the popup.
   - The popup will display the time spent on the current tab.

3. **Verify Functionality:**
   - Open and switch between multiple tabs to see the time tracked accurately.
   - Close tabs and check if the time updates correctly in the popup when reopened.

4. **Debugging:**
   - Use Chrome Developer Tools (`Ctrl+Shift+I` or `Cmd+Option+I` on Mac) to inspect the popup and background script for errors or issues.

## License

This project is licensed under the [MIT License](LICENSE).

## Contribution

This project is open for contribution and any necessary update is highly appriciated
