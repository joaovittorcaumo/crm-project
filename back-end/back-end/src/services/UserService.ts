import { Sectors } from "../entity/Sectors";
import { User } from "../entity/User";

import { AppDataSource } from "../data-source";
import { Crm } from "../entity/Crm";
import { In } from "typeorm";

type UserServiceProps = {
  name: string;
  email: string;
  role: string;
  password: string;
  sector: string;
}

type FindCrMProps = {
  email: string;
};

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized");
    })
    .catch((err) => {
        console.error("Error initializing Data Source")
    });

export class AddUserService {
  async execute({
    name,
    email,
    role,
    password,
    sector,
  }: UserServiceProps): Promise<User | Error> {
    const user = new User();

    user.name = name;
    user.email = email;
    const sectorsRepo = AppDataSource.getRepository(Sectors);
    const finalSector = await sectorsRepo.findOne({ where:
      { name: sector}
    })
    user.sector = finalSector;
    user.password = password;
    user.role = role;
    
    const repo = AppDataSource.getRepository(User);


    if(await repo.findOne({ where:
    { email: email}
  })){
    return new Error("Email already exists");
  }
    await AppDataSource.manager.save(user);
    return user;
  }

    async findAllLinkedCrms({ email }: FindCrMProps): Promise<Crm[] | Error> {
    const userRepo = AppDataSource.getRepository(User);
    const user = userRepo.findOne({
      where: {
        email: email,
      },
    });
    const id = (await user).id;
    const crmsRepo = AppDataSource.getRepository(Crm);
    const crms = crmsRepo.findBy({
      users: In([id])
    });

    return crms;
  }
}
