let url =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000/'
		: 'https://rafactoredwaffle.pranjaljain.me/';

export const getTopWaffles = url + 'api/getTopWaffles';
export const checkout = url + 'api/checkout';
export const search = url + 'api/search/';
