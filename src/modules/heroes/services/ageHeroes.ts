export const ageHeroes = (ageheroes:any) =>{
    var age =  ageheroes.split('/')
    var data = new Date();
    var ano = data.getFullYear();
    var anoHeroes
    age = parseInt(age[2])
    anoHeroes = parseInt(age[0])
    if(ano > age ){
        age = ano - age

    }else if(ano > anoHeroes){
        age = ano - anoHeroes
    }
    else{
        return null
    }

    return age
}
