// updateRequestStatus.js
// Updates the status of a pickup request by request ID

const STORAGE_KEY = 'cleancity_pickup_requests';

function updateRequestStatus(requestId, newStatus) {
  const data = localStorage.getItem(STORAGE_KEY);
  const requests = data ? JSON.parse(data) : [];
  const index = requests.findIndex(req => req.id === requestId);

  if (index !== -1) {
    requests[index].status = newStatus;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    return true;
  }

  return false;
}

module.exports = updateRequestStatus;
