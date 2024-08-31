import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    // Container for entire screen
    
    <View className='flex-1 p-[4%] justify-center'>
      {/* Container for each food item card */}

      <View className='bg-gray-200 p-[4%] rounded-xl flex-row justify-between items-center'>
        {/* Separate food title and details flex container */}

        <View className='flex-1'>
          <Text className='text-base font-semibold'>Food item name goes here</Text>
          <Text className='text-sm text-zinc-500'>Food quick details go here</Text>
        </View> 
        <AntDesign name="plus" size={36} color="teal" />
      </View>
      
    </View>
    
  )}
