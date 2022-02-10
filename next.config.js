require('dotenv').config()

const withPlugins = require('next-compose-plugins')
const withLqipImages = require('next-lqip-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  basePath: process.env.BASE_PATH || ''
}

module.exports = withPlugins([withLqipImages], nextConfig)
