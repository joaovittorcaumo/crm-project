import "reflect-metadata"
import { DataSource } from "typeorm"
import { Crm } from "./entity/Crm"
import { CrmVersions } from "./entity/CrmVersions"
import { Documents } from "./entity/Documents"
import { Sectors } from "./entity/Sectors"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Crm, CrmVersions, Documents, Sectors],
    migrations: ["/src/database/migration"],
    subscribers: [],
})
