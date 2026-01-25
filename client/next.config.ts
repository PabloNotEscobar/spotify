import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    assetPrefix: process.env.NODE_ENV === 'development' ? 'http://localhost' : undefined,

    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            { protocol: 'http', hostname: 'localhost', port: '', pathname: '/static/**' },
            { protocol: 'http', hostname: 'nginx', port: '', pathname: '/static/**' },
        ]
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    watchOptions: {

        pollIntervalMs: 1000,
    },
    // webpack: (config, { dev }) => {
    //     if (dev) {
    //         config.cache = {
    //             type: 'filesystem',
    //             buildDependencies: {
    //                 config: [__filename],
    //             },
    //         };
    //         config.watchOptions = {
    //             poll: 1000,
    //             aggregateTimeout: 300,
    //         };
    //     }
    //     return config;
    // },
};

export default nextConfig;
