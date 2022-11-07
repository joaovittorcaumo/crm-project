import { Request, Response } from "express";
import { CrmService } from "../services/CrmService";

export class CrmController {
  // TROCAR A MATRICULA POR SENHA FRONT END
  async register(request: Request, response: Response) {
    const {
      name,
      complexity,
      goal,
      type,
      justification,
      description,
      creator,
      documents,
      versions,
    } = request.body;

    const service = new CrmService();

    const result = await service.register({
      name,
      complexity,
      goal,
      type,
      justification,
      description,
      creator,
      documents,
      versions,
    });

    return response.json(result);
  }

  async FindCrm(request: Request, response: Response) {
    const {
      id
    } = request.body;

    const service = new CrmService();

    const result = await service.FindCrm({
      id
    });

    return response.json(result);
  }
}
