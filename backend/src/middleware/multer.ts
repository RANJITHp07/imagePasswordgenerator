import multer, { diskStorage, Multer } from 'multer';
import { Request } from 'express';


// Set up storage configuration for Multer
const storage = diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, 'src/public/images');
  },
  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    const uniqueFilename = Date.now() + '-' + file.originalname;
    if(req.file)
    req.file.filename = uniqueFilename; 
    cb(null, uniqueFilename);;
  }
});


export const upload: Multer = multer({ storage: storage });
