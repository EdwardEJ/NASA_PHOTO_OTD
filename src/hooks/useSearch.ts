import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
	const [values, setValues] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValues(e.target.value);
	};
	return { values, handleChange };
};
