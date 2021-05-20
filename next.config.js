/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const withImages = require('next-images')

const isProd = process.env.NODE_ENV === 'production'

module.exports = [
  withPWA({
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    future: {
      webpack5: true
    }
  }),
  withImages({
    esModule: true
  })
]
