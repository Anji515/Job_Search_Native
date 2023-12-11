import { useGlobalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const JobDetails = () => {
  const params = useGlobalSearchParams()
  const router = useRouter()

  
  return (
    <Text>JobDetails</Text>
  )
}

export default JobDetails