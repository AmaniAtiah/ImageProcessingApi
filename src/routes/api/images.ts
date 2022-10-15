import express, { NextFunction } from 'express';  
import sharp from 'sharp';
import path from 'path';
import { Request, Response } from 'express-serve-static-core';


const images = express.Router();



const showImageWithoutWidthAndHeight = async(req: Request, res: Response) => {

  
     if(req.query.filename == 'encenadaport' || req.query.filename == 'fjord' || req.query.filename == 'icelandwaterfall' || req.query.filename == 'palmtunnel' || req.query.filename == 'santamonica') {
  
  
    res.sendFile(path.resolve('./') + `/assets/full/${req.query.filename}.jpg`)
   
  
  uploadFileWithoutWidthAndHeight(req, res )
  
  }  else {
    return res.send('not found Image ' + req.query.filename)
  }
  


}

async function uploadFileWithoutWidthAndHeight(req: Request, res: Response) {

  await sharp(path.resolve('./') + `/assets/full/${req.query.filename}.jpg`)
  
  .toFile(path.resolve('./') +`/assets/thumb/${req.query.filename}_thumb.jpg` , (err, info) => { 
  console.log(err);
  
  });
}




const showImage = async(req: Request, res: Response) => {

 const width:number = parseInt(req.query.width as string)
 const height:number = parseInt(req.query.height as string)


 if(req.query.filename == 'encenadaport' || req.query.filename == 'fjord' || req.query.filename == 'icelandwaterfall' || req.query.filename == 'palmtunnel' || req.query.filename == 'santamonica') {

  await sharp(path.resolve('./') + `/assets/full/${req.query.filename}.jpg`)
 .rotate()
 .resize(width, height)
 .jpeg()
 .toBuffer()
 .then( data => {  
   res.type('jpg').send(data)


 })
 .catch( err => { 
   console.log(err);
   
  });


  uploadFile(req, res)

 
}  else {
  return res.send('not found Image ' + req.query.filename)
}


}


async function uploadFile(req: Request, res: Response) {

  await sharp(path.resolve('./') + `/assets/full/${req.query.filename}.jpg`)
.resize( parseInt(req.query.width as string),  parseInt(req.query.height as string))

.toFile(path.resolve('./') +`/assets/thumb/${req.query.filename}.jpg` + req.query.width + req.query.height , (err, info) => { 
 console.log(err);
 
});
}


 
images.get('/', (req, res) => {

  if(!req.query.filename) {
    return res.send('Please put the file name')
  }

  if(!req.query.width || !req.query.height) {
       showImageWithoutWidthAndHeight(req, res)

  } else{
    showImage(req, res)
   }




    
})


export default images;


