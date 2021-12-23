import { BsArrowRight, BsPatchCheck } from 'react-icons/bs';
import { useContext, useState } from 'react';

import Image from 'next/image';
import { cartContext } from '../../context/state';
import styles from '../../styles/Home.module.css';

const TopWaffle = ({ WaffleDetail }) => {
	const { cartState, setCartState } = useContext(cartContext);
	const [showAddedNotif, setShowAddedNotif] = useState(false);

	const AddToCart = (waffleItem) => {
		let ix = null;
		cartState.forEach((element, index) => {
			if (element._id === waffleItem._id) ix = index;
		});
		if (ix === null) {
			cartState = [...cartState, { ...waffleItem, qty: 1 }];
		} else {
			if (cartState[ix].qty < 9) cartState[ix].qty = cartState[ix].qty + 1;
		}

		setCartState([...cartState]);
		setShowAddedNotif(true);
		setTimeout(() => {
			setShowAddedNotif(false);
		}, 3000);
	};

	return (
		<div
			className={styles.topProductItem}
			onClick={() => {
				AddToCart(WaffleDetail);
			}}>
			<Image
				className={styles.topProductImage}
				src={WaffleDetail.image_url}
				alt={WaffleDetail.name}
				height={150}
				width={150}
			/>
			<div>
				<p>{WaffleDetail.name}</p>
				<p>{WaffleDetail.mini_description}</p>
				{!showAddedNotif ? (
					<span>
						Add to cart <span>${WaffleDetail.price}</span>
						<BsArrowRight className={styles.arrowRight} />
					</span>
				) : (
					<span>
						Added to cart
						<BsPatchCheck className={styles.CheckIcon} />
					</span>
				)}
			</div>
		</div>
	);
};

export default TopWaffle;
