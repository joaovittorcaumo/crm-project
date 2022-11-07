import { Request, Response } from "express";
import { CrmVersionService } from "../services/CrmVersionService";

export class CrmVersionsController {
  // TROCAR A MATRICULA POR SENHA FRONT END
  async register(request: Request, response: Response) {
    const { idCrmMain, goal, justification, description } =
      request.body;

    const service = new CrmVersionService();

    const result = await service.createVersion({
      idCrmMain,
      goal,
      justification,
      description,
    });

    return response.json(result);
  }

  async FindCrm(request: Request, response: Response) {
    const { id } = request.body;

    const service = new CrmVersionService();

    const result = await service.FindCrmVersions({
        id,
    });

    return response.json(result);
  }
}
