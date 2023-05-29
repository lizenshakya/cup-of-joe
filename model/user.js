const user = require('../schemas/user');
const helperFunc = require('./helper');

const query = helperFunc(user)

module.exports = {
  get: query.find,
  getOne: query.findOne,
  post: query.create,
  postMany: query.insertMany,
  delete: query.deleteOne,
  deleteMany: query.deleteMany,
  put: query.update,
};
