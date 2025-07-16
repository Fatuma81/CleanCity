// filterRequestsByStatus.test.js
const filterRequestsByStatus = require('./filterRequestsByStatus');

beforeEach(() => {
  localStorage.clear();
});

describe('filterRequestsByStatus', () => {
  it('should return only pickup requests with matching status', () => {
    const requests = [
      { id: 'REQ001', status: 'Pending' },
      { id: 'REQ002', status: 'Scheduled' },
      { id: 'REQ003', status: 'Pending' }
    ];
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify(requests));

    const result = filterRequestsByStatus('Pending');
    expect(result).toEqual([
      { id: 'REQ001', status: 'Pending' },
      { id: 'REQ003', status: 'Pending' }
    ]);
  });

  it('should return empty array if no requests match status', () => {
    const requests = [
      { id: 'REQ001', status: 'Completed' }
    ];
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify(requests));

    const result = filterRequestsByStatus('Pending');
    expect(result).toEqual([]);
  });

  it('should return empty array if localStorage is empty', () => {
    const result = filterRequestsByStatus('Pending');
    expect(result).toEqual([]);
  });
});
