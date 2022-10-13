import dotenv from 'dotenv';
import { INTERNAL_SERVER_ERROR, NOT_FOUND, CREATED, OK, BAD_REQUEST } from 'http-status';

import movieHelper from '../helpers/movieHelper';
import paginateHelper from '../helpers/paginateHelper';
import responseHelper from '../helpers/responseHelper';

dotenv.config();

/**
* This class contains all methods (functions) required to handle
* viewAllMovies function.
* viewFavoriteMovies function.
* addMovie
* viewMovie
* editMovie
*/
class MovieController {
  /**
     * Handle viewAllMovies.
     * @param {object} req user request.
     * @param {object} res data response.
     * @param {object} next move response.
     * @returns {object} response.
     */
  static async viewAllMovies(req, res, next) {
    try {
      const { start, end, pages, skip, paginate } = await paginateHelper.paginateData(req.query);
      const data = await movieHelper.viewAllMovies(skip, start);
      const count = await movieHelper.countAllMovies();

      const countAllData = data.count;
      const allDatata = data.rows;

      if (data.rows === undefined || data.rows.length === 0) {
        responseHelper.handleSuccess(NOT_FOUND, 'Movies not found', allDatata);
        return responseHelper.response(res);
      }

      req.data = { allDatata, countAllData, start, end, pages, skip, paginate, count };
      return next();
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle viewFavoriteMovies.
     * @param {object} req user request.
     * @param {object} res data response.
     * @param {object} next move response.
     * @returns {object} response.
     */
  static async viewFavoriteMovies(req, res, next) {
    try {
      const { start, end, pages, skip, paginate } = await paginateHelper.paginateData(req.query);
      const data = await movieHelper.viewFavoriteMovies(skip, start, req.user.id);
      const count = await movieHelper.countFavoriteMovies(req.user.id);

      const countAllData = data.count;
      const allDatata = data.rows;

      if (data.rows === undefined || data.rows.length === 0) {
        responseHelper.handleSuccess(NOT_FOUND, 'Movies not found', allDatata);
        return responseHelper.response(res);
      }

      req.data = { allDatata, countAllData, start, end, pages, skip, paginate, count };
      return next();
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle addMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async addMovie(req, res) {
    try {
      const data = await movieHelper.addMovie(req.user.id, req.body);

      responseHelper.handleSuccess(CREATED, `Success`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle viewMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async viewMovie(req, res) {
    try {
      const data = await movieHelper.viewMovie(req.params.id);

      if (!data) {
        responseHelper.handleError(NOT_FOUND, `Movie with id ${req.params.id} not found`);
        return responseHelper.response(res);
      }

      responseHelper.handleSuccess(OK, `Success`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle editMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async editMovie(req, res) {
    try {
      let data = await movieHelper.viewMovie(req.params.id);

      if (!data) {
        responseHelper.handleError(NOT_FOUND, `Movie with id ${req.params.id} not found`);
        return responseHelper.response(res);
      }

      if (data.userId !== req.user.id) {
        responseHelper.handleError(BAD_REQUEST, `Can not edit other ones movie`);
        return responseHelper.response(res);
      }

      data = await movieHelper.editMovie(req.params.id, req.body);
      responseHelper.handleSuccess(OK, `Success`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle deleteMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async deleteMovie(req, res) {
    try {
      let data = await movieHelper.viewMovie(req.params.id);

      if (!data) {
        responseHelper.handleError(NOT_FOUND, `Movie with id ${req.params.id} not found`);
        return responseHelper.response(res);
      }

      if (data.userId !== req.user.id) {
        responseHelper.handleError(BAD_REQUEST, `Can not delete other ones movie`);
        return responseHelper.response(res);
      }

      data = await movieHelper.deleteMovie(req.params.id);
      responseHelper.handleSuccess(OK, `Success`);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}

export default MovieController;
