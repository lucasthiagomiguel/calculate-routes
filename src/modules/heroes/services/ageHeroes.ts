export const ageHeroes = (ageheroes:any) =>{
    var age =  ageheroes.split('/')
    var data = new Date();
    var ano = data.getFullYear();
    age = parseInt(age[2])
    if(ano > age){
        age = ano - age

    }else{
        return null
    }

    return age
}
