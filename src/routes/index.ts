import { Router } from 'express';
import sessionsRouter from '../modules/seg/routes/sessions.routes';
import policiaisRouter from '../modules/public/routes/policiais.routes';
import unidadesRouter from '../modules/public/routes/unidades.routes';
import legislacoesRouter from '../modules/public/routes/legislacoes.routes';

const routes = Router();

routes.use('/policiais', policiaisRouter);
routes.use('/unidades', unidadesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/legislacaonovo', legislacoesRouter);

export default routes;
