module.exports = async function({ C, G, Harb }) {
	try {
		_fs.copyFileSync(C.path.favIcon, R(C.path.pile, 'favicon.ico'));
	} catch(error) {
		G.error(error.message || error);
	}

	await Harb({
		routs: [
			{ type: 3, path: C.path.pile, prefix: '/' },
		],
	});
};