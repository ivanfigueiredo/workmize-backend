import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { router } from './routes';
import * as dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

const path = require('path');

export class App {    
    express: any;
    constructor(){
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();
        
    }

    database() {
        mongoose.connect(`${process.env.DATABASE_URL}`, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
    }
    
    middlewares() {        
        this.express.use(cors({
            "origin": "*",
            "methods": "POST, PUT, DELETE, GET",
            "allowedHeaders":"Content-Type, Accept, Authorization",

        }));
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended: true}));   
        this.express.use(morgan('dev'));     
    }
    
    routes() {
        this.express.use('/', router);     
    }

    Express(){
        return this.express;
    };
    
}

