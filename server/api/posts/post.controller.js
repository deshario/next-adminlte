"use strict";

const Post = require('./post.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function makeCondition(query) {
  let condition = {};

  if (query.cond) {
    condition = JSON.parse(query.cond);
  }
  return condition;
}

function getPosts(req, res) {
  let condition = makeCondition(req.query);
  return Post.find(condition)
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

module.exports = {
  getPosts
}