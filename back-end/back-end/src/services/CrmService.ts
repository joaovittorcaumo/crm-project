import { Sectors } from "../entity/Sectors";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Documents } from "../entity/Documents";
import { CrmVersions } from "../entity/CrmVersions";
import { Crm } from "../entity/Crm";

type CrmServiceProps = {
  name: string;
  complexity: string;
  goal: string;
  type: number;
  justification: string;
  description: string;
  creator: number;
  documents: Documents[];
  createdAt: string;
  versions: CrmVersions[];
};

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error initializing Data Source");
  });

export class CrmService {
  async register({
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
  }: CrmServiceProps): Promise<Crm | Error> {
    console.log("AAAAAAAAAAAAAA")
    
    const crm = new Crm();

    crm.name = name;
    crm.complexity = complexity;
    crm.goal = goal;
    crm.type = type;
    crm.justification = justification;
    crm.description = description;

    const usersRepo = AppDataSource.getRepository(User);
    const userCreator = await usersRepo.findOne({ 
      where: { 
        id: creator
      },
      relations: {
        sector: true
      }
      
    })
    console.log("creatorASD", userCreator)

    crm.creator = userCreator;
    crm.versions = versions;
    crm.documents = documents;
    crm.users = [userCreator];
    crm.sectors = [userCreator.sector]

    await AppDataSource.manager.save(crm);

    /*
  
    
    // ;
    const repo = AppDataSource.getRepository(Crm);

    
    */
    return crm;
  }
}
