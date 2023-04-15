import { useDispatch } from 'react-redux';
import type { AppDispatch } from '.';

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default useAppDispatch;
