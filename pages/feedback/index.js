import { Fragment } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback/index'; //won't be included in client-side code

//PRE-RENDERING PAGES
//pre-fetching feedback data so it's already there when component is rendered
function FeedbackPage(props) {
	return (
		<Fragment>
			{feedbackData && <p>{feedbackData.email}</p>}
			<ul>
				{props.feedbackItems.map((item) => (
					<li key={item.id}>
						{item.text}{' '}
						<button onClick={loadFeedbackHandler.bind(null, item.id)}>
							Show Details
						</button>
					</li>
				))}
			</ul>
		</Fragment>
	);
}

//PRE-RENDERING PAGE --> DON'T USE FETCH() TO TALK TO YOUR OWN API HERE
export async function getStaticProps() {
	//node logic to read data (server-side code)
	const filePath = buildFeedbackPath();
	const data = extractFeedback(filePath);

	//making data available as props for this component
	return {
		props: {
			feedbackItems: data,
		},
	};
}

export default FeedbackPage;
