import { useEffect, useState } from 'react';
import { getContentData } from '../hooks/getContentData';

export default function Alert() {
	const { status, errorMessage } = getContentData();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const closeAlert = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		if (errorMessage) {
			setIsVisible(true);
		}
	}, [status]);

	console.log('isVisible', isVisible);
	console.log('status', status);

	return (
		<>
			{isVisible && (
				<div className='absolute flex items-center p-2 mt-2 bg-red-200 rounded-lg transition-all transform'>
					<p className='text-sm font-medium text-gray-700'>{`Sorry! ${errorMessage}`}</p>
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
