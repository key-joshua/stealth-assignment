import Router from 'express';
import authController from '../controllers/authController';
import { verifyLogin, verifySesion } from '../middlewares/verifyMiddlewares';
import { validateRegisterUser, validateLoginUser } from '../middlewares/schemaMiddleware';

const router = Router();
router
  .get('/logout-user', verifySesion, authController.logoutUser)
  .get('/verify-user-account/:session', authController.verifyAccount)
  .get('/resend-verification-link/:action/:yourEmail', authController.sendVerificationLink)

  .post('/register-user', validateRegisterUser, authController.registerUser)
  .post('/login-user', validateLoginUser, verifyLogin, authController.loginUser);

export default router;
