import { Request, Response} from "express";
import { SectorService } from "../services/SectorService";

export class SectorsController{
    // TROCAR A MATRICULA POR SENHA FRONT END  
    async register(request: Request, response: Response) {
        const { name, description, users } = request.body;

        const service = new SectorService();

        const result = await service.execute({name, description, users});

        return response.json(result);
    }
}