import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './screenheader.style'
import { TouchableOpacity } from 'react-native'

const ScreenHeaderBtn = ({iconUrl,dimension, handlePress}) => {
  return (
    <TouchableOpacity>
      <Image source={iconUrl}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn