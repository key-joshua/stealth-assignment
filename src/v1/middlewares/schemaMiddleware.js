import Joi from 'joi';
import validateSchema from './validateSchema';

/**
   * Handle validateRegisterUser.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const validateRegisterUser = (req, res, next) => {
  const dataSchema = Joi.object()
    .keys({
      name: Joi.string().min(3).max(50).allow(null, '')
        .messages({
          'any.required': 'name is required',
          'string.empty': 'name is not allowed to be empty',
        }),
      email: Joi.string().email().required()
        .messages({
          'any.required': 'email is required',
          'string.empty': 'email is not allowed to be empty',
          'string.email': 'email must be a valid email',
        }),
      password: Joi.string().required().regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/).messages({
        'any.required': 'password is a required field',
        'string.pattern.base': 'password must be at least 8 characters long with a number, Upper and lower cases, and a special character',
      }),
      confirmPassword: Joi.string().required().valid(Joi.ref('password')),
    })
    .options({ abortEarly: false });

  return validateSchema(dataSchema, req.body, res, next);
};

/**
   * Handle validateLoginUser.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const validateLoginUser = (req, res, next) => {
  const dataSchema = Joi.object()
    .keys({
      email: Joi.string().email().required().messages({
        'any.required': 'email is required',
        'string.empty': 'email is not allowed to be empty',
        'string.email': 'email must be a valid email',
      }),
      password: Joi.string().required().regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/,)
        .messages({
          'any.required': 'password is a required field',
          'string.pattern.base': 'password must be at least 8 characters long with a number, Upper and lower cases, and a special character',
        }),
    })
    .options({ abortEarly: false });

  return validateSchema(dataSchema, req.body, res, next);
};

/**
   * Handle validateRegisterUser.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const validateAddMovie = (req, res, next) => {
  const dataSchema = Joi.object()
    .keys({
      name: Joi.string().min(3).max(50).required()
        .messages({
          'any.required': 'name is required',
          'string.empty': 'name is not allowed to be empty',
        }),
      rating: Joi.number().required()
        .messages({
          'any.required': 'rating is required',
          'string.empty': 'rating is not allowed to be empty',
        }),
      cast: Joi.array().min(1).items(Joi.string()).required()
        .messages({
          'any.required': 'cast is required',
          'string.empty': 'cast is not allowed to be empty',
        }),
      releaseDate: Joi.date().required()
        .messages({
          'any.required': 'releaseDate is required',
          'string.empty': 'releaseDate is not allowed to be empty',
        }),
    })
    .options({ abortEarly: false });

  return validateSchema(dataSchema, req.body, res, next);
};

/**
   * Handle validateRegisterUser.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const validateEditMovie = (req, res, next) => {
  const dataSchema = Joi.object()
    .keys({
      name: Joi.string().min(3).max(50)
        .messages({
          'any.required': 'name is required',
          'string.empty': 'name is not allowed to be empty',
        }),
      rating: Joi.number()
        .messages({
          'any.required': 'rating is required',
          'string.empty': 'rating is not allowed to be empty',
        }),
      cast: Joi.array().min(1).items(Joi.string())
        .messages({
          'any.required': 'cast is required',
          'string.empty': 'cast is not allowed to be empty',
        }),
      releaseDate: Joi.date()
        .messages({
          'any.required': 'releaseDate is required',
          'string.empty': 'releaseDate is not allowed to be empty',
        }),
    })
    .options({ abortEarly: false });

  return validateSchema(dataSchema, req.body, res, next);
};

export { validateRegisterUser, validateLoginUser, validateAddMovie, validateEditMovie };
