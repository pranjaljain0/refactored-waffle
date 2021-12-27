import { MdAdd, MdRemove } from 'react-icons/md';

import Image from 'next/image';
import styles from '../../styles/Cart.module.css';

const CartItem = ({ item, AddCartItem, RemoveCartItem }) => {
	return (
		<div className={styles.CartItem}>
			<Image
				className={styles.CartItemImage}
				src={item.image_url}
				alt={item.name}
				height={100}
				width={100}
			/>
			<div className={styles.CartItemDetails}>
				<span>{item.name}</span>
				<span>${item.price}</span>
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
	);
};

export default CartItem;
