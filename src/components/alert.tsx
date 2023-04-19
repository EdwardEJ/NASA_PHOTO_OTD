import { useEffect, useState } from 'react';
import { getContentData } from '../hooks/getContentData';

export default function Alert() {
	const { status } = getContentData();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const closeAlert = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		if (status === 404) {
			setIsVisible(true);
		}
	}, [status]);

	return (
		<>
			{isVisible && (
				<div className='absolute flex items-center p-2 mt-2 bg-red-200 rounded-lg transition-all translate-x-0'>
					<p className='text-xs font-medium text-gray-700'>
						Sorry! Information is not available for this date
					</p>
					<button
						onClick={closeAlert}
						className='w-5 text-red-600'
						style={{ textAlign: 'center' }}
					>
						&times;
					</button>
				</div>
			)}
		</>
	);
}
