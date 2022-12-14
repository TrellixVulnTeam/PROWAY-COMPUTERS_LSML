'use strict'

const path = require('path')
const { URL } = require('url')

/**
 * Url object used for tracking files in `file-list.js`.
 */
class Url {
  constructor (path, type, integrity) {
    this.path = path
    this.originalPath = path
    this.type = type
    this.integrity = integrity
    this.isUrl = true
  }

  /**
   * Detect type from the file extension in the path part of the URL.
   * @returns {string} detected file type or empty string
   */
  detectType () {
    return path.extname(new URL(this.path).pathname).slice(1)
  }

  toString () {
    return this.path
  }
}

module.exports = Url
