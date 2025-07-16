// src/services/__tests__/isAdmin.test.js

const isAdmin = require('../isAdmin');

describe('isAdmin', () => {
  it('should return true if user role is admin', () => {
    const user = { id: 1, name: 'Admin User', role: 'admin' };
    expect(isAdmin(user)).toBe(true);
  });

  it('should return false if user role is not admin', () => {
    const user = { id: 2, name: 'Regular User', role: 'user' };
    expect(isAdmin(user)).toBe(false);
  });

  it('should return false if user is null or undefined', () => {
    expect(isAdmin(null)).toBe(false);
    expect(isAdmin(undefined)).toBe(false);
  });

  it('should return false if user is not an object', () => {
    expect(isAdmin('admin')).toBe(false);
    expect(isAdmin(123)).toBe(false);
  });
});
