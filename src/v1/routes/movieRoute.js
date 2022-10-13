import Router from 'express';
import paginate from '../middlewares/paginateMiddleware';
import movieController from '../controllers/movieController';
import { verifySesion } from '../middlewares/verifyMiddlewares';
import { validateAddMovie, validateEditMovie } from '../middlewares/schemaMiddleware';

const router = Router();
router

  .delete('/delete-movie/:id', verifySesion, movieController.deleteMovie)

  .post('/add-movie', verifySesion, validateAddMovie, movieController.addMovie)

  .patch('/edit-movie/:id', verifySesion, validateEditMovie, movieController.editMovie)

  .get('/view-movie/:id', verifySesion, movieController.viewMovie)
  .get('/view-all-movies', verifySesion, movieController.viewAllMovies, paginate.paginateData)
  .get('/view-favorite-movies', verifySesion, movieController.viewFavoriteMovies, paginate.paginateData);

export default router;
