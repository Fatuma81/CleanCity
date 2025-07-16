// clearAllData.js
function clearAllData() {
  localStorage.removeItem('cleancity_users');
  localStorage.removeItem('cleancity_feedback');
  localStorage.removeItem('cleancity_pickup_requests');
}

module.exports = clearAllData;


// This function clears all localStorage data including user, feedback, and requests.
 

// Test scripts:
// 1. Should remove all stored keys from localStorage
// 2. Should leave localStorage length at 0
// 3. Should not throw error if localStorage is already empty
// 4. sho