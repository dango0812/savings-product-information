/** @type {import('next').NextConfig} */
const nextConfig = {
    // next js use swc: https://nextjs.org/docs/messages/swc-disabled
    experimental: {
        forceSwcTransforms: true,
    }
}

module.exports = nextConfig
