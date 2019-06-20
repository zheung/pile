module.exports = {
	name: 'pile',

	serv: {
		host: '0.0.0.0',
		port: 6631,
		path: '/',

		http2: true,

		perm: {
			key: 'D:/Runtime/Pem/multi/domain-key.txt',
			cert: 'D:/Runtime/Pem/multi/domain-crt.txt',
		}
	},

	path: {
		pile: './pile',
	}
};