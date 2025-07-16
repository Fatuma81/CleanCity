// clearAllData.test.js
const clearAllData = require('../clearAllData');

describe('clearAllData', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should clear all localStorage data', () => {
    localStorage.setItem('cleancity_users', JSON.stringify([{ id: 1, name: 'User' }]));
    localStorage.setItem('cleancity_feedback', JSON.stringify([]));
    localStorage.setItem('cleancity_pickup_requests', JSON.stringify([]));

    clearAllData();

    expect(localStorage.length).toBe(0);
  });

  it('should not throw an error if localStorage is already empty', () => {
    expect(() => clearAllData()).not.toThrow();
  });
});
