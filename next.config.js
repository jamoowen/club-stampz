/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "youtube.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "instagram.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "instagram.com/ajax",
                port: "",
            },
          
            

        ]
    }
}

module.exports = nextConfig
