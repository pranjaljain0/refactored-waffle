import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { cartContext } from '../../context/state';
import styles from '../../styles/Home.module.css';
import { useContext } from 'react';

const TopWaffle = ({ WaffleDetail }) => {
	const { cartState, setCartState } = useContext(cartContext);

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
				<span>
					Add to cart <span>${WaffleDetail.price}</span>
					<BsArrowRight className={styles.arrowRight} />
				</span>
			</div>
		</div>
	);
};

export default TopWaffle;
