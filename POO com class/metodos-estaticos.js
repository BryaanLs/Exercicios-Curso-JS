class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log('Trocado!');
    }

}


const controle1 = new ControleRemoto('LG');
const controle2 = new ControleRemoto('Samsumg');
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();

// controle2.aumentarVolume();
// controle2.aumentarVolume();
// controle2.aumentarVolume();
// controle2.aumentarVolume();
// controle2.aumentarVolume();

// ControleRemoto.trocaPilha();
// console.log(controle1);
// console.log(controle2);



