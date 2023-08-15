export const weaponsHeroes = (weapons:any) =>{
    let weaponsArray =[];
    for (let index = 0; index < weapons.length; index++) {
        weaponsArray.push({name: weapons[index].name, mod: weapons[index].mod, attr: weapons[index].attr, equipped: weapons[index].equipped });


    }
    return weaponsArray
}

export const attributes = (attributes:any) =>{
    let attributesArray = new Array();
    for (let index = 0; index < attributes.length; index++) {
        attributesArray.push(attributes[index].strength);
        attributesArray.push(attributes[index].dexterity);
        attributesArray.push(attributes[index].constitution);
        attributesArray.push(attributes[index].intelligence);
        attributesArray.push(attributes[index].wisdom);
        attributesArray.push(attributes[index].charisma);

    }
    return attributesArray
}


