import { Router } from 'express';
const router = Router();
import { verifyJWT } from './middleware/auth';
import multer from 'multer';
import { authenticateUserController } from './useCases/AuthenticateUser';
import { createUserController } from './useCases/CreateUser';
import { groupUsersController } from './useCases/GetGroupUsers';
import { createTaskController } from './useCases/CreateTask';
import { groupTasksController } from './useCases/GetGroupTasks';
import { deleteTasksController } from './useCases/DeleteTasks/iindex';
import { infoUserController } from './useCases/InfoUser';

const multerConfig = require('./config/multer');

router.get('/', (req, res) => {
    res.send("OK!");
});

router.get('/downloads', (req, res) => {
    const { fileName } = req.query;
    res.set("Access-Control-Allow-Origin", "*");

    const file = `C:/Projeto Intranet/backend/uploads/${fileName}`
    return res.download(file);
});


router.post('/user/signup', multer(multerConfig).single("file"), (request, response) => {   
    console.log(request.file.filename) 
    return createUserController.signup(request, response);
});

router.post('/user/signin', (request, response) => {     
    return authenticateUserController.signin(request, response)
});

router.get('/user/info', verifyJWT, (request, response) => {
    return infoUserController.infoUser(request, response)
});


router.post('/task/create', verifyJWT, (request, response) => {
    return createTaskController.create(request, response)
});

router.get('/user/groupusers', (request, response) => {
    return groupUsersController.getGroupUsers(request, response)
});



router.put('/task/update', verifyJWT, (request, response) =>{

});

router.get('/task/grouptask', verifyJWT, (request, response) => {
    return groupTasksController.getGroupTasks(request, response);
});

router.get('/task/mytasks', verifyJWT, (request, response) => {
    
});

router.delete('/task/delete', verifyJWT, (request, response) => {
    return deleteTasksController.delete(request, response)
})

export { router }
