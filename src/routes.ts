import {Router, Request, Response} from 'express';
import { createUserController } from './useCases/CreaterUser'

const router = Router();


router.post('/users', (request, response) => {
  
  return createUserController.store(request, response)
})

export { router }