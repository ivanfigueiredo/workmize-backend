import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './src/routes';
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
        }));
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended: true}));      
    }
    
    routes() {
        this.express.use('/', router);     
    }

    Express(){
        return this.express;
    };
    
}

