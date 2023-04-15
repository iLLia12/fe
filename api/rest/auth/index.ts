import { API_URL } from '@/utils/env';

export const login = (body): Promise<Response> => {
  console.log('body: ', body);
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
  });
};

export const logout = () =>
  fetch(`${API_URL}/auth/logout`).then((res) => res.json());
