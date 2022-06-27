import { Router } from "express";
import { createUserUseController } from "./UseCases/CreateUser";

const router = Router()

router.post('/users', (request, response) => {
    return createUserUseController.handle(request, response);
})

export { router }