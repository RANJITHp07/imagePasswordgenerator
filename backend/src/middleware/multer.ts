import multer, { diskStorage, Multer } from 'multer';
import { Request } from 'express';
import path from 'path';

// Set up storage configuration for Multer
const storage = diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, path.join(__dirname, '..', 'uploads', 'images'));
  },
  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    cb(null, file.originalname);
  }
});


export const upload: Multer = multer({ storage: storage });
