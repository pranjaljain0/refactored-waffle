import BelgianWaffles from '../public/BelgianWaffles.jpeg';
import { BsArrowRight } from 'react-icons/bs';
import CinnamonRollWaffle from '../public/CinnamonRollWaffle.jpeg';
import Head from 'next/head';
import HeroBG from '../public/hero_bg.png';
import Image from 'next/image';
import Link from 'next/link';
import PotatoWaffle from '../public/PotatoWaffle.jpeg';
import ToasterWaffles from '../public/ToasterWaffle.png';
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
						<div className={styles.categoryItem}>
							<Image
								className={styles.categoryImage}
								src={ToasterWaffles}
								alt='Belgium Waffle'
								height={200}
								width={200}
							/>
							<span>Toaster Waffle</span>
						</div>
						<div className={styles.categoryItem}>
							<Image
								className={styles.categoryImage}
								src={CinnamonRollWaffle}
								alt='Belgium Waffle'
								height={200}
								width={200}
							/>
							<span>Cinnamon Roll Waffles</span>
						</div>
						<div className={styles.categoryItem}>
							<Image
								className={styles.categoryImage}
								src={PotatoWaffle}
								alt='Belgium Waffle'
								height={200}
								width={200}
							/>
							<span>Sweet Potato Waffles</span>
						</div>
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
						<Link href='/' passHref>
							<a href='/'>
								<div className={styles.topProductItem}>
									<Image
										className={styles.topProductImage}
										src={PotatoWaffle}
										alt='Belgium Waffle'
										height={150}
										width={150}
									/>
									<div>
										<p>PotatoWaffle</p>
										<span>
											Get this
											<BsArrowRight className={styles.arrowRight} />
										</span>
									</div>
								</div>
							</a>
						</Link>
						<Link href='/' passHref>
							<a href='/'>
								<div className={styles.topProductItem}>
									<Image
										className={styles.topProductImage}
										src={PotatoWaffle}
										alt='Belgium Waffle'
										height={150}
										width={150}
									/>
									<div>
										<p>PotatoWaffle</p>
										<span>
											Get this
											<BsArrowRight className={styles.arrowRight} />
										</span>
									</div>
								</div>
							</a>
						</Link>
						<Link href='/' passHref>
							<a href='/'>
								<div className={styles.topProductItem}>
									<Image
										className={styles.topProductImage}
										src={PotatoWaffle}
										alt='Belgium Waffle'
										height={150}
										width={150}
									/>
									<div>
										<p>PotatoWaffle</p>
										<span>
											Get this
											<BsArrowRight className={styles.arrowRight} />
										</span>
									</div>
								</div>
							</a>
						</Link>
						<Link href='/' passHref>
							<a href='/'>
								<div className={styles.topProductItem}>
									<Image
										className={styles.topProductImage}
										src={PotatoWaffle}
										alt='Belgium Waffle'
										height={150}
										width={150}
									/>
									<div>
										<p>PotatoWaffle</p>
										<span>
											Get this
											<BsArrowRight className={styles.arrowRight} />
										</span>
									</div>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
