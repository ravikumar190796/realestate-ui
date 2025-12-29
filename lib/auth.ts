'use client';

const ADMIN_EMAIL = 'admin@realestate.com';
const ADMIN_PASSWORD = 'admin123';
const AUTH_KEY = 'realestate_admin_auth';

export const login = (email: string, password: string): boolean => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_KEY) === 'true';
};

