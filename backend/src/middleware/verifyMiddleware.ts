import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers.authorization ? req.headers.authorization : undefined;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT as string, (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        (req as any).user = decoded;
        next();
    });
};

export default verifyToken;
