import { Sectors } from "../entity/Sectors";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Documents } from "../entity/Documents";
import { CrmVersions } from "../entity/CrmVersions";
import { Crm } from "../entity/Crm";

type CrmVersionServiceProps = {
  idCrmMain: number;
  goal: string;
  justification: string;
  description: string;
};

type FindCrmVersionsProps = {
  id: number;
}

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error initializing Data Source");
  });

export class CrmVersionService {
  async createVersion({
    idCrmMain,
    goal,
    justification,
    description,
  }: CrmVersionServiceProps): Promise<CrmVersions | Error> {
    console.log("AAAAAAAAAAAAAA");

    const crm = new CrmVersions();

    const crmRepo = AppDataSource.getRepository(Crm)
    const crmMain = await crmRepo.findOne({
      where: {
        id: idCrmMain,
      }
    });
    crm.name = crmMain.name;
    crm.complexity = crmMain.complexity;
    crm.goal = crmMain.goal;
    crm.justification = crmMain.justification;
    crm.description = crmMain.description;
    crm.createdAt = new Date;
    crm.sectors = crmMain.sectors;


    crmMain.goal = goal;
    crmMain.justification = justification;
    crmMain.description = description;
    crm.mainCrm = crmMain;

    await AppDataSource.manager.save(crmMain);
    await AppDataSource.manager.save(crm);
    return crm;
  }

  
  async FindCrmVersions({
    id
  }: FindCrmVersionsProps): Promise<CrmVersions[] | Error> {
    const crmRepo = AppDataSource.getRepository(Crm);
    const crm = await crmRepo.findOne({
      where: {
        id: id
      }
    })

    const crmVersionsRepo = AppDataSource.getRepository(CrmVersions);
    const crmVersions = await crmVersionsRepo.find({
      where: {
        mainCrm: crm
      }
    })

    return crmVersions;
  }
}
