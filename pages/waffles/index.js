import WaffleListItem from '../../components/WaffleListItem';
import { getAllWaffles } from '../../server/api';
import styles from '../../styles/Waffles.module.css';

const index = ({ waffles }) => {
	return (
		<div className={styles.Waffles}>
			<h1>Waffles</h1>
			<div className={styles.WaffleList}>
				{waffles.map((item, index) => {
					return <WaffleListItem item={item} key={index} />;
				})}
			</div>
		</div>
	);
};

export const getStaticProps = async (context) => {
	const res = await fetch(getAllWaffles);
	const waffles = await res.json();
	return {
		props: { waffles },
	};
};

export default index;
