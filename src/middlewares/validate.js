const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details[0].message;
    const randomValue = errorMessage.match(/"(.*?)"/)[1];
    return next(new ApiError(httpStatus.BAD_REQUEST, "Утга зөв оруулна уу! (" + randomValue + ")"));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
