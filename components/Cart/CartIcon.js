import { FiShoppingCart } from 'react-icons/fi';
import { cartContext } from '../../context/state';
import styles from '../../styles/CartIcon.module.css';
import { useContext } from 'react';

const CartIcon = ({ setShowCart, showCart }) => {
	const { cartState, setCartState } = useContext(cartContext);

	const getCount = (cart) => {
		let total = 0;
		cart.forEach((ele) => {
			total += ele.qty;
		});
		return total;
	};

	return (
		<div className={styles.cartIconHolder}>
			{getCount(cartState) > 0 && (
				<span className={styles.cartItemCount}>{getCount(cartState)}</span>
			)}
			<FiShoppingCart
				className={styles.CartIcon}
				onClick={() => setShowCart(!showCart)}
			/>
		</div>
	);
};

export default CartIcon;
