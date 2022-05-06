function HomePage() {
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
			<ul>
				{feedbackItems.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
