import { MainContent } from './components/main-content';
import { SearchBar } from './components/search-bar';
import { getContentData } from './hooks/getContentData';

function App() {
	const { data, errorMessage } = getContentData();

	return (
		<div className='App'>
			<h1>Astronomy Picture of the Day</h1>
			<SearchBar />
			{errorMessage && errorMessage}
			<MainContent
				title={data.title}
				media_type={data.media_type}
				explanation={data.explanation}
				url={data.url}
			/>
		</div>
	);
}

export default App;
