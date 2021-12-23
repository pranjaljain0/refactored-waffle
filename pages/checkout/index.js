import { useContext, useState } from 'react';

import CartItem from '../../components/Cart/CartItem';
import { cartContext } from '../../context/state';
import styles from '../../styles/checkout.module.css';

const index = () => {
	const { cartState, setCartState } = useContext(cartContext);
	const [postData, setPostData] = useState({});

	const onSubmitHandler = (e) => {
		e.preventDefault();
		fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userData: postData, cartData: cartState }),
		});
	};

	const onChangeHandler = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });
	};

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
					</form>
				</div>
			</div>
		</div>
	);
};

export default index;
