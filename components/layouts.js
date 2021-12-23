import Cart from './Cart/Cart';
import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';

export default function Layout({ children }) {
	const [showCart, setShowCart] = useState(false);
	return (
		<>
			<Nav showCart={showCart} setShowCart={setShowCart} />
			<Cart showCart={showCart} setShowCart={setShowCart} />
			<main>{children}</main>
			<Footer />
		</>
	);
}
