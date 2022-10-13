import Router from 'express';
import authRouter from './authRoute';
import movieRouter from './movieRoute';

const router = Router();
router.use('/auth', authRouter);
router.use('/movie', movieRouter);

export default router;
