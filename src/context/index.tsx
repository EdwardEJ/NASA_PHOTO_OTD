import { createContext, useContext, useReducer } from 'react';
import {
	ContentContextDispatch,
	ContentContextState,
	ContentProviderProps,
} from './types';
import { ContentReducer } from './reducer';

export const ContentStateContext = createContext<
	{ state: ContentContextState; dispatch: ContentContextDispatch } | undefined
>(undefined);

function ContentProvider({ children }: ContentProviderProps) {
	const [state, dispatch] = useReducer(ContentReducer, {
		date: '',
	});

	const value = { state, dispatch };

	return (
		<ContentStateContext.Provider value={value}>
			{children}
		</ContentStateContext.Provider>
	);
}

function useContentContext() {
	const context = useContext(ContentStateContext);

	if (context === undefined) {
		throw new Error('useContent must be within a Content Provider');
	}
	return context;
}

export { ContentProvider, useContentContext };
