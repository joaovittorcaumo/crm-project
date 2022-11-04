import { Request, Response} from "express";
import { AddUserService } from "../services/UserService";

export class UserController{
    // TROCAR A MATRICULA POR SENHA FRONT END  
    async register(request: Request, response: Response) {
        const { name, email, role, password,  sector } = request.body;

        const service = new AddUserService();

        const result = await service.execute({name, email, role, password, sector});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}