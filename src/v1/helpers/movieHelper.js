import tables from '../../config/database/models';

const { Movie } = tables;

/**
* This class contains all methods (functions) required to handle
* countAllMovies function.
* viewAllMovies function.
* countFavoriteMovies
* viewFavoriteMovies
* addMovie
* viewMovie
* editMovie
* deleteMovie
*/
class MovieHelper {
  /**
     * Count all movies from movies table in database.
     * @returns {object} return data.
     */
  static async countAllMovies() {
    const data = await Movie.count();
    return data;
  }

  /**
   * View all movies from movies table in database.
   * @param {string} skip where to stop.
   * @param {string} start where to start.
   * @returns {object} return data.
   */
  static async viewAllMovies(skip, start) {
    const data = await Movie.findAndCountAll({ limit: skip, offset: start });
    return data;
  }

  /**
     * Count favorite movies from movies table in database.
   * @param {integer} userId where to start.
     * @returns {object} return data.
     */
  static async countFavoriteMovies(userId) {
    const data = await Movie.count({ where: { userId } });
    return data;
  }

  /**
   * View favorite movies from movies table in database.
   * @param {string} skip where to stop.
   * @param {string} start where to start.
   * @param {integer} userId where to start.
   * @returns {object} return data.
   */
  static async viewFavoriteMovies(skip, start, userId) {
    const data = await Movie.findAndCountAll({ where: { userId }, limit: skip, offset: start });
    return data;
  }

  /**
   * Add movie from movies table in database.
   * @param {integer} userId user id.
   * @param {object} body movie details.
   * @returns {object} return data.
   */
  static async addMovie(userId, body) {
    const data = await Movie.create({
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
      name: body.name,
      rating: body.rating,
      cast: body.cast,
      releaseDate: body.releaseDate
    });

    return data;
  }

  /**
   * View movie from movies table in database.
   * @param {integer} id movie id.
   * @returns {object} return data.
   */
  static async viewMovie(id) {
    const data = await Movie.findOne({ where: { id } });
    return data;
  }

  /**
   * Edit movie from movies table in database.
   * @param {integer} id movie id.
   * @param {object} body movie details.
   * @returns {object} return data.
   */
  static async editMovie(id, body) {
    await Movie.update({
      name: body.name,
      rating: body.rating,
      cast: body.cast,
      releaseDate: body.releaseDate,
    }, { where: { id } });

    return this.viewMovie(id);
  }

  /**
   * Delete movie from movies table in database.
   * @param {integer} id movie id.
   * @returns {string} a destroyed session.
   */
  static async deleteMovie(id) {
    const data = await Movie.destroy({ where: { id } });
    return data;
  }
}

export default MovieHelper;
