import { Sectors } from "../entity/Sectors";
import { User } from "../entity/User";

import { AppDataSource } from "../data-source";

type SectorServiceProps = {
  name: string;
  description: string;
  users: User[];
}

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized");
    })
    .catch((err) => {
        console.error("Error initializing Data Source")
    });

export class SectorService {
  async execute({
    name,
    description,
    users
  }: SectorServiceProps): Promise<Sectors | Error> {
    const sector = new Sectors();

    sector.name = name;
    sector.description = description;
    sector.users = users;
    
    const repo = AppDataSource.getRepository(Sectors);


    await AppDataSource.manager.save(sector);
    return sector;
  }
}
