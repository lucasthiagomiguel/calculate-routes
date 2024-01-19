export const changeFildsForString = (...filds:any) =>{
    return filds.toString();
 
 }

 export const changeValuesForString = (...filds:any) =>{
    var changeAllArrayForString = '';
    for (let index = 0; index < filds.length; index++) {
      const element = filds[index];
      changeAllArrayForString += `'${element}',`;          
    }
    return changeAllArrayForString
 }

 export const  updateClient = (chaves:any,valores:any) =>{
    var fildUpdate = '';
    for (let index = 0; index < chaves.length; index++) {
        const element = chaves[index];
        fildUpdate += chaves[index] + "='" + valores[index] + "',"
    }
    console.log('bora ver no que da',fildUpdate)
    return  fildUpdate
}
