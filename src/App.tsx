import Alert from './components/alert';
import { MainContent } from './components/main-content';
import { SearchBar } from './components/search-bar';

function App() {
	return (
		<div className='min-h-screen flex flex-col items-center bg-gray-800  '>
			<h1 className='font-medium text-lg text-white'>
				Astronomy Picture of the Day
			</h1>
			<SearchBar />
			<Alert />
			<MainContent />
		</div>
	);
}

export default App;
