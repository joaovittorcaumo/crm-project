import * as express from "express";

import { router } from "./router";
import { UserController } from "./controllers/UserController";
import { SectorService } from "./services/SectorService";
import { SectorsController } from "./controllers/SectorsController";
import { CrmController } from "./controllers/CrmController";
import { DocumentsController } from "./controllers/DocumentsController";
import { CrmVersionsController } from "./controllers/CrmVersionsController";

    
//REGRAS DE NEGOCIO, COMO: UMA CRM TEM QUE TER UM SETOR OBRIGATORIAMENTE TEM QUE SER FEITAS NO BACK

// Creating and setting the express app
const app = express();
var cors = require('cors')
app.use(express.json());



app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// Router registering
router;
app.post('/register',  new UserController().register);
app.post('/login',  new UserController().UserAuth);
app.get('/sectorRegister',  new SectorsController().register);
app.get('/sectorNames',  new SectorsController().FindSectorsNames);
app.get('/findCrms',  new UserController().findAllLinkedCrms);
app.get('/registerCrm',  new CrmController().register);
app.get('/findCrm',  new CrmController().FindCrm);
app.get('/registerDocument',  new DocumentsController().register);
app.get('/findDocument',  new DocumentsController().findDocument);
app.get('/registerVersion',  new CrmVersionsController().register);
app.get('/findVersion',  new CrmVersionsController().FindCrm);




app.listen(3000, () => console.log("Server Running"));





















// AppDataSource.initialize().then(async () => {

//     // console.log("Inserting information into the database...")
//     const user = new User();
//     const sector = new Sectors();
//     const documents = new Documents();
//     const crm = new Crm();
//     sector.name = "IT";
//     sector.description = "The IT sector is responsible for managing the CRM  website as Administrators";
//     user.name = "Timber";
//     user.email = "timber.test@gmail.com";
//     user.role = "Project Manager";
//     user.sector = sector;
//     user.password = "123456";
//     sector.users = [user];
//     await AppDataSource.manager.save(sector);
//     await AppDataSource.manager.save(user);
//     documents.description = "Cute cat picture";
//     documents.name = "CatPicture";
//     documents.link = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg";
//     await AppDataSource.manager.save(documents);
//     crm.name ="Changes Header";
//     crm.description = "Change in logged in header styles";
//     crm.createdAt = Date().toString();
//     crm.justification = "Change in logged in header styleChange in logged in header styleChange in logged in header styleChange in logged in header styleChange in logged in header styleChange in logged in header style";
//     crm.goal = "Change in logged in header styleChange in logged in header styleChange in logged in header styleChange in logged in header style";
//     crm.users = [user];
//     crm.sectors = [sector];
//     crm.documents = [documents];
//     crm.complexity = "Analise"
    
//     await AppDataSource.manager.save(crm);


//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

// }).catch(error => console.log(error))
