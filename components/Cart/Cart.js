import { MdAdd, MdRemove } from 'react-icons/md';

import { GrClose } from 'react-icons/gr';
import Image from 'next/image';
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
							<div key={index} className={styles.CartItem}>
								<Image
									className={styles.CartItemImage}
									src={item.image_url}
									alt={item.name}
									height={100}
									width={100}
								/>
								<div className={styles.CartItemDetails}>
									<span>{item.name}</span>
									<span>{item.price}</span>
									<div className={styles.QtyIconsContainer}>
										<MdRemove
											onClick={() => RemoveCartItem(item)}
											className={`${styles.QtyIcons} ${
												item.qty < 0 && styles.QtyIconsDisabled
											}`}
										/>
										<span>{item.qty}</span>
										<MdAdd
											onClick={() => AddCartItem(item)}
											className={`${styles.QtyIcons} ${
												item.qty > 9 && styles.QtyIconsDisabled
											}`}
										/>
									</div>
								</div>
							</div>
						))}
				</div>
			) : (
				<span className={styles.NoItemMsg}>
					There are no items in your cart.
				</span>
			)}
		</div>
	);
};

export default Cart;
