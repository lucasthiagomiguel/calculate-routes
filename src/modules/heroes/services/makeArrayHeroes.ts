import { ageHeroes } from "./ageHeroes";
import { attack } from "./attackHeroes";
import { exp } from "./experienceHeroes";


export const weaponsHeroes = (weapons:any) =>{
    let weaponsArray =[];
    for (let index = 0; index < weapons.length; index++) {
        weaponsArray.push({name: weapons[index].name, mod: weapons[index].mod, attr: weapons[index].attr, equipped: weapons[index].equipped });


    }
    return weaponsArray
}

export const lisAllheroes = (dataHeroes:any,filter: boolean) =>{
    let listHeroes = []
    for (let index = 0; index < dataHeroes.length; index++) {
        if(filter){
            if(dataHeroes[index].exp > 0){
                listHeroes.push({
                    id:dataHeroes[index].id,name: dataHeroes[index].name, age: ageHeroes(dataHeroes[index].birthday),weapons:dataHeroes[index].weapons.length, attack: attack(dataHeroes[index].weapons), attr: dataHeroes[index].keyAttribute,exp:exp(ageHeroes(dataHeroes[index].birthday),attack(dataHeroes[index].weapons)),status:dataHeroes[index].status });
            }else{
                return null
            }
        }else{
            listHeroes.push({
                id:dataHeroes[index].id,name: dataHeroes[index].name, age: ageHeroes(dataHeroes[index].birthday),weapons:dataHeroes[index].weapons.length, attack: attack(dataHeroes[index].weapons), attr: dataHeroes[index].keyAttribute,exp:exp(ageHeroes(dataHeroes[index].birthday),attack(dataHeroes[index].weapons)),status:dataHeroes[index].status });
        }


    }
    console.log(listHeroes)
    return listHeroes
}


