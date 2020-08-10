"use strict";

const {pool} = require('../../config')

const getBlogs = (request, response) => {
  pool.query('SELECT * FROM blogs_post', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCustomBlog = (request, response) => {
  pool.query(`SELECT * FROM blogs_post WHERE id = '1'`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getBlogs,
  getCustomBlog
}