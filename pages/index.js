import BelgianWaffles from '../public/BelgianWaffles.jpeg';
import Head from 'next/head';
import HeroBG from '../public/hero_bg.png';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Refactored Waffles</title>
			</Head>
			<div className={styles.Container}>
				<div className={styles.hero}>
					<div className={styles.heroContent}>
						<h1>Refactored Waffles</h1>
						<p>
							Get your waffles reafactored,
							<br /> The way you love it.
						</p>
					</div>
					<div className={styles.heroImg}>
						<Image src={HeroBG} alt='hero' height={520} width={500} />
					</div>
				</div>
				<div className={styles.category}>
					<h1>Categories</h1>
					<div className={styles.categories}>
						<div className={styles.categoryItem}>
							<Image
								className={styles.categoryImage}
								src={BelgianWaffles}
								alt='Belgium Waffle'
								height={200}
								width={200}
							/>
							<span>Belgium Waffle</span>
						</div>
						<div>
							<span>Toaster Waffle</span>
						</div>
						<div>
							<span>Cinnamon Roll Waffles</span>
						</div>
						<div>
							<span>Sweet Potato Waffles</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
