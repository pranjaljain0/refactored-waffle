import { BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';
import { search } from '../server/api';
import styles from '../styles/Nav.module.css';
import { useState } from 'react';

const SearchModule = () => {
	const [searchResults, setSearchResults] = useState(null);
	const onChangeHandler = async (e) => {
		let searchStr = e.target.value;
		if (searchStr.length > 3) {
			const res = await fetch(`${search}/${searchStr}`);
			const searchResults = await res.json();
			setSearchResults(searchResults);
		} else {
			setSearchResults(null);
		}
	};

	return (
		<ul className={styles.midSection}>
			<div className={styles.searchInput}>
				<input type='search' placeholder='Search' onChange={onChangeHandler} />
				<BsChevronRight className={styles.searchInputIcon} />
			</div>
			<div className={styles.searchResults}>
				<ul>
					{searchResults !== null &&
						searchResults.map((item, index) => {
							return (
								<li key={index}>
									<Image
										className={styles.searchResultImage}
										src={item.image_url}
										alt={item.name}
										height={80}
										width={80}
									/>
									<span className={styles.SearchText}>{item.name}</span>
								</li>
							);
						})}
				</ul>
			</div>
		</ul>
	);
};

export default SearchModule;
