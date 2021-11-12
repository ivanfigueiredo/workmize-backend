import {App} from './server';

const app = new App();
const server = app.Express();

const port = `${process.env.PORT}` || 3000;

server.listen(port, () => {
    console.log(`Server is runing on... ${process.env.BASE}:${process.env.PORT}`);
    
});
