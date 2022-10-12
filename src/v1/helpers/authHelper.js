import passwordHelper from './passwordHelper';
import tables from '../../config/database/models';

const { User } = tables;

/**
* This class contains all methods (functions) required to handle
* userExist function.
* saveUser function.
* verifyAccount function.
*/
class AuthHelper {
  /**
   * Check a user into users table in database.
   * @param {string} attribute table column.
   * @param {string} value user details.
   * @returns {object} exist user.
   */
  static async userExist(attribute, value) {
    const data = await User.findOne({ where: { [attribute]: value } });
    return data;
  }

  /**
   * Save a user into users table in database.
   * @param {object} body user details.
   * @returns {object} saved user details.
   */
  static async saveUser(body) {
    const data = await User.create({
      createdAt: new Date(),
      updatedAt: new Date(),
      name: body.name,
      email: body.email,
      isVerified: false,
      password: passwordHelper.hashPassword(body.password),
    });
    return data;
  }

  /**
   * verify user account into users table in database.
   * @param {string} id table attribute.
   * @returns {object} updated user details.
   */
  static async verifyAccount(id) {
    await User.update({ isVerified: true }, { where: { id } });
    return this.userExist('id', id);
  }
}

export default AuthHelper;
