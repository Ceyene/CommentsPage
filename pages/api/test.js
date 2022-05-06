//SERVER-SIDE CODE
function handler(req, res) {
	//send response in json format
	res.status(200).json({ message: 'success' });
}

export default handler;
