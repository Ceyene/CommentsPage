//you can import node modules here
import fs from 'fs';
import path from 'path';

//SERVER-SIDE CODE
function handler(req, res) {
	//checking which kind of request is receiving
	if (req.method === 'POST') {
		const email = req.body.email; //next.js automatically parses body of the request
		const feedbackText = req.body.text; //next.js automatically parses body of the request

		//using data from request and structuring our future data to be saved
		const newFeedback = {
			id: new Date().toISOString(),
			email,
			text: feedbackText,
		};

		//store data it in a database (in this case, inside a file)
		const filePath = path.join(process.cwd(), 'data', 'feedback.json');
		//read current data in the file and then update it with new data
		const fileData = fs.readFileSync(filePath);
		const data = JSON.parse(fileData); //parsing file data to JS object to work with it (file will have an empty array from the start)
		data.push(newFeedback); //adding new data to the array of the current data
		fs.writeFileSync(filePath, JSON.stringify(data)); //writing it in the disk, parsing it to JSON format again
		res
			.status(201)
			.json({ message: 'successful POST request', feedback: newFeedback }); //sending response in json format after successfully updated file
	} else {
		//we'll always have a request when accessing this endpoint, even if we are not sending a POST
		//send response in json format
		res.status(200).json({ message: `successful ${req.method} request` });
	}
}

export default handler;
