import { BsChevronRight } from 'react-icons/bs';
import CartIcon from './Cart/CartIcon';
import { FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import SearchModule from './SearchModule';
import styles from '../styles/Nav.module.css';

const Nav = ({ showCart, setShowCart }) => {
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
					<Link href='/waffles'>Waffles</Link>
				</li>
				<li>
					<Link href='/contact'>Contact us</Link>
				</li>
			</ul>
			<SearchModule />
			<ul className={styles.rightSection}>
				<li>
					<CartIcon showCart={showCart} setShowCart={setShowCart} />
				</li>
			</ul>
		</div>
	);
};

export default Nav;
