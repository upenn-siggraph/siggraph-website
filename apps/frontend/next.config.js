const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'development') dotenv.config()

const basePath = process.env.BASE_PATH ?? ''
if (process.env.BASE_PATH) console.log(`Using custom base path ${basePath}`)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
}

module.exports = nextConfig
