import axios from 'axios';
import { useEffect, useState } from 'react';
// import { API_KEY, BASE_URL } from '../constants';

// const URL = `${BASE_URL}?api_key=${API_KEY}`;
const URL = `https://api.nasa.gov/planetary/apod?api_key=Paa38F7ceYh71k3LvQQYMxfwLMdu0IDf0eOENQ6H`;

interface Info {
	data: string;
	explanation: string;
	hdurl: string;
	media_type: string;
	service_version: string;
	title: string;
	url: string;
}

export default function getContentData() {
	const [data, setData] = useState<Info>(Object);
	const [errorMessage, setErrorMessage] = useState<string>();

	const getData = async () => {
		try {
			const { data } = await axios.get<Info>(URL, {
				headers: {
					Accept: 'application/json',
				},
			});

			setData(data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				setErrorMessage(error.message);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { data, errorMessage };
}
