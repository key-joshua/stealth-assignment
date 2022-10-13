import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import responseHelper from '../helpers/responseHelper';

/**
 * This class contains method (function) required to handle.
 * All kinds of data which paginated.
 */
class PaginateData {
  /**
  * This method handle pagination of retrived data.
  * @param {object} req a datas request.
  * @param {object} res a response.
  * @returns {object} return status and data.
  */
  static paginateData(req, res) {
    try {
      req.data.paginate.paginate = req.data.allDatata;
      if (req.data.start > 0) {
        req.data.paginate.Previous = {
          page: req.data.pages - 1,
          limit: req.data.skip,
        };
      } if (req.data.end < req.data.countAllData) {
        req.data.paginate.Next = {
          page: req.data.pages + 1,
          limit: req.data.skip,
        };
      }

      const data = { count: req.data.count || 0, data: req.data.paginate };
      responseHelper.handleSuccess(OK, `Success, page ${req.data.pages}`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}
export default PaginateData;
