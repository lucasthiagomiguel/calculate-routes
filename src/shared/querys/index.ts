import  {DataSource}  from '../../data-source';
import AppEerror from "@shared/erros/AppErrors"

export const findUserEmailQuery = (repository: string,email: string) =>{
   return DataSource.query(`SELECT * FROM ${repository} WHERE email = '${email}'`).catch((err) => {console.error(err); return err})

}

export const createUserQuery = (repository: string,fild:string[],valuesFilds: any) =>{
    return DataSource.query(`INSERT INTO ${repository} (${fild},created,updated) VALUES (${valuesFilds}now(),now())`).catch((err) => {console.log(err);  throw new AppEerror('syntax error at or near, in created users',err)})
 
 }

 export const createAnQuery = (anyQuer: any) =>{
    return DataSource.query(` ${anyQuer} `).catch((err) => {console.log(err);  throw new AppEerror('syntax error at or near, in created any query',err)})
 
 }