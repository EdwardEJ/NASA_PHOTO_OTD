import { ChangeEvent, FormEvent, useState } from 'react';
import { useContentContext } from '../context';
import { CONTENT_ACTIONS } from '../context/reducer';

export const SearchBar = () => {
	const { dispatch } = useContentContext();
	const [date, setDate] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDate(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({ type: CONTENT_ACTIONS.UPDATE_DATE, payload: date });
	};

	return (
		<form onSubmit={handleSubmit} className='flex relative'>
			<input
				type='date'
				name='searchDate'
				onChange={handleChange}
				value={date}
				className='text-xs border border-r-0 border-gray-300 shadow-sm hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-blue-600 rounded-l-lg placeholder-gray-500 py-1 px-2'
			/>
			<button className='text-xs shadow-sm rounded-r-lg right-0 py-1 px-2 bg-blue-600 text-white'>
				Search
			</button>
		</form>
	);
};
