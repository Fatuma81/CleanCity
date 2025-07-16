// isAdmin.test.js
const isAdmin = require('./isAdmin');

describe('isAdmin', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return true if user is admin', () => {
    const adminUser = { id: '1', name: 'Fatuma', role: 'admin' };
    localStorage.setItem('currentUser', JSON.stringify(adminUser));

    expect(isAdmin()).toBe(true);
  });

  it('should return false if user is not admin', () => {
    const normalUser = { id: '2', name: 'Stanley', role: 'user' };
    localStorage.setItem('currentUser', JSON.stringify(normalUser));

    expect(isAdmin()).toBe(false);
  });

  it('should return false if no user is logged in', () => {
    expect(isAdmin()).toBe(false);
  });
});
