import { API_URL } from '../../../utils/env';

export const getUsers = () =>
  fetch(`${API_URL}/user`).then((res) => res.json());
