import CartItem from '../../components/Cart/CartItem';
import { cartContext } from '../../context/state';
import styles from '../../styles/checkout.module.css';
import { useContext } from 'react';

const index = () => {
	const { cartState, setCartState } = useContext(cartContext);
	return (
		<div className={styles.checkoutContainer}>
			<h1>Checkout</h1>
			<div className={styles.formContainer}>
				<div className={styles.leftContainer}>
					{cartState.map((item, index) => {
						return <CartItem key={index} item={item} />;
					})}
				</div>
				<div className={styles.rightContainer}>
					<form>
						<span>Billing Details</span>
						<input type='text' placeholder='Full Name' />
						<input type='text' placeholder='Email' />
						<input type='text' placeholder='Street' />
						<input type='text' placeholder='City' />
						<input type='text' placeholder='State' />
						<input type='text' placeholder='Zip Code' />
						<input type='submit' value={'Checkout'} />
					</form>
				</div>
			</div>
		</div>
	);
};

export default index;
