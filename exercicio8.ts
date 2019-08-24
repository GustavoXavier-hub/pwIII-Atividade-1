class Piscina {
    constructor(public diametro: number,public custoconstrucao:number) { }
    raio() {
    return (this.diametro/2)

    }
    area(){

        return (3.14159*this.raio()*this.raio())


    }
    custoTotal(){
       return (this.area()*this.custoconstrucao)
    }
    }


    export {Piscina as pis, }