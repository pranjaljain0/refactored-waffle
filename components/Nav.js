import { BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import styles from '../styles/Nav.module.css';

const Nav = () => {
	return (
		<div className={styles.nav}>
			<ul className={styles.leftSection}>
				<li>
					<Link href='/' passHref>
						<a>
							<Image src={Logo} alt='Logo' height={40} width={40} />
						</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/contact'>Contact us</Link>
				</li>
			</ul>
			<ul className={styles.midSection}>
				<li>
					<div className={styles.searchInput}>
						<input type='search' placeholder='Search' />
						<BsChevronRight className={styles.searchInputIcon} />
					</div>
				</li>
			</ul>
			<ul className={styles.rightSection}>
				<li>
					<span>Login/Sign up</span>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
