import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import AppHeader from '../components/header';
function MyApp({ Component, pageProps }) {
	return (
	<>
	<Head>
	   <meta name="viewport" content="width=device-width, initial-scale=1" />
	</Head>
	<AppHeader />	
	<Component {...pageProps} />
	</>
	);
}
export default MyApp
