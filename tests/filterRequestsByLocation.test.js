// filterRequestsByLocation.test.js
const filterRequestsByLocation = require('./filterRequestsByLocation');

beforeEach(() => {
  localStorage.clear();
});

describe('filterRequestsByLocation', () => {
  it('should return only pickup requests from the given location', () => {
    const requests = [
      { id: 'REQ001', location: 'Nairobi' },
      { id: 'REQ002', location: 'Kisumu' },
      { id: 'REQ003', location: 'Nairobi' }
    ];
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify(requests));

    const result = filterRequestsByLocation('Nairobi');
    expect(result).toEqual([
      { id: 'REQ001', location: 'Nairobi' },
      { id: 'REQ003', location: 'Nairobi' }
    ]);
  });

  it('should return empty array if no requests match location', () => {
    const requests = [
      { id: 'REQ001', location: 'Mombasa' }
    ];
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify(requests));

    const result = filterRequestsByLocation('Eldoret');
    expect(result).toEqual([]);
  });

  it('should return empty array if localStorage has no data', () => {
    const result = filterRequestsByLocation('Kisumu');
    expect(result).toEqual([]);
  });
});
