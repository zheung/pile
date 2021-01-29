const ConfigMan = require('@nuogz/gaia/configMan');
const CM = new ConfigMan(__dirname);
const C = CM.datas;

global.G = require('@nuogz/gaia/log')(C.name, 'info', './logs');

const Desire = require('@nuogz/desire');
new Desire(
	{
		name: '服务',
		host: C.host,
		port: C.port,
		favicon: C.paths.favicon,
		folds: [
			{
				prefix: '/',
				path: C.paths.folder
			},
		],
	},
	G
).start();