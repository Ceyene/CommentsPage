import { useRef } from 'react';

function HomePage() {
	//adding references to our inputs
	const emailInputRef = useRef();
	const feedbackInputRef = useRef();

	//form handler
	async function submitFormHandler(event) {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredFeedback = feedbackInputRef.current.value;

		const reqBody = { email: enteredEmail, text: enteredFeedback };

		try {
			//sending POST request
			// using absolute path -> text will be appended right after our domain
			const response = await fetch('/api/test', {
				method: 'POST',
				body: JSON.stringify(reqBody),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
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
			<button>Load Feedback</button>
			<ul></ul>
		</div>
	);
}

export default HomePage;
