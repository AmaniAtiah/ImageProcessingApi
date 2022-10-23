
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

import { Request, Response } from 'express-serve-static-core';


const imageThumb = path.resolve('./') + '/assets/thumb/';
const imageFull =   path.resolve('./') + '/assets/full/';




const processImage = async (req:Request, res: Response
    ) => {

      try {

        await sharp(path.resolve(imageFull, `${req.query.filename}.jpg`))
          .resize(parseInt(req.query.width as string), parseInt(req.query.height as string))
          .toFormat('jpeg')
           .toFile(path.resolve(imageThumb, `${req.query.filename}-${req.query.width}X${req.query.height}.jpg`));
       
      } catch {
         console.log("The image cannot be processed");
         
        
      }

      if(req.query.width && req.query.height) {

         if(fs.existsSync(path.resolve(imageThumb, `${req.query.filename}-${req.query.width}X${req.query.height}.jpg`))) {
           return res.sendFile(path.resolve(imageThumb, `${req.query.filename}-${req.query.width}X${req.query.height}.jpg`));


         } 


         
      } else {
       
          return res.sendFile(path.resolve(imageFull, `${req.query.filename}.jpg`))

     
      }

    };

    export default processImage;