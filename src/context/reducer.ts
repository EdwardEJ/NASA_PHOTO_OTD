import { ContentContextState, ContentContextAction } from './types';

export enum CONTENT_ACTIONS {
	UPDATE_DATE,
}

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
