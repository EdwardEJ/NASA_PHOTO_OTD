type MainContentProps = {
	title: string;
	explanation: string;
	media_type: string;
	url: string;
};

export const MainContent: React.FC<MainContentProps> = ({
	title,
	explanation,
	media_type,
	url,
}) => {
	const mediaType = {
		image: <img src={url} alt={title} />,
		video: <iframe title={title} src={url} />,
	}[media_type];

	return (
		<>
			<h1>{title}</h1>
			{mediaType}
			<p>{explanation}</p>
		</>
	);
};
