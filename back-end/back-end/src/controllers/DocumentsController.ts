import { Request, Response} from "express";
import { DocumentsService } from "../services/DocumentsService";

export class DocumentsController{
    // TROCAR A MATRICULA POR SENHA FRONT END  
    async register(request: Request, response: Response) {
        const {name, link, description, mainCrm  } = request.body;

        const documents = new DocumentsService();

        const result = await documents.register({mainCrm, name, link, description});

        return response.json(result);
    }

    async findDocument(request: Request, response: Response) {
        const { idCrm } = request.body;

        const documents = new DocumentsService();

        const result = await documents.FindAllDocuments({idCrm});

        return response.json(result);
    }
}