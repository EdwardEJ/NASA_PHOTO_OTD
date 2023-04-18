interface SearchBarProps {
	onClick: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
	return (
		<div className='flex relative'>
			<input
				className='text-xs border border-r-0 border-gray-300 shadow-sm hover:border-blue-600 focus:outline-none focus:border-blue-600 focus:ring-blue-600 rounded-l-lg placeholder-gray-500 py-1 px-2'
				type='date'
			/>
			<button
				onClick={onClick}
				className='text-xs shadow-sm rounded-r-lg right-0 py-1 px-2 bg-blue-600 text-white'
			>
				Search
			</button>
		</div>
	);
};
