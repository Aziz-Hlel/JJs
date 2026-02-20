import { Router } from 'express';
import { RootRouter } from '../../root/router/root.router';
import { AuthRouter } from '../../User/router/auth.route';
import { UserPage } from '../../User/router/user.route';
import { productRouter } from '@/products/product.route';
import { mediaRouter } from '@/media/media.route';
import { karaokeSongRouter } from '@/karaokeSong/karaokeSong.route';
import { offerRouter } from '@/Offer/offer.route';
import { transactionHistoryRoute } from '@/transactionHistory/transactionHistory.route';
import { pointsRouter } from '@/points/points.route';
import { entertainmentRouter } from '@/entertaiment/entertainment.route';

const router = Router();

router.use('/', RootRouter);

router.use('/auth', AuthRouter);
router.use('/users', UserPage);
router.use('/media', mediaRouter);
router.use('/products', productRouter);
router.use('/karaoke-songs', karaokeSongRouter);
router.use('/offers', offerRouter);
router.use('/transaction-history', transactionHistoryRoute);
router.use('/points', pointsRouter);
router.use('/entertainment', entertainmentRouter);

export default router;
