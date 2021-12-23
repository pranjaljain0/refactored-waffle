export const SearchWaffle = (WaffleName) => {
	[
		{
			$search: {
				index: 'WaffleName',
				text: {
					query: WaffleName,
					path: {
						wildcard: '*',
					},
				},
			},
		},
	];
};
