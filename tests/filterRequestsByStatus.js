// filterRequestsByStatus.js
function filterRequestsByStatus(status) {
  const dataKey = 'cleancity_pickup_requests';
  const requests = JSON.parse(localStorage.getItem(dataKey)) || [];
  return requests.filter(r => r.status === status);
}

module.exports = filterRequestsByStatus;

// This function filters pickup requests from localStorage based on status

// Test scripts:
// 1. Should return only requests matching the given status
// 2. Should return an empty array if no matches
// 3. Should return an empty array if no data exists
