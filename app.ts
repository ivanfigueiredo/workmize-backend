import {App} from './server';

const app = new App();
const server = app.Express();

server.listen(`${process.env.PORT}`, () => {
    console.log(`Server is runing on... ${process.env.BASE}:${process.env.PORT}`);
    
});