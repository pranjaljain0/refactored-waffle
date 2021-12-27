/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react';

import CartItem from '../../components/Cart/CartItem';
import { cartContext } from '../../context/state';
import { checkout } from '../../server/api';
import styles from '../../styles/checkout.module.css';

const index = () => {
	const { cartState, setCartState } = useContext(cartContext);
	const [postData, setPostData] = useState({});
	const [checkoutState, setCheckoutState] = useState(null);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const res = await fetch(checkout, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userData: postData, cartData: cartState }),
		});
		res.status(200) ? setCheckoutState(true) : setCheckoutState(false);
	};

	const onChangeHandler = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};

	const countTotal = () => {
		let count = 0;
		cartState.forEach((item, index) => {
			count = count + item.price * item.qty;
		});
		return count;
	};

	const countTax = () => {
		let total = countTotal();
		return (total * 7.5) / 100;
	};

	return (
		<div className={styles.checkoutContainer}>
			<h1>Checkout</h1>
			<div className={styles.formContainer}>
				<div className={styles.leftContainer}>
					{cartState.map((item, index) => {
						return <CartItem key={index} item={item} />;
					})}
					<div className={styles.totalPrice}>
						<span>Price total: {countTotal().toFixed(2)}</span>
						<span>Added Tax(7.5%): {countTax().toFixed(2)}</span>
						<span>
							Total (with tax):{' '}
							{+countTotal().toFixed(2) + +countTax().toFixed(2)}
						</span>
					</div>
				</div>
				<div className={styles.rightContainer}>
					<form onSubmit={(e) => onSubmitHandler(e)}>
						<span>Billing Details</span>
						<input
							type='text'
							placeholder='Full Name'
							name='name'
							onChange={onChangeHandler}
						/>
						<input
							type='text'
							placeholder='Email'
							name='email'
							onChange={onChangeHandler}
						/>
						<input
							type='text'
							placeholder='Street'
							name='street'
							onChange={onChangeHandler}
						/>
						<input
							type='text'
							placeholder='City'
							name='city'
							onChange={onChangeHandler}
						/>
						<input
							type='text'
							placeholder='State'
							name='state'
							onChange={onChangeHandler}
						/>
						<input
							type='text'
							placeholder='Zip Code'
							name='zip'
							onChange={onChangeHandler}
						/>
						<input type='submit' value='Checkout' />
						{checkoutState !== null && checkoutState === true && (
							<div className={styles.checkoutStatus}>
								<span>Checkout succesful</span>
							</div>
						)}
						{checkoutState !== null && checkoutState === false && (
							<div className={styles.checkoutStatus}>
								<span>Checkout failed</span>
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default index;
