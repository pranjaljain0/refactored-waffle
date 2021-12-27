module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com'],
	},
	env: {
		USERNAME: process.env.USERNAME,
		PASSWORD: process.env.PASSWORD,
		CLUSTURE: process.env.CLUSTURE,
		DATABASE: process.env.DATABASE,
	},
};
