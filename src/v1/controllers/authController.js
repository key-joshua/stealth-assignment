import dotenv from 'dotenv';
import { INTERNAL_SERVER_ERROR, UNAUTHORIZED, BAD_REQUEST, CONFLICT, CREATED, OK } from 'http-status';

import authHelper from '../helpers/authHelper';
import sessionHelper from '../helpers/sessionHelper';
import passwordHelper from '../helpers/passwordHelper';
import responseHelper from '../helpers/responseHelper';
import emailService from '../services/emailServices.js';

dotenv.config();

/**
* This class contains all methods (functions) required to handle
* registerUser function.
* verifyAccount function.
* resentVerificationLink function.
* loginUser function.
*/
class AuthController {
  /**
     * Handle registerUser.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async registerUser(req, res) {
    try {
      const action = 'Verify Account';
      let data = await authHelper.userExist('email', req.body.email);
      if (data) {
        responseHelper.handleError(CONFLICT, `User with email ${req.body.email} already exist`);
        return responseHelper.response(res);
      }

      data = await authHelper.saveUser(req.body);
      const session = await sessionHelper.generateSession(data.id);

      const url = `${process.env.AUTHENTICATION_URL}/verify-user-account/${session}`;
      await emailService.sendVerificationEmail(url, `${req.body.name || 'Unknown'}`, data.email, action);

      responseHelper.handleSuccess(CREATED, `Account created successfully, Please Check email !! we have emailed you a link to verify your account., if have not received email resend mail with  ${process.env.AUTHENTICATION_URL}/resend-verification-link/verifyAccount/yourEmail`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle verifyAccount.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async verifyAccount(req, res) {
    try {
      let data = await sessionHelper.sessionExist('session', req.params.session);
      if (!data) {
        responseHelper.handleError(BAD_REQUEST, 'Invalid/Expired verification link.');
        return responseHelper.response(res);
      }

      data = await sessionHelper.decodeSession(data.session);
      data = await authHelper.userExist('id', data.userId);
      if (!data) {
        responseHelper.handleError(BAD_REQUEST, 'Invalid/Expired verification link.');
        return responseHelper.response(res);
      }

      data = await authHelper.verifyAccount(data.id);
      await sessionHelper.destroySession('userId', data.id);

      const url = `${process.env.FRONTEND_URL}/login`;
      await emailService.sendSuccessfullyEmail(url, `${data.name || 'Unknown'}`, data.email);

      data = { user: data, session: await sessionHelper.generateSession(data.id) };
      responseHelper.handleSuccess(OK, 'Success', data);

      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle resentVerificationLink.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async sendVerificationLink(req, res) {
    try {
      let emailMessage;
      if (req.params.action !== 'verifyAccount' && req.params.action !== 'resetPassword') {
        responseHelper.handleError(BAD_REQUEST, `Invalid action detected. action should be "verifyAccount" or "resetPassword"`);
        return responseHelper.response(res);
      }

      const data = await authHelper.userExist('email', req.params.yourEmail);
      if (!data) {
        responseHelper.handleError(BAD_REQUEST, 'Email not found.');
        return responseHelper.response(res);
      }

      if (req.params.action === 'verifyAccount') {
        if (data.isVerified === true) {
          responseHelper.handleError(BAD_REQUEST, 'User account already verified.');
          return responseHelper.response(res);
        }

        const action = 'Verify Account';
        emailMessage = 'verify your account';
        const session = await sessionHelper.generateSession(data.id);
        const url = `${process.env.AUTHENTICATION_URL}/verify-user-account/${session}`;
        await emailService.sendVerificationEmail(url, `${data.name || 'Unknown'}`, data.email, action);
      }

      if (req.params.action === 'resetPassword') {
        const action = 'Change Password';
        emailMessage = 'change password';
        const session = await sessionHelper.generateSession(data.id);
        const url = `${process.env.AUTHENTICATION_URL}/reset-user-password/${session}`;
        await emailService.sendVerificationEmail(url, `${data.name || 'Unknown'}`, data.email, action);
      }

      responseHelper.handleSuccess(OK, `Email sent successfully, Please Check your email to ${emailMessage}.`);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle loginUser.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async loginUser(req, res) {
    try {
      const passwordExist = await passwordHelper.checkPassword(req.body.password, req.user.password);
      if (!passwordExist) {
        responseHelper.handleError(UNAUTHORIZED, `Email or password incorrect. If you have forgotten your password, request email to reset your password with  ${process.env.AUTHENTICATION_URL}/resend-verification-link/resetPassword/yourEmail`);
        return responseHelper.response(res);
      }

      const data = { user: req.user, session: await sessionHelper.generateSession(req.user.id) };
      responseHelper.handleSuccess(OK, 'Success', data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle logoutUser.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async logoutUser(req, res) {
    try {
      await sessionHelper.destroySession('userId', req.user.id);
      responseHelper.handleSuccess(OK, 'Success');
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}

export default AuthController;
