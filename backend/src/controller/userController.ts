import { NextFunction, Request, Response } from "express";
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { SignUpDTO } from "../middleware/dto/user.dto";
import UserModel from '../model/userSchema';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { LoginDTO } from "../middleware/dto/login.dto";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const signUpData = plainToClass(SignUpDTO, req.body);

        // Validate sign-up data using DTO
        const errors = await validate(signUpData);
        if (errors.length > 0) {
            res.status(400).json({ message: "Invalid sign-up data", errors });
            return;
        }

        const existingUser = await UserModel.findOne({ username: req.body.username });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await UserModel.create({ ...req.body, password: hashedPassword });
        res.status(200).json({ success: true, message: 'Successfully signed up' });
    } catch (err) {
        next(err);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loginData = plainToClass(LoginDTO, req.body);

        // Validate login data using DTO
        const errors = await validate(loginData);
        if (errors.length > 0) {
            res.status(400).json({ message: "Invalid login data", errors });
            return;
        }

        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            res.status(400).json({ message: "No such user" });
            return;
        }

        // Compare
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_KEY as string);
            res.status(200).json({ success: true, message: "Login successful", token: token });
        } else {
            res.status(400).json({ message: "Wrong password" });
        }
    } catch (err) {
        next(err);
    }
};

export default {
    signUp,
    login
};
