/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      { protocol: "https", hostname: "cloudflare-ipfs.com" },
      {
        protocol: "https",
        hostname: "b5a7b992f2eba0465fc15efb724b92c4.ipfscdn.io",
      },
      { protocol: "https", hostname: "oembed.hey.xyz" },
      { protocol: "https", hostname: "images.lens.phaver" },
      { protocol: "https", hostname: "images.lens.phaver.com" },
      { protocol: "https", hostname: "testnet.zora.co" },
      { protocol: "https", hostname: "tryblitz.infura-ipfs.io" },
      { protocol: "https", hostname: "ipfs.io" },
      { protocol: "https", hostname: "gw.ipfs-lens.dev" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "s2.coinmarketcap.com" },

      {
        protocol: "https",
        hostname: "media3.giphy.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "media2.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media4.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media5.giphy.com",
      },
      {
        protocol: "https",
        hostname: "zora.co",
      },
      {
        protocol: "https",
        hostname: "media6.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media0.giphy.com",
      },
      {
        protocol: "https",
        hostname: "nftstorage.link",
      },
      {
        protocol: "https",
        hostname: "spinamp.mypinata.cloud",
      },
      {
        protocol: "https",
        hostname: "media1.giphy.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "lens.infura-ipfs.io",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
      },
      {
        protocol: "https",
        hostname: "www.androidauthority.com",
      },
    ],
  },
};

export default nextConfig;
