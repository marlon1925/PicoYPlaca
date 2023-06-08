import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Placa } from './app/screens/Placa';
import { ListaPlaca } from './app/screens/PlacaLista';


export default function App() {
  const StakePlaca = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StakePlaca.Navigator>
        <StakePlaca.Screen name = 'PlacaNav' component={Placa}/>
        <StakePlaca.Screen name = 'PlacaListaNav' component={ListaPlaca}/>
      </StakePlaca.Navigator>
    </NavigationContainer>
  );
}

