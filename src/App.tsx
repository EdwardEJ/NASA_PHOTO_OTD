import Alert from './components/alert';
import Header from './components/header';
import { MainContent } from './components/main-content';
import { SearchBar } from './components/search-bar';

function App() {
	return (
		<div className='min-h-screen flex flex-col gap-4 items-center bg-gray-800 py-3'>
			<Header />
			<SearchBar />
			<Alert />
			<MainContent />
		</div>
	);
}

export default App;
