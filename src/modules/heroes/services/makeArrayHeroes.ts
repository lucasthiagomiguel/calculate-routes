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

export const lisAllheroes = (dataHeroes:any) =>{
    let listHeroes = []
    for (let index = 0; index < dataHeroes.length; index++) {
        listHeroes.push({name: dataHeroes[index].name, age: ageHeroes(dataHeroes[index].birthday),weapons:dataHeroes[index].weapons.length, attack: attack(dataHeroes[index].weapons), attr: dataHeroes[index].keyAttribute,exp:exp(ageHeroes(dataHeroes[index].birthday),attack(dataHeroes[index].weapons)) });


    }
    console.log(listHeroes)
    return listHeroes
}


