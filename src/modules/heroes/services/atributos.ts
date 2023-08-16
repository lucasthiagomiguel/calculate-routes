export const attrHeroes = (attrheroes: number) =>{
    let valueAttr = 0;
    if(attrheroes >=0 || attrheroes >=8){
        return valueAttr = -2;
    }else if (attrheroes >=9 || attrheroes >=10) {
        return valueAttr = -1;
    }else if (attrheroes >=11 || attrheroes >=12) {
        return valueAttr = 0;
    }else if (attrheroes >=13 || attrheroes >=15) {
        return valueAttr = +1;
    }else if (attrheroes >=16 || attrheroes >=18) {
        return valueAttr = +2;
    }else if (attrheroes > 19) {
        return valueAttr = +3;
    }else{
        return null
    }

}
