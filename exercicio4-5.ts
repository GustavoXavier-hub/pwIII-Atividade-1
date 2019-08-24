
let n: number = 5
let funcao = function(nm: number): boolean{
    if(n%2 == 0){
        console.log('par')
        return true
    }
    else{
        console.log('impar')
        return false
    }
}


console.log(funcao(n))

