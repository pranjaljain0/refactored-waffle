import { BsArrowRight, BsPatchCheck } from 'react-icons/bs';
/* eslint-disable react-hooks/rules-of-hooks */
import { getAllWaffles, getWaffleDetail } from '../../../server/api';
import { useContext, useState } from 'react';

import { BsCartPlusFill } from 'react-icons/bs';
import Image from 'next/image';
import { cartContext } from '../../../context/state';
import styles from '../../../styles/Waffle.module.css';

const index = ({ waffleDetail }) => {
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
		<div className={styles.Waffle}>
			<div className={styles.WaffleBreif}>
				<Image
					className={styles.waffleImage}
					src={waffleDetail[0].image_url}
					alt={waffleDetail[0].name}
					height={350}
					width={350}
				/>

				<span>
					<strong>Price: ${waffleDetail[0].price}</strong>
				</span>
				<span>Available: {waffleDetail[0].quantity}</span>
			</div>
			<div className={styles.waffleDescription}>
				<h1>{waffleDetail[0].name}</h1>
				<p>{waffleDetail[0].desc}</p>
				{!showAddedNotif ? (
					<span
						className={styles.AddToCart}
						onClick={() => AddToCart(waffleDetail[0])}>
						Add to cart <BsCartPlusFill className={styles.AddToCartIcon} />
					</span>
				) : (
					<span className={styles.AddToCart}>
						Added to cart
						<BsPatchCheck className={styles.CheckIcon} />
					</span>
				)}
			</div>
		</div>
	);
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	let uid = id.split('_').join(' ');

	const res = await fetch(`${getWaffleDetail}/${uid}`);
	const waffleDetail = await res.json();
	return {
		props: { waffleDetail },
	};
};

export const getStaticPaths = async (context) => {
	const res = await fetch(`${getAllWaffles}`);
	const waffles = await res.json();
	const ids = waffles.map((item) => item.name.split(' ').join('_'));
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));
	return {
		paths,
		fallback: false,
	};
};

export default index;
