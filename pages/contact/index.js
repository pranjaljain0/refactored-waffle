import { BsFillExclamationCircleFill, BsPatchCheck } from 'react-icons/bs';

import { setContactValue } from '../../server/api';
/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../../styles/Contact.module.css';
import { useState } from 'react';

const index = () => {
	const [contactFormData, setContactFormData] = useState({});
	const [submitStatus, setSubmitStatus] = useState(null);

	const onChangeHandler = (e) => {
		const val = e.target.value;
		const name = e.target.name;
		setContactFormData({ ...contactFormData, [name]: val });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const res = fetch(setContactValue, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...contactFormData }),
		});
		if (res.status === 200) setSubmitStatus(true);
		else setSubmitStatus(false);
	};

	return (
		<div className={styles.ContactPage}>
			<h1>Contact Us</h1>
			<div className={styles.contactFormContainer}>
				<form className={styles.contactForm} onSubmit={onSubmitHandler}>
					<label>First Name</label>
					<input
						type='text'
						name='firstname'
						placeholder='Your name..'
						onChange={onChangeHandler}
					/>

					<label>Last Name</label>
					<input
						type='text'
						name='lastname'
						placeholder='Your last name..'
						onChange={onChangeHandler}
					/>

					<label>Subject</label>
					<textarea
						name='message'
						placeholder='Your Message'
						onChange={onChangeHandler}></textarea>

					{submitStatus === null && <input type='submit' value='Submit' />}

					{submitStatus !== null && submitStatus === true && (
						<div className={`${styles.status} ${styles.statusSuccess}`}>
							{' '}
							<span>Your Message was sent</span>
							<BsPatchCheck className={styles.icon} />
						</div>
					)}
					{submitStatus !== null && submitStatus !== true && (
						<div className={`${styles.status} ${styles.statusFailed}`}>
							<span>
								We are very sorry, Our servers are going through a rough patch.{' '}
							</span>
							<BsFillExclamationCircleFill className={styles.icon} />
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default index;
