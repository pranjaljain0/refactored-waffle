import { BsArrowRight, BsPatchCheck } from 'react-icons/bs';
import { useContext, useState } from 'react';

/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Link from 'next/link';
import { cartContext } from '../context/state';
import styles from '../styles/Waffles.module.css';

const WaffleListItem = ({ item }) => {
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
		<div className={styles.WaffleItem}>
			<Image
				className={styles.WaffleItemImage}
				src={item.image_url}
				alt={item.name}
				height={120}
				width={120}
			/>
			<div>
				<span>{item.name}</span>
				<Link href={item.name.split(' ').join('_')} passHref>
					<a className={styles.MoreInfoButton}>
						<span>
							More Info <BsArrowRight className={styles.arrowRight} />
						</span>
					</a>
				</Link>
				{!showAddedNotif ? (
					<span
						className={styles.addToCartButton}
						onClick={() => {
							AddToCart(item);
						}}>
						Add to cart <span>${item.price}</span>
						<BsArrowRight className={styles.arrowRight} />
					</span>
				) : (
					<span className={styles.addedToCart}>
						Added to cart
						<BsPatchCheck className={styles.CheckIcon} />
					</span>
				)}
			</div>
		</div>
	);
};

export default WaffleListItem;
