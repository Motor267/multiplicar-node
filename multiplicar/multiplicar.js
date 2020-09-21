const { rejects } = require('assert');
//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {


    console.log('===================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {


        if (!Number(base)) {
            rejects('El valor introducido ' + base + ' no es un numero');
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rejects(err)
            else
                resolve('The file has been saved!');
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}