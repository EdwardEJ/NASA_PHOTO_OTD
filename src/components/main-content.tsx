import { getContentData } from '../hooks/getContentData';

export const MainContent = () => {
	const {
		data: { title, url, explanation, media_type },
	} = getContentData();

	const mediaType = {
		image: <img src={url} alt={title} />,
		video: <iframe title={title} src={url} />,
	}[media_type];

	return (
		<>
			<h1 className='text-white'>{title}</h1>
			{mediaType}
			<p className='text-white'>{explanation}</p>
		</>
	);
};
