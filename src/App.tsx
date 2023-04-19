import { lazy } from 'react';
import Alert from './components/alert';

const Header = lazy(() => import('./components/header'));
const MainContent = lazy(() => import('./components/main-content'));
const SearchBar = lazy(() => import('./components/search-bar'));

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
