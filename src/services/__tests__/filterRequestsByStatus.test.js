// src/services/__tests__/filterRequestsByStatus.test.js
const filterRequestsByStatus = require('../filterRequestsByStatus');

describe('filterRequestsByStatus', () => {
  it('should return only pickup requests with matching status', () => {
    const requests = [
      { id: 'REQ001', status: 'Pending' },
      { id: 'REQ002', status: 'Scheduled' },
      { id: 'REQ003', status: 'Pending' }
    ];

    const result = filterRequestsByStatus(requests, 'Pending');
    expect(result).toEqual([
      { id: 'REQ001', status: 'Pending' },
      { id: 'REQ003', status: 'Pending' }
    ]);
  });

  it('should return empty array if no requests match status', () => {
    const requests = [
      { id: 'REQ001', status: 'Completed' }
    ];

    const result = filterRequestsByStatus(requests, 'Pending');
    expect(result).toEqual([]);
  });

  it('should return empty array if request list is empty', () => {
    const result = filterRequestsByStatus([], 'Pending');
    expect(result).toEqual([]);
  });
});
