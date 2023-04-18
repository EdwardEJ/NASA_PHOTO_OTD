import { MainContent } from './components/main-content';
import getData from './hooks/getContentData';

function App() {
	const { data, errorMessage } = getData();

	return (
		<div className='App'>
			<h1>Astronomy Picture of the Day</h1>
			<div>
				<input placeholder='enter date' />
				<button onClick={getData}>count is</button>
			</div>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
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
