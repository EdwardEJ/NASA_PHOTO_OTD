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
		<div className='flex flex-col gap-4 md:w-3/4'>
			<h1 className='text-white text-center text-4xl'>{title}</h1>
			{mediaType}
			<p className='text-gray-200 text-sm md:text-base px-4 md:px-0'>
				{explanation}
			</p>
		</div>
	);
};
