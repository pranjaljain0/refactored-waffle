export const SearchWaffle = (WaffleName) => {
	return [
		{
			$search: {
				index: 'WaffleName',
				wildcard: {
					path: 'name',
					query: `${WaffleName}*`,
					allowAnalyzedField: true,
				},
			},
		},
		{
			$project: {
				name: 1,
				image_url: 1,
				score: {
					$meta: 'searchScore',
				},
			},
		},
	];
};

export const fetchTopWaffle = () => {
	return [
		{
			$search: {
				index: 'WaffleName',
				exists: {
					path: 'top_flag',
				},
			},
		},
	];
};
