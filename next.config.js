require('dotenv').config()

const basePath = process.env.BASE_PATH ?? ''
console.log(`Using base path ${basePath}`)

const withPlugins = require('next-compose-plugins')
const withLqipImages = require('next-lqip-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  basePath: basePath
}

module.exports = withPlugins([withLqipImages], nextConfig)
