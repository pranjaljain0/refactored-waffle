import { MdAdd, MdRemove } from 'react-icons/md';

import CartItem from './CartItem';
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';
import Link from 'next/link';
import { cartContext } from '../../context/state';
import styles from '../../styles/Cart.module.css';
import { useContext } from 'react';

const Cart = ({ showCart, setShowCart }) => {
	const { cartState, setCartState } = useContext(cartContext);
	let cartItems = cartState;

	const AddCartItem = (item) => {
		let ix = null;
		cartState.forEach((foritem, index) => {
			if (foritem._id === item._id) ix = index;
		});
		if (cartState[ix].qty < 9) cartState[ix].qty = cartState[ix].qty + 1;
		setCartState([...cartState]);
	};

	const RemoveCartItem = (item) => {
		let ix = null;
		cartState.forEach((foritem, index) => {
			if (foritem._id === item._id) ix = index;
		});
		if (cartState[ix].qty > 1) cartState[ix].qty = cartState[ix].qty - 1;
		else cartState.splice(ix, 1);
		setCartState([...cartState]);
	};

	return (
		<div
			className={`${styles.Cart} ${
				showCart ? styles.CartShow : styles.CartHidden
			}`}>
			<div className={styles.CartHeader}>
				<h1>Your Cart</h1>
				<span onClick={() => setShowCart(false)}>
					<GrClose className={styles.CloseIcon} />
				</span>
			</div>
			{cartItems.length !== 0 ? (
				<div className={styles.CartItemList}>
					{cartItems
						.sort((a, b) => {
							if (a.name > b.name) return 1;
							if (a.name < b.name) return -1;
							return 0;
						})
						.map((item, index) => (
							<CartItem item={item} key={index} />
						))}
				</div>
			) : (
				<span className={styles.NoItemMsg}>
					There are no items in your cart.
				</span>
			)}
			{cartItems.length !== 0 && (
				<div
					className={styles.checkoutButtonContainer}
					onClick={() => setShowCart(false)}>
					<Link href='/checkout' passHref>
						<a className={`${styles.checkoutButton}`}>Checkout</a>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
