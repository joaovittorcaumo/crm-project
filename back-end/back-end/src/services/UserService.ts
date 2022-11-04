import { Sectors } from "../entity/Sectors";
import { User } from "../entity/User";

import { AppDataSource } from "../data-source";

type UserServiceProps = {
  name: string;
  email: string;
  role: string;
  password: string;
  sector: Sectors;
}

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
    user.sector = sector;
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
}
