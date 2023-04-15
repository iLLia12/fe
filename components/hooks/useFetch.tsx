import useSWR from 'swr';
import { API_URL } from '../../utils/env';
import useAppSelector from '../../store/useAppSelector';

interface Options {
  params: Record<string, string | number | null | undefined>;
}

export const fetcher = (accessToken: string) => (url: string) => {
  console.log('accessToken: ', accessToken);
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};

const useFetch = (path: string, options?: Options) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  return useSWR(`${API_URL}/${path}`, fetcher(accessToken));
};

export default useFetch;
