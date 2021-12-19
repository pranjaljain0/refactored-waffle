import styles from '../styles/404.module.css';
export default function Custom500() {
	return (
		<div className={styles.ErrorHome}>
			<h1>500 - Server-side error occurred</h1>
		</div>
	);
}
