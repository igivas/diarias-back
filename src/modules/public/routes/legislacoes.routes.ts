import { Router } from 'express';
import ensureAuthenticated from 'middlewares/ensureAuthenticated';
import LegislacoesController from '../controllers/LegislacoesController';

const legislacoesRouter = Router();
const legislacoesController = new LegislacoesController();
legislacoesRouter.use(ensureAuthenticated);
legislacoesRouter.post('/', legislacoesController.create);
legislacoesRouter.get('/', legislacoesController.index);

export default legislacoesRouter;
