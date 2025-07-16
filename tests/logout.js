// logout.js
function logout() {
  localStorage.removeItem('currentUser');
  return true;
}

module.exports = logout;

// This function removes the currentUser session from localStorage

// Test scripts:
// 1. Should remove 'currentUser' key from localStorage
// 2. Should return true after removing
// 3. Should not throw an error if key does not exist
