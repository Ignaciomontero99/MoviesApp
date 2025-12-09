import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import "../global.css"

const RootLayout = () => {
  return (
    <SafeAreaView>
      <Text className='text-3xl'>RootLayout</Text>
    </SafeAreaView>
  )
}

export default RootLayout