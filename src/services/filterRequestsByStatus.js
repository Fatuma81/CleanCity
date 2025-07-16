// filterRequestsByStatus.js
function filterRequestsByStatus(requests, status) {
  return requests.filter(r => r.status === status);
}

module.exports = filterRequestsByStatus;


// This function filters pickup requests from localStorage based on status

// Test scripts:
// 1. Should return only requests matching the given status
// 2. Should return an empty array if no matches
// 3. Should return an empty array if no data exists
