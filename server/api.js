let url =
	process.env.NODE_ENV !== 'dev'
		? 'localhost:3000/'
		: 'https://rafactoredwaffle.pranjaljain.me/';

export const getTopWaffles = url + 'api/getTopWaffles';
