import axios from "axios";

const AUTHORIZATION_STORAGE_KEY = 'authorization_token';

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  const token = getAuthorizationToken();
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function setAuthorizationToken(token: string | null | undefined) {
  if (!token) return localStorage.removeItem(AUTHORIZATION_STORAGE_KEY);
  localStorage.setItem(AUTHORIZATION_STORAGE_KEY, token);
}

export function getAuthorizationToken() {
  return localStorage.getItem(AUTHORIZATION_STORAGE_KEY) || undefined;
}
