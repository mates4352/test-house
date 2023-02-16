import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../../controller/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
