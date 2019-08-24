var n = 5;
var funcao = function (nm) {
    if (n % 2 == 0) {
        console.log('par');
        return true;
    }
    else {
        console.log('impar');
        return false;
    }
};
console.log(funcao(n));
