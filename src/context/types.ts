import { ReactNode } from 'react';
import { CONTENT_ACTIONS } from './constants';

export type ContentContextState = {
	date: string;
};

export type ContentContextAction = {
	type: typeof CONTENT_ACTIONS.UPDATE_DATE;
	payload: string;
};

export type ContentContextDispatch = (action: ContentContextAction) => void;

export type ContentProviderProps = { children: ReactNode };
