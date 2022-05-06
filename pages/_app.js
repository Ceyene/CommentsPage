import { Fragment } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<title>Comments Page - by Cyn Romero</title>
				<meta
					name="description"
					content="A small application for practice server-side code on Next.js"
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
