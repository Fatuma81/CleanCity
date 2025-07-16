// isAdmin.js
function isAdmin() {
  const data = localStorage.getItem('currentUser');
  const user = data ? JSON.parse(data) : null;
  return user?.role === 'admin';
}

module.exports = isAdmin;

// This function checks if the current user has the 'admin' role

// Test scripts:
// 1. Should return true if currentUser has role 'admin'
// 2. Should return false if currentUser is not admin
// 3. Should return false if currentUser is null or missing
