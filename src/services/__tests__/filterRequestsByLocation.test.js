const filterRequestsByLocation = require('../filterRequestsByLocation');

describe('filterRequestsByLocation', () => {
  const mockRequests = [
    { id: 1, location: 'Nairobi' },
    { id: 2, location: 'Mombasa' },
    { id: 3, location: 'Nairobi' }
  ];

  it('should return requests matching the specified location', () => {
    const result = filterRequestsByLocation(mockRequests, 'Nairobi');
    expect(result).toEqual([
      { id: 1, location: 'Nairobi' },
      { id: 3, location: 'Nairobi' }
    ]);
  });

  it('should return an empty array if no matches are found', () => {
    const result = filterRequestsByLocation(mockRequests, 'Kisumu');
    expect(result).toEqual([]);
  });
});
