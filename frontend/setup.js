const setup = {
    path: process.env.INIT_CWD || __dirname,
    port: process.env.PORT || 3000,
    request: '/*',
    public: 'build/',
    file: 'index.html',
    favicon: '/build/favicon.ico',
    banner: '\nExpress server on'
}

module.exports = setup
