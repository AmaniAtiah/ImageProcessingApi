import express, { Request, Response } from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req: Request, res: Response):void => {
  res.send(
    '<p><a href="/api/images?filename=encenadaport">/api/images?filename=encenadaport</p></a><p><a href="/api/images?filename=encenadaport&width=100&height=100">/api/images?filename=encenadaport&width=100&height=100</p></a>'

 );});

routes.use('/api/images', images);
export default routes;
