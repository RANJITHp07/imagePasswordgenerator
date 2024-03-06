import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoute from './route/userRoute'
import imageRoute from './route/imageRoute'
import { db } from './db';
import path from 'path'

dotenv.config();

const app = express();


// Set up logging
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/photos', express.static(path.join(__dirname, '/public/images')));


//routing middleware
app.use(userRoute);
app.use('/images',imageRoute)



// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

db().then(() => {
    app?.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});
