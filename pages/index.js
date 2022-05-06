import { useRef, useState } from 'react';
import Link from 'next/link';

function HomePage() {
	//state for new comments
	const [feedbackItems, setFeedbackItems] = useState([]);

	//adding references to our inputs
	const emailInputRef = useRef();
	const feedbackInputRef = useRef();

	//form submit handler (POST Request)
	async function submitFormHandler(event) {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredFeedback = feedbackInputRef.current.value;

		const reqBody = { email: enteredEmail, text: enteredFeedback };

		try {
			//sending POST request
			// using absolute path -> text will be appended right after our domain
			const response = await fetch('/api/feedback', {
				method: 'POST',
				body: JSON.stringify(reqBody),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	//showing current comments (GET Request)
	async function loadFeedbackHandler() {
		try {
			const response = await fetch('/api/feedback');
			const data = await response.json();

			setFeedbackItems(data.feedback);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<div>
			<h1>Comments Page</h1>
			<form onSubmit={submitFormHandler}>
				<div className="inputContainer">
					<label htmlFor="email">Your Email Address</label>
					<input type="email" id="email" ref={emailInputRef} />
				</div>
				<div className="inputContainer">
					<label htmlFor="feedback">Your Feedback</label>
					<textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
				</div>
				<button>Send Feedback</button>
			</form>
			<hr />
			<button onClick={loadFeedbackHandler}>Load Feedback</button>
			<Link href="/feedback">Go to Comments page</Link>
			<ul>
				{feedbackItems.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
