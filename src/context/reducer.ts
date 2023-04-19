import { CONTENT_ACTIONS } from './constants';
import { ContentContextState, ContentContextAction } from './types';

export const ContentReducer = (
	state: ContentContextState,
	action: ContentContextAction
): ContentContextState => {
	switch (action.type) {
		case CONTENT_ACTIONS.UPDATE_DATE:
			return {
				...state,
				date: action.payload,
			};
		default:
			return state;
	}
};
