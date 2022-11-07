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

type authUserProps = {
  email: string;
  password: string;
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
    
      const crmRepo = AppDataSource.getRepository(Crm)
      const crms = await crmRepo.find({
        where: {
          users: {
            email: email
          }
        }
      })

      return crms
  }

  async authUserLogin ({ email, password }: authUserProps): Promise<UserServiceProps | null> {
    
    const userRepo = AppDataSource.getRepository(User)
    const user = await userRepo.findOne({
      where: {
        email: email,
        password: password
      },
      relations: {
        sector: true,
      },
    })


    if(user){
      const teste: UserServiceProps = {
        name: user.name,
        email: user.email,
        role: user.role,
        password: user.password,
        sector: user.sector.name
      }
      return teste;
    }
    return null;
    }

}
