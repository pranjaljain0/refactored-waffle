import { FaQuoteLeft } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	const getFullYear = () => {
		let year = new Date().getFullYear();
		return year;
	};

	return (
		<div className={styles.FooterContainer}>
			<FaQuoteLeft className={styles.QuoteIcon} />
			<span>
				A waffle is a dish made from leavened batter or dough that is cooked
				between two plates that are patterned to give a characteristic size,
				shape, and surface impression.
			</span>
			<p>Copyright &copy; {getFullYear()} Refactored Waffles</p>
		</div>
	);
};

export default Footer;
