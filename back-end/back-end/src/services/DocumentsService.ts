import { AppDataSource } from "../data-source";
import { Crm } from "../entity/Crm";
import { Documents } from "../entity/Documents";


type DocumentProps = {
    mainCrm: number;
    name: string;
    link: string;
    description: string;
  }

type FindDocument = {
  idCrm: number;
}
  
  
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source initialized");
    })
    .catch((err) => {
      console.error("Error initializing Data Source");
    });
  
  export class DocumentsService {
    async register({
      name,
      link,
      description,
      mainCrm
    }: DocumentProps): Promise<Documents | Error> {
      console.log("AAAAAAAAAAAAAA");
  
      const crmsRepo = AppDataSource.getRepository(Crm);
      const crm = await crmsRepo.findOne({ where:
        { id: mainCrm}
      })
      const document = new Documents();
      document.name = name;
      document.description = description;
      document.link = link;
      document.mainCrm = crm;


      await AppDataSource.manager.save(document);
      return document;
    }

    async FindAllDocuments({
      idCrm
    }: FindDocument): Promise<Documents[] | Error> {
      const documentsRepo = AppDataSource.getRepository(Documents);
      const documents = await documentsRepo.find({
        where: {
          mainCrm: {
            id: idCrm
          }
        }})

      return documents;
    }
  }
  