export const attack = (weapons:any) =>
{
    let attack = 10;
    for (let index = 0; index < weapons.length; index++) {
        if(weapons[index].equipped){
            attack += weapons[index].mod
        }


        console.log(attack)

    }
    console.log('attack',attack)
    return attack
}
