import '../styles/globals.css';

import Layout from '../components/layouts';
import { cartContext } from '../context/state';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [cartState, setCartState] = useState([]);

	return (
		<cartContext.Provider value={{ cartState, setCartState }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</cartContext.Provider>
	);
}

export default MyApp;
