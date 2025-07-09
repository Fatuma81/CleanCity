# Test Environment Documentation

**Project:** CleanCity – Waste Pickup Scheduler  
**Prepared By:** The Debugger  
**Created On:** July 2, 2025  
**Purpose:** To define the testing environment setup for the CleanCity QA process.

1. Browsers Used
--------------------------------
The following browsers were used for testing:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Microsoft Edge (latest version)

2. Devices and Platforms
- Desktop Windows 10
- Mobile device emulator Chrome DevTools
- Screen resolution tests:  
- 1366×768 standard laptop 
- 1920×1080 HD desktop 

## 3. Application Setup

- No server required
- Run locally via:
  -Right-click `index.html` and open in browser
  Use **Live Server** in VS Code 
  to change type of browser opening the app one can change the defult browser on the settings
  for these changes to take effect one has to restart vscode
- All data stored in **`localStorage`**

4. Dev Tools Used
- Chrome Developer Tools → Application Tab:
  - Inspect localStorage data for users, pickup requests, and feedback
- Console tab used for checking logs or errors

5. Tools and Extensions
- VS Code
- Live Server Extension for real-time reload
more tools get added on in week two and three

6. Test Data

- Initial data seeded by `initializeData()` in `script.js`
- Sample users:
  - `user@cleancity.com` / `password123`
  - `admin@cleancity.com` / `admin123`
- Sample pickup requests automatically loaded on first run
n
