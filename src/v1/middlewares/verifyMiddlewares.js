import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED } from 'http-status';

import authHelper from '../helpers/authHelper';
import sessionHelper from '../helpers/sessionHelper';
import responseHelper from '../helpers/responseHelper';

dotenv.config();

/**
   * Handle verifyLogin.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const verifyLogin = async (req, res, next) => {
  try {
    const userExist = await authHelper.userExist('email', req.body.email);
    if (userExist) {
      if (userExist.isVerified === false) {
        responseHelper.handleError(UNAUTHORIZED, 'User account is not verified, Please verify account before procced');
        return responseHelper.response(res);
      }

      req.user = userExist;
      return next();
    }

    responseHelper.handleError(NOT_FOUND, 'User account not found, Check email and password.');
    return responseHelper.response(res);
  } catch (error) {
    responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
    return responseHelper.response(res);
  }
};

/**
   * Handle verifySesion.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const verifySesion = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      responseHelper.handleError(UNAUTHORIZED, 'Unauthorized');
      return responseHelper.response(res);
    }

    const verify = jwt.verify(req.headers.authorization.split(' ')[1], process.env.PROJECT_SECRET_KEY);
    if (verify.userId) {
      const userExist = await authHelper.userExist('id', verify.userId);
      const sessionExist = await sessionHelper.sessionExist('session', req.headers.authorization.split(' ')[1]);

      if (userExist) {
        if (sessionExist) {
          req.user = userExist;
          return next();
        }

        responseHelper.handleError(UNAUTHORIZED, 'Already logged out. Sign in and try again..');
        return responseHelper.response(res);
      }
    }

    responseHelper.handleError(NOT_FOUND, 'User account not found,  Please create account and try again.');
    return responseHelper.response(res);
  } catch (error) {
    responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
    return responseHelper.response(res);
  }
};

export { verifyLogin, verifySesion };
