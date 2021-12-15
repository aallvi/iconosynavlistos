
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import  {Navigation} from './src/Navigation/Navigation'

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <Text>HOLA</Text> */}
    </NavigationContainer>
  )
}

export default App
