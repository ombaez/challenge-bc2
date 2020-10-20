module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                net: 'empty',
                dns: 'empty',
                fs: 'empty',
                tls: 'empty',
            };
        }

        return config;
    }
}