let url =
	process.env.NODE_ENV === 'development'
		? 'localhost:3000/'
		: 'https://rafactoredwaffle.pranjaljain.me/';

export const getTopWaffles = url + 'api/getTopWaffles';
