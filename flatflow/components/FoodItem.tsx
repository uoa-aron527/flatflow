import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function FoodItem() {
    return (

      <View className='bg-gray-200 p-[4%] rounded-xl flex-row justify-between items-center'>
        {/* Separate food title and details flex container */}

        <View className='flex-1'>
          <Text className='text-base font-semibold'>Food item name goes here</Text>
          <Text className='text-sm text-zinc-500'>Food quick details go here</Text>
        </View> 
        <AntDesign name="plus" size={36} color="teal" />
      </View>
      
  )
}