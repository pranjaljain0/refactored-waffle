import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Refactored Waffles</title>
			</Head>
			<div className={styles.Container}>
				<h1>Welcome to refactored waffles</h1>
			</div>
		</>
	);
}
