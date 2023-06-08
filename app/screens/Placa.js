import { Button, Input, Switch } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { savePlaca } from '../../service/PlacaServices';

export const Placa = ({ navigation }) => {

    const [placa, setPlaca] = useState();
    const [errorPlaca, setErrorPlaca] = useState();
    const [provincia, setProvincia] = useState();
    const [tipoAuto, setTipoAuto] = useState();
    const [restriccion, setRestriccion] = useState();
    const [validate, setValidate] = useState();

    const searchPlaca = () => {
        setErrorPlaca(null)
        setProvincia(null)
        setTipoAuto(null)
        primeraLetra();
        actualizarInfoPlaca();
    }
    const actualizarInfoPlaca = () => {
        Alert.alert(`CONSULTA: ${placa}`, `${validate} \n Provincia: ${provincia} \n Tipo de Vehículo: ${tipoAuto} \n Restricción: ${restriccion}`);
        savePlaca({ placa: placa, validate: validate, provincia: provincia, tipoAuto: tipoAuto, restriccion: restriccion })
    };


    const primeraLetra = () => {
        switch (placa.substring(0, 1)) {
            case 'A':
                setProvincia("Azuay")
                segundaLetra()
                break
            case 'B':
                setProvincia("Bolívar")
                segundaLetra()
                break
            case 'C':
                setProvincia("Carchi")
                segundaLetra()
                break
            case 'E':
                setProvincia("Esmeraldas")
                segundaLetra()
                break
            case 'G':
                setProvincia("Guayas")
                segundaLetra()
                break
            case 'H':
                setProvincia("Guayas")
                segundaLetra()
                break
            case 'I':
                setProvincia("Imbabura")
                segundaLetra()
                break
            case 'J':
                setProvincia("Santo Domingo de los Tsáchilas")
                segundaLetra()
                break
            case 'K':
                setProvincia("Sucumbíos")
                segundaLetra()
                break
            case 'L':
                setProvincia("Loja")
                segundaLetra()
                break
            case 'M':
                setProvincia("Manabí")
                segundaLetra()
                break
            case 'N':
                setProvincia("Napo")
                segundaLetra()
                break
            case 'O':
                setProvincia("Napo")
                segundaLetra()
                break
            case 'P':
                setProvincia("Pichincha")
                segundaLetra()
                break
            case 'Q':
                setProvincia("Orellana")
                segundaLetra()
                break
            case 'R':
                setProvincia("Los Ríos")
                segundaLetra()
                break
            case 'S':
                setProvincia("Pastaza")
                segundaLetra()
                break
            case 'T':
                setProvincia("Tungurahua")
                segundaLetra()
                break
            case 'U':
                setProvincia("Cañar")
                segundaLetra()
                break
            case 'V':
                setProvincia("Morona Santiago")
                segundaLetra()
                break
            case 'W':
                setProvincia("Galápagos")
                segundaLetra()
                break
            case 'X':
                setProvincia("Cotopaxi")
                segundaLetra()
                break
            case 'Y':
                setProvincia("Santa Elena")
                segundaLetra()
                break
            case 'Z':
                setProvincia("Zamora Chinchipe")
                segundaLetra()
                break
            default:
                Alert.alert("INFO", "La placa incorrecta no corresponde a ninguna provincia")

        }
    }

    const segundaLetra = () => {
        switch (placa.substring(1, 2)) {
            case 'A':
            case 'U':
            case 'Z':
                setTipoAuto("Vehículo comercial (taxis o autobus)")
                ultimoDigito()
                break
            case 'W':
                setTipoAuto("Vehículo policial")
                ultimoDigito()
                break
            case 'E':
                setTipoAuto("Vehículo gubernamental")
                ultimoDigito()
                break
            case 'X':
                setTipoAuto("Vehículo de uso oficial")
                ultimoDigito()
                break
            case 'M':
            case 'S':
                setTipoAuto("Vehículo de gobierno autóno descentralizado")
                ultimoDigito()
                break
            default:
                setTipoAuto("Vehículo particular")
                ultimoDigito()
        }
    }

    const ultimoDigito = () => {
        switch (placa.substring(7, 8)) {
            case '1':
            case '2':
                setRestriccion("Lunes")
                break
            case '3':
            case '4':
                setRestriccion("Martes")
                break
            case '5':
            case '6':
                setRestriccion("Miercoles")
                break
            case '7':
            case '8':
                setRestriccion("Jueves")
                break
            case '9':
            case '0':
                setRestriccion("Viernes")
                break

        }
    }

    const validarPlaca = () => {
        const modeloPlaca = /^[A-Z]{3}-\d{4}$/;
        if (placa == null || placa == "") {
            setErrorPlaca("Complete el campo");
        }

        if (modeloPlaca.test(placa)) {
            setErrorPlaca('Placa correcta');
            setValidate('CORRECTO')
            searchPlaca()
        } else {
            setErrorPlaca('Placa incorrecta Ejemplo: PBA-1234');
            setValidate('INCORRECTO')
            savePlaca({ placa: placa, validate: validate })
        }

    };

    return <View style={styles.container}>
        <Input
            value={placa}
            onChangeText={setPlaca}
            placeholder='Ejemplo: PBC-4534'
            label='Placa'
            errorMessage={errorPlaca}
        />
        <View style={styles.areaBotones}>
            <Button
                title="Buscar"
                icon={{
                    name: 'search',
                    type: 'EvilIcons',
                    color: 'black'

                }}
                onPress={validarPlaca}
            />
            <Button
                title="Historial"
                icon={{
                    name: 'history',
                    type: 'FontAwesome',
                    color: 'black'

                }}
                onPress={() => { navigation.navigate('PlacaListaNav') }}
            />
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaBotones: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },

});
