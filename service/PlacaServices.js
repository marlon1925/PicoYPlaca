let consultas = [{placa: "PBS-3043", validate: "CORRECTO", provincia: "Pichincha", tipoAuto: "Vehiculo comercial",restriccion: "Martes"}]

export const savePlaca = (placa) => {
    consultas.push(placa);
}

export const getPlaca = () =>{
    return consultas;
}