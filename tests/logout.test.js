// logout.test.js
const logout = require('./logout');

describe('logout', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should remove currentUser from localStorage', () => {
    localStorage.setItem('currentUser', JSON.stringify({ id: '1', name: 'Admin' }));

    const result = logout();

    expect(localStorage.getItem('currentUser')).toBeNull();
    expect(result).toBe(true);
  });

  it('should return true even if currentUser was not set', () => {
    const result = logout();
    expect(result).toBe(true);
  });
});
