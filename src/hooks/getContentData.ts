import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../constants';
import { useContentContext } from '../context';

export const getContentData = () => {
	const [data, setData] = useState<Info>(Object);
	const [errorMessage, setErrorMessage] = useState<string>();
	const [status, setStatus] = useState<number>();
	const {
		state: { date },
	} = useContentContext();

	const searchURL = date
		? `${BASE_URL}?api_key=${API_KEY}&date=${date}`
		: `${BASE_URL}?api_key=${API_KEY}`;

	const getData = async () => {
		try {
			const { data, status } = await axios.get<Info>(searchURL);
			setData(data);
			setStatus(status);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error);
				console.log('error message: ', error.message);
				setStatus(error.response?.data.code);
				setErrorMessage(error.response?.data.msg);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	useEffect(() => {
		getData();
		return setStatus(200);
	}, [searchURL]);

	return { data, errorMessage, status };
};
