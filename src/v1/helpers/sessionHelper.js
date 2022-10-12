import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import tables from '../../config/database/models';

const { Session } = tables;

dotenv.config();

/**
* This class contains all methods (functions) required to handle
* sessionExist function.
* saveSession function.
* generateSession function.
* decodeSession function.
* destroySession function.
*/
class SessionHelper {
  /**
   * Check a session into session table in database.
   * @param {string} attribute table column.
   * @param {string} value value.
   * @returns {object} an exist session.
   */
  static async sessionExist(attribute, value) {
    const data = await Session.findOne({ where: { [attribute]: value } });
    return data;
  }

  /**
   * Save a session into session table in database.
   * @param {string} userId a user Id.
   * @param {string} session a user session.
   * @returns {object} a saved session.
   */
  static async saveSession(userId, session) {
    const data = await Session.create({
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
      session,
    });
    return data;
  }

  /**
   * Destroy a session.
   * @param {string} attribute table column.
   * @param {string} value a user id.
   * @returns {string} a destroyed session.
   */
  static async destroySession(attribute, value) {
    const data = await Session.destroy({ where: { [attribute]: value } });
    return data;
  }

  /**
   * Generate a session.
   * @param {string} userId a user Id.
   * @param {string} userName a user name.
   * @param {string} email a user email.
   * @param {string} isVerified a user status.
   * @returns {object} a generated session.
   */
  static async generateSession(userId) {
    let data = await this.sessionExist('userId', userId);
    if (data) { return data.session; }

    data = jwt.sign({ userId }, process.env.PROJECT_SECRET_KEY);
    this.saveSession(userId, data);
    return data;
  }

  /**
   * Decode a session.
   * @param {string} session a user session.
   * @returns {string} a decoded session.
   */
  static async decodeSession(session) {
    const data = await jwt.verify(session, process.env.PROJECT_SECRET_KEY);
    return data;
  }
}

export default SessionHelper;
