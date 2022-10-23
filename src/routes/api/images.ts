import express, { NextFunction } from 'express';  

import { Request, Response } from 'express-serve-static-core';
import processImage from '../../utilities';


const images = express.Router();

const image = (req: Request, res: Response) => {

  
  if(req.query.filename == 'encenadaport' || req.query.filename == 'fjord' || req.query.filename == 'icelandwaterfall' || req.query.filename == 'palmtunnel' || req.query.filename == 'santamonica' ) {

    processImage(req, res);

  }  else {
    return res.send('not found Image ' + req.query.filename)
  }
}
const showImages= (req: Request, res: Response) => {
  image(req, res)

}

const showImageWithWidthAndHeight= (req: Request, res: Response) => {
 

  
  const width: number = parseInt(req.query.width as string);
  if (Number.isNaN(width) || width < 1) {
    return res.send("please enter  positive number for width")
  } 

  const height: number = parseInt(req.query.height as string);
  if (Number.isNaN(height) || height < 1) {
    return res.send("please enter positive number for height");
  } 
  image(req, res)
  
  }

images.get('/', (req: Request, res: Response):void => {

  if(req.query.filename) {
    showImages(req, res)

  }  else {
      res.send('Please put the file name')

  }

  if(req.query.width || req.query.height) {
    showImageWithWidthAndHeight(req, res)

  } 

  res.setHeader('X-Foo', 'bar')

})

export default images;

