const index = () => {
	let checkoutHexID = null;
	if (typeof window !== 'undefined') {
		checkoutHexID = localStorage.getItem('checkoutHexID');
	}
	console.log(checkoutHexID);

	return <div></div>;
};

export default index;
