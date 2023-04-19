import { useState } from 'react';
import { getContentData } from '../hooks/getContentData';

const MainContent = () => {
	const [bigImg, setBigImg] = useState<boolean>();

	const {
		data: { title, url, explanation, media_type },
	} = getContentData();

	const toggleImgSize = () => {
		setBigImg(!bigImg);
	};

	const mediaType = {
		image: <img onClick={toggleImgSize} src={url} alt={title} />,
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

export default MainContent;
