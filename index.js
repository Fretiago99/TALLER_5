
//Primer Ejercicio

console.log("-------------Primer Ejercicio-------------")

const cantidadGatos = 20;

for (let i = 1; i <= cantidadGatos; i++) {
    const gato = "Gato #";
    const conteo = `${gato}${i}:`;
    const emoji1 = `${conteo}😺`;
    const emoji2 = `${conteo}😸`;
    const emoji3 = `${conteo}😹`;
    if(i % 3 === 0) {
        console.log(emoji3);
    }else if ((i === 1) || (((i+1) % 3 === 0) === (i % 3 === 0))) {
        console.log(emoji1);
    }else{
        console.log(emoji2);
    }
    
}

//Segundo Ejercicio

console.log("-------------Segundo Ejercicio-------------")

const cantidadDeGatos = 8;
const  cantidadDePasos = 5;

for (let i = 1; i <= cantidadDeGatos; i++) {
    const gato = "Gato #";
    const conteo = `${gato}${i} 🐈`;
    let numeroDepasos = conteo;
    for (let n = 0; n < cantidadDePasos; n++) {
        numeroDepasos = `${numeroDepasos}🐾`;
    }
    console.log(numeroDepasos);
}

//Tercer Ejercicio

console.log("-------------Tercer Ejercicio-------------")

for (let i = 1; i <= cantidadDeGatos; i++) {
    const gato = "Gato #";
    let conteo = `${gato}${i}`;
    let numeroDepasos = conteo;
    
    if (i % 2 === 0) {
        conteo = `${gato}${i} 🐈‍⬛`;
        numeroDepasos = conteo
        for (let n = 0; n < cantidadDePasos; n++) {
            numeroDepasos = `${numeroDepasos}🐾`;
        }
    }else{
         conteo = `${gato}${i} 🐈`;
         numeroDepasos = conteo
         for (let n = 0; n < cantidadDePasos; n++) {
             numeroDepasos = `${numeroDepasos}🐾`;
         }
    }
    console.log(numeroDepasos);
}