import { Router } from 'express';
import validateUser from '../middleware/validateUser.js';
import verifyToken from '../middleware/verifyToken.js';
import dotenv from 'dotenv';
import { Login, signUp, user, userDelete, userUpdate, users } from '../controllers/user.controller.js';


dotenv.config();


const router = Router();

// User - Endpoints
router.post("/signup", validateUser, signUp);
router.post('/login' ,  Login);

router.get('/', users);
router.get('/user', verifyToken ,user);
router.put('/user', verifyToken, userUpdate);
router.delete('/user', verifyToken, userDelete);


export default Router;