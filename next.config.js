/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
