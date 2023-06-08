import { View, Text, StyleSheet, FlatList, ScrollView, TouchableHighlight } from "react-native"
import { getPlaca } from "../../service/PlacaServices";

let ItemBusquedaPlaca = ({ indice, placa }) => {

    const onPressX = (indice) => {
        placa.splice(indice, 1);
      }
      


    return (
        <ScrollView>
            <View style={styles.caja}>
                <View >
                    <View>
                        <Text>
                            {placa.placa}
                        </Text>
                    </View>
                </View>

                <View style={styles.itemDetalleProducto}>
                    <View style={styles.itemDetalleNombreProduc}>
                        <Text style={styles.txtNombre}>
                            {placa.validate}
                        </Text>
                        <Text style={styles.txtNombre}>
                            {placa.provincia}
                        </Text>
                        <Text style={styles.txtNombre}>
                            {placa.tipoAuto}
                        </Text>
                        <Text style={styles.txtNombre}>
                            {placa.restriccion}
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableHighlight onPress={() => {
                        onPressX(indice)}}>
                        <Text>
                            ELIMINAR
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>

        </ScrollView>
    )
}

export const ListaPlaca = () => {
    return <View style={styles.container}>
        <FlatList
            data={getPlaca()}
            renderItem={({ index, item }) => {
                return <ItemBusquedaPlaca indice={index} placa={item} />
            }}
            keyEstractor={(item) => { return item.placa }}

        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    caja: {
        flexDirection: 'row',
        backgroundColor: 'paleturquoise',
        borderColor: 'green',
        borderWidth: 2,
        marginBottom: 15,
        borderRadius: 8,
        padding: 10
    },
    itemIndice: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 5
    },
    itemDetalleProducto: {
        flexDirection: 'row',
        paddingLeft: 5,
        flex: 9,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemDetalleNombreProduc: {
        flexDirection: 'column',
    },
});

