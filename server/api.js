let url =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000/'
		: 'https://refactoredwaffles.pranjaljain.me/';

export const getTopWaffles = url + 'api/getTopWaffles';
export const search = url + 'api/search/';
export const getWaffleDetail = url + 'api/getWaffleDetail/';
export const getAllWaffles = url + 'api/getAllWaffles/';

export const setContactValue = 'api/setContactValue';
export const checkout = 'api/checkout';
