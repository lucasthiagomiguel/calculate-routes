export const ageHeroes = (ageheroes:any) =>{
    var age =  ageheroes.split('/')
    var data = new Date();
    var ano = data.getFullYear();
    var anoHeroes = ageheroes.split('/')
    var niver
    anoHeroes = parseInt(age[0])
    age = parseInt(age[2])

    if(ano > age  && age > anoHeroes){
        niver = ano - age

    }else if(ano > anoHeroes ){
        niver = ano - anoHeroes
        
    }
    else{
        return null
    }
    console.log('niver',niver)
    return niver
}
