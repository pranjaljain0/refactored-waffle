import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
	return (
		<div className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>Refactored waffles</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/contact'>Contact us</Link>
				</li>
			</ul>
			<ul>
				<li>
					<div className={styles.searchInput}>
						<input type='search' placeholder='Search' />
						<BsChevronRight className={styles.searchInputIcon} />
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
