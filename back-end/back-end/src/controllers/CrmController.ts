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
      createdAt,
      versions,
      users,
      sectors,
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
      createdAt,
      versions,
    });

    return response.json(result);
  }
}
