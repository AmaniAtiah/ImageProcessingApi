import express, { NextFunction } from 'express';  

import { Request, Response } from 'express-serve-static-core';
import processImage from '../../utilities';


const images = express.Router();

const image = async(req: Request, res: Response) => {
  if(req.query.filename == 'encenadaport' || req.query.filename == 'fjord' || req.query.filename == 'icelandwaterfall' || req.query.filename == 'palmtunnel' || req.query.filename == 'santamonica' ) {

    processImage(req, res);

  }  else {
    return res.send('not found Image ' + req.query.filename)
  }
}
const showImages= async(req: Request, res: Response) => {
  image(req, res)

}

const showImageWithWidthAndHeight= async(req: Request, res: Response) => {
  image(req, res)

  
  if(!req.query.filename) {
    return res.send('Please put the file name')
  } 

  const width: number = parseInt(req.query.width as string);
  if (Number.isNaN(width) || width < 1) {
    return res.send("please enter  positive number for width")
  } 

  const height: number = parseInt(req.query.height as string);
  if (Number.isNaN(height) || height < 1) {
    return res.send("please enter positive number for height");
  } 
  
  }

images.get('/', (req, res) => {

  if(req.query.filename) {
    showImages(req, res)
  } 

  if(req.query.width || req.query.height) {
    showImageWithWidthAndHeight(req, res)
  }

})


export default images;


