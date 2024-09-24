/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    output: "export",
    images: {
        unoptimized: true,
    },
};
export default nextConfig;