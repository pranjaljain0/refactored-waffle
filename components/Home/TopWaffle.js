import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const TopWaffle = ({ WaffleDetail }) => {
	return (
		<Link href={WaffleDetail.url} passHref>
			<div className={styles.topProductItem}>
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
						Get this
						<BsArrowRight className={styles.arrowRight} />
					</span>
				</div>
			</div>
		</Link>
	);
};

export default TopWaffle;
