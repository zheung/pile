module.exports = async function($) {
	let { C } = $;

	$.RoutMap = {
		routs: [
			{ type: 3, path: C.path.pile, prefix: '/' },
		],
	};

	await $.Harb($.RoutMap);
};