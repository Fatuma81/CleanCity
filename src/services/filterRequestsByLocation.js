// filterRequestsByLocation.js
function filterRequestsByLocation(requests, location) {
  return requests.filter(r => r.location === location);
}

module.exports = filterRequestsByLocation;


// This function filters pickup requests by location from localStorage

// Test scripts:
// 1. Should return all requests with the given location
// 2. Should return an empty array if location is not found
// 3. Should return empty array if there is no data in storage
