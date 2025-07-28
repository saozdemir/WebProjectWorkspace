import {useDispatch, useSelector } from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store/store';
/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 28 Jul 2025
 * <p>
 * @description:
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;