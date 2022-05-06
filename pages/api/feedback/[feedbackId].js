//SERVER-SIDE CODE
import { buildFeedbackPath, extractFeedback } from '.'; //won't be included in client-side code

//creating endpoint -> /api/some-feedback-id (for all incoming requests and methods in this case)
function handler(req, res) {
	//Node.js code enhanced by Next.js to look like Express code
	const feedbackId = req.query.feedbackId; //getting the id from url
	const filePath = buildFeedbackPath(); //building path
	const feedbackData = extractFeedback(filePath); //extracting data

	//finding selected coment by id
	const selectedFeedback = feedbackData.find(
		(feedback) => feedback.id === feedbackId
	);

	//sending response in json format
	res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
