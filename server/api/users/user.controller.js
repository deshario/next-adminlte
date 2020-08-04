"use strict";

const User = require('./user.model');

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

function getUsers(req, res){
  let condition = makeCondition(req.query);
  return User.find(condition)
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

function countUsers(condition) {
  return function(value) {
    var result = {};
    if (result) {
      result.data = value;
    }
    return User.find(condition)
      .count()
      .then(function(size) {
        result.size = size;
        return result;
      });
  };
}

function getLimitUsers(req, res) {
  const skip = parseInt(req.query.skip) || 0;
  let limit = parseInt(req.query.limit) || false;
  limit = req.query.limit === false ? false : limit;
  let condition = makeCondition(req.query);
  return User.find(condition)
    .skip(skip)
    .limit(limit)
    .exec()
    .then(handleEntityNotFound(res))
    .then(countUsers(condition))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

module.exports = {
  getUsers,
  getLimitUsers
}