export const exp = (age:any,attk:number) => {
    if(age > 7 ){
        return Math.floor((age - 7) * Math.pow(attk, 1.45))
    }

   return 0
}
