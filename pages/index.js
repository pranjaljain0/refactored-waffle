import BelgianWaffles from '../public/BelgianWaffles.jpeg';
import { BsArrowRight } from 'react-icons/bs';
import CinnamonRollWaffle from '../public/CinnamonRollWaffle.jpeg';
import Head from 'next/head';
import HeroBG from '../public/hero_bg.png';
import Image from 'next/image';
import Link from 'next/link';
import PotatoWaffle from '../public/PotatoWaffle.jpeg';
import ToasterWaffles from '../public/ToasterWaffle.png';
import TopWaffle from '../components/Home/TopWaffle';
import { getTopWaffles } from '../server/api';
import styles from '../styles/Home.module.css';

export default function Home({ topWaffles }) {
	return (
		<>
			<Head>
				<title>Refactored Waffles</title>
			</Head>
			<div className={styles.Container}>
				<div className={styles.hero}>
					<div className={styles.heroContent}>
						<div className={styles.heroContentText}>
							<h1>Refactored Waffles</h1>
							<p>
								Get your waffles refactored,
								<br /> The way you love it.
							</p>
						</div>
					</div>
					<div className={styles.heroImg}>
						<Image src={HeroBG} alt='hero' height={520} width={500} priority />
					</div>
				</div>
				<div className={styles.category}>
					<h1>Our waffles</h1>
					<div className={styles.categories}>
						<Link href='waffles/Belgian_Waffle' passHref>
							<div className={styles.categoryItem}>
								<Image
									className={styles.categoryImage}
									src={BelgianWaffles}
									alt='Belgium Waffle'
									height={200}
									width={200}
								/>
								<span>
									Belgium Waffle
									<BsArrowRight className={styles.arrowRight} />
								</span>
							</div>
						</Link>
						<Link href='waffles/Toaster_Waffle' passHref>
							<div className={styles.categoryItem}>
								<Image
									className={styles.categoryImage}
									src={ToasterWaffles}
									alt='Toaster_Waffles'
									height={200}
									width={200}
								/>
								<span>
									Toaster Waffle
									<BsArrowRight className={styles.arrowRight} />
								</span>
							</div>
						</Link>
						<Link href='waffles/Cinnamon_Roll_Waffle' passHref>
							<div className={styles.categoryItem}>
								<Image
									className={styles.categoryImage}
									src={CinnamonRollWaffle}
									alt='CinnamonRollWaffle'
									height={200}
									width={200}
								/>
								<span>
									Cinnamon Roll Waffles
									<BsArrowRight className={styles.arrowRight} />
								</span>
							</div>
						</Link>
						<Link href='waffles/Potato_Waffles' passHref>
							<div className={styles.categoryItem}>
								<Image
									className={styles.categoryImage}
									src={PotatoWaffle}
									alt='Potato Waffle'
									height={200}
									width={200}
								/>
								<span>
									Potato Waffles
									<BsArrowRight className={styles.arrowRight} />
								</span>
							</div>
						</Link>
					</div>
				</div>
				<div className={styles.testimonialSection}>
					<h1>What people say about us!</h1>
					<div className={styles.testimonials}>
						<div className={styles.testimonialItem}>
							<p>
								Velit in pariatur culpa Lorem sunt anim ea aliquip mollit.
								Aliquip do eiusmod nulla sit.
							</p>
							<span>Pranjal Jain</span>
						</div>
						<div className={styles.testimonialItem}>
							<p>
								Velit in pariatur culpa Lorem sunt anim ea aliquip mollit.
								Aliquip do eiusmod nulla sit.
							</p>
							<span>Pranjal Jain</span>
						</div>
						<div className={styles.testimonialItem}>
							<p>
								Velit in pariatur culpa Lorem sunt anim ea aliquip mollit.
								Aliquip do eiusmod nulla sit.
							</p>
							<span>Pranjal Jain</span>
						</div>
					</div>
				</div>
				<div className={styles.topProductsContainer}>
					<h1>Our suggestions</h1>
					<div className={styles.topProductList}>
						{topWaffles
							.sort((a, b) => {
								if (a.name > b.name) return 1;
								if (a.name < b.name) return -1;
								return 0;
							})
							.map((item, index) => (
								<TopWaffle WaffleDetail={item} key={index} />
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(getTopWaffles);
	const topWaffles = await res.json();

	return {
		props: { topWaffles },
	};
}
