import * as express from "express";
import { Request, Response } from "express";

import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Sectors } from "./entity/Sectors";
import { Documents } from "./entity/Documents";
import { Crm } from "./entity/Crm";

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized");
    })
    .catch((err) => {
        console.error("Error initializing Data Source")
    });
    
//REGRAS DE NEGOCIO, COMO: UMA CRM TEM QUE TER UM SETOR OBRIGATORIAMENTE TEM QUE SER FEITAS NO BACK





















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
