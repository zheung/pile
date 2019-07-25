module.exports = async function({ C, Harb }) {
	await Harb({
		routs: [
			{ type: 3, path: C.path.pile, prefix: '/' },
		],
	});
};