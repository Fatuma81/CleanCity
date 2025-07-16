// src/services/__tests__/logout.test.js

const logout = require('../logout'); // corrected path

describe('logout', () => {
  beforeEach(() => {
    localStorage.setItem('cleancity_logged_in_user', JSON.stringify({ id: 1, name: 'Test' }));
  });

  it('should remove the logged-in user from localStorage', () => {
    logout();
    expect(localStorage.getItem('cleancity_logged_in_user')).toBeNull();
  });

  it('should not throw an error if no user is logged in', () => {
    localStorage.removeItem('cleancity_logged_in_user');
    expect(() => logout()).not.toThrow();
  });
});
