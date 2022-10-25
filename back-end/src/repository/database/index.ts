import Database from './modifiers';

import {User} from '../../models/User';
import enviroment from '../../config/environment';
import {Crm} from '../../models/Crm';
import {CrmVersions} from '../../models/CrmVersions';
import {Documents} from '../../models/Documents';
import {Sectors} from '../../models/Sectors';

// TODO change this import style 👇
const typeormNaming = require('typeorm-naming-strategies');

const entities = [
  User,
  Crm,
  CrmVersions,
  Documents,
  Sectors,
];

export const database = new Database({
  ...enviroment.database,
  type: 'postgres',
  database: 'postgres',
  entities,
  namingStrategy: new typeormNaming.SnakeNamingStrategy(),
  migrations: ['./src/repository/database/migrations/*.ts'],
});
