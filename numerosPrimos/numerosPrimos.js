
let i = 0
let cont = 0
let contDivisores
do{
    if(i>0){
        contDivisores = 0
        for(let n=1; n<=i; n++){
            if(i%n == 0)
                contDivisores++
        }
        if(contDivisores == 2){
            cont++
            console.log(i)
        }
    }
    i++
}while(cont<1000)
console.log(cont)